import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const policiesPath = path.join(repositoryRoot, "docs/policies/index.html");

const replacements = [
  [
    "<title>Website notices | Sequrin</title>",
    "<title>Privacy and website notices | Sequrin</title>",
  ],
  [
    '<meta name="description" content="Privacy, website-use and contact information for the public Sequrin website.">',
    '<meta name="description" content="Privacy, data-protection, website-use and contact information for Sequrin, including access to the full Sequrin Privacy Policy.">',
  ],
  [
    '<meta property="og:title" content="Website notices | Sequrin">',
    '<meta property="og:title" content="Privacy and website notices | Sequrin">',
  ],
  [
    '<meta property="og:description" content="Privacy, website-use and contact information for the public Sequrin website.">',
    '<meta property="og:description" content="Privacy, data-protection, website-use and contact information for Sequrin, including access to the full Sequrin Privacy Policy.">',
  ],
  [
    '<meta name="twitter:title" content="Website notices | Sequrin">',
    '<meta name="twitter:title" content="Privacy and website notices | Sequrin">',
  ],
  [
    '<meta name="twitter:description" content="Privacy, website-use and contact information for the public Sequrin website.">',
    '<meta name="twitter:description" content="Privacy, data-protection, website-use and contact information for Sequrin, including access to the full Sequrin Privacy Policy.">',
  ],
  [
    '<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">Website notices</p><h1>How this public website operates.</h1><p class="lead">These notices cover the public website at sequrin.tech. They do not cover the authenticated Sequrin application or any future customer agreement.</p><p class="updated">Last updated 15 August 2026</p></div></section>',
    '<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">Privacy and website notices</p><h1>Privacy, accountability and responsible use.</h1><p class="lead">These notices summarise how the public website operates and provide access to Sequrin\'s full Privacy Policy, which addresses the public website, the authenticated Sequrin service and Sequrin\'s role when processing information for authorised customers.</p><p class="updated">Last updated 17 August 2026</p></div></section>',
  ],
  [
    '<article id="privacy"><p class="notice-index">01</p><div><h2>Privacy on this website</h2><p>The public website does not currently provide a contact form or use analytics, advertising trackers or cookies. It is hosted through GitHub Pages. Hosting and network providers may process routine technical request data needed to deliver and protect the service under their own terms and privacy notices.</p><p>You can read the <a class="text-link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub privacy statement</a>.</p></div></article>',
    '<article id="privacy"><p class="notice-index">01</p><div><h2>Privacy and data protection</h2><p>Sequrin processes personal information within a privacy and governance framework designed for South Africa\'s healthcare claims-integrity environment. Depending on the processing context, Sequrin may act as a Responsible Party for its own operations or as an Operator processing customer-controlled information on behalf of a medical scheme or other authorised customer.</p><p>Sequrin does not sell personal information and does not reuse identifiable or pseudonymised customer claims data to train or improve its own general models.</p><p><a class="text-link" href="../privacy/">Read the full Sequrin Privacy Policy</a>.</p></div></article>',
  ],
];

let content = await readFile(policiesPath, "utf8");

for (const [before, after] of replacements) {
  if (!content.includes(before)) {
    throw new Error(`Expected static privacy source fragment was not found: ${before.slice(0, 100)}...`);
  }
  content = content.replace(before, after);
}

await writeFile(policiesPath, content);
console.log("Applied Sequrin privacy-policy overrides to docs/policies/index.html.");
