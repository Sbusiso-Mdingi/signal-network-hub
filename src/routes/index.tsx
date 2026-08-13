import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NetworkVisual } from "@/components/site/NetworkVisual";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sequrin | Healthcare Claims Integrity Network" },
      {
        name: "description",
        content:
          "Sequrin is building infrastructure to help healthcare claims-integrity teams detect signals, investigate connected activity and collaborate responsibly.",
      },
      { property: "og:title", content: "Sequrin | Healthcare Claims Integrity Network" },
      {
        property: "og:description",
        content:
          "Sequrin is building infrastructure to help healthcare claims-integrity teams detect signals, investigate connected activity and collaborate responsibly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sequrin.tech/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sequrin",
          alternateName: "Secure Integrity Network",
          url: "https://sequrin.tech",
          email: "sbusiso@sequrin.tech",
          founder: {
            "@type": "Person",
            name: "Sbusiso Mdingi",
          },
          description:
            "Sequrin is an early-stage healthcare claims-integrity technology product being developed for medical schemes and authorised claims-integrity teams.",
        }),
      },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  {
    id: "01",
    title: "Signal Detection",
    body: "Statistical models, analytical methods and deterministic rules can surface unusual activity for investigation. Each result is an investigative signal, never a verdict.",
  },
  {
    id: "02",
    title: "Network Intelligence",
    body: "Relationships between claims, providers, members, facilities and organisations can reveal patterns that individual records may hide.",
  },
  {
    id: "03",
    title: "Investigation Workspace",
    body: "Claims-integrity teams can examine signals, evidence and connected entities through a structured investigative workflow.",
  },
  {
    id: "04",
    title: "Controlled Collaboration",
    body: "Sequrin is being designed to support governed sharing of relevant integrity information between authorised participants while preserving accountability and organisational boundaries.",
  },
];

const stages = [
  {
    n: "1",
    title: "Connect",
    body: "Relevant claims and integrity data enter a governed analytical environment.",
  },
  {
    n: "2",
    title: "Detect",
    body: "Rules, statistical methods, models and network analysis identify patterns worth examining.",
  },
  {
    n: "3",
    title: "Investigate",
    body: "Authorised investigators review evidence, relationships and contextual information.",
  },
  {
    n: "4",
    title: "Collaborate",
    body: "Where appropriate, governed integrity information can support responsible cross-organisational awareness.",
  },
];

