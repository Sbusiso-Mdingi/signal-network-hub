import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const oldSocialImage = "https://sequrin.tech/assets/sequrin-social-preview.jpg";
const newSocialImage = "https://sequrin.tech/assets/sequrin-social-preview-2026.jpg";
const oldAlt = "Illustrative Sequrin connected claims interface using synthetic data.";
const newAlt = "Sequrin healthcare claims integrity brand card.";

const pages = [
  "docs/index.html",
  "docs/product/index.html",
  "docs/how-it-works/index.html",
  "docs/for-medical-schemes/index.html",
  "docs/about/index.html",
  "docs/impact/index.html",
  "docs/governance/index.html",
  "docs/network/index.html",
  "docs/policies/index.html",
  "docs/privacy/index.html",
];

for (const relativePath of pages) {
  const filePath = path.join(root, relativePath);
  let html;

  try {
    html = await readFile(filePath, "utf8");
  } catch (error) {
    if (error && error.code === "ENOENT") continue;
    throw error;
  }

  const updated = html
    .replaceAll(oldSocialImage, newSocialImage)
    .replaceAll(oldAlt, newAlt);

  if (updated !== html) {
    await writeFile(filePath, updated, "utf8");
    console.log(`Applied Sequrin share branding to ${relativePath}.`);
  }
}
