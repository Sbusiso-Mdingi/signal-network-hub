import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function update(relativePath, transforms) {
  const filePath = path.join(root, relativePath);
  let content = await readFile(filePath, "utf8");
  for (const [from, to] of transforms) content = content.replaceAll(from, to);
  await writeFile(filePath, content);
}

await update("docs/index.html", [
  ["Sequrin is a South African healthcare claims-integrity company building connected investigation tools for medical schemes.", "Sequrin is a South African healthcare claims-integrity platform combining detection, network intelligence and investigation workflow for medical schemes."],
  ["A South African company building healthcare claims-integrity technology for medical schemes.", "A South African healthcare claims-integrity technology company for medical schemes."],
  ["Early-stage company &middot; South Africa", "Healthcare claims integrity &middot; South Africa"],
  ["We're building Sequrin for medical schemes and claims-integrity teams to see how claims connect through providers, members, facilities, timing and related activity, so an investigation starts with more than one record in isolation.", "Sequrin gives medical schemes and claims-integrity teams a connected view of claims, providers, members, facilities, timing and related activity, so an investigation starts with more than one record in isolation."],
  ["Sequrin is being built to pull that context into view early enough for an investigator to ask a better question.", "Sequrin pulls that context into view early enough for an investigator to ask a better question."],
  ["Company stage", "Product"],
  ["Build it, test it, then earn the right to scale it.", "See more. Investigate better."],
  ["Sequrin is early-stage. The immediate job is to prove that the product gives claims-integrity teams genuinely useful context before making bigger claims about scale or impact.", "Sequrin brings signals, connected relationships and investigation context into one place so claims-integrity teams can move from attention to evidence with less fragmentation."],
  ["<p class=\"stage-label\">Now</p><h3>Working prototype</h3><p>The browser and desktop experiences are being developed around synthetic and development data.</p>", "<p class=\"stage-label\">Detect</p><h3>Find what stands out</h3><p>Rules, statistics and models help surface unusual activity and keep the reason behind a signal close to the claim.</p>"],
  ["<p class=\"stage-label\">Next</p><h3>Controlled evaluation</h3><p>Start with one bounded claims-integrity question, real investigator review and agreed measures of usefulness.</p>", "<p class=\"stage-label\">Connect</p><h3>See what connects</h3><p>Providers, members, facilities, timing and related claims can be viewed together instead of as isolated records.</p>"],
  ["<p class=\"stage-label\">Longer term</p><h3>Governed network intelligence</h3><p>Only after the foundations hold up do we explore responsible collaboration across organisations.</p>", "<p class=\"stage-label\">Investigate</p><h3>Keep the case together</h3><p>Signals, evidence, relationships, notes and case history stay connected as authorised investigators work through a review.</p>"],
  ["Healthcare claims integrity technology, being developed in South Africa.", "Healthcare claims integrity technology, built in South Africa."],
]);

await update("docs/product/index.html", [
  ["See how Sequrin brings claims signals, connected relationships and investigation context into one workspace for medical-scheme integrity teams.", "See how Sequrin combines claims signals, network intelligence and investigation context in one workspace for medical-scheme integrity teams."],
  ["<div class=\"status-line\"><span class=\"status-dot\" aria-hidden=\"true\"></span>Working prototype</div>", "<div class=\"status-line\"><span class=\"status-dot\" aria-hidden=\"true\"></span>Claims integrity platform</div>"],
  ["without handing the actual decision to the software.</p></div></section>", "without handing the actual decision to the software.</p><p class=\"updated\">Screens shown with synthetic demonstration data.</p></div></section>"],
  ["Sequrin network view connecting synthetic claim, member and provider tokens.", "Sequrin network view connecting claim, member and provider records."],
  ["Sequrin claims review queue using synthetic claim and entity tokens.", "Sequrin claims review queue showing claim and entity context."],
  ["Sequrin desktop overview using an illustrative medical scheme and synthetic claim totals.", "Sequrin desktop workspace overview for claims-integrity review."],
  ["Sequrin desktop risk-signals view using synthetic claim activity.", "Sequrin desktop risk-signals view showing claim activity and review context."],
  ["<figcaption>Illustrative Sequrin interface using synthetic data. Product under development.</figcaption>", "<figcaption>Sequrin product view.</figcaption>"],
  ["Healthcare claims integrity technology, being developed in South Africa.", "Healthcare claims integrity technology, built in South Africa."],
]);

