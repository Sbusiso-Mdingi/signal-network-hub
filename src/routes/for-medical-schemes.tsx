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
    title: "See past the individual claim",
    body: "Claim activity gets pulled into relationship context, across providers, members, facilities, timing, and other relevant entities, so investigators can spot patterns that a single record would never show them.",
  },
  {
    title: "Point your investigators at what matters",
    body: "Prioritised signals help your claims-integrity team spend limited review capacity on activity that actually deserves a closer look, instead of treating every flagged record the same way.",
  },
  {
    title: "You keep the judgement calls",
    body: "Sequrin doesn't turn a detection score into an automatic fraud finding, a payment hold, or a sanction. Evidence, context, and your team's own process stay central to any decision that actually matters.",
  },
  {
    title: "One place to see the whole investigation",
    body: "Signals, evidence, relationships, and case history all live in one workspace, so the important work is easier to review, explain, and stand behind later.",
  },
];

const evaluationSteps = [
  [
    "01",
    "Define the question",
    "Agree on the claims-integrity problem, the scope, the data boundaries, and how success gets measured, before any analysis starts.",
  ],
  [
    "02",
    "Map the data",
    "Work out which claims, provider, member, facility and reference fields we'd actually need for a reliable analysis.",
  ],
  [
    "03",
    "Run a bounded evaluation",
    "Use an agreed dataset and review window to test whether the signals, relationships and context are actually useful to your investigators.",
  ],
  [
    "04",
    "Validate with your investigators",
    "Have your own subject-matter experts look at what got surfaced and tell us honestly what's a real lead and what's just noise.",
  ],
  [
    "05",
    "Decide what's next",
    "Use what we've measured, not what we've promised, to decide whether deeper integration, wider coverage, or nothing further makes sense.",
  ],
];

const measures = [
  [
    "Investigative relevance",
    "How often what we surface actually gives your investigators a real reason to look closer.",
  ],
  [
    "Review efficiency",
    "Whether investigators can get to useful context faster, with fewer disconnected systems and less manual digging.",
  ],
  [
    "Context quality",
    "Whether the relationships, timeline and supporting evidence actually make the analysis easier to interpret.",
  ],
  [
    "Confirmed financial effect",
    "Any value your scheme has verified after investigation, measured from evidence, not assumed from a model score.",
  ],
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
              A connected view for your integrity team, without handing your decisions to a black
              box.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is built to sit around the work your claims-integrity team is already doing:
              spotting unusual activity, understanding what's connected to it, investigating
              efficiently, and keeping the decisions that matter with the people accountable for
              them.
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
                We sit around your existing claims operation, not on top of it.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                We're not trying to replace your core administration, payment, or clinical systems.
                Our job is to help your integrity team connect analytical attention to structured
                investigation, while your scheme keeps operational authority. Around 9 million
                people rely on medical schemes across the sector (CMS, 2023/24), so even a small
                improvement to how claims integrity works can add up fast at that scale.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              <article className="bg-background p-7 md:p-8">
                <p className="label-mono text-muted-foreground">Stays with you</p>
                <h3 className="mt-4 text-2xl">Claims and reference data</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Claims, provider, member, facility, and related integrity data stay inside your
                  own operating environment and governed data estate.
                </p>
              </article>
              <article className="bg-background p-7 md:p-8">
                <p className="label-mono text-primary">What we do</p>
                <h3 className="mt-4 text-2xl">Detection and investigation</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Rules, statistics and network analysis surface signals, then investigators review
                  connected context inside one structured workspace.
                </p>
              </article>
              <article className="bg-background p-7 md:p-8">
                <p className="label-mono text-muted-foreground">Stays your call</p>
                <h3 className="mt-4 text-2xl">Consequential decisions</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Claim outcomes, sanctions, recoveries, and every other consequential action stay
                  with your own authorised process, not with our detection layer.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">What you actually get</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Better context for your investigators, without giving up accountability.
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
              <p className="label-mono text-primary">Start small, on purpose</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                This isn't a transformation programme. It's a test.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                You don't need to redesign your claims operation around Sequrin to find out if it
                helps. A first engagement can start with one bounded question, an agreed dataset,
                real investigator review, and clear criteria for what "worked" actually means.
              </p>
              <p className="mt-6 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                The point of a pilot is to find out honestly whether Sequrin adds real value inside
                your scheme. It should be entirely possible for the answer to be no.
              </p>
            </div>

            <div className="border-y border-border">
              {evaluationSteps.map(([number, title, body]) => (
                <article
                  key={number}
                  className="grid gap-4 border-b border-border py-6 last:border-b-0 sm:grid-cols-[70px_180px_1fr] sm:items-start"
                >
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
                <p className="label-mono">What we'd need from you</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                  Enough to actually give the product a fair test.
                </h2>
                <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li className="border-l border-border-strong pl-4">
                    A clear claims-integrity question or review objective, not "show us what you've
                    got."
                  </li>
                  <li className="border-l border-border-strong pl-4">
                    Relevant claims and reference data, with stable identifiers for whatever we're
                    analysing.
                  </li>
                  <li className="border-l border-border-strong pl-4">
                    Claims-integrity or forensic people on your side who can judge whether what
                    surfaces is genuinely useful.
                  </li>
                  <li className="border-l border-border-strong pl-4">
                    Someone who owns governance and can define access and data-handling boundaries.
                  </li>
                  <li className="border-l border-border-strong pl-4">
                    Agreement on what we're measuring, before we start interpreting results.
                  </li>
                </ul>
              </div>

              <div className="border border-border-strong bg-surface p-7 md:p-9">
                <p className="label-mono text-primary">What we don't need</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                  Control over your claims decisions.
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Giving us access to analyse your data doesn't mean handing over adjudication
                  authority. Sequrin can surface signals and connected context without becoming the
                  system that decides whether a member, provider, or claim gets sanctioned.
                </p>
                <ul className="mt-7 space-y-3 text-sm text-muted-foreground">
                  <li>• No automatic claim rejection from a detection result.</li>
                  <li>• No automatic payment hold from a detection result.</li>
                  <li>• No automatic fraud finding or sanction.</li>
                  <li>• No automatic publication into a shared network.</li>
                </ul>
                <Link
                  to="/governance"
                  className="mt-7 inline-flex text-sm text-primary underline-offset-4 hover:underline"
                >
                  Review the governance model →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">How we'd measure it</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              You should be able to ask, honestly, whether Sequrin made your integrity operation
              better.
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
              We won't sell you on a made-up fraud-savings percentage or promise your contributions
              will drop. Any number we put in front of you should come from measured outcomes and a
              baseline your own team has validated.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">Next step</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                Bring us one claims-integrity question. That's a good place to start.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                This isn't a pitch for a national platform. It's a conversation about whether a
                bounded evaluation can answer one real investigative question inside your scheme's
                own governance boundaries.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                <a
                  href={PUBLIC_CONTACT_MAILTO}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  info@sequrin.tech
                </a>
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
