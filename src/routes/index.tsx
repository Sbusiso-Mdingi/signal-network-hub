import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NetworkVisual } from "@/components/site/NetworkVisual";
import { APP_SIGN_IN_URL, PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sequrin | Healthcare Claims Integrity" },
      {
        name: "description",
        content:
          "Sequrin is a healthcare claims-integrity platform designed to help medical schemes and authorised integrity teams connect analytical signals, relationships and investigative context.",
      },
      { property: "og:title", content: "Sequrin | Healthcare Claims Integrity" },
      {
        property: "og:description",
        content:
          "Connect analytical signals, relationships and investigative context so suspicious activity can be examined as a pattern, not just a collection of isolated claims.",
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
          email: PUBLIC_CONTACT_EMAIL,
          founder: {
            "@type": "Person",
            name: "Sbusiso Mdingi",
          },
          description:
            "Sequrin is a healthcare claims-integrity technology platform designed for medical schemes and authorised claims-integrity teams.",
        }),
      },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  {
    id: "01",
    title: "Signal detection",
    body: "Statistical methods, models and deterministic rules surface unusual activity as investigative signals, not verdicts.",
  },
  {
    id: "02",
    title: "Network intelligence",
    body: "Relationships between claims, providers, members, facilities and events help reveal patterns that individual records may hide.",
  },
  {
    id: "03",
    title: "Investigation workspace",
    body: "Authorised teams can examine evidence, connected entities and investigative context through a structured workflow.",
  },
  {
    id: "04",
    title: "Governance and access",
    body: "Roles, permissions, organisational boundaries and auditable administration keep sensitive integrity work controlled and accountable.",
  },
];