await update("docs/about/index.html", [
  ["The story behind Sequrin, a South African healthcare claims-integrity company building connected investigation tools for medical schemes.", "The story behind Sequrin, a South African healthcare claims-integrity company combining analytical signals, network intelligence and investigation workflow for medical schemes."],
  ["Sequrin is a South African healthcare claims-integrity company. We're building it to help medical schemes and their integrity teams spot patterns worth investigating and give investigators better context without turning the software into the thing that makes the call.", "Sequrin is a South African healthcare claims-integrity company helping medical schemes and their integrity teams surface patterns worth investigating and give investigators better context without turning the software into the thing that makes the call."],
  ["The aim is to pull those relationships into view so investigators know where it is actually worth spending time.", "The platform pulls those relationships into view so investigators can see where it is actually worth spending time."],
  ["Where we are now", "The platform"],
  ["Sequrin is early-stage. Right now the priority is proving that the product actually makes claims-integrity work more useful and more accountable before we make bigger claims about scale.", "Sequrin brings the analytical and investigative parts of claims integrity into one connected workspace while keeping consequential decisions with authorised people and processes."],
  ["<p class=\"stage-label\">Product</p><h3>Working prototype</h3><p>Browser and desktop experiences are being developed around connected claims review and investigation context.</p>", "<p class=\"stage-label\">Product</p><h3>Connected claims review</h3><p>Browser and desktop experiences bring claims, related entities, signals and investigation context into a focused review workflow.</p>"],
  ["<p class=\"stage-label\">Evaluation</p><h3>Test it properly</h3><p>The next step is a bounded evaluation with real investigators and clear measures of whether the product helped.</p>", "<p class=\"stage-label\">Analytics</p><h3>Explainable signals</h3><p>Rules, statistics and models help surface unusual activity while keeping the reasons behind a signal visible to the investigator.</p>"],
  ["<p class=\"stage-label\">Direction</p><h3>Broader collaboration later</h3><p>Only once the foundations are proven do we look seriously at cross-organisation integrity intelligence.</p>", "<p class=\"stage-label\">Governance</p><h3>Human decision ownership</h3><p>Sequrin supports review and investigation; the medical scheme retains responsibility for consequential decisions and actions.</p>"],
  ["Sequrin is being developed through Sequrin Technologies, a South African registered company", "Sequrin operates through Sequrin Technologies, a South African registered company"],
  ["Healthcare claims integrity technology, being developed in South Africa.", "Healthcare claims integrity technology, built in South Africa."],
]);

await update("docs/privacy/index.html", [
  ["Privacy starts with an accurate description of what exists now.", "Privacy and responsible data handling at Sequrin."],
  ["This notice covers sequrin.com and ordinary business communications. It does not claim that Sequrin currently operates a production medical-scheme service.", "This notice explains how Sequrin Technologies (Pty) Ltd handles information through sequrin.com and ordinary business communications."],
  ["Last updated 23 August 2026", "Last updated 24 August 2026"],
  ["Synthetic demonstrations and sensitive information", "Product demonstration data"],
  ["Current product demonstrations use synthetic and development data. The public site does not invite medical claims, patient details, fraud allegations, credentials or investigation evidence.", "Product views available on the public site use synthetic demonstration data. The public site is not a channel for submitting medical claims, patient details, fraud allegations, credentials or investigation evidence."],
  ["Future customer-controlled processing", "Customer and evaluation data"],
  ["A future controlled claims evaluation requires a documented customer role, purpose, lawful basis, contract, impact assessment, security review, retention, recipients, transfer safeguards, rights route and prior-authorisation assessment where applicable.", "Where Sequrin undertakes a controlled claims evaluation, processing is governed by a documented customer role, purpose, lawful basis, contract, impact assessment, security review, retention approach, recipients, transfer safeguards, rights route and prior-authorisation assessment where applicable."],
  ["Future customer data will follow the applicable customer agreement and approved processing schedule.", "Customer and evaluation data is subject to the applicable agreement, approved processing schedule and retention requirements."],
]);

await update("docs/terms/index.html", [
  ["Terms governing use of the public Sequrin website and its early-stage product information.", "Terms governing use of the public Sequrin website and its product information."],
  ["Early-stage information", "Product information"],
  ["The site describes a product under development. Prototype screens and results may use synthetic data.", "The site describes Sequrin's product and current development work. Demonstration screens and results may use synthetic data."],
]);

console.log("Applied confident product copy without regenerating the current static-site design.");
