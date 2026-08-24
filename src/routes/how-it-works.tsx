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
          "Sequrin's four-step claims-integrity workflow connects relevant data, detects unusual activity, supports investigation and records an accountable decision.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/how-it-works/" }],
  }),
  component: HowItWorksPage,
});

const steps = [
  ["01", "Connect the relevant data", "Bring the claims and reference data needed for the question into an analytical context scoped to the organisation doing the work."],
  ["02", "Detect unusual activity", "Apply rules, statistics, models and relationship analysis to prioritise activity for closer review, with the reason for each signal attached."],
  ["03", "Investigate in context", "Authorised investigators examine the claims, connected entities, timeline, relationships and supporting evidence without reconstructing the story from scattered alerts."],
  ["04", "Decide through the accountable process", "Record the investigative outcome and pass any consequential action through the organisation's authorised people, rules and review channels."],
];

const investigationRecord = [
  ["Source context", "The relevant claims inputs, identifiers and scope remain visible so an investigator can tell what the analysis covered."],
  ["Signal rationale", "Triggered rules, scores and connected activity travel with the lead instead of arriving as an unexplained alert."],
  ["Review history", "Evidence, notes and material case activity create a record that another authorised reviewer can follow later."],
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
              Sequrin's four-step claims-integrity workflow
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              This is the canonical path used across the product: connect the data needed for a
              defined question, detect activity that merits attention, investigate with the context
              attached, and route the outcome through the organisation's accountable process.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">The workflow</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Connect, detect, investigate and decide.
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
            <p className="label-mono">What carries forward</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Each handoff should add context, not discard it.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {investigationRecord.map(([title, body], index) => (
                <article key={title} className={index % 2 === 0 ? "bg-surface p-8" : "bg-background p-8"}>
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">For medical schemes</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Evaluation criteria for a working integrity team</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                A medical scheme can assess signal relevance, the usefulness of connected context,
                noise and the fit with its existing review practice.
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
