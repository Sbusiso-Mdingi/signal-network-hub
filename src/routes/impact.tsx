import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Why claims integrity matters | Sequrin" },
      {
        name: "description",
        content:
          "See why Sequrin is focused on helping claims-integrity teams use investigative time better and protect finite healthcare resources.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/impact/" }],
  }),
  component: ImpactPage,
});

const points = [
  ["See the pattern sooner", "Connected context can reveal recurrence, timing and shared relationships that are easy to miss when every claim is reviewed on its own."],
  ["Spend investigative time better", "Investigators only have so many hours. Better signals should help them spend that time on activity that genuinely deserves a closer look."],
  ["Keep the reasoning together", "A structured record of signals, relationships, evidence and case activity makes it easier to understand how an investigation reached its outcome."],
];

function ImpactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Why it matters</p>
            <h1 className="mt-5 max-w-5xl text-4xl leading-[1.08] md:text-6xl">
              The point is not to flag more claims. It is to protect more of what already funds care.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin only matters if better context helps integrity teams use their time better and,
              where the evidence supports it, prevent or recover avoidable leakage. The software is
              one part of that chain. The investigation and the outcome still have to stand on their
              own.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-px border-x border-border bg-border md:grid-cols-3">
            {points.map(([title, body]) => (
              <article key={title} className="bg-background p-8 md:p-10">
                <h2 className="text-2xl">{title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div>
              <p className="label-mono">Measure, then claim</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                The financial result comes at the end of the chain.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                First you have to surface something useful, investigate it properly and reach an
                outcome you can defend. Only then does it make sense to ask what financial effect
                that work actually had.
              </p>
              <p>
                For an evaluation, that means measuring things such as signal relevance, false
                positives, time to useful context, investigator effort and any recovery or avoided
                leakage the scheme can actually verify.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">Start with evidence</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Pick one result you can actually check.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A useful first evaluation starts with a clear question and baseline, then lets the
                evidence decide whether Sequrin helped.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/for-medical-schemes" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Evaluation approach</Link>
              <a href={PUBLIC_CONTACT_MAILTO} className="rounded-md border border-border-strong px-6 py-3 text-sm">Contact Sequrin</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
