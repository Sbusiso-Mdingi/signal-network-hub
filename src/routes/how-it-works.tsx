import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Sequrin" },
      {
        name: "description",
        content:
          "See how Sequrin moves from healthcare claims data to investigative signals, human review and governed decisions without turning detection into an automated verdict.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/how-it-works" }],
  }),
  component: HowItWorksPage,
});

const operatingPath = [
  {
    number: "01",
    title: "Connect",
    eyebrow: "Create reliable context",
    body: "Relevant claims and integrity data enter a tenant-scoped analytical environment. Organisation, claim, provider, member and other useful identifiers give later analysis a consistent frame of reference.",
    output: "A governed analytical context",
  },
  {
    number: "02",
    title: "Detect",
    eyebrow: "Look for unusual patterns",
    body: "Rules, statistical methods, models and relationship analysis examine activity for patterns that deserve attention. Different analytical methods can contribute evidence without becoming a decision-maker.",
    output: "Analytical observations",
  },
  {
    number: "03",
    title: "Signal",
    eyebrow: "Turn analysis into a lead",
    body: "Relevant analytical output becomes an investigative signal. A signal explains why something deserves a closer look and preserves the distinction between suspicion and a finding.",
    output: "An investigative signal, not a verdict",
  },
  {
    number: "04",
    title: "Investigate",
    eyebrow: "Add evidence and context",
    body: "Authorised investigators review claims, connected entities, chronology, relationships and supporting evidence. They can record investigative activity in a structured workspace rather than working from disconnected alerts.",
    output: "A traceable human-led investigation",
  },
  {
    number: "05",
    title: "Decide",
    eyebrow: "Keep authority with people",
    body: "Consequential conclusions remain with accountable human and organisational processes. Sequrin can support the investigation, but the analytical layer does not itself reject, delay or withhold a claim, impose a sanction, or publish a shared-network notice.",
    output: "A governed human decision process",
  },
];

const governanceControls = [
  {
    title: "Organisation boundaries",
    body: "Claims-integrity work remains scoped to the authorised organisation and its governed operating context rather than becoming an unrestricted shared pool.",
  },
  {
    title: "Role-based access",
    body: "Access to sensitive investigative and administrative capability is determined by Sequrin's internal roles, permissions and delegated-authority model.",
  },
  {
    title: "Traceable actions",
    body: "Important investigative and administrative activity is designed to remain auditable so the path from signal to action can be examined later.",
  },
];

