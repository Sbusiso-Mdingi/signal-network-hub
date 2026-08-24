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
          "Sequrin is a South African healthcare claims-integrity platform combining detection, network intelligence and investigation workflow for medical schemes.",
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

const flow = [
  ["01", "Connect", "Bring the claims and reference data you actually need into one usable context."],
  ["02", "Detect", "Use rules, statistics, models and relationships to find activity worth a closer look."],
  ["03", "Investigate", "Review the evidence, linked entities and history behind the signal."],
  ["04", "Decide", "The call stays with the authorised people and processes responsible for it."],
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
                Sequrin gives medical schemes and claims-integrity teams a connected view of claims,
                providers, members, facilities, timing and related activity so an investigation starts
                with more than one record in isolation.
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
                <p>Sequrin pulls that context into view early enough for an investigator to ask a better question.</p>
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
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">From something worth noticing to an investigation you can stand behind.</h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Analysis helps decide where to look. Investigators work out what the evidence means, and the organisation keeps the decision.</p>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
              {flow.map(([number, title, body]) => (
                <article key={number} className="bg-surface p-6">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
            <Link to="/how-it-works" className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline">Read the full approach →</Link>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Product workspace</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">Built around the work between a signal and a decision.</h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">Sequrin brings claims intelligence, connected relationships and investigation context into a governed workspace for claims-integrity teams.</p>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              <article className="bg-background p-7"><p className="label-mono">Claims intelligence</p><h3 className="mt-3 text-xl">Surface activity worth reviewing</h3><p className="mt-3 text-sm text-muted-foreground">Rules, statistics and models help identify unusual activity and keep the reasons behind a signal close to the claim.</p></article>
              <article className="bg-background p-7"><p className="label-mono">Connected context</p><h3 className="mt-3 text-xl">See the network around the claim</h3><p className="mt-3 text-sm text-muted-foreground">Providers, members, facilities, timing and related claims can be viewed together instead of as isolated records.</p></article>
              <article className="bg-background p-7"><p className="label-mono">Investigation workflow</p><h3 className="mt-3 text-xl">Carry context into the case</h3><p className="mt-3 text-sm text-muted-foreground">Signals, evidence, relationships, notes and case history stay connected as authorised investigators work through a review.</p></article>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div><p className="label-mono">Accountability</p><h2 className="mt-4 text-3xl md:text-5xl">Signals are where the investigation starts.</h2></div>
            <div><p className="leading-relaxed text-muted-foreground">Sequrin can point investigators toward unusual activity and give them better context. It does not make the consequential call for the medical scheme.</p><Link to="/governance" className="mt-6 inline-flex text-sm text-primary underline-offset-4 hover:underline">Read the governance principles →</Link></div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div><p className="label-mono">Start with a real question</p><h2 className="mt-4 text-3xl md:text-4xl">Bring us one claims-integrity problem worth evaluating.</h2><p className="mt-4 max-w-2xl text-muted-foreground">A useful first conversation is about the question, the data you have and what would count as evidence that Sequrin helped.</p></div>
            <div className="flex gap-3"><a href="mailto:info@sequrin.com?subject=Sequrin%20evaluation%20discussion" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Discuss an evaluation</a><Link to="/for-medical-schemes" className="rounded-md border border-border-strong px-6 py-3 text-sm">For medical schemes</Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
