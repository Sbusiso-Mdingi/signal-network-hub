import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");
const contactEmail = "info@sequrin.com";
const applicationUrl = "https://app.sequrin.com/sign-in";
const socialImageUrl = "https://sequrin.com/assets/sequrin-social-preview-2026.jpg";

const logo = `<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor">
  <path d="M16 4 L26 10 V22 L16 28 L6 22 V10 Z" stroke-width="1.25" opacity=".45"></path>
  <path d="M16 8.5 L16 16 L22.5 19.5 M16 16 L9.5 19.5" stroke-width="1.25" opacity=".7"></path>
  <circle cx="16" cy="8.5" r="2.1" fill="currentColor" stroke="none"></circle>
  <circle cx="22.5" cy="19.5" r="1.7" fill="currentColor" stroke="none" opacity=".8"></circle>
  <circle cx="9.5" cy="19.5" r="1.7" fill="currentColor" stroke="none" opacity=".8"></circle>
</svg>`;

function activeAttribute(active, item) {
  return active === item ? ' aria-current="page"' : "";
}

function header(prefix, active) {
  const home = prefix || "./";
  const items = [
    ["product", "Product", `${prefix}product/`],
    ["approach", "Approach", `${prefix}how-it-works/`],
    ["schemes", "For medical schemes", `${prefix}for-medical-schemes/`],
    ["about", "About", `${prefix}about/`],
  ];
  const links = items
    .map(([key, label, href]) => `<a href="${href}"${activeAttribute(active, key)}>${label}</a>`)
    .join("");

  return `<a class="skip-link" href="#main">Skip to content</a>
<div class="scroll-progress" aria-hidden="true"><span></span></div>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="${home}" aria-label="Sequrin home">${logo}<span class="brand-name">Sequrin</span></a>
    <nav class="desktop-nav" aria-label="Primary">${links}<a class="nav-signin" href="${applicationUrl}">Sign in</a></nav>
    <details class="mobile-nav">
      <summary>Menu</summary>
      <nav class="mobile-panel" aria-label="Mobile">${links}<a href="${applicationUrl}">Sign in</a></nav>
    </details>
  </div>
</header>`;
}

function footer(prefix) {
  const home = prefix || "./";
  return `<footer class="site-footer">
  <div class="container footer-main">
    <div class="footer-brand">
      <a class="brand" href="${home}">${logo}<span class="brand-name">Sequrin</span></a>
      <p>Healthcare claims integrity technology, being developed in South Africa.</p>
    </div>
    <nav class="footer-nav" aria-label="Explore">
      <p class="footer-heading">Explore</p>
      <a href="${prefix}product/">Product</a>
      <a href="${prefix}how-it-works/">Approach</a>
      <a href="${prefix}for-medical-schemes/">For medical schemes</a>
      <a href="${prefix}about/">About</a>
    </nav>
    <nav class="footer-nav" aria-label="More about Sequrin">
      <p class="footer-heading">More</p>
      <a href="${prefix}impact/">Why it matters</a>
      <a href="${prefix}governance/">Governance</a>
      <a href="${prefix}network/">Long-term direction</a>
      <a href="${prefix}privacy/">Privacy</a>
      <a href="${prefix}paia/">PAIA</a>
      <a href="${prefix}terms/">Terms</a>
      <a href="${prefix}cookies/">Cookies</a>
    </nav>
    <div class="footer-contact">
      <p class="footer-heading">Contact</p>
      <a href="mailto:${contactEmail}">${contactEmail}</a>
      <a href="${applicationUrl}">Application sign in</a>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <span>&copy; 2026 Sequrin Technologies (Pty) Ltd &middot; Enterprise No. 2026/662912/07</span>
      <a class="back-to-top" href="#main">Back to top</a>
    </div>
  </div>
</footer>`;
}