function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">How it works</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              A signal should start an investigation, not make a decision.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin separates analytical detection from consequential claims decisions. Data becomes context, analysis becomes a signal, investigators establish evidence, and accountable people remain responsible for what happens next.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Tenant-scoped data</span>
              <span aria-hidden="true">•</span>
              <span>Analytical signals</span>
              <span aria-hidden="true">•</span>
              <span>Human investigation</span>
              <span aria-hidden="true">•</span>
              <span>Governed decisions</span>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="label-mono">The operating path</p>
                <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                  Five stages, with a deliberate boundary between detection and decision.
                </h2>
              </div>
              <Link to="/product" className="text-sm text-primary underline-offset-4 hover:underline">
                Explore the product →
              </Link>
            </div>

            <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-2">
              {operatingPath.map((step, index) => (
                <article
                  key={step.number}
                  className={`relative bg-background p-7 md:p-9 ${index === operatingPath.length - 1 ? "lg:col-span-2" : ""}`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="label-mono text-primary">{step.number} · {step.eyebrow}</p>
                      <h3 className="mt-4 text-2xl md:text-3xl">{step.title}</h3>
                    </div>
                    <span className="font-data text-4xl font-semibold leading-none text-border-strong md:text-5xl">
                      {step.number}
                    </span>
                  </div>
                  <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{step.body}</p>
                  <div className="mt-6 border-t border-border pt-4 text-sm">
                    <span className="label-mono">Output</span>
                    <span className="ml-3 text-foreground">{step.output}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Where authority changes</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              Analytics can prioritise attention. They do not inherit decision authority.
            </h2>

            <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-2">
              <article className="bg-surface p-8 md:p-10">
                <p className="label-mono text-primary">Analytical layer</p>
                <h3 className="mt-4 text-2xl">What Sequrin can surface</h3>
                <ul className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Unusual claim behaviour or frequency patterns.",
                    "Relationships across providers, members, facilities and events.",
                    "Signals produced by rules, statistical methods or models.",
                    "Context that helps investigators decide where to look more closely.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="bg-background p-8 md:p-10">
                <p className="label-mono">Human and governance layer</p>
                <h3 className="mt-4 text-2xl">What requires accountable judgement</h3>
                <ul className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Establishing whether the activity has an innocent, operational or concerning explanation.",
                    "Assessing evidence and recording an investigative conclusion.",
                    "Taking any consequential action through the scheme's authorised process.",
                    "Approving any future governed network publication or cross-organisation action.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-8 border border-primary/30 bg-primary/5 p-7 md:p-9">
              <p className="font-display text-2xl leading-snug md:text-3xl">Detection creates a reason to investigate. It does not create a fraud verdict.</p>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                This boundary is not a disclaimer added after the fact. It is part of the operating model: analytical capability is separated from payment, sanction and publication authority.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="label-mono">From signal to case</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">The signal carries context forward.</h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                An investigator should not have to reconstruct the analytical story from scratch. The useful context behind a signal can move with it into the investigation workspace, where evidence and human reasoning take over.
              </p>
            </div>

            <div className="border border-border-strong bg-background">
              {[
                ["01", "Pattern detected", "An analytical method identifies behaviour that differs from the expected context."],
                ["02", "Signal generated", "The pattern is captured as an investigative lead with the reason it surfaced."],
                ["03", "Context assembled", "Relevant claims, entities, chronology and relationships can be brought together for review."],
                ["04", "Investigator reviews", "An authorised person examines evidence, records notes and determines what further work is justified."],
                ["05", "Outcome governed", "Any conclusion or consequential action follows the organisation's authorised human process."],
              ].map(([number, title, body], index, array) => (
                <div key={number} className={`grid grid-cols-[64px_1fr] gap-4 p-6 md:grid-cols-[78px_180px_1fr] md:gap-6 ${index < array.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="font-data text-xl font-semibold text-primary">{number}</span>
                  <h3 className="text-lg md:text-xl">{title}</h3>
                  <p className="col-start-2 text-sm leading-relaxed text-muted-foreground md:col-start-3">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Governance runs through the workflow</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              Control is not a final step. It surrounds every step.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {governanceControls.map((control) => (
                <article key={control.title} className="bg-background p-7 md:p-8">
                  <h3 className="text-xl">{control.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{control.body}</p>
                </article>
              ))}
            </div>
            <Link to="/governance" className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline">
              Read the governance model →
            </Link>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="label-mono">Longer-term network direction</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                Collaboration comes after governance, not before it.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Sequrin's broader Secure Integrity Network vision is about responsible integrity intelligence across organisational boundaries where that is appropriate and permitted. It is not an operating national blacklist, and an investigator cannot directly turn a local signal into a shared network notice.
              </p>
              <Link to="/network" className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline">
                Explore the network vision →
              </Link>
            </div>
            <div className="grid gap-px border border-border bg-border">
              <div className="bg-background p-7">
                <p className="label-mono text-primary">Today</p>
                <p className="mt-3 text-xl">Tenant-scoped analysis and investigation</p>
              </div>
              <div className="bg-background p-7">
                <p className="label-mono">Governed future direction</p>
                <p className="mt-3 text-xl">Controlled cross-organisation integrity intelligence</p>
              </div>
              <div className="bg-background p-7 text-sm leading-relaxed text-muted-foreground">
                Any future sharing model must preserve purpose, authorisation, auditability and organisational accountability.
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">See the workflow in context</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">From analytical attention to accountable investigation.</h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Explore the product interface or see how this operating model can fit into a medical scheme's claims-integrity function.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/product" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Explore the product
              </Link>
              <Link to="/for-medical-schemes" className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary">
                For medical schemes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
