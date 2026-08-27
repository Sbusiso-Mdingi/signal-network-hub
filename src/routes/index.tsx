import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HeroVideo } from "@/components/site/HeroVideo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sequrin | Healthcare claims integrity" },
      {
        name: "description",
        content:
          "Sequrin is a South African healthcare claims-integrity company building connected investigation tools for medical schemes.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/" }],
  }),
  component: HomePage,
});

const capabilities = [
  ["01", "Find what stands out", "Rules, statistics and models help surface activity that is actually worth a second look."],
  ["02", "See what connects", "Network analysis shows how claims, members, providers, facilities and events relate to one another."],
  ["03", "Investigate in context", "Bring the signal, evidence, relationships and case history together instead of rebuilding the story across separate tools."],
];

const startupProgrammes = [
  {
    name: "AWS Activate",
    label: "Activate",
    href: "https://aws.amazon.com/activate/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    logoClassName: "h-9 w-12 object-contain",
  },
  {
    name: "Sentry Startup Program",
    label: "Sentry",
    href: "https://sentry.io/for/startups/",
    logo: "https://cdn.simpleicons.org/sentry/362D59",
    logoClassName: "h-8 w-8",
  },
  {
    name: "HubSpot for Startups",
    label: "HubSpot",
    href: "https://www.hubspot.com/startups",
    logo: "https://cdn.simpleicons.org/hubspot/FF7A59",
    logoClassName: "h-8 w-8",
  },
  {
    name: "Customer.io Startup Program",
    label: "Customer.io",
    href: "https://customer.io/solutions/startups",
    logo: "https://customer.io/favicon.svg",
    logoClassName: "h-9 w-9 rounded-md",
  },
  {
    name: "Neo4j Startup Program",
    label: "Neo4j",
    href: "https://neo4j.com/startup-program/",
    logo: "https://cdn.simpleicons.org/neo4j/4581C3",
    logoClassName: "h-8 w-8",
  },
  {
    name: "Amplitude Scholarship Program",
    label: "Amplitude",
    href: "https://amplitude.com/startups",
    logo: "https://framerusercontent.com/images/vqninpQZmsdOKgDIl5C4C1e3Q.svg",
    logoClassName: "h-8 w-8",
  },
  {
    name: "Retool for Startups",
    label: "Retool",
    href: "https://retool.com/startups",
    logo: "https://dqpcjghenxt8u.cloudfront.net/images/sanity/retool-favicon-light-128x128.svg",
    logoClassName: "h-8 w-8",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="label-mono">Healthcare claims integrity</p>
              <h1 className="mt-5 text-4xl leading-[1.08] md:text-6xl">
                A claim can look fine on its own. The pattern around it might not.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Sequrin gives medical schemes and claims-integrity teams a connected view across
                providers, members, facilities, timing and related activity, so an investigation
                can begin with the surrounding context instead of one record in isolation.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="mailto:info@sequrin.com?subject=Sequrin%20evaluation%20discussion" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Discuss an evaluation</a>
                <Link to="/product" className="rounded-md border border-border-strong px-6 py-3 text-sm">Explore the product</Link>
              </div>
            </div>
            <HeroVideo className="w-full" />
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="label-mono">The problem</p>
                <h2 className="mt-4 text-3xl md:text-5xl">Risk usually is not sitting neatly inside one claim.</h2>
              </div>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>A claim can look completely ordinary until you notice the same provider, timing, member or facility appearing somewhere else. The pattern is often in the relationships between records.</p>
                <p>Sequrin is being built to pull that context into view early enough for an investigator to ask a better question.</p>
              </div>
            </div>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {capabilities.map(([number, title, body]) => (
                <article key={number} className="bg-background p-8">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="mt-4 text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">The approach</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">A consistent path from connected data to accountable review.</h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Sequrin follows one governed workflow for connecting relevant data, detecting unusual activity, investigating it in context and recording the organisation's decision. The complete workflow lives on the Approach page.</p>
            <Link to="/how-it-works" className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline">Read the four-step approach →</Link>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Product maturity</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">A working product with a controlled path to scale.</h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Sequrin has active browser and desktop investigation experiences. The next milestone is to measure their usefulness with claims-integrity teams under defined operating and governance conditions.</p>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              <article className="bg-background p-7"><p className="label-mono">Current</p><h3 className="mt-3 text-xl">Connected investigation product</h3><p className="mt-3 text-sm text-muted-foreground">Browser and desktop interfaces bring claims review, signal rationale and relationship context into one workspace.</p></article>
              <article className="bg-background p-7"><p className="label-mono">Evaluation</p><h3 className="mt-3 text-xl">Scheme-led testing</h3><p className="mt-3 text-sm text-muted-foreground">A bounded evaluation can compare signal relevance, time to context and workflow fit with current practice.</p></article>
              <article className="bg-background p-7"><p className="label-mono">Direction</p><h3 className="mt-3 text-xl">Governed network intelligence</h3><p className="mt-3 text-sm text-muted-foreground">Cross-organisation collaboration remains a longer-term direction built on validated product and governance foundations.</p></article>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
            <h2 className="text-2xl md:text-3xl">Startup programmes</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
              {startupProgrammes.map((programme) => (
                <a
                  key={programme.name}
                  href={programme.href}
                  aria-label={`${programme.name}, official programme page`}
                  rel="external"
                  className="flex min-h-24 items-center justify-center gap-2.5 rounded-xl border border-slate-300 bg-slate-50 px-4 py-5 text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white"
                >
                  <img
                    src={programme.logo}
                    alt={`${programme.name} logo`}
                    className={programme.logoClassName}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <span aria-hidden="true" className="text-sm font-semibold tracking-tight">
                    {programme.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div><p className="label-mono">Accountability</p><h2 className="mt-4 text-3xl md:text-5xl">Governance principles for sensitive claims work.</h2></div>
            <div><p className="leading-relaxed text-muted-foreground">Decision boundaries, access controls and reviewability are covered in one place.</p><Link to="/governance" className="mt-6 inline-flex text-sm text-primary underline-offset-4 hover:underline">Read the governance principles →</Link></div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div><p className="label-mono">Evaluation conversations</p><h2 className="mt-4 text-3xl md:text-4xl">Discuss a bounded claims-integrity evaluation.</h2><p className="mt-4 max-w-2xl text-muted-foreground">We can start with the question your team needs to answer, the data available and the evidence you would use to judge whether the product helped.</p></div>
            <div className="flex gap-3"><a href="mailto:info@sequrin.com?subject=Sequrin%20evaluation%20discussion" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Discuss an evaluation</a><Link to="/for-medical-schemes" className="rounded-md border border-border-strong px-6 py-3 text-sm">For medical schemes</Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
