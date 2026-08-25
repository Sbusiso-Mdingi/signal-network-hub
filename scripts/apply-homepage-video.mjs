import { access, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const homepagePath = path.join(root, "docs/index.html");
const videoPath = path.join(root, "docs/assets/sequrin-homepage-explainer.mp4");
const captionsPath = path.join(root, "docs/assets/sequrin-hero-video.vtt");

const currentHeroMedia = `<figure class="product-frame hero-product">
      <div class="frame-label">Connected claims view</div>
      <img src="assets/product/connected-claims-network.webp" width="1265" height="712" fetchpriority="high" decoding="async" alt="Sequrin network view connecting claim, member and provider records.">
      <figcaption>Current Sequrin interface shown with demonstration data.</figcaption>
    </figure>`;

const videoHeroMedia = `<figure class="product-frame hero-product" data-hero-video style="transform:none;">
      <div class="frame-label">Sequrin overview &middot; 68 seconds</div>
      <div style="position:relative;aspect-ratio:16 / 9;background:#09131d;">
        <video data-hero-video-element poster="assets/product/connected-claims-network.webp" playsinline preload="none" aria-describedby="sequrin-video-caption" aria-label="Sequrin homepage explainer video, 68 seconds" style="display:block;width:100%;height:100%;object-fit:cover;background:#09131d;">
          <source data-src="assets/sequrin-homepage-explainer.mp4" type="video/mp4">
          <track kind="captions" src="assets/sequrin-hero-video.vtt" srclang="en" label="English" default>
          Your browser does not support embedded video. <a href="assets/sequrin-homepage-explainer.mp4">Open the Sequrin explainer video</a> instead.
        </video>
        <button data-hero-video-play type="button" aria-label="Play the 68-second Sequrin explainer" style="position:absolute;inset:0;display:grid;place-items:center;border:0;cursor:pointer;background:linear-gradient(180deg,rgba(7,16,25,.04),rgba(7,16,25,.34));color:#061018;">
          <span aria-hidden="true" style="display:grid;width:68px;height:68px;place-items:center;border:1px solid rgba(114,218,239,.8);border-radius:999px;background:#72daef;box-shadow:0 16px 42px rgba(0,0,0,.34);">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" style="margin-left:3px;"><path d="M8 5v14l11-7z"></path></svg>
          </span>
        </button>
      </div>
      <figcaption id="sequrin-video-caption">See how Sequrin moves from a signal to connected investigation context. English captions included.</figcaption>
    </figure>`;

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

if (!(await exists(videoPath))) {
  console.log("Homepage video asset is not present; leaving the static hero image unchanged.");
  process.exit(0);
}

if (!(await exists(captionsPath))) {
  throw new Error("Homepage video exists but captions are missing: docs/assets/sequrin-hero-video.vtt");
}

const html = await readFile(homepagePath, "utf8");

if (html.includes("data-hero-video")) {
  console.log("Homepage video treatment already applied.");
  process.exit(0);
}

if (!html.includes(currentHeroMedia)) {
  throw new Error("Could not find the expected homepage hero media block. Refusing to guess at the replacement location.");
}

await writeFile(homepagePath, html.replace(currentHeroMedia, videoHeroMedia), "utf8");
console.log("Applied Sequrin homepage video treatment.");
