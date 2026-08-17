import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDirectory = path.join(repositoryRoot, "docs");
const siteOrigin = "https://sequrin.tech";
const errors = [];

async function collectHtml(directory, relative = "") {
  const entries = await readdir(path.join(directory, relative), { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const next = path.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...(await collectHtml(directory, next)));
    else if (entry.isFile() && entry.name.endsWith(".html")) files.push(next.split(path.sep).join("/"));
  }

  return files.sort();
}

function routeForFile(file) {
  if (file === "index.html") return "/";
  if (file.endsWith("/index.html")) return `/${file.slice(0, -"index.html".length)}`;
  return `/${file}`;
}

function has(source, pattern) {
  return pattern.test(source);
}

function count(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function report(file, message) {
  errors.push(`${file}: ${message}`);
}

const htmlFiles = await collectHtml(docsDirectory);
if (!htmlFiles.length) throw new Error("No prerendered HTML files found in docs/. Run npm run build:static first.");

for (const file of htmlFiles) {
  const source = await readFile(path.join(docsDirectory, file), "utf8");
  const route = routeForFile(file);

  if (!has(source, /<html\b[^>]*\blang=["'][^"']+["']/i)) report(file, "missing html lang attribute");
  if (!has(source, /<meta\b[^>]*charset=["']?utf-8["']?/i)) report(file, "missing UTF-8 charset");
  if (!has(source, /<meta\b[^>]*name=["']viewport["'][^>]*>/i)) report(file, "missing viewport meta tag");
  if (!has(source, /<title\b[^>]*>[^<]+<\/title>/i)) report(file, "missing non-empty title");
  if (!has(source, /<meta\b[^>]*name=["']description["'][^>]*content=["'][^"']+["'][^>]*>/i)) {
    report(file, "missing non-empty meta description");
  }
  if (count(source, /<main\b/gi) !== 1) report(file, "must contain exactly one main element");
  if (count(source, /<h1\b/gi) !== 1) report(file, "must contain exactly one h1 element");

  if (file === "404.html") {
    if (!has(source, /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i)) {
      report(file, "404 page must be noindex");
    }
    continue;
  }

  const expectedCanonical = `${siteOrigin}${route}`;
  const canonicalMatch = source.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
  if (!canonicalMatch) report(file, "missing canonical link");
  else if (canonicalMatch[1] !== expectedCanonical && canonicalMatch[1] !== expectedCanonical.replace(/\/$/, "")) {
    report(file, `canonical is ${canonicalMatch[1]}, expected ${expectedCanonical}`);
  }

  const isLogin = route === "/login/" || route === "/login";
  const noindex = has(source, /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i);
  if (isLogin && !noindex) report(file, "login route must be noindex");
  if (!isLogin && noindex) report(file, "indexable route unexpectedly declares noindex");

  for (const requirement of [
    /<meta\b[^>]*property=["']og:site_name["'][^>]*content=["'][^"']+["']/i,
    /<meta\b[^>]*property=["']og:type["'][^>]*content=["'][^"']+["']/i,
    /<meta\b[^>]*property=["']og:image["'][^>]*content=["'][^"']+["']/i,
    /<meta\b[^>]*name=["']twitter:card["'][^>]*content=["'][^"']+["']/i,
    /<meta\b[^>]*name=["']twitter:image["'][^>]*content=["'][^"']+["']/i,
  ]) {
    if (!has(source, requirement)) report(file, "missing shared social metadata from root route");
  }
}

if (errors.length) {
  console.error("Static-site validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Validated ${htmlFiles.length} prerendered HTML files in docs/.`);
}
