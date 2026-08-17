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
          "See how a medical scheme can test Sequrin against a real claims-integrity question without handing over claims decisions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/for-medical-schemes/" }],
  }),
  component: ForMedicalSchemesPage,
});

const outcomes = [
  ["See past the individual claim", "Bring providers, members, facilities, timing and related activity into the same view so investigators can see patterns a single record would miss."],
  ["Point time at what matters", "Prioritised signals can help limited investigative capacity move toward activity that actually deserves a closer look."],
  ["Keep the investigation together", "Signals, relationships, evidence and case history can stay in one operating view instead of being pieced together across disconnected tools."],
];

const steps = [
  ["01", "Define", "Agree on the claims-integrity question, the scope and what success would look like."],
  ["02", "Map", "Work out which claims and reference fields are actually needed to test the question properly."],
  ["03", "Test", "Run the bounded evaluation and let your investigators judge what is useful and what is noise."],
  ["04", "Decide", "Use what was measured, not what was promised, to decide whether anything further makes sense."],
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
              A connected view for your integrity team, without handing your decisions to a black box.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is built to sit around the claims-integrity work your team is already doing:
              spotting unusual activity, understanding what's connected to it, investigating
              efficiently and keeping the decisions that matter with the people accountable for them.
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
                <h2 className="mt-4 text-3xl md:text-5xl">We sit around your existing claims operation, not on top of it.</h2>
              </div>
              <div className="space-y-5 leading-relaxed text-muted-foreground">
                <p>Sequrin is not trying to replace your core administration, payment or clinical systems. Its job is to help your integrity team move from analytical attention to useful investigation context faster.</p>
                <p>Your scheme keeps the judgement calls. Sequrin helps surface and organise what may deserve attention.</p>
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
              This is not a transformation programme. It is a test.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              You do not need to redesign your claims operation around Sequrin to find out whether it
              helps. Start with one bounded question, an agreed dataset, real investigator review and
              clear criteria for what “worked” actually means.
            </p>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
              {steps.map(([number, title, body]) => (
                <article key={number} className="bg-surface p-6">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
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
              <h2 className="mt-4 text-3xl md:text-4xl">Bring one question worth testing.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The point of a pilot is to find out honestly whether Sequrin adds useful investigative
                value inside your scheme. It should be entirely possible for the answer to be no.
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
