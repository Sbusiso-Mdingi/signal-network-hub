import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const LEGACY_DOMAIN = "sequrin.tech";
const CANONICAL_DOMAIN = "sequrin.com";
const TEXT_EXTENSIONS = new Set([".css", ".html", ".js", ".json", ".svg", ".txt", ".xml"]);
const checkOnly = process.argv.includes("--check");

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const roots = [path.join(repositoryRoot, "docs"), path.join(repositoryRoot, "public")];
const intentionalLegacyFiles = new Set([path.join(repositoryRoot, "docs", "assets", "site.js")]);

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(fullPath)));
    else if (entry.isFile() && TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) files.push(fullPath);
  }
  return files;
}

let legacyReferences = 0;
let changedFiles = 0;

for (const root of roots) {
  for (const filePath of await collectFiles(root)) {
    if (intentionalLegacyFiles.has(filePath)) continue;
    const source = await readFile(filePath, "utf8");
    if (!source.includes(LEGACY_DOMAIN)) continue;
    legacyReferences += source.split(LEGACY_DOMAIN).length - 1;
    if (!checkOnly) {
      await writeFile(filePath, source.split(LEGACY_DOMAIN).join(CANONICAL_DOMAIN), "utf8");
      changedFiles += 1;
    }
  }
}

const cnamePath = path.join(repositoryRoot, "docs", "CNAME");
const expectedCname = `${CANONICAL_DOMAIN}\n`;
const observedCname = await readFile(cnamePath, "utf8");
const cnameMismatch = observedCname.trim() !== CANONICAL_DOMAIN;
if (cnameMismatch && !checkOnly) {
  await writeFile(cnamePath, expectedCname, "utf8");
  changedFiles += 1;
}

if (checkOnly && (legacyReferences > 0 || cnameMismatch)) {
  console.error(
    `Public-domain check failed: ${legacyReferences} legacy .tech references; CNAME=${observedCname.trim()}`,
  );
  process.exitCode = 1;
} else if (checkOnly) {
  console.log(`Public-domain check passed: generated site is canonical on ${CANONICAL_DOMAIN}`);
} else {
  console.log(
    `Public-domain migration enforced: ${changedFiles} files changed; ${legacyReferences} legacy references replaced; canonical=${CANONICAL_DOMAIN}`,
  );
}
