import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = await readFile(path.join(root, "docs/policies/index.html"), "utf8");

const pages = [
  {
    route: "privacy",
    title: "Website Privacy Notice | Sequrin",
    description: "How Sequrin Technologies (Pty) Ltd handles information on sequrin.com and through ordinary business communications.",
    body: `<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">Website Privacy Notice</p><h1>Privacy starts with an accurate description of what exists now.</h1><p class="lead">This notice covers sequrin.com and ordinary business communications. It does not claim that Sequrin currently operates a production medical-scheme service.</p><p class="updated">Last updated 22 August 2026</p></div></section>
<section class="section surface"><div class="container governance-grid"><div><p class="eyebrow">Responsible organisation</p><h2>Sequrin Technologies (Pty) Ltd</h2></div><div class="prose-lg"><p>Enterprise number 2026/662912/07. Sequrin is a South African healthcare-technology company.</p><p>Privacy, PAIA and rights enquiries may be sent to <a class="text-link" href="mailto:info@sequrin.com">info@sequrin.com</a>. Information Officer registration evidence is being verified; this notice does not publish an unverified registration claim.</p></div></div></section>
<section class="section"><div class="container notice-list">
<article><p class="notice-index">01</p><div><h2>What the current website processes</h2><p>The reviewed public site has no contact form, visitor account, advertising tracker or non-essential analytics. Hosting and network services may create limited request and security logs, such as IP address, browser/device information, requested page and time, to deliver and protect the site.</p><p>If you email Sequrin, the company processes your contact details, message and related correspondence to respond, manage the relationship, keep necessary records and protect its rights and systems.</p></div></article>
<article><p class="notice-index">02</p><div><h2>Synthetic demonstrations and sensitive information</h2><p>Current product demonstrations use synthetic and development data. The public site does not invite medical claims, patient details, fraud allegations, credentials or investigation evidence. Do not send that information through the public email address.</p></div></article>
<article><p class="notice-index">03</p><div><h2>Future customer-controlled processing</h2><p>A future controlled evaluation may process claims information on documented instructions from a medical scheme or administrator. The customer will ordinarily be the Responsible Party and Sequrin an Operator where the customer determines the purpose and essential means. The actual contract and data schedule must identify the fields, lawful basis, retention, recipients, safeguards and rights route.</p><p>Sequrin does not use identifiable or pseudonymised customer claims for general model training. A risk signal is not a fraud finding or an automatic payment, recovery or sanction decision.</p></div></article>
<article><p class="notice-index">04</p><div><h2>Sharing and international transfers</h2><p>Sequrin shares information only where necessary and lawful, including with approved IT or hosting providers, professional advisers, counterparties and authorities. Provider locations and onward access are assessed for the actual service. Applicable POPIA transfer safeguards are required where information is transferred outside South Africa.</p></div></article>
<article><p class="notice-index">05</p><div><h2>Retention and security</h2><p>Correspondence and technical logs are retained only for a justified business, security, contractual or legal period, then deleted or de-identified. Future customer data will follow the customer agreement and documented instructions.</p><p>Sequrin applies safeguards proportionate to the information and maturity of the service. No system is risk-free, and Sequrin does not claim an unevidenced security or privacy certification.</p></div></article>
<article><p class="notice-index">06</p><div><h2>Your rights</h2><p>Subject to POPIA, PAIA and third-party rights, you may ask about access, correction, deletion or objection by emailing <a class="text-link" href="mailto:info@sequrin.com">info@sequrin.com</a>. The <a class="text-link" href="../paia/">PAIA Manual</a> explains record requests. You may also use the Information Regulator's <a class="text-link" href="https://inforegulator.org.za/">official channels</a>.</p></div></article>
</div></section>`,
  },
  {
    route: "paia",
    title: "PAIA Manual | Sequrin",
    description: "The PAIA Manual for Sequrin Technologies (Pty) Ltd, including records, request steps and POPIA particulars.",
    body: `<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">PAIA Manual</p><h1>How to request access to a Sequrin record.</h1><p class="lead">Prepared under section 51 of the Promotion of Access to Information Act 2 of 2000 and including relevant POPIA particulars.</p><p class="updated">Version 0.9 &middot; 22 August 2026</p></div></section>
<section class="section surface"><div class="container governance-grid"><div><p class="eyebrow">Private body</p><h2>Sequrin Technologies (Pty) Ltd</h2></div><div class="prose-lg"><p>Enterprise number 2026/662912/07, incorporated 19 August 2026. Registered office and company-record location: 1918 Potomac Street, Rietvallei, Krugersdorp, Gauteng, 1754.</p><p>The head of the private body is the sole recorded director, Sbusiso Mdingi. Requests may be sent to <a class="text-link" href="mailto:info@sequrin.com?subject=PAIA%20request">info@sequrin.com</a>. No Information Regulator registration number is published because registration evidence has not yet been located.</p></div></div></section>
<section class="section"><div class="container notice-list">
<article><p class="notice-index">01</p><div><h2>Information Regulator guide and forms</h2><p>Use the current private-body request form and fee rules published by the Information Regulator. The official <a class="text-link" href="https://inforegulator.org.za/paia/">PAIA page</a> contains the guide, forms and current channels.</p></div></article>
<article><p class="notice-index">02</p><div><h2>Records Sequrin may hold</h2><p>Categories include corporate and statutory records; governance and compliance; finance and tax; people; customers and commercial relationships; product, research and intellectual property; privacy and security; and website and communications records. Access may be limited by confidentiality, personal-information, third-party, legal, security and trade-secret protections.</p><p>Sequrin is currently a synthetic-data research and development company. No production medical-scheme dataset or customer deployment was evidenced when this manual was prepared.</p></div></article>
<article><p class="notice-index">03</p><div><h2>Records available without a PAIA request</h2><p>Current public website pages, public policies, CIPC-searchable corporate facts and public marketing material are available through their normal public channels. Voluntary availability does not waive intellectual-property, confidentiality or bulk-reuse restrictions.</p></div></article>
<article><p class="notice-index">04</p><div><h2>How to request a record</h2><ol><li>Download the current prescribed private-body request form.</li><li>Identify the record, the right to be exercised or protected and why the record is required.</li><li>Provide proportionate proof of identity and, if acting for another person, proof of authority.</li><li>Send the form to info@sequrin.com with the subject “PAIA request”, or deliver it to the registered office.</li><li>Pay only a fee authorised by the current rules after receiving a valid notice.</li></ol><p>Sequrin will record receipt, verify the requester, conduct a reasonable search, consider third-party notice and statutory refusal grounds, and communicate its decision within the applicable period. There is no internal appeal from a private-body decision.</p></div></article>
<article><p class="notice-index">05</p><div><h2>POPIA particulars</h2><p>Current processing may cover directors or shareholders, beneficial owners, business contacts, vendors, advisers, applicants or contractors, website visitors, correspondents and regulators. Purposes include corporate administration, legal compliance, finance, relationships, website/security operations and responding to communications.</p><p>A future claims pilot requires a settled purpose, role, lawful basis, contract, impact assessment, security review and prior-authorisation decision. No verified complete subprocessor and country map exists; it must be completed before real medical-scheme data is processed.</p></div></article>
<article><p class="notice-index">06</p><div><h2>Availability and control</h2><p>This web page is the publication copy of the manual. A signed approval and publication record must be retained in Sequrin's controlled corporate repository. Requests and privacy enquiries may be sent to <a class="text-link" href="mailto:info@sequrin.com">info@sequrin.com</a>.</p></div></article>
</div></section>`,
  },
  {
    route: "terms",
    title: "Website Terms | Sequrin",
    description: "Terms governing use of the public Sequrin website and its early-stage product information.",
    body: `<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">Website Terms</p><h1>Use this site as information, not as a claims decision.</h1><p class="lead">These terms govern sequrin.com, operated by Sequrin Technologies (Pty) Ltd, enterprise number 2026/662912/07.</p><p class="updated">Last updated 22 August 2026</p></div></section>
<section class="section"><div class="container notice-list">
<article><p class="notice-index">01</p><div><h2>Early-stage information</h2><p>The site describes a product under development. Prototype screens and results may use synthetic data. Nothing on the site is medical, claims, forensic, legal or investment advice; a promise of savings or detection accuracy; an offer to provide a regulated service; or evidence of a customer deployment, regulatory approval or certification.</p></div></article>
<article><p class="notice-index">02</p><div><h2>Lawful use</h2><p>You may view the site and share links for ordinary informational use. Do not interfere with security, access restrictions or availability; reverse engineer protected prototypes; imply endorsement; remove notices; or use protected content to train a competing model without written permission or a lawful exception.</p></div></article>
<article><p class="notice-index">03</p><div><h2>Intellectual property and links</h2><p>Sequrin owns or lawfully uses the site content, brand and software material. Third-party material remains its owners' property. External links are provided for convenience; Sequrin does not control their continued availability or content.</p></div></article>
<article><p class="notice-index">04</p><div><h2>Availability and liability</h2><p>The site is provided as available. To the maximum extent permitted by law, Sequrin is not liable for indirect or consequential loss from informational site use. Nothing excludes liability that cannot lawfully be excluded or applicable consumer rights.</p></div></article>
<article><p class="notice-index">05</p><div><h2>Privacy, law and contact</h2><p>The <a class="text-link" href="../privacy/">Privacy Notice</a> explains current information handling and the <a class="text-link" href="../paia/">PAIA Manual</a> explains record requests. South African law applies; courts with jurisdiction in Gauteng are non-exclusive. Send legal or intellectual-property notices to <a class="text-link" href="mailto:info@sequrin.com">info@sequrin.com</a>.</p></div></article>
</div></section>`,
  },
  {
    route: "cookies",
    title: "Cookie and Tracking Statement | Sequrin",
    description: "Current cookie, analytics and tracking position for the public Sequrin website.",
    body: `<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">Cookie and Tracking Statement</p><h1>No non-essential tracking in the reviewed public build.</h1><p class="lead">The current sequrin.com build does not set advertising cookies, run non-essential analytics or use a cookie-consent banner.</p><p class="updated">Last updated 22 August 2026</p></div></section>
<section class="section"><div class="container notice-list">
<article><p class="notice-index">01</p><div><h2>Current position</h2><p>Sequrin has not intentionally added advertising cookies, behavioural advertising, visitor profiling or non-essential analytics to the reviewed public site. The public site has no visitor account or contact form.</p></div></article>
<article><p class="notice-index">02</p><div><h2>Essential delivery information</h2><p>Hosting and network infrastructure may process routine request and security information needed to deliver and protect the site, such as IP address, requested resource, browser or device information and time. Sequrin does not use this information for behavioural advertising.</p></div></article>
<article><p class="notice-index">03</p><div><h2>Future changes</h2><p>Sequrin will reassess this statement before adding analytics, embedded third-party media, chat, forms, authentication or marketing technology. Non-essential tracking will not be introduced silently: the notice and, where legally required, consent choices will be updated before activation.</p></div></article>
<article><p class="notice-index">04</p><div><h2>Questions</h2><p>See the <a class="text-link" href="../privacy/">Privacy Notice</a> or email <a class="text-link" href="mailto:info@sequrin.com">info@sequrin.com</a>.</p></div></article>
</div></section>`,
  },
];

function render(page) {
  let content = source;
  content = content.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
  content = content.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${page.description}">`);
  content = content.replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="https://sequrin.com/${page.route}/">`);
  content = content.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${page.title}">`);
  content = content.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${page.description}">`);
  content = content.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="https://sequrin.com/${page.route}/">`);
  content = content.replace(/<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${page.title}">`);
  content = content.replace(/<meta name="twitter:description" content="[^"]*">/, `<meta name="twitter:description" content="${page.description}">`);
  content = content.replace(/<main id="main" tabindex="-1">[\s\S]*?<\/main>/, `<main id="main" tabindex="-1">\n${page.body}\n</main>`);
  content = content.replace(/ aria-current="page"/g, "");
  content = content.replace(`href="../${page.route}/"`, `href="../${page.route}/" aria-current="page"`);
  return content;
}

for (const page of pages) {
  const directory = path.join(root, "docs", page.route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), render(page));
}

console.log(`Applied ${pages.length} public legal pages.`);
