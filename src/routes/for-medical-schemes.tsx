import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/for-medical-schemes")({
  head: () => ({
    meta: [
      { title: "For Medical Schemes | Sequrin" },
      {
        name: "description",
        content:
          "See how Sequrin can fit into a medical scheme's claims-integrity operation through connected analysis, structured investigation and governed decision boundaries.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/for-medical-schemes" }],
  }),
  component: ForMedicalSchemesPage,
});

const schemeOutcomes = [
  {
    title: "See beyond the individual claim",
    body: "Bring claim activity into relationship context across providers, members, facilities, timing and other relevant entities so investigators can examine patterns that isolated records may hide.",
  },
  {
    title: "Use investigative capacity where it matters",
    body: "Prioritised signals can help claims-integrity teams focus scarce review capacity on activity that deserves closer examination instead of treating every unusual record the same way.",
  },
  {
    title: "Keep scheme judgement in control",
    body: "Sequrin does not turn detection into an automated fraud verdict, payment hold or sanction. Evidence, context and accountable scheme processes remain central to consequential decisions.",
  },
  {
    title: "Create a traceable integrity workflow",
    body: "Signals, evidence, relationships and investigation history can be brought into one structured operating layer so important work is easier to review, explain and govern.",
  },
];

const evaluationSteps = [
  ["01", "Define the question", "Agree the claims-integrity problem, scope, data boundaries and evaluation criteria before analysis begins."],
  ["02", "Map the data", "Identify the claims, provider, member, facility and reference fields needed to build a reliable analytical context."],
  ["03", "Run a bounded evaluation", "Use an agreed dataset and review window to assess signal relevance, relationship context and investigator usability."],
  ["04", "Validate with investigators", "Have scheme subject-matter experts examine surfaced activity and distinguish useful leads from noise."],
  ["05", "Decide the next scope", "Use measured evidence to determine whether deeper integration, broader coverage or no further rollout is justified."],
];

const measures = [
  ["Investigative relevance", "How often surfaced activity gives investigators a useful reason to look closer."],
  ["Review efficiency", "Whether investigators can reach useful context faster or with fewer disconnected systems and manual steps."],
  ["Context quality", "Whether relationships, chronology and supporting evidence make analytical output easier to interpret."],
  ["Confirmed financial effect", "Any verified value associated with scheme-governed outcomes after investigation, measured from evidence rather than assumed model scores."],
];

function ForMedicalSchemesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">For medical schemes</p>
            <h1 className="mt-5 max-w-5xl text-4xl leading-[1.08] md:text-6xl">
              Give claims-integrity teams a connected investigative layer without handing decisions to a black box.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is designed to sit around the work medical schemes already need to do: identify unusual activity, understand the relationships around it, investigate efficiently and keep consequential decisions with accountable people and processes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={PUBLIC_CONTACT_MAILTO}
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Discuss a controlled evaluation
              </a>
              <Link
                to="/product"
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                Explore the product
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono text-primary">Where Sequrin fits</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                An integrity layer around your existing claims operation.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sequrin is not positioned as a replacement for a medical scheme's core administration, payment or clinical systems. Its role is to help claims-integrity teams connect analytical attention to structured investigation while preserving the scheme's own operational authority.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              <article className="bg-background p-7 md:p-8">
                <p className="label-mono text-muted-foreground">Existing environment</p>
                <h3 className="mt-4 text-2xl">Claims and reference data</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Claims, provider, member, facility and related integrity data remain part of the scheme's operating environment and governed data estate.
                </p>
              </article>
              <article className="bg-background p-7 md:p-8">
                <p className="label-mono text-primary">Sequrin</p>
                <h3 className="mt-4 text-2xl">Detection and investigation</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Rules, statistical methods and network analysis surface signals, then investigators review connected context inside a structured workspace.
                </p>
              </article>
              <article className="bg-background p-7 md:p-8">
                <p className="label-mono text-muted-foreground">Scheme authority</p>
                <h3 className="mt-4 text-2xl">Consequential decisions</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Claim outcomes, sanctions, recoveries and other consequential actions remain with authorised scheme processes, not the detection layer.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">What a scheme gets</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Better investigative context without weakening accountability.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              {schemeOutcomes.map((item) => (
                <article key={item.title} className="bg-background p-7 md:p-8">
                  <h3 className="text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.82fr_1.18fr] md:py-24">
            <div>
              <p className="label-mono text-primary">A controlled first evaluation</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Start with evidence, not a transformation programme.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                A sensible first engagement does not require a scheme to redesign its claims operation around Sequrin. It can begin with a bounded question, an agreed dataset, real investigator review and explicit success criteria.
              </p>
              <p className="mt-6 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                The purpose of an evaluation is to learn whether Sequrin adds useful investigative value in the scheme's own context. It should be possible to conclude that it does not.
              </p>
            </div>

            <div className="border-y border-border">
              {evaluationSteps.map(([number, title, body]) => (
                <article key={number} className="grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[70px_180px_1fr] sm:items-start">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="text-lg">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="label-mono">What we would need from a scheme</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Enough context to test the product properly.</h2>
                <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li className="border-l border-border-strong pl-4">A clearly defined claims-integrity question or review objective.</li>
                  <li className="border-l border-border-strong pl-4">Relevant claims and reference data with stable identifiers for the entities being analysed.</li>
                  <li className="border-l border-border-strong pl-4">Claims-integrity or forensic subject-matter experts who can judge whether surfaced activity is genuinely useful.</li>
                  <li className="border-l border-border-strong pl-4">A governance owner who can define access, data-handling and decision boundaries.</li>
                  <li className="border-l border-border-strong pl-4">Agreed evaluation measures before outcomes are interpreted.</li>
                </ul>
              </div>

              <div className="border border-border-strong bg-surface p-7 md:p-9">
                <p className="label-mono text-primary">What Sequrin does not need</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Control of your claims decisions.</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Analytical access should not require surrendering adjudication authority. Sequrin can surface investigative signals and connected context without becoming the system that decides whether a member, provider or claim is sanctioned.
                </p>
                <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
                  <li>• No automatic claim rejection from a detection result.</li>
                  <li>• No automatic payment withholding from a detection result.</li>
                  <li>• No automatic fraud finding or sanction.</li>
                  <li>• No automatic publication into a shared network.</li>
                </ul>
                <Link to="/governance" className="mt-7 inline-flex text-sm text-primary underline-offset-4 hover:underline">
                  Review the governance model →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">How value should be measured</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              A scheme should be able to ask whether Sequrin actually improved the integrity operation.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              {measures.map(([title, body]) => (
                <article key={title} className="bg-background p-7 md:p-8">
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-4xl border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
              Sequrin should not be sold to a scheme on an unsupported fraud-savings percentage or a promise that contributions will fall. Quantitative claims should follow measured outcomes, defensible baselines and the scheme's own validated evidence.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">Next step</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                Bring one claims-integrity question. We can start there.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                The most useful first conversation is not about buying a national platform. It is about whether a bounded Sequrin evaluation can answer a real investigative question inside your scheme's governance boundaries.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                <a href={PUBLIC_CONTACT_MAILTO} className="text-foreground underline-offset-4 hover:underline">info@sequrin.tech</a>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={PUBLIC_CONTACT_MAILTO}
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Discuss an evaluation
              </a>
              <Link
                to="/how-it-works"
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                How Sequrin works
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
