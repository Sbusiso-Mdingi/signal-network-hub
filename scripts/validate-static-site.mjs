import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE_ORIGIN = "https://sequrin.tech";
const NON_INDEXABLE_INDEX_FILES = new Set(["login/index.html"]);
const TEXT_EXTENSIONS = new Set([".css", ".html", ".js", ".svg", ".txt", ".xml"]);
const REQUIRED_INDEXABLE_META = [
  ["property", "og:site_name"],
  ["property", "og:title"],
  ["property", "og:description"],
  ["property", "og:type"],
  ["property", "og:url"],
  ["property", "og:image"],
  ["name", "twitter:card"],
  ["name", "twitter:title"],
  ["name", "twitter:description"],
  ["name", "twitter:image"],
];
const URL_META_KEYS = new Set(["og:image", "og:url", "twitter:image"]);

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const docsDirectory = path.join(repositoryRoot, "docs");
const publicDirectory = path.join(repositoryRoot, "public");
const errors = [];

const toPosix = (value) => value.split(path.sep).join("/");

async function collectFiles(directory, relativeDirectory = "") {
  const entries = await readdir(path.join(directory, relativeDirectory), { withFileTypes: true });
  const files = [];

  for (const entry of entries.sort((left, right) => left.name.localeCompare(right.name))) {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(directory, relativePath)));
    } else if (entry.isFile()) {
      files.push(toPosix(relativePath));
    }
  }

  return files;
}

function lineAndColumn(source, index) {
  const before = source.slice(0, index);
  const lines = before.split("\n");
  return { line: lines.length, column: lines.at(-1).length + 1 };
}

function report(relativePath, source, index, message) {
  const location = lineAndColumn(source, Math.max(0, index));
  errors.push(`${relativePath}:${location.line}:${location.column} ${message}`);
}

function attributesFromTag(tag) {
  const attributes = new Map();
  const start = tag.search(/\s/);
  if (start === -1) return attributes;

  const attributeSource = tag.slice(start, tag.endsWith(">") ? -1 : undefined);
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of attributeSource.matchAll(pattern)) {
    attributes.set(match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? "");
  }
  return attributes;
}

function openingTags(source) {
  return [...source.matchAll(/<[a-z][^>]*>/gi)].map((match) => ({
    source: match[0],
    index: match.index,
    name: match[0].match(/^<([a-z][^\s/>]*)/i)?.[1].toLowerCase(),
    attributes: attributesFromTag(match[0]),
  }));
}

function routeForHtmlFile(relativePath) {
  if (relativePath === "index.html") return "/";
  if (relativePath.endsWith("/index.html"))
    return `/${relativePath.slice(0, -"index.html".length)}`;
  return `/${relativePath}`;
}

function expectedCanonical(relativePath) {
  return `${SITE_ORIGIN}${routeForHtmlFile(relativePath)}`;
}

function hasNoindex(tags) {
  return tags.some(
    (tag) =>
      tag.name === "meta" &&
      tag.attributes.get("name")?.toLowerCase() === "robots" &&
      /(?:^|[,\s])noindex(?:$|[,\s])/i.test(tag.attributes.get("content") ?? ""),
  );
}

