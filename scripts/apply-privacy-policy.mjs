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
  [
    '<article id="email"><p class="notice-index">02</p><div><h2>Email contact</h2><p>Contact is available at <a class="text-link" href="mailto:info@sequrin.tech">info@sequrin.tech</a> for business, partnership and website enquiries. Never send patient, member, claim, clinical, credential or other sensitive information to this address. The public inbox is not a channel for case submissions.</p></div></article>',
    '<article id="email"><p class="notice-index">02</p><div><h2>Email contact</h2><p>Contact is available at <a class="text-link" href="mailto:info@sequrin.tech">info@sequrin.tech</a> for business, partnership and website enquiries. Never send patient, member, claim, clinical, credential or other sensitive information to this address unless Sequrin has expressly provided an authorised secure method for doing so. The public inbox is not a channel for case submissions.</p></div></article>',
  ],
  [
    '<article id="terms"><p class="notice-index">03</p><div><h2>Informational use</h2><p>This website describes an early-stage company and technology under development. Its content is general information, not clinical, legal, financial or claims-decision advice. It does not promise that a capability is available in production or create a customer relationship.</p></div></article>',
    '<article id="terms"><p class="notice-index">03</p><div><h2>Informational use</h2><p>This website describes an early-stage company and technology under development. Its content is general information, not clinical, legal, financial or claims-decision advice. It does not promise that a capability is available in production or create a customer relationship. Customer-specific processing, security and retention terms may be supplemented by applicable agreements.</p></div></article>',
  ],
  [
    '<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">Questions</p><h2>Ask about the website or these notices.</h2></div><div class="actions"><a class="button primary" href="mailto:info@sequrin.tech?subject=Sequrin%20website%20question">Email Sequrin</a><a class="button secondary" href="../">Return home</a></div></div></section>',
    '<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">Questions</p><h2>Ask about privacy, the website or these notices.</h2><p>Privacy enquiries may be directed to the Information Officer at <a class="text-link" href="mailto:sbusiso@sequrin.tech">sbusiso@sequrin.tech</a>.</p></div><div class="actions"><a class="button primary" href="../privacy/">Read the Privacy Policy</a><a class="button secondary" href="mailto:info@sequrin.tech?subject=Sequrin%20website%20question">Email Sequrin</a></div></div></section>',
  ],
  [
    '<a href="../network/">Long-term direction</a>\n      <a href="../policies/">Website notices</a>',
    '<a href="../network/">Long-term direction</a>\n      <a href="../privacy/">Privacy policy</a>\n      <a href="../policies/" aria-current="page">Website notices</a>',
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