function structuredData() {
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sequrin.com/#organisation",
        name: "Sequrin",
        legalName: "Sequrin Technologies (Pty) Ltd",
        alternateName: "Sequrin, pronounced Securing",
        url: "https://sequrin.com/",
        email: contactEmail,
        logo: "https://sequrin.com/favicon.svg",
        identifier: "2026/662912/07",
        founder: { "@type": "Person", name: "Sbusiso Mdingi" },
        description:
          "An early-stage South African company developing healthcare claims-integrity technology for medical schemes.",
      },
      {
        "@type": "WebSite",
        "@id": "https://sequrin.com/#website",
        url: "https://sequrin.com/",
        name: "Sequrin",
        publisher: { "@id": "https://sequrin.com/#organisation" },
        inLanguage: "en-ZA",
      },
    ],
  })}</script>`;
}

function renderPage({
  route,
  title,
  description,
  active,
  body,
  noindex = false,
  preloadImage = false,
}) {
  const prefix = route === "/" ? "" : "../";
  const canonical = `https://sequrin.com${route}`;
  const assetPrefix = prefix;
  const robots = noindex ? '<meta name="robots" content="noindex,follow">' : "";
  const preload = preloadImage
    ? `<link rel="preload" as="image" href="${assetPrefix}assets/product/connected-claims-network.webp" type="image/webp">`
    : "";
  const schema = route === "/" ? structuredData() : "";

  return `<!DOCTYPE html>
<html lang="en-ZA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
${robots}
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#071019">
  <meta property="og:site_name" content="Sequrin">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${socialImageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:alt" content="Illustrative Sequrin connected claims interface using synthetic data.">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${socialImageUrl}">
  <meta name="twitter:image:alt" content="Illustrative Sequrin connected claims interface using synthetic data.">
  <link rel="icon" href="${assetPrefix}favicon.svg" type="image/svg+xml">
  <link rel="icon" href="${assetPrefix}favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="${assetPrefix}apple-touch-icon.png">
${preload}
  <link rel="stylesheet" href="${assetPrefix}assets/site.css">
${schema}
</head>
<body>
${header(prefix, active)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(prefix)}
<script src="${assetPrefix}assets/site.js" defer></script>
</body>
</html>
`;
}

const syntheticCaption =
  "Illustrative Sequrin interface using synthetic data. Product under development.";