function inspectDocument(relativePath, source) {
  const tags = openingTags(source);
  const htmlTags = tags.filter((tag) => tag.name === "html");
  const mainTags = tags.filter((tag) => tag.name === "main");
  const h1Tags = tags.filter((tag) => tag.name === "h1");
  const canonicalTags = tags.filter(
    (tag) =>
      tag.name === "link" &&
      (tag.attributes.get("rel") ?? "").toLowerCase().split(/\s+/).includes("canonical"),
  );
  const descriptions = tags.filter(
    (tag) => tag.name === "meta" && tag.attributes.get("name")?.toLowerCase() === "description",
  );
  const viewports = tags.filter(
    (tag) => tag.name === "meta" && tag.attributes.get("name")?.toLowerCase() === "viewport",
  );
  const charsets = tags.filter(
    (tag) => tag.name === "meta" && tag.attributes.get("charset")?.toLowerCase() === "utf-8",
  );
  const titleMatches = [...source.matchAll(/<title\b[^>]*>[\s\S]*?<\/title\s*>/gi)];

  if (htmlTags.length !== 1 || !htmlTags[0]?.attributes.get("lang")?.trim()) {
    report(
      relativePath,
      source,
      htmlTags[0]?.index ?? 0,
      "must contain one <html> element with a non-empty lang attribute",
    );
  }
  if (mainTags.length !== 1) {
    report(
      relativePath,
      source,
      mainTags[0]?.index ?? 0,
      `must contain exactly one <main> element; found ${mainTags.length}`,
    );
  }
  if (h1Tags.length !== 1) {
    report(
      relativePath,
      source,
      h1Tags[0]?.index ?? 0,
      `must contain exactly one <h1>; found ${h1Tags.length}`,
    );
  }
  if (titleMatches.length !== 1 || !titleMatches[0]?.[0].replace(/<[^>]+>/g, "").trim()) {
    report(relativePath, source, titleMatches[0]?.index ?? 0, "must contain one non-empty <title>");
  }
  if (charsets.length !== 1) {
    report(
      relativePath,
      source,
      charsets[0]?.index ?? 0,
      `must contain exactly one UTF-8 charset meta tag; found ${charsets.length}`,
    );
  }
  if (viewports.length !== 1) {
    report(
      relativePath,
      source,
      viewports[0]?.index ?? 0,
      `must contain exactly one viewport meta tag; found ${viewports.length}`,
    );
  }

  const ids = new Map();
  for (const tag of tags) {
    const id = tag.attributes.get("id");
    if (!id) continue;
    if (ids.has(id)) {
      report(relativePath, source, tag.index, `contains duplicate id "${id}"`);
    } else {
      ids.set(id, tag.index);
    }
  }

  const isIndexDocument = relativePath === "index.html" || relativePath.endsWith("/index.html");
  const explicitlyNonIndexable = NON_INDEXABLE_INDEX_FILES.has(relativePath);
  const noindex = hasNoindex(tags);

  if (isIndexDocument) {
    if (descriptions.length !== 1 || !descriptions[0]?.attributes.get("content")?.trim()) {
      report(
        relativePath,
        source,
        descriptions[0]?.index ?? 0,
        "must contain one non-empty meta description",
      );
    }
    if (canonicalTags.length !== 1) {
      report(
        relativePath,
        source,
        canonicalTags[0]?.index ?? 0,
        `must contain exactly one canonical link; found ${canonicalTags.length}`,
      );
    } else {
      const canonical = canonicalTags[0].attributes.get("href");
      const expected = expectedCanonical(relativePath);
      if (canonical !== expected) {
        report(
          relativePath,
          source,
          canonicalTags[0].index,
          `canonical must be "${expected}", found "${canonical ?? ""}"`,
        );
      }
    }

    if (explicitlyNonIndexable && !noindex) {
      report(relativePath, source, 0, "must declare robots noindex");
    }
    if (!explicitlyNonIndexable && noindex) {
      report(
        relativePath,
        source,
        0,
        "is an indexable content route and must not declare robots noindex",
      );
    }

    if (!explicitlyNonIndexable) {
      for (const [attribute, value] of REQUIRED_INDEXABLE_META) {
        const matches = tags.filter(
          (tag) => tag.name === "meta" && tag.attributes.get(attribute)?.toLowerCase() === value,
        );
        if (matches.length !== 1 || !matches[0]?.attributes.get("content")?.trim()) {
          report(
            relativePath,
            source,
            matches[0]?.index ?? 0,
            `must contain exactly one non-empty ${value} meta tag; found ${matches.length}`,
          );
        }
      }

      const openGraphUrl = tags.find(
        (tag) => tag.name === "meta" && tag.attributes.get("property")?.toLowerCase() === "og:url",
      );
      if (
        openGraphUrl?.attributes.get("content") &&
        openGraphUrl.attributes.get("content") !== expectedCanonical(relativePath)
      ) {
        report(
          relativePath,
          source,
          openGraphUrl.index,
          `og:url must be "${expectedCanonical(relativePath)}"`,
        );
      }
    }
  } else if (relativePath === "404.html" && !noindex) {
    report(relativePath, source, 0, "must declare robots noindex");
  }

  return { ids: new Set(ids.keys()), noindex, tags };
}

function decodeHtmlUrl(value) {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&#38;/g, "&")
    .replace(/&#x26;/gi, "&");
}

function localUrlForReference(relativePath, rawReference) {
  const reference = decodeHtmlUrl(rawReference.trim());
  if (!reference || /^(?:data|javascript|mailto|tel|sms|blob):/i.test(reference)) return null;
  if (reference.startsWith("//")) return null;

  let parsed;
  try {
    parsed = new URL(reference, `${SITE_ORIGIN}${routeForHtmlFile(relativePath)}`);
  } catch {
    return { invalid: true, reference };
  }

  if (parsed.origin !== SITE_ORIGIN) return null;
  return parsed;
}

function fileForUrlPath(urlPath, knownFiles) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(urlPath);
  } catch {
    return null;
  }

  const relativeUrlPath = decodedPath.replace(/^\/+/, "");
  const candidates = [];
  if (!relativeUrlPath) {
    candidates.push("index.html");
  } else if (decodedPath.endsWith("/")) {
    candidates.push(`${relativeUrlPath}index.html`);
  } else {
    candidates.push(relativeUrlPath, `${relativeUrlPath}/index.html`);
  }

  return candidates.find((candidate) => knownFiles.has(candidate)) ?? null;
}

