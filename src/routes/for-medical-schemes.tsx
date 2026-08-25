import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/for-medical-schemes")({
  head: () => ({
    meta: [
      { title: "For medical schemes | Sequrin" },
      {
        name: "description",
        content:
          "For medical schemes considering a bounded Sequrin evaluation: scope, data requirements, investigator involvement and useful measures.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/for-medical-schemes/" }],
  }),
  component: ForMedicalSchemesPage,
});

const outcomes = [
  ["See past the individual claim", "Bring providers, members, facilities, timing and related activity into the same view so investigators can see patterns a single record would miss."],
  ["Point time at what matters", "Prioritised signals can help limited investigative capacity move toward activity that actually deserves a closer look."],
  ["Keep the investigation together", "Signals, relationships, evidence and case history can stay in one operating view instead of being pieced together across disconnected tools."],
];

const evaluationDesign = [
  ["A bounded scope", "Choose one claims-integrity question and document the dataset, time period, participants and access conditions needed to examine it."],
  ["Investigator review", "Have the people who do the work assess which signals were relevant, which relationships added context and where the product created friction."],
  ["Comparable measures", "Agree a baseline before the evaluation, then compare relevance, noise, time to context and verified operational outcomes."],
];

function ForMedicalSchemesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">For medical schemes</p>
            <h1 className="mt-5 max-w-5xl text-4xl leading-[1.08] md:text-6xl">
              Evaluating Sequrin in a medical-scheme integrity team
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is designed to complement the claims-integrity work already under way in a
              medical scheme. A useful evaluation tests whether connected context improves a defined
              review task under the scheme's own operating and governance conditions.
            </p>
            <div className="mt-9 flex gap-3">
              <a href={PUBLIC_CONTACT_MAILTO} className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Discuss an evaluation</a>
              <Link to="/product" className="rounded-md border border-border-strong px-6 py-3 text-sm">Explore the product</Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="label-mono">Where Sequrin fits</p>
                <h2 className="mt-4 text-3xl md:text-5xl">An investigation layer alongside existing claims systems</h2>
              </div>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>Sequrin is not a replacement for core administration, payment or clinical systems. It is an investigation layer for authorised integrity teams that need to work across claims, relationships and evidence without losing the thread of a case.</p>
                <p>Roles and decision boundaries remain subject to the scheme's existing controls; <Link to="/governance" className="text-primary underline-offset-4 hover:underline">see our governance principles</Link>.</p>
              </div>
            </div>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {outcomes.map(([title, body]) => (
                <article key={title} className="bg-background p-7">
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Start small, on purpose</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Design an evaluation that can produce a credible answer.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              The evaluation should fit inside a defined operational boundary and be small enough to
              compare with current practice. Sequrin's product workflow is documented on the
              Approach page; the work here is to establish the conditions for testing it fairly.
            </p>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {evaluationDesign.map(([title, body]) => (
                <article key={title} className="bg-surface p-7">
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div>
              <p className="label-mono">What we'd need from you</p>
              <h2 className="mt-4 text-3xl md:text-5xl">Enough context to give the product a fair test.</h2>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li>A clear claims-integrity question or review objective</li>
              <li>Relevant data with stable identifiers for the entities in scope</li>
              <li>Investigators or subject-matter experts who can judge whether the output is genuinely useful</li>
              <li>Someone who owns privacy, access and governance boundaries</li>
              <li>Agreement on the evaluation measures before results are interpreted</li>
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">A practical next step</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Plan an initial evaluation discussion.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Bring a concrete review objective and a rough picture of the available data. We can
                use the conversation to identify what a fair, bounded test would require.
              </p>
            </div>
            <div className="flex gap-3">
              <a href={PUBLIC_CONTACT_MAILTO} className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Discuss an evaluation</a>
              <Link to="/how-it-works" className="rounded-md border border-border-strong px-6 py-3 text-sm">See the approach</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
