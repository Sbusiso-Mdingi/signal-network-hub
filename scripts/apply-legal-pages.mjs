import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = await readFile(path.join(root, "docs/policies/index.html"), "utf8");

const pages = [
  {
    route: "privacy",
    title: "Website Privacy Notice | Sequrin",
    description:
      "How Sequrin Technologies (Pty) Ltd handles information on sequrin.com and through ordinary business communications.",
    body: `<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">Website Privacy Notice</p><h1>Privacy starts with an accurate description of what exists now.</h1><p class="lead">This notice covers sequrin.com and ordinary business communications. It does not claim that Sequrin currently operates a production medical-scheme service.</p><p class="updated">Last updated 23 August 2026</p></div></section>
<section class="section surface"><div class="container governance-grid"><div><p class="eyebrow">Responsible organisation</p><h2>Sequrin Technologies (Pty) Ltd</h2></div><div class="prose-lg"><p>Enterprise number 2026/662912/07. Sequrin is a South African healthcare-technology company.</p><p>Privacy, PAIA and data-subject rights enquiries may be sent to <a class="text-link" href="mailto:info@sequrin.com">info@sequrin.com</a>. Sbusiso Mdingi is Sequrin's registered Information Officer. Sequrin's Information Regulator organisation registration number is 2026-064989, registered on 22 August 2026.</p></div></div></section>
<section class="section"><div class="container notice-list">
<article><p class="notice-index">01</p><div><h2>What the current website processes</h2><p>The reviewed public site has no contact form, visitor account, advertising tracker or non-essential analytics. Hosting and network services may create limited request and security logs, such as IP address, browser/device information, requested page and time, to deliver and protect the site.</p><p>If you email Sequrin, the company processes your contact details, message and related correspondence to respond, manage the relationship, keep necessary records and protect its rights and systems.</p></div></article>
<article><p class="notice-index">02</p><div><h2>Synthetic demonstrations and sensitive information</h2><p>Current product demonstrations use synthetic and development data. The public site does not invite medical claims, patient details, fraud allegations, credentials or investigation evidence. Do not send that information through the public email address.</p></div></article>
<article><p class="notice-index">03</p><div><h2>Future customer-controlled processing</h2><p>A future controlled claims evaluation requires a documented customer role, purpose, lawful basis, contract, impact assessment, security review, retention, recipients, transfer safeguards, rights route and prior-authorisation assessment where applicable.</p><p>Sequrin does not have standing approval to use identifiable or pseudonymised customer claims for general model training. A risk signal is not a fraud finding or an automatic payment, recovery or sanction decision.</p></div></article>
<article><p class="notice-index">04</p><div><h2>Sharing and international transfers</h2><p>Sequrin shares information only where necessary and lawful, including with approved technology providers, professional advisers, counterparties and authorities. Provider locations, remote support and onward access are assessed for the actual service. Applicable POPIA section 72 safeguards are required where information is transferred outside South Africa.</p></div></article>
<article><p class="notice-index">05</p><div><h2>Retention and security</h2><p>Correspondence and technical logs are retained only for a justified business, security, contractual or legal period, then deleted or de-identified in accordance with Sequrin's retention rules. Future customer data will follow the applicable customer agreement and approved processing schedule.</p><p>Sequrin requires safeguards proportionate to the information and maturity of the service. No public statement should be read as an unevidenced security, privacy or regulatory certification.</p></div></article>
<article><p class="notice-index">06</p><div><h2>Your rights</h2><p>Subject to POPIA, PAIA and third-party rights, you may ask about access, correction, deletion or objection by emailing <a class="text-link" href="mailto:info@sequrin.com">info@sequrin.com</a>. The <a class="text-link" href="../paia/">PAIA Manual</a> explains record requests. You may also use the Information Regulator's <a class="text-link" href="https://inforegulator.org.za/">official channels</a>.</p></div></article>
</div></section>`,
  },
  {
    route: "paia",
    title: "PAIA Manual | Sequrin",
    description:
      "Sequrin Technologies (Pty) Ltd's section 51 PAIA Manual, including access procedures and POPIA particulars.",
    body: `<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">PAIA Manual</p><h1>Access to Sequrin records.</h1><p class="lead">Prepared under section 51 of the Promotion of Access to Information Act 2 of 2000, as amended, and including relevant POPIA particulars.</p><p class="updated">Version 1.1 &middot; 23 August 2026</p></div></section>
<section class="section surface"><div class="container governance-grid"><div><p class="eyebrow">Private body</p><h2>Sequrin Technologies (Pty) Ltd</h2></div><div class="prose-lg"><p>Enterprise number 2026/662912/07. Principal place of business and registered office: 1918 Potomac Street, Rietvallei, Krugersdorp, Gauteng, 1754.</p><p>The head of the private body and Information Officer is Sbusiso Mdingi, Chief Executive Officer. Sequrin is registered with the Information Regulator under organisation registration number 2026-064989, registered on 22 August 2026. Information Officer appointment date: 19 August 2026. No Deputy Information Officer is currently designated.</p><p>PAIA requests and access enquiries: <a class="text-link" href="mailto:info@sequrin.com?subject=PAIA%20request">info@sequrin.com</a> &middot; +27 84 222 0684. Physical inspection or delivery should be arranged in advance because the premises are not operated as a public reception office.</p></div></div></section>
<section class="section"><div class="container notice-list">
<article><p class="notice-index">01</p><div><h2>Purpose and the Information Regulator Guide</h2><p>This Manual explains the records Sequrin holds, how to request access and the personal-information particulars required of a private body following the POPIA amendments.</p><p>The Information Regulator publishes the PAIA Guide, current prescribed forms, fee information and complaint procedures at <a class="text-link" href="https://inforegulator.org.za/paia/">inforegulator.org.za/paia/</a>. For public inspection at Sequrin's principal place of business, the Guide is made available in English and isiZulu by prior arrangement through info@sequrin.com.</p></div></article>
<article><p class="notice-index">02</p><div><h2>Records available without a formal request</h2><p>Public website and statutory publications may be available without a formal PAIA request, including this Manual, the Website Privacy Notice, Cookie and Tracking Statement, Website Terms, public company information, public product descriptions and public contact details.</p><p>Voluntary publication does not waive copyright, confidentiality, intellectual-property, security or lawful bulk-reuse restrictions.</p></div></article>
<article><p class="notice-index">03</p><div><h2>Records held and other legislation</h2><p>Record subjects may include corporate and statutory records; governance and compliance; finance and tax; people; customers and commercial relationships; product, research and intellectual property; privacy and security; and website and communications records.</p><p>Applicable record frameworks include the Companies Act 71 of 2008, PAIA, POPIA, the Tax Administration Act 28 of 2011 and the Income Tax Act 58 of 1962, together with other legislation applicable to a particular record. Listing a category does not mean that access cannot lawfully be refused.</p></div></article>
<article><p class="notice-index">04</p><div><h2>How to request access to a record</h2><p>Use the current prescribed Form 02 from the Information Regulator. Identify the record with enough detail for a reasonable search, identify the right you seek to exercise or protect and explain why the record is required for that purpose, state the preferred form of access, and provide proportionate proof of identity and authority where relevant.</p><p>Send the request to <a class="text-link" href="mailto:info@sequrin.com?subject=PAIA%20request">info@sequrin.com</a> with the subject “PAIA request”, or arrange lawful physical delivery. Sequrin will record the request, conduct a reasonable search, apply any required third-party procedure and communicate its decision within the period required by PAIA, subject to a lawful extension.</p></div></article>
<article><p class="notice-index">05</p><div><h2>Fees, refusal grounds and remedies</h2><p>Request, deposit and access fees are governed by PAIA and the Regulations. Sequrin will not require payment other than as authorised by the applicable rules.</p><p>Access may be refused only on a lawful basis, including where applicable protection of third-party privacy, commercial or confidential information, safety and property, legal privilege, Sequrin's commercial information or protected research information. There is no statutory internal appeal from a decision of the head of a private body. A requester or affected third party may use the Information Regulator complaint process and applicable court remedies.</p></div></article>
<article><p class="notice-index">06</p><div><h2>Processing of personal information</h2><p>Sequrin acts as Responsible Party for personal information processed for its own corporate and operational purposes. Where Sequrin processes information on a customer's documented instructions, the POPIA role is determined by the actual activity, contract and law.</p><p>Current purposes include corporate administration, legal compliance, finance, business relationships, recruitment or contracting where applicable, website and system security, responding to communications and regulatory matters, and research and product development using information authorised for that environment.</p><p>Sequrin's current claims-product R&amp;D environment is restricted to genuinely synthetic, non-re-identifiable data. Real customer claims, health or clinical information is not authorised for ordinary development or demonstration.</p></div></article>
<article><p class="notice-index">07</p><div><h2>Data subjects, recipients and transfers</h2><p>Current data-subject categories may include directors, shareholders and beneficial owners; customers and prospective customers; partners; vendors and advisers; applicants, contractors or personnel where applicable; website users and correspondents; and regulators or authorities.</p><p>Where necessary and lawful, information may be supplied to authorised Sequrin personnel or contractors, professional advisers, financial-administration providers, approved hosting/cloud/security/communications providers, customers or counterparties, and regulators, courts or authorities.</p><p>Technology providers may involve infrastructure, support personnel or subprocessors outside South Africa. Sequrin assesses the actual provider, information exposed, storage and support locations and applies section 72 of POPIA where required. Future customer-controlled health or claims processing requires a deployment-specific transfer assessment before processing begins.</p></div></article>
<article><p class="notice-index">08</p><div><h2>Information security</h2><p>Sequrin requires safeguards proportionate to the information and system. These may include least-privilege access, authentication and credential controls, encryption, logging and audit trails, secure development and change management, vulnerability/configuration management, resilience controls, supplier-security requirements and incident-response procedures.</p><p>These are framework requirements, not a claim that every control is deployed identically in every system. Deployment-specific controls must be documented and evidenced before real customer claims or health information is authorised.</p></div></article>
<article><p class="notice-index">09</p><div><h2>Availability and updating</h2><p>The current public version of this Manual is available free of charge on this page and may also be requested from info@sequrin.com. It is available for public inspection at Sequrin's principal place of business during normal business hours by prior arrangement and will be supplied to the Information Regulator upon request as required by PAIA.</p><p>Sequrin reviews the Manual at least annually and when a material change affects contact details, records, processing activities, legal obligations or access procedures.</p></div></article>
</div></section>`,
  },
  {
    route: "terms",
    title: "Website Terms | Sequrin",
    description:
      "Terms governing use of the public Sequrin website and its early-stage product information.",
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
    description:
      "Current cookie, analytics and tracking position for the public Sequrin website.",
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
  content = content.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${page.description}">`,
  );
  content = content.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="https://sequrin.com/${page.route}/">`,
  );
  content = content.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${page.title}">`,
  );
  content = content.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${page.description}">`,
  );
  content = content.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="https://sequrin.com/${page.route}/">`,
  );
  content = content.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${page.title}">`,
  );
  content = content.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${page.description}">`,
  );
  content = content.replace(
    /<main id="main" tabindex="-1">[\s\S]*?<\/main>/,
    `<main id="main" tabindex="-1">\n${page.body}\n</main>`,
  );
  content = content.replace(/ aria-current="page"/g, "");
  content = content.replace(
    `href="../${page.route}/"`,
    `href="../${page.route}/" aria-current="page"`,
  );
  return content;
}

for (const page of pages) {
  const directory = path.join(root, "docs", page.route);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, "index.html"), render(page));
}

console.log(`Applied ${pages.length} public legal pages.`);