function referenceAttributes(tag) {
  const references = [];
  for (const attribute of ["href", "src", "poster"]) {
    if (tag.attributes.has(attribute)) references.push(tag.attributes.get(attribute));
  }
  if (tag.attributes.has("srcset")) {
    for (const candidate of tag.attributes.get("srcset").split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      if (url) references.push(url);
    }
  }
  if (tag.name === "meta") {
    const key = (tag.attributes.get("property") ?? tag.attributes.get("name") ?? "").toLowerCase();
    if (URL_META_KEYS.has(key) && tag.attributes.has("content")) {
      references.push(tag.attributes.get("content"));
    }
  }
  return references;
}

function validateReferences(relativePath, source, document, knownFiles, documents) {
  for (const tag of document.tags) {
    for (const rawReference of referenceAttributes(tag)) {
      const localUrl = localUrlForReference(relativePath, rawReference);
      if (!localUrl) continue;
      if (localUrl.invalid) {
        report(
          relativePath,
          source,
          tag.index,
          `contains an invalid URL reference "${rawReference}"`,
        );
        continue;
      }

      if (
        relativePath === "404.html" &&
        !rawReference.startsWith("/") &&
        !rawReference.startsWith("#") &&
        !/^[a-z][a-z\d+.-]*:/i.test(rawReference)
      ) {
        report(
          relativePath,
          source,
          tag.index,
          `404 references must be root-relative; found "${rawReference}"`,
        );
      }

      const targetFile = fileForUrlPath(localUrl.pathname, knownFiles);
      if (!targetFile) {
        report(
          relativePath,
          source,
          tag.index,
          `references missing internal target "${localUrl.pathname}"`,
        );
        continue;
      }

      if (localUrl.hash) {
        const targetDocument = documents.get(targetFile);
        let fragment;
        try {
          fragment = decodeURIComponent(localUrl.hash.slice(1));
        } catch {
          report(
            relativePath,
            source,
            tag.index,
            `contains an invalid fragment "${localUrl.hash}"`,
          );
          continue;
        }
        if (targetDocument && fragment && !targetDocument.ids.has(fragment)) {
          report(
            relativePath,
            source,
            tag.index,
            `references missing fragment "#${fragment}" in ${targetFile}`,
          );
        }
      }
    }
  }
}

function validateCssUrls(relativePath, source, knownFiles) {
  for (const match of source.matchAll(/url\(\s*(?:"([^"]+)"|'([^']+)'|([^)'"\s]+))\s*\)/gi)) {
    const rawReference = match[1] ?? match[2] ?? match[3] ?? "";
    if (
      !rawReference ||
      rawReference.startsWith("#") ||
      rawReference.startsWith("//") ||
      /^(?:data|https?):/i.test(rawReference)
    )
      continue;

    const assetPath = decodeHtmlUrl(rawReference).split(/[?#]/, 1)[0];
    const resolved = assetPath.startsWith("/")
      ? assetPath.replace(/^\/+/, "")
      : path.posix.normalize(path.posix.join(path.posix.dirname(relativePath), assetPath));
    if (resolved.startsWith("../") || !knownFiles.has(resolved)) {
      report(relativePath, source, match.index, `references missing CSS asset "${rawReference}"`);
    }
  }
}

function parseRobots(source) {
  const disallows = [];
  const sitemaps = [];
  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.replace(/\s*#.*$/, "").trim();
    if (!line) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const directive = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();
    if (directive === "disallow" && value) disallows.push(value);
    if (directive === "sitemap" && value) sitemaps.push(value);
  }
  return { disallows, sitemaps };
}

function robotsRuleMatches(pathname, rule) {
  const anchored = rule.endsWith("$");
  const ruleBody = anchored ? rule.slice(0, -1) : rule;
  const escaped = ruleBody.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
  return new RegExp(`^${escaped}${anchored ? "$" : ""}`).test(pathname);
}

function sitemapLocations(source) {
  return [...source.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)].map((match) => match[1]);
}

function compareMirrors(name, docsSource, publicSource) {
  const normalize = (value) => value.replace(/\r\n/g, "\n").trim();
  if (normalize(docsSource) !== normalize(publicSource)) {
    errors.push(`docs/${name} and public/${name} must contain the same canonical configuration`);
  }
}