const principles = [
  {
    title: "Human oversight",
    body: "Analytical signals support investigators rather than replacing accountable human decision-making.",
  },
  {
    title: "Evidence before conclusions",
    body: "A suspicious pattern is something to investigate, not proof of misconduct.",
  },
  {
    title: "Governed access",
    body: "Sensitive claims-integrity information should only be available to appropriately authorised users.",
  },
  {
    title: "Auditability",
    body: "Important investigative and administrative actions should be traceable.",
  },
  {
    title: "Responsible collaboration",
    body: "Cross-organisational information sharing should occur through controlled, accountable processes.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="label-mono">Healthcare claims integrity</p>
              <h1 className="mt-5 text-4xl leading-[1.08] md:text-6xl">
                Claims integrity works better when patterns connect.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Sequrin is being built to help healthcare claims-integrity teams identify signals,
                investigate connected activity and understand relationships that isolated claims
                may not reveal.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#product"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Explore Sequrin
                </a>
                <Link
                  to="/login"
                  className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
                >
                  Sign In
                </Link>
              </div>
              <p className="label-mono mt-10 max-w-md leading-relaxed">
                For medical schemes and authorised claims-integrity teams
              </p>
            </div>
            <div className="border border-border bg-surface p-4">
              <NetworkVisual className="w-full" />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="label-mono">The problem</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                The signal is often bigger than a single claim.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Investigations frequently take place within fragmented datasets and organisational
                boundaries. A single claim may look entirely ordinary on its own.
              </p>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {[
                ["Claim", "Ordinary in isolation"],
                ["Provider", "Repeated referral pattern"],
                ["Member", "Recurring across providers"],
                ["Facility", "Shared submission window"],
                ["Timing", "Clustered, near-duplicate"],
                ["Behaviour", "Deviation from peer group"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-6">
                  <p className="label-mono">{k}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{v}</p>
                </div>
              ))}
              <div className="bg-background p-6 sm:col-span-2">
                <p className="text-sm leading-relaxed">
                  Seen together, these can reveal a pattern that warrants closer examination:{" "}
                  <span className="text-primary">a question worth investigating.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product */}
        <section id="product" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="label-mono">Product</p>
                <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
                  Four capabilities, built around investigation.
                </h2>
              </div>
            </div>
            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
              {capabilities.map((c) => (
                <article key={c.id} className="bg-background p-8 md:p-10">
                  <p className="label-mono">{c.id}</p>
                  <h3 className="mt-4 text-2xl">{c.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Human oversight</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              Built for investigation, not automated judgement.
            </h2>

            <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-4">
              {[
                ["Detection", "Models, rules and network analysis run over governed data."],
                ["Signal", "An output is a prompt to look closer, not a finding of fraud."],
                ["Investigation", "Evidence, relationships and context are examined by people."],
                ["Human decision", "Consequential outcomes remain with accountable processes."],
              ].map(([t, b], i) => (
                <li key={t} className="bg-background p-8">
                  <span className="label-mono text-primary">Step {i + 1}</span>
                  <h3 className="mt-3 text-xl">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-2">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Detection creates a signal. Investigation establishes context. Humans remain
                responsible for consequential decisions.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Suspicious does not mean fraudulent.",
                  "Analytical models help prioritise questions, not assign guilt.",
                  "Evidence and context must be investigated before conclusions.",
                  "Sequrin does not reject claims, withhold payment or impose sanctions.",
                ].map((t) => (
                  <li key={t} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">How Sequrin works</p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
              A governed path from data to decision.
            </h2>

            <div className="mt-14 space-y-px border-y border-border bg-border">
              {stages.map((s) => (
                <div
                  key={s.n}
                  className="grid gap-6 bg-background px-1 py-8 md:grid-cols-[80px_240px_1fr] md:items-baseline"
                >
                  <span className="font-display text-4xl text-primary">{s.n}</span>
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="max-w-2xl leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network vision */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="label-mono">Secure Integrity Network</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                From isolated signals to shared integrity intelligence.
              </h2>
              <div className="mt-6 space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Individual organisations naturally have visibility into their own claims
                  environment. Some potentially significant relationships, however, may only become
                  apparent when appropriately governed information can be understood across
                  organisational boundaries.
                </p>
                <p>
                  Sequrin is being built toward infrastructure that can support this broader
                  claims-integrity view. This is the concept behind the name:{" "}
                  <span className="text-foreground">Sequrin</span>, pronounced “Securing”, meaning{" "}
                  <span className="text-foreground">Secure Integrity Network</span>.
                </p>
                <p className="border-l border-primary pl-4 text-sm">
                  This is a development direction, not an operating national network. Current work
                  is focused on the analytical and investigative product.
                </p>
              </div>
            </div>
            <div className="border border-border bg-background p-4">
              <NetworkVisual className="w-full" />
            </div>
          </div>
        </section>

        {/* Intended users */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="label-mono">Intended users</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Who Sequrin is for.</h2>
            </div>
            <ul className="grid gap-px self-start border border-border bg-border sm:grid-cols-2">
              {[
                "Medical schemes",
                "Claims-integrity teams",
                "Forensic investigation teams",
                "Healthcare administrators",
                "Other authorised healthcare claims stakeholders",
              ].map((u) => (
                <li key={u} className="bg-background p-6 text-sm">
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Principles */}
        <section id="principles" className="scroll-mt-16 border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Product principles</p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
              Principles that shape the architecture.
            </h2>
            <dl className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
              {principles.map((p) => (
                <div key={p.title} className="bg-background p-8">
                  <dt className="text-xl">{p.title}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</dd>
                </div>
              ))}
              <div className="hidden bg-background p-8 md:block" aria-hidden="true" />
            </dl>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <h2 className="max-w-3xl text-3xl leading-tight md:text-5xl">
              Building stronger infrastructure for claims integrity.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Sequrin is an early-stage technology product being developed for the healthcare
              claims-integrity environment. For product, partnership, pilot or other business
              enquiries, get in touch directly.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Learn about Sequrin
              </Link>
              <a
                href="mailto:sbusiso@sequrin.tech"
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                Contact
              </a>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              <a
                href="mailto:sbusiso@sequrin.tech"
                className="text-foreground underline-offset-4 hover:underline"
              >
                sbusiso@sequrin.tech
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