const pages = [
  {
    route: "/",
    output: "docs/index.html",
    title: "Sequrin | Healthcare claims integrity",
    description:
      "Sequrin is an early-stage South African company developing claims-integrity technology for medical schemes.",
    active: "",
    preloadImage: true,
    body: `<section class="hero">
  <div class="container hero-grid">
    <div class="hero-copy">
      <div class="status-line"><span class="status-dot" aria-hidden="true"></span>Early-stage company &middot; South Africa</div>
      <p class="eyebrow">Healthcare claims integrity</p>
      <h1>See the relationships behind suspicious claims activity.</h1>
      <p class="lead">Sequrin is developing claims-integrity technology for medical schemes. It connects analytical signals, relationships and investigation context so authorised teams can see patterns that individual records may miss.</p>
      <div class="actions">
        <a class="button primary" href="mailto:${contactEmail}?subject=Sequrin%20evaluation%20discussion">Discuss an evaluation</a>
        <a class="button secondary" href="product/">Explore the product</a>
      </div>
    </div>
    <figure class="product-frame hero-product">
      <div class="frame-label">Connected claims view</div>
      <img src="assets/product/connected-claims-network.webp" width="1265" height="712" fetchpriority="high" decoding="async" alt="Sequrin network view connecting synthetic claim, member and provider tokens.">
      <figcaption>${syntheticCaption}</figcaption>
    </figure>
  </div>
</section>

<section class="section surface">
  <div class="container intro-grid">
    <div>
      <p class="eyebrow">The problem</p>
      <h2>Risk often appears between claims.</h2>
    </div>
    <div class="prose-lg">
      <p>A single claim can look routine. Recurrence, timing and shared relationships between claims, members, providers and other entities can reveal a different picture.</p>
      <p>Sequrin is being built to bring that context into view without treating an analytical signal as proof of misconduct.</p>
    </div>
  </div>
  <div class="container card-grid three">
    <article class="info-card"><p class="card-index">01</p><h3>Find activity worth reviewing</h3><p>Rules, statistical methods and models can surface unusual activity as a lead for authorised teams.</p></article>
    <article class="info-card"><p class="card-index">02</p><h3>Understand the connections</h3><p>Network analysis can show recurring relationships across claims, members, providers and events.</p></article>
    <article class="info-card"><p class="card-index">03</p><h3>Investigate with context</h3><p>A structured workspace can bring the underlying claims, evidence and case activity together.</p></article>
  </div>
</section>

<section class="section">
  <div class="container section-heading">
    <p class="eyebrow">The approach</p>
    <h2>From a signal to an accountable investigation.</h2>
    <p>Sequrin is designed around a clear separation between analytical attention and consequential decisions.</p>
  </div>
  <ol class="container process-grid">
    <li><span>01</span><h3>Connect</h3><p>Bring relevant claims inputs into an organisation-bound analytical context.</p></li>
    <li><span>02</span><h3>Surface</h3><p>Identify patterns and relationships that may warrant closer review.</p></li>
    <li><span>03</span><h3>Understand</h3><p>Inspect the evidence, linked entities and history behind the lead.</p></li>
    <li><span>04</span><h3>Investigate</h3><p>Keep further action within authorised human and organisational processes.</p></li>
  </ol>
  <div class="container inline-link"><a href="how-it-works/">Read the full approach</a></div>
</section>

<section class="section surface">
  <div class="container stage-layout">
    <div class="section-heading">
      <p class="eyebrow">Company stage</p>
      <h2>A working product, with claims kept in proportion.</h2>
      <p>Sequrin is an early-stage company. The website shows a working prototype and a focused development direction, not evidence of a live medical-scheme deployment or proven financial outcomes.</p>
    </div>
    <div class="stage-list">
      <article><p class="stage-label">Now</p><h3>Working prototype</h3><p>Browser and desktop interfaces support product development with synthetic and development data.</p></article>
      <article><p class="stage-label">Next</p><h3>Controlled evaluation</h3><p>Test a bounded claims-integrity question with explicit governance and success criteria.</p></article>
      <article><p class="stage-label">Longer term</p><h3>Governed network intelligence</h3><p>Explore responsible collaboration across participating organisations if the foundations are validated.</p></article>
    </div>
  </div>
</section>

<section class="section governance-band">
  <div class="container governance-grid">
    <div><p class="eyebrow">Accountability</p><h2>Built around human judgement.</h2></div>
    <div><p>Sequrin produces investigative signals. It does not determine guilt, reject claims, direct recoveries or replace the evidence and authority required for a consequential decision.</p><a class="text-link" href="governance/">Read the governance principles</a></div>
  </div>
</section>

<section class="section cta-section">
  <div class="container cta-grid">
    <div><p class="eyebrow">Start with a real question</p><h2>Evaluate the context, not the sales claim.</h2><p>A useful first discussion is about one bounded integrity question, the available data and what a credible result would need to show.</p></div>
    <div class="actions"><a class="button primary" href="mailto:${contactEmail}?subject=Sequrin%20evaluation%20discussion">Discuss an evaluation</a><a class="button secondary" href="for-medical-schemes/">For medical schemes</a></div>
  </div>
</section>`,
  },
  {
    route: "/product/",
    output: "docs/product/index.html",
    title: "Claims integrity product | Sequrin",
    description:
      "Explore the claims signals, network context and investigation workflows being developed by Sequrin.",
    active: "product",
    body: `<section class="page-hero">
  <div class="container narrow">
    <div class="status-line"><span class="status-dot" aria-hidden="true"></span>Working prototype</div>
    <p class="eyebrow">Product</p>
    <h1>One workspace for signals, relationships and investigation context.</h1>
    <p class="lead">Sequrin is developing a claims-integrity workspace for authorised medical-scheme teams. It is intended to help analysts and investigators move from an unusual claim to the wider context needed for careful review.</p>
  </div>
</section>

<section class="section product-section">
  <div class="container feature-list">
    <article class="feature-row" id="network-intelligence">
      <div class="feature-copy"><p class="eyebrow">Network intelligence</p><h2>Relationship context, not isolated records.</h2><p>Connected views can show how claims, provider tokens, member tokens and other relevant entities relate. Investigators can inspect a cluster without treating proximity as proof.</p></div>
      <figure class="product-frame"><img src="../assets/product/connected-claims-network.webp" width="1265" height="712" loading="eager" decoding="async" alt="Sequrin network view connecting synthetic claim, member and provider tokens."><figcaption>${syntheticCaption}</figcaption></figure>
    </article>
    <article class="feature-row reverse" id="claims-review">
      <div class="feature-copy"><p class="eyebrow">Claims review</p><h2>A queue with reasons to look closer.</h2><p>Claim states, risk bands and investigation status can be reviewed together. The aim is to help teams prioritise attention and reach the supporting context faster.</p></div>
      <figure class="product-frame"><img src="../assets/product/claims-review-queue.webp" width="1265" height="712" loading="lazy" decoding="async" alt="Sequrin claims review queue using synthetic claim and entity tokens."><figcaption>${syntheticCaption}</figcaption></figure>
    </article>
    <article class="feature-row" id="desktop-workspace">
      <div class="feature-copy"><p class="eyebrow">Desktop workspace</p><h2>A focused view for authorised work.</h2><p>The desktop prototype is being designed for organisation-bound claims review, clear local state and controlled access. It complements the browser workspace rather than suggesting a separate source of truth.</p></div>
      <figure class="product-frame desktop-frame"><img src="../assets/product/desktop-overview.webp" width="1265" height="810" loading="lazy" decoding="async" alt="Sequrin desktop overview using an illustrative medical scheme and synthetic claim totals."><figcaption>${syntheticCaption}</figcaption></figure>
    </article>
    <article class="feature-row reverse" id="risk-signals">
      <div class="feature-copy"><p class="eyebrow">Risk signals</p><h2>Explain why activity needs review.</h2><p>Risk views can place score bands, triggered rules and related activity beside the claim record. The output remains a review aid that requires investigation.</p></div>
      <figure class="product-frame desktop-frame"><img src="../assets/product/desktop-risk-signals.webp" width="1265" height="810" loading="lazy" decoding="async" alt="Sequrin desktop risk-signals view using synthetic claim activity."><figcaption>${syntheticCaption}</figcaption></figure>
    </article>
  </div>
</section>

<section class="section surface">
  <div class="container section-heading"><p class="eyebrow">Product foundations</p><h2>Designed as one connected operating layer.</h2></div>
  <div class="container card-grid three">
    <article class="info-card"><h3>Signal intelligence</h3><p>Rules, statistical methods and models can highlight unusual activity for review. Their output is a lead, not a verdict.</p></article>
    <article class="info-card"><h3>Investigation workflow</h3><p>Claims, evidence, notes, relationships and case activity can be brought into a structured review path.</p></article>
    <article class="info-card"><h3>Governed access</h3><p>Organisation boundaries, roles, permissions and traceable actions are part of the product design and evaluation work.</p></article>
  </div>
</section>

<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">How it works</p><h2>See how the parts fit together.</h2><p>The product is designed to move from governed data context to an accountable human investigation.</p></div><div class="actions"><a class="button primary" href="../how-it-works/">See the approach</a><a class="button secondary" href="mailto:${contactEmail}">Contact Sequrin</a></div></div></section>`,
  },
  {
    route: "/how-it-works/",
    output: "docs/how-it-works/index.html",
    title: "Approach to claims integrity | Sequrin",
    description:
      "Learn how Sequrin approaches claims signals, relationship analysis, investigation and human decision-making.",
    active: "approach",
    body: `<section class="page-hero"><div class="container narrow"><p class="eyebrow">Approach</p><h1>From claims data to a reviewable lead.</h1><p class="lead">Sequrin's approach connects data, detection and casework without turning analytical output into an automatic claims decision.</p></div></section>

<section class="section"><div class="container section-heading"><p class="eyebrow">The workflow</p><h2>Four parts, with authority kept clear.</h2></div><ol class="container process-stack">
  <li><span>01</span><div><h3>Establish governed context</h3><p>Bring only the relevant claims inputs into an organisation-bound analytical environment with a defined purpose and access boundary.</p></div></li>
  <li><span>02</span><div><h3>Surface signals and relationships</h3><p>Use rules, models and network analysis to identify activity that may warrant attention. The result is a prioritised lead, not a finding of misconduct.</p></div></li>
  <li><span>03</span><div><h3>Investigate with context</h3><p>Let authorised teams examine the underlying claims, connected entities, evidence and case history before deciding what further work is appropriate.</p></div></li>
  <li><span>04</span><div><h3>Keep decisions accountable</h3><p>Claims, payment, recovery and other consequential decisions remain with the people and processes authorised to make them.</p></div></li>
</ol></section>

<section class="section surface"><div class="container governance-grid"><div><p class="eyebrow">Evaluation</p><h2>Start with one bounded question.</h2></div><div class="prose-lg"><p>A useful evaluation needs a specific claims-integrity question, an agreed dataset, a comparison method and a clear view of who can access the work.</p><p>It should test the relevance of the signals, the quality of the connected context, false positives, workflow fit and whether the output helps investigators ask better questions.</p></div></div></section>

<section class="section"><div class="container section-heading"><p class="eyebrow">Boundaries</p><h2>What the approach does and does not do.</h2></div><div class="container comparison-grid">
  <article><p class="comparison-label">The product supports</p><ul><li>Prioritising activity for review</li><li>Seeing relevant relationships</li><li>Bringing evidence and case context together</li><li>Recording authorised investigative work</li></ul></article>
  <article><p class="comparison-label">The product does not replace</p><ul><li>Evidence gathering and verification</li><li>Scheme rules and contractual processes</li><li>Legal, privacy and clinical judgement</li><li>Accountability for consequential decisions</li></ul></article>
</div></section>

<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">For medical schemes</p><h2>Test the approach against real operating needs.</h2><p>A controlled evaluation should establish usefulness before any broader claim is made.</p></div><div class="actions"><a class="button primary" href="../for-medical-schemes/">Evaluation approach</a><a class="button secondary" href="../product/">Explore the product</a></div></div></section>`,
  },
  {
    route: "/for-medical-schemes/",
    output: "docs/for-medical-schemes/index.html",
    title: "For medical schemes | Sequrin",
    description:
      "Explore how a medical scheme could evaluate Sequrin against a bounded claims-integrity question.",
    active: "schemes",
    body: `<section class="page-hero"><div class="container narrow"><p class="eyebrow">For medical schemes</p><h1>Evaluate Sequrin against a real integrity question.</h1><p class="lead">Sequrin is intended for medical schemes and administrators exploring how connected analytics could support claims review and investigation. At this stage, the right starting point is a bounded evaluation with clear governance and success criteria.</p><div class="actions"><a class="button primary" href="mailto:${contactEmail}?subject=Sequrin%20evaluation%20discussion">Discuss an evaluation</a><a class="button secondary" href="../product/">Explore the product</a></div></div></section>

<section class="section surface"><div class="container intro-grid"><div><p class="eyebrow">Where it may help</p><h2>Give investigators a clearer operating view.</h2></div><div class="prose-lg"><p>Connected context may help teams identify recurring relationships, prioritise review and bring fragmented investigative information into one place.</p><p>The objective is a more useful starting point for investigation, not an automated finding or a promise of recovered value.</p></div></div><div class="container card-grid three"><article class="info-card"><h3>Prioritisation</h3><p>Assess whether the signals help focus attention on activity that warrants review.</p></article><article class="info-card"><h3>Context</h3><p>Assess whether relationship views reveal relevant patterns more clearly than isolated records.</p></article><article class="info-card"><h3>Workflow fit</h3><p>Assess whether the product supports the way authorised teams gather, record and review evidence.</p></article></div></section>

<section class="section"><div class="container section-heading"><p class="eyebrow">A controlled evaluation</p><h2>Agree the question before the technology.</h2></div><ol class="container process-grid evaluation-process"><li><span>01</span><h3>Define</h3><p>Select one claims-integrity question and the operating decision it informs.</p></li><li><span>02</span><h3>Bound</h3><p>Agree the necessary data, access, privacy and security conditions.</p></li><li><span>03</span><h3>Compare</h3><p>Set a baseline and explicit measures for signal and workflow usefulness.</p></li><li><span>04</span><h3>Review</h3><p>Interpret the results with accountable scheme and integrity stakeholders.</p></li></ol></section>

<section class="section surface"><div class="container governance-grid"><div><p class="eyebrow">What a partner would define</p><h2>Ownership stays with the scheme.</h2></div><div><ul class="check-list"><li>An authorised sponsor and a clear integrity question</li><li>Appropriate legal, privacy and security review</li><li>An agreed data boundary and evaluation period</li><li>Named responsibility for investigation and decisions</li><li>Success criteria that include false positives and usefulness</li></ul></div></div></section>

<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">A practical next step</p><h2>Bring one question worth testing.</h2><p>Sequrin can discuss the scope, evidence and governance a credible evaluation would require.</p></div><div class="actions"><a class="button primary" href="mailto:${contactEmail}?subject=Sequrin%20evaluation%20discussion">Discuss an evaluation</a><a class="button secondary" href="../how-it-works/">See the approach</a></div></div></section>`,
  },
  {
    route: "/impact/",
    output: "docs/impact/index.html",
    title: "Why claims integrity matters | Sequrin",
    description:
      "Sequrin is being developed to help healthcare funding organisations investigate suspicious claims activity with clearer context.",
    active: "",
    body: `<section class="page-hero"><div class="container narrow"><p class="eyebrow">Why it matters</p><h1>Protecting healthcare resources starts with better investigative context.</h1><p class="lead">Claims-integrity work affects finite healthcare funding, the time of specialist teams and the quality of decisions made under uncertainty. Sequrin is being developed to strengthen that operating capability.</p></div></section>

<section class="section surface"><div class="container card-grid three"><article class="info-card"><h3>See patterns earlier</h3><p>Connected context can reveal recurrence and shared activity that may be difficult to see in isolated claim reviews.</p></article><article class="info-card"><h3>Use specialist time carefully</h3><p>Clearer signals may help investigators focus attention while still examining the evidence behind each lead.</p></article><article class="info-card"><h3>Make reasoning easier to review</h3><p>A structured record of signals, relationships and case activity can support more accountable internal review.</p></article></div></section>

<section class="section"><div class="container governance-grid"><div><p class="eyebrow">Evidence before impact</p><h2>Useful outcomes need to be demonstrated.</h2></div><div class="prose-lg"><p>Sequrin does not claim recovered amounts, reduced fraud rates or scheme-wide outcomes. Those claims would require real evaluations, suitable baselines and careful interpretation.</p><p>Possible measures include signal relevance, false-positive rates, time to useful context, duplication of investigative work and investigator assessment of the resulting evidence.</p></div></div></section>

<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">Measure what matters</p><h2>Start with a result that can be checked.</h2><p>A controlled evaluation should make its question, baseline and limitations clear from the outset.</p></div><div class="actions"><a class="button primary" href="../for-medical-schemes/">Evaluation approach</a><a class="button secondary" href="mailto:${contactEmail}">Contact Sequrin</a></div></div></section>`,
  },
  {
    route: "/governance/",
    output: "docs/governance/index.html",
    title: "Governance principles | Sequrin",
    description:
      "Read the human oversight, access and decision boundaries guiding Sequrin's claims-integrity product development.",
    active: "approach",
    body: `<section class="page-hero"><div class="container narrow"><p class="eyebrow">Governance</p><h1>Designed to support judgement, not replace it.</h1><p class="lead">Claims-integrity technology works around sensitive information and consequential decisions. Sequrin's product direction keeps the analytical role, investigation role and decision authority distinct.</p></div></section>

<section class="section surface"><div class="container card-grid two"><article class="info-card"><p class="card-index">01</p><h3>Signals require context</h3><p>Unusual activity is a reason to look closer. It is not a finding of fraud or misconduct.</p></article><article class="info-card"><p class="card-index">02</p><h3>Access follows purpose</h3><p>Organisation boundaries, roles and permissions are part of the product design for sensitive work.</p></article><article class="info-card"><p class="card-index">03</p><h3>Actions should be reviewable</h3><p>Investigation notes, evidence and important administrative actions should leave a traceable record.</p></article><article class="info-card"><p class="card-index">04</p><h3>People remain accountable</h3><p>Authorised organisations and professionals retain responsibility for claims and recovery decisions.</p></article></div></section>

<section class="section"><div class="container comparison-grid"><article><p class="comparison-label">Sequrin is being designed to</p><ul><li>Surface leads for authorised review</li><li>Explain relevant patterns and relationships</li><li>Support structured evidence gathering</li><li>Respect organisation and role boundaries</li></ul></article><article><p class="comparison-label">Sequrin is not presented as</p><ul><li>An automatic fraud determination</li><li>A claims rejection or payment engine</li><li>A shared blacklist</li><li>A substitute for legal or clinical judgement</li></ul></article></div></section>

<section class="section surface"><div class="container governance-grid"><div><p class="eyebrow">Current stage</p><h2>Principles still need operating evidence.</h2></div><div class="prose-lg"><p>These are product and evaluation principles for an early-stage system. Security, privacy, access and audit claims should be tested against the final deployment design and the requirements of each participating organisation.</p><p>The website does not claim regulatory approval, certification or a completed production control environment.</p></div></div></section>

<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">The operating approach</p><h2>See where governance enters the workflow.</h2></div><div class="actions"><a class="button primary" href="../how-it-works/">See the approach</a><a class="button secondary" href="mailto:${contactEmail}">Ask a governance question</a></div></div></section>`,
  },
  {
    route: "/network/",
    output: "docs/network/index.html",
    title: "Long-term network direction | Sequrin",
    description:
      "Learn about Sequrin's longer-term direction for governed integrity intelligence across participating organisations.",
    active: "about",
    body: `<section class="page-hero"><div class="container narrow"><div class="status-line quiet"><span class="status-dot" aria-hidden="true"></span>Long-term direction</div><p class="eyebrow">Secure Integrity Network</p><h1>A future direction for governed integrity intelligence.</h1><p class="lead">Sequrin is pronounced “Securing”. The name reflects a longer-term idea: participating organisations may one day benefit from carefully governed integrity intelligence beyond a single data boundary.</p></div></section>

<section class="section surface"><div class="container governance-grid"><div><p class="eyebrow">What exists today</p><h2>The current focus is organisation-bound product development.</h2></div><div class="prose-lg"><p>Sequrin is building tools for authorised teams to examine claims signals and relationships within a defined operating environment.</p><p>There is no operating national network, shared fraud register or cross-scheme blacklist represented by this website.</p></div></div></section>

<section class="section"><div class="container section-heading"><p class="eyebrow">What the direction would require</p><h2>Participation before scale.</h2></div><div class="container card-grid three"><article class="info-card"><h3>Clear purpose</h3><p>Participants would need to agree what information may be used, for which integrity questions and under whose authority.</p></article><article class="info-card"><h3>Privacy and publication rules</h3><p>Evidence, identity, access and any shared signals would need explicit legal and governance foundations.</p></article><article class="info-card"><h3>Independent validation</h3><p>The usefulness, bias, false positives and operational effects would need evidence before broader adoption.</p></article></div></section>

<section class="section surface"><div class="container callout"><p class="eyebrow">A deliberate boundary</p><h2>Connected intelligence should not become unaccountable labelling.</h2><p>Any future network capability would need to preserve context, challenge, correction and accountable human review. The direction is conditional on those foundations, not a claim that they already exist at national scale.</p></div></section>

<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">The nearer-term product</p><h2>Start with the claims-integrity workspace.</h2></div><div class="actions"><a class="button primary" href="../product/">Explore the product</a><a class="button secondary" href="../about/">About Sequrin</a></div></div></section>`,
  },
  {
    route: "/about/",
    output: "docs/about/index.html",
    title: "About Sequrin",
    description:
      "Sequrin is an early-stage South African company developing technology for healthcare claims integrity.",
    active: "about",
    body: `<section class="page-hero"><div class="container narrow"><p class="eyebrow">About Sequrin</p><h1>Building better infrastructure for claims integrity.</h1><p class="lead">Sequrin is an early-stage South African healthcare technology company. It is developing tools to help medical schemes identify suspicious relationships and claims activity earlier, then investigate them with clearer context.</p></div></section>

<section class="section surface"><div class="container intro-grid"><div><p class="eyebrow">Why Sequrin exists</p><h2>Better questions need connected evidence.</h2></div><div class="prose-lg"><p>Healthcare funding is finite, while claims activity can be complex and fragmented. Sequrin starts from the view that connected context can help integrity teams ask better questions and use investigative capacity more carefully.</p><p>The purpose is not to label people or automate suspicion. It is to make relevant relationships easier for authorised investigators to examine.</p></div></div></section>

<section class="section"><div class="container stage-layout"><div class="section-heading"><p class="eyebrow">Where the company is now</p><h2>Developing and testing the foundations.</h2><p>Current work covers the product, technical architecture and governance model. The company is not presenting this site as evidence of production deployments, medical-scheme customers or proven outcomes.</p></div><div class="stage-list"><article><p class="stage-label">Product</p><h3>Working prototype</h3><p>Browser and desktop experiences are being developed around claims review and relationship context.</p></article><article><p class="stage-label">Evaluation</p><h3>Evidence-led next step</h3><p>The intended next step is a controlled, bounded evaluation with an appropriate organisation.</p></article><article><p class="stage-label">Direction</p><h3>Broader collaboration later</h3><p>Any future cross-organisation network would depend on validated product and governance foundations.</p></article></div></div></section>

<section class="section surface"><div class="container founder-card"><figure><img src="../assets/sbusiso-mdingi-founder.webp" width="640" height="640" loading="lazy" decoding="async" alt="Sbusiso Mdingi, founder of Sequrin."></figure><div><p class="eyebrow">Founder</p><h2>Sbusiso Mdingi</h2><p>Sbusiso Mdingi founded Sequrin and is building the company from South Africa around a focused question: how can connected claims context support earlier, more careful investigation?</p><p>The company remains early-stage. Its credibility should come from the clarity of the problem, the quality of the product and the evidence produced through responsible evaluation.</p></div></div></section>

<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">Contact</p><h2>Start with one claims-integrity question.</h2><p>For company, product, research or evaluation enquiries, contact Sequrin directly.</p></div><div class="actions"><a class="button primary" href="mailto:${contactEmail}">Contact Sequrin</a><a class="button secondary" href="../product/">Explore the product</a></div></div></section>`,
  },
  {
    route: "/policies/",
    output: "docs/policies/index.html",
    title: "Website notices | Sequrin",
    description: "Privacy, website-use and contact information for the public Sequrin website.",
    active: "",
    body: `<section class="page-hero compact-hero"><div class="container narrow"><p class="eyebrow">Website notices</p><h1>How this public website operates.</h1><p class="lead">These notices cover the public website at sequrin.com. They do not cover the authenticated Sequrin application or any future customer agreement.</p><p class="updated">Last updated 15 August 2026</p></div></section>

<section class="section"><div class="container notice-list">
  <article id="privacy"><p class="notice-index">01</p><div><h2>Privacy on this website</h2><p>The public website does not currently provide a contact form or use analytics, advertising trackers or cookies. It is hosted through GitHub Pages. Hosting and network providers may process routine technical request data needed to deliver and protect the service under their own terms and privacy notices.</p><p>You can read the <a class="text-link" href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">GitHub privacy statement</a>.</p></div></article>
  <article id="email"><p class="notice-index">02</p><div><h2>Email contact</h2><p>Contact is available at <a class="text-link" href="mailto:${contactEmail}">${contactEmail}</a> for business, partnership and website enquiries. Never send patient, member, claim, clinical, credential or other sensitive information to this address. The public inbox is not a channel for case submissions.</p></div></article>
  <article id="terms"><p class="notice-index">03</p><div><h2>Informational use</h2><p>This website describes an early-stage company and technology under development. Its content is general information, not clinical, legal, financial or claims-decision advice. It does not promise that a capability is available in production or create a customer relationship.</p></div></article>
  <article id="security"><p class="notice-index">04</p><div><h2>Security enquiries</h2><p>General security concerns about the public website can be sent to <a class="text-link" href="mailto:${contactEmail}?subject=Website%20security%20enquiry">${contactEmail}</a>. Do not include sensitive healthcare data, credentials or exploit details in an initial message, and do not test Sequrin systems without written authorisation.</p></div></article>
  <article id="application"><p class="notice-index">05</p><div><h2>External application sign in</h2><p>The Sign in link opens the separately hosted Sequrin application at app.sequrin.com. Access is intended for invited, authorised users and is subject to the application's authentication and access controls. The public website does not ask visitors to enter workspace credentials.</p></div></article>
</div></section>

<section class="section cta-section"><div class="container cta-grid"><div><p class="eyebrow">Questions</p><h2>Ask about the website or these notices.</h2></div><div class="actions"><a class="button primary" href="mailto:${contactEmail}?subject=Sequrin%20website%20question">Email Sequrin</a><a class="button secondary" href="../">Return home</a></div></div></section>`,
  },
  {
    route: "/login/",
    output: "docs/login/index.html",
    title: "Sign in | Sequrin",
    description: "Continue to the separately hosted Sequrin application sign-in.",
    active: "",
    noindex: true,
    body: `<section class="login-section"><div class="login-card"><p class="eyebrow">Application sign in</p><h1>Continue to the Sequrin application.</h1><p>The authenticated workspace is hosted separately at app.sequrin.com and is intended for invited, authorised users.</p><div class="actions"><a class="button primary" href="${applicationUrl}">Continue to sign in</a><a class="button secondary" href="../">Return to the website</a></div><p class="login-note">The public website does not collect or process workspace credentials.</p></div></section>`,
  },
];