async function main() {
  const docsFiles = await collectFiles(docsDirectory);
  const knownFiles = new Set(docsFiles);
  const htmlFiles = docsFiles.filter((file) => file.endsWith(".html"));
  const sources = new Map();
  const documents = new Map();

  for (const relativePath of docsFiles) {
    if (!TEXT_EXTENSIONS.has(path.extname(relativePath).toLowerCase())) continue;
    const source = await readFile(path.join(docsDirectory, relativePath), "utf8");
    sources.set(relativePath, source);

    for (const match of source.matchAll(/\u2014|&mdash;|&#0*8212;?|&#x0*2014;?/giu)) {
      report(
        relativePath,
        source,
        match.index,
        "contains an em dash; rewrite the public-facing text without it",
      );
    }
  }

  for (const relativePath of htmlFiles) {
    const source = sources.get(relativePath);
    documents.set(relativePath, inspectDocument(relativePath, source));
  }

  for (const relativePath of htmlFiles) {
    validateReferences(
      relativePath,
      sources.get(relativePath),
      documents.get(relativePath),
      knownFiles,
      documents,
    );
  }
  for (const relativePath of docsFiles.filter((file) => file.endsWith(".css"))) {
    validateCssUrls(relativePath, sources.get(relativePath), knownFiles);
  }

  const docsRobots = sources.get("robots.txt");
  const docsSitemap = sources.get("sitemap.xml");
  const publicRobots = await readFile(path.join(publicDirectory, "robots.txt"), "utf8");
  const publicSitemap = await readFile(path.join(publicDirectory, "sitemap.xml"), "utf8");
  compareMirrors("robots.txt", docsRobots, publicRobots);
  compareMirrors("sitemap.xml", docsSitemap, publicSitemap);

  const robots = parseRobots(docsRobots);
  if (robots.sitemaps.length !== 1 || robots.sitemaps[0] !== `${SITE_ORIGIN}/sitemap.xml`) {
    errors.push(`docs/robots.txt must declare exactly one sitemap: ${SITE_ORIGIN}/sitemap.xml`);
  }

  const locations = sitemapLocations(docsSitemap);
  const duplicateLocations = locations.filter(
    (location, index) => locations.indexOf(location) !== index,
  );
  for (const duplicate of new Set(duplicateLocations)) {
    errors.push(`docs/sitemap.xml contains duplicate URL ${duplicate}`);
  }

  const expectedLocations = htmlFiles
    .filter(
      (file) =>
        (file === "index.html" || file.endsWith("/index.html")) &&
        !NON_INDEXABLE_INDEX_FILES.has(file),
    )
    .map(expectedCanonical)
    .sort();
  const actualLocations = [...new Set(locations)].sort();

  for (const expected of expectedLocations) {
    if (!actualLocations.includes(expected))
      errors.push(`docs/sitemap.xml is missing indexable route ${expected}`);
  }
  for (const location of actualLocations) {
    if (!expectedLocations.includes(location))
      errors.push(`docs/sitemap.xml contains unexpected or non-indexable route ${location}`);

    let parsed;
    try {
      parsed = new URL(location);
    } catch {
      errors.push(`docs/sitemap.xml contains invalid URL ${location}`);
      continue;
    }
    if (parsed.origin !== SITE_ORIGIN)
      errors.push(`docs/sitemap.xml URL must use ${SITE_ORIGIN}: ${location}`);
    if (robots.disallows.some((rule) => robotsRuleMatches(parsed.pathname, rule))) {
      errors.push(`docs/sitemap.xml URL ${location} is blocked by docs/robots.txt`);
    }

    const localFile = fileForUrlPath(parsed.pathname, knownFiles);
    if (!localFile) {
      errors.push(`docs/sitemap.xml URL ${location} has no corresponding file in docs/`);
    } else if (documents.get(localFile)?.noindex) {
      errors.push(`docs/sitemap.xml URL ${location} points to a page that declares noindex`);
    }
  }

  for (const [relativePath, document] of documents) {
    if (!document.noindex) continue;
    const route = routeForHtmlFile(relativePath);
    if (robots.disallows.some((rule) => robotsRuleMatches(route, rule))) {
      errors.push(
        `docs/robots.txt blocks noindex page ${route}; crawlers must be able to read its robots directive`,
      );
    }
  }

  if (errors.length > 0) {
    console.error(
      `Static site validation failed with ${errors.length} error${errors.length === 1 ? "" : "s"}:`,
    );
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  console.log(
    `Static site validation passed: ${htmlFiles.length} HTML files, ${expectedLocations.length} indexable routes, ${docsFiles.length} deployed files.`,
  );
}

main().catch((error) => {
  console.error("Static site validation could not run:", error);
  process.exitCode = 1;
});
