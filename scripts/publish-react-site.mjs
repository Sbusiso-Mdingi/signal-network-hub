import { access, cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDirectory = path.join(repositoryRoot, "docs");

const candidates = [
  path.join(repositoryRoot, ".output", "public"),
  path.join(repositoryRoot, "dist", "client"),
  path.join(repositoryRoot, "dist"),
];

async function hasIndex(directory) {
  try {
    await access(path.join(directory, "index.html"));
    return true;
  } catch {
    return false;
  }
}

let buildDirectory = null;
for (const candidate of candidates) {
  if (await hasIndex(candidate)) {
    buildDirectory = candidate;
    break;
  }
}

if (!buildDirectory) {
  throw new Error(
    "Could not find the prerendered TanStack Start client output. Expected index.html in .output/public, dist/client, or dist.",
  );
}

await rm(docsDirectory, { recursive: true, force: true });
await mkdir(docsDirectory, { recursive: true });
await cp(buildDirectory, docsDirectory, { recursive: true });

// GitHub Pages needs the custom domain file in the published directory. Keep the
// canonical copy in public/ so the React build remains the source of truth.
const cnamePath = path.join(repositoryRoot, "public", "CNAME");
const cname = await readFile(cnamePath, "utf8");
await writeFile(path.join(docsDirectory, "CNAME"), cname);

// Disable Jekyll processing. The output is already a fully built React site.
await writeFile(path.join(docsDirectory, ".nojekyll"), "");

console.log(
  `Published TanStack Start prerender from ${path.relative(repositoryRoot, buildDirectory)} to docs/.`,
);
