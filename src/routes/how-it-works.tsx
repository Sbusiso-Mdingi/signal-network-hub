import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "Approach to claims integrity | Sequrin" },
      {
        name: "description",
        content:
          "See how Sequrin moves from claims data to useful investigative context while keeping consequential decisions with accountable people.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/how-it-works/" }],
  }),
  component: HowItWorksPage,
});

const steps = [
  ["01", "Build a reliable picture", "Bring the claims and reference data you actually need into an analytical context scoped to the organisation doing the work."],
  ["02", "Look for what stands out", "Rules, statistics, models and relationship analysis surface activity worth a second look. Different methods can contribute evidence without becoming the decision-maker."],
  ["03", "Investigate with the context attached", "Authorised investigators review the claims, connected entities, timeline, relationships and supporting evidence instead of reconstructing the story from scattered alerts."],
  ["04", "The call stays with people", "Whatever the investigation concludes goes through the organisation's own accountable process. Sequrin can support the work, but it does not make the consequential decision."],
];

function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Approach</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              A signal should start an investigation, not end one.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              We keep analytical detection and consequential claims decisions apart on purpose.
              Data becomes context, analysis becomes a lead, investigators build the evidence and
              the people accountable for the outcome are the ones who decide it.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">The workflow</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Four steps, with a hard line between detection and decision.
            </h2>
            <div className="mt-12 border-y border-border">
              {steps.map(([number, title, body]) => (
                <div key={number} className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_280px_1fr]">
                  <span className="font-display text-3xl text-primary">{number}</span>
                  <h3 className="text-xl">{title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div>
              <p className="label-mono">Start with evidence</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                One bounded question is enough to learn something useful.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                A sensible evaluation starts with a specific claims-integrity question, the data
                needed to test it and a clear view of who can access the work.
              </p>
              <p>
                Then measure what investigators actually care about: whether the signal was relevant,
                whether the connected context helped, how much noise came with it and whether the
                workflow made the review easier.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Where the line sits</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Analytics can point at something. They cannot decide what it means.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              <article className="bg-surface p-8">
                <p className="label-mono">Sequrin can help with</p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>Finding unusual activity worth a closer look</li>
                  <li>Showing relevant relationships across claims and entities</li>
                  <li>Keeping evidence, context and case history together</li>
                  <li>Giving investigators a clearer starting point</li>
                </ul>
              </article>
              <article className="bg-background p-8">
                <p className="label-mono">A person still has to</p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>Work out what the activity actually means</li>
                  <li>Weigh and verify the evidence</li>
                  <li>Reach and record an investigative conclusion</li>
                  <li>Take any consequential action through the authorised process</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">For medical schemes</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Test it against the way your team actually works.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The question is not whether the demo looks good. It is whether Sequrin gives your
                investigators better context and a more useful way to work.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/for-medical-schemes" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Evaluation approach</Link>
              <Link to="/product" className="rounded-md border border-border-strong px-6 py-3 text-sm">Explore the product</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
