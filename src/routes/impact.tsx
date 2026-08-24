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
          "Claims-integrity teams can assess Sequrin through signal relevance, review effort, time to context and verified financial outcomes.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/impact/" }],
  }),
  component: ImpactPage,
});

const points = [
  ["Shorter path to context", "Measure how long an investigator takes to understand the relevant history and relationships after an item enters review."],
  ["Better use of review capacity", "Compare the relevance and noise of prioritised work with the team's existing queue, using investigator judgement rather than alert volume."],
  ["Traceable operational value", "Tie any claimed saving or recovery to a completed case record and the scheme's own verified financial treatment."],
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
              Measuring the operational value of claims-integrity work
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              A claims-integrity product should be judged by what changes in the work: whether useful
              context arrives sooner, whether scarce review time is better directed and whether any
              resulting financial effect can be verified. The standards for interpreting signals
              are set out in our <Link to="/governance" className="text-primary underline-offset-4 hover:underline">governance principles</Link>.
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
              <h2 className="mt-4 text-3xl md:text-4xl">Define the evaluation measures before testing.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The medical-schemes page sets out the inputs needed for a bounded comparison with
                current practice.
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