const impactPoints = [
  {
    title: "Protect finite healthcare resources",
    body: "Avoidable claims leakage places pressure on the same pools that fund member care. Better integrity capability helps schemes protect those resources.",
  },
  {
    title: "Focus investigative capacity",
    body: "Connected context can help scarce investigative time move toward patterns that warrant closer attention instead of treating every record in isolation.",
  },
  {
    title: "Strengthen local capability",
    body: "A stronger claims-integrity operating layer can support more specialised analytical, investigative and technical capability across healthcare.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <SiteHeader />
      <main>
        <section className="relative border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="label-mono">Healthcare claims integrity</p>
              <h1 className="mt-5 text-4xl leading-[1.08] md:text-6xl">
                Claims integrity works better when patterns connect.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Sequrin is a healthcare claims-integrity platform designed for medical schemes and
                authorised integrity teams. It connects analytical signals, relationships and
                investigative context so suspicious activity can be examined as a pattern, not just
                a collection of isolated claims.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/product"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Explore the product
                </Link>
                <a
                  href={APP_SIGN_IN_URL}
                  className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
                >
                  Sign In
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>Signals, not verdicts</span>
                <span aria-hidden="true">•</span>
                <span>Human-led investigation</span>
                <span aria-hidden="true">•</span>
                <span>Governed access</span>
              </div>
            </div>
            <div className="border border-border bg-surface p-4">
              <NetworkVisual className="w-full" />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label-mono">The problem</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                A claim can look ordinary on its own.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Risk often emerges through recurrence, timing, shared entities and network
                relationships. Sequrin helps investigators move from isolated records to connected
                context without turning an analytical signal into a conclusion.
              </p>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {[
                ["Claim", "Looks routine in isolation"],
                ["Provider", "Appears across related activity"],
                ["Member", "Connects multiple events"],
                ["Facility", "Shares repeated relationships"],
                ["Timing", "Reveals clustering or recurrence"],
                ["Network", "Turns separate records into context"],
              ].map(([key, value]) => (
                <div key={key} className="bg-background p-6">
                  <p className="label-mono">{key}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{value}</p>
                </div>
              ))}
              <div className="bg-background p-6 sm:col-span-2">
                <p className="text-sm leading-relaxed">
                  The value is not declaring misconduct. It is seeing the broader pattern early
                  enough to ask a better investigative question.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="label-mono">The product</p>
                <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                  One operating layer for connected claims-integrity work.
                </h2>
              </div>
              <Link
                to="/product"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Explore the product →
              </Link>
            </div>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
              {capabilities.map((capability) => (
                <article key={capability.id} className="bg-background p-8 md:p-10">
                  <p className="label-mono">{capability.id}</p>
                  <h3 className="mt-4 text-2xl">{capability.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{capability.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-4">
              {[
                ["01", "Connect", "Bring relevant claims and integrity data into a governed analytical context."],
                ["02", "Detect", "Surface patterns that deserve attention through rules, models and network analysis."],
                ["03", "Investigate", "Review evidence, relationships and context through an authorised workflow."],
                ["04", "Decide", "Keep consequential decisions with accountable human processes."],
              ].map(([number, title, body]) => (
                <div key={number} className="bg-surface p-6">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
            <Link
              to="/how-it-works"
              className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
            >
              See how Sequrin works →
            </Link>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Why it matters</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              Better integrity capability protects more than a claims process.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Claims leakage, fragmented investigation and limited analytical capacity all compete
              with finite healthcare resources. Sequrin is designed to strengthen the operating
              capability behind claims integrity.
            </p>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
              {impactPoints.map((point) => (
                <article key={point.title} className="bg-background p-8">
                  <h3 className="text-2xl">{point.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Approximately 9 million South Africans depend on medical schemes for access to private healthcare (CMS, 2023/24) — finite pools that stronger integrity processes are designed to help protect.
            </p>
            <Link
              to="/impact"
              className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
            >
              Explore the wider impact →
            </Link>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label-mono">Accountable by design</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">Signals are not verdicts.</h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Sequrin helps people investigate. It does not replace the judgement, evidence or
                accountability required for consequential claims decisions.
              </p>
              <Link
                to="/governance"
                className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
              >
                Read about governance →
              </Link>
            </div>
            <div className="border border-border bg-surface p-8 md:p-10">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Detection creates a signal. Investigation establishes context. Humans remain
                responsible for consequential decisions.
              </p>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                {[
                  "Suspicious activity is a reason to investigate, not a finding of fraud.",
                  "Sequrin does not reject claims, withhold payment or impose sanctions.",
                  "Sensitive integrity work remains subject to governed access and organisational boundaries.",
                  "Important investigative and administrative actions should remain auditable.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="label-mono">Secure Integrity Network</p>
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
                The long-term direction behind the name Sequrin.
              </h2>
              <div className="mt-6 max-w-2xl space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Today, Sequrin is focused on helping authorised teams understand claims-integrity
                  activity within a governed operating environment.
                </p>
                <p>
                  The broader vision is a Secure Integrity Network: infrastructure for responsible,
                  governed integrity intelligence across organisational boundaries where that is
                  appropriate and permitted.
                </p>
                <p className="border-l border-primary pl-4 text-sm">
                  This is a development direction, not an operating national network or shared
                  blacklist.
                </p>
              </div>
              <Link
                to="/network"
                className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
              >
                Explore the network vision →
              </Link>
            </div>
            <div className="grid gap-px border border-border bg-border">
              <div className="bg-background p-8">
                <p className="label-mono">Sequr</p>
                <p className="mt-3 font-display text-3xl">Secure</p>
              </div>
              <div className="bg-background p-8">
                <p className="label-mono">IN</p>
                <p className="mt-3 font-display text-3xl">Integrity Network</p>
              </div>
              <div className="bg-background p-8">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sequrin is pronounced “Securing”. The name reflects the idea of protecting
                  healthcare integrity through connected, governed intelligence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">For medical schemes</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                See where Sequrin fits into your claims-integrity operation.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Explore the product, understand the operating model, or get in touch to discuss a
                controlled introduction using appropriate data and governance boundaries.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                <a
                  href={PUBLIC_CONTACT_MAILTO}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {PUBLIC_CONTACT_EMAIL}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                to="/for-medical-schemes"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                For medical schemes
              </Link>
              <a
                href={PUBLIC_CONTACT_MAILTO}
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                Contact Sequrin
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