function renderNotFound() {
  return `<!DOCTYPE html>
<html lang="en-ZA">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page not found | Sequrin</title>
  <meta name="description" content="The requested Sequrin page could not be found.">
  <meta name="robots" content="noindex,follow">
  <meta name="theme-color" content="#071019">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<main id="main" tabindex="-1" class="not-found">
  <div><p class="eyebrow">404</p><h1>Page not found.</h1><p>The address may be outdated, or the page may have moved as the Sequrin website was simplified.</p><div class="actions"><a class="button primary" href="/">Return home</a><a class="button secondary" href="mailto:${contactEmail}">Contact Sequrin</a></div></div>
</main>
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
}

const outputs = pages.map((page) => ({
  output: page.output,
  content: renderPage(page),
}));
outputs.push({ output: "docs/404.html", content: renderNotFound() });

let differences = 0;
for (const { output, content } of outputs) {
  const absolutePath = path.join(repositoryRoot, output);
  if (checkOnly) {
    const existing = await readFile(absolutePath, "utf8").catch(() => "");
    if (existing !== content) {
      console.error(`${output} is out of date. Run npm run build:static.`);
      differences += 1;
    }
    continue;
  }
  await mkdir(path.dirname(absolutePath), { recursive: true });
  await writeFile(absolutePath, content);
}

if (differences > 0) process.exitCode = 1;
if (!checkOnly) console.log(`Generated ${outputs.length} static HTML files.`);
