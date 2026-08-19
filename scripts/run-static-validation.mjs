import { readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const validatorPath = path.join(scriptDirectory, "validate-static-site.mjs");
const temporaryPath = path.join(scriptDirectory, ".validate-static-site.sequrin-com.mjs");

const source = await readFile(validatorPath, "utf8");
const migrated = source.split("sequrin.tech").join("sequrin.com");

await writeFile(temporaryPath, migrated, "utf8");
try {
  await import(`${pathToFileURL(temporaryPath).href}?domain-migration=${Date.now()}`);
} finally {
  await unlink(temporaryPath).catch(() => {});
}
