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
    eyebrow: "Build a reliable picture",
    body: "Relevant claims and integrity data get pulled into an analytical space scoped to your organisation. Consistent identifiers for claims, providers, members and facilities give everything that follows a common frame of reference.",
    output: "A governed analytical context",
  },
  {
    number: "02",
    title: "Detect",
    eyebrow: "Look for what stands out",
    body: "Rules, statistics, models and relationship analysis look for activity worth a second look. Different methods each contribute evidence, but none of them get to make the call on their own.",
    output: "Analytical observations",
  },
  {
    number: "03",
    title: "Signal",
    eyebrow: "Turn analysis into a lead",
    body: "Whatever's relevant becomes an investigative signal, something that explains why it deserves a closer look, while staying clearly a suspicion, not a finding.",
    output: "A lead, not a verdict",
  },
  {
    number: "04",
    title: "Investigate",
    eyebrow: "Add evidence and context",
    body: "Authorised investigators review the claims, connected entities, timeline and supporting evidence, and can record their work in one structured workspace instead of piecing it together from scattered alerts.",
    output: "A traceable, human-led investigation",
  },
  {
    number: "05",
    title: "Decide",
    eyebrow: "The call stays with people",
    body: "Whatever the investigation concludes stays with your accountable process. Sequrin can support that investigation, but the analytical layer itself doesn't reject a claim, delay it, withhold it, impose a sanction, or publish a shared-network notice.",
    output: "A decision made by your team, not our model",
  },
];

const governanceControls = [
  {
    title: "Organisation boundaries",
    body: "Claims-integrity work stays scoped to your organisation and its own operating context, not an open shared pool.",
  },
  {
    title: "Role-based access",
    body: "Who can reach sensitive investigative and administrative capability follows Sequrin's role and permission model, not just who's logged in.",
  },
  {
    title: "A trail worth trusting",
    body: "Important investigative and administrative activity is designed to stay traceable, so you can look back later and see exactly how a signal became an action.",
  },
];

function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">How it works</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              A signal should start an investigation, not end one.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              We keep analytical detection and consequential claims decisions apart on purpose.
              Data becomes context, analysis becomes a signal, investigators build the evidence, and
              the people accountable for the outcome are the ones who decide it.
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
                  Five steps, with a hard line between detection and decision.
                </h2>
              </div>
              <Link
                to="/product"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
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
                      <p className="label-mono text-primary">
                        {step.number} · {step.eyebrow}
                      </p>
                      <h3 className="mt-4 text-2xl md:text-3xl">{step.title}</h3>
                    </div>
                    <span className="font-data text-4xl font-semibold leading-none text-border-strong md:text-5xl">
                      {step.number}
                    </span>
                  </div>
                  <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
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
            <p className="label-mono">Where authority actually changes hands</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              Analytics can point at something. They can't decide what it means.
            </h2>

            <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-2">
              <article className="bg-surface p-8 md:p-10">
                <p className="label-mono text-primary">Analytical layer</p>
                <h3 className="mt-4 text-2xl">What Sequrin can surface</h3>
                <ul className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Unusual claim behaviour or frequency patterns.",
                    "Relationships across providers, members, facilities and events.",
                    "Signals from rules, statistics or models.",
                    "Context that helps investigators decide where to actually look.",
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
                <h3 className="mt-4 text-2xl">What actually needs a person</h3>
                <ul className="mt-7 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  {[
                    "Working out whether the activity has an innocent, operational, or genuinely concerning explanation.",
                    "Weighing the evidence and writing down a real conclusion.",
                    "Taking any action that has consequences, through the scheme's own process.",
                    "Approving anything that would ever get published to a wider network.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-px w-4 shrink-0 bg-muted-foreground"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-8 border border-primary/30 bg-primary/5 p-7 md:p-9">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Detection gives you a reason to investigate. It doesn't give you a verdict.
              </p>
              <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                This isn't a disclaimer we added after the fact. It's part of how the product is
                built: analytical capability is kept separate from payment, sanction and
                publication authority.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="label-mono">From signal to case</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                The context follows the signal.
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
                An investigator shouldn't have to rebuild the analytical story from scratch. The
                useful context behind a signal moves with it into the investigation workspace,
                where evidence and human judgement take over from there.
              </p>
            </div>

            <div className="border border-border-strong bg-background">
              {[
                [
                  "01",
                  "Pattern detected",
                  "An analytical method spots behaviour that doesn't match the expected pattern.",
                ],
                [
                  "02",
                  "Signal generated",
                  "That pattern becomes an investigative lead, along with the reason it surfaced.",
                ],
                [
                  "03",
                  "Context assembled",
                  "Relevant claims, entities, timeline and relationships get pulled together for review.",
                ],
                [
                  "04",
                  "Investigator reviews",
                  "An authorised person actually looks at the evidence, writes notes, and decides what further work is worth doing.",
                ],
                [
                  "05",
                  "Outcome governed",
                  "Any conclusion or consequential action follows your organisation's own process.",
                ],
              ].map(([number, title, body], index, array) => (
                <div
                  key={number}
                  className={`grid grid-cols-[64px_1fr] gap-4 p-6 md:grid-cols-[78px_180px_1fr] md:gap-6 ${index < array.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="font-data text-xl font-semibold text-primary">{number}</span>
                  <h3 className="text-lg md:text-xl">{title}</h3>
                  <p className="col-start-2 text-sm leading-relaxed text-muted-foreground md:col-start-3">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Governance isn't a final step</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              It runs through every step, not just the last one.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {governanceControls.map((control) => (
                <article key={control.title} className="bg-background p-7 md:p-8">
                  <h3 className="text-xl">{control.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {control.body}
                  </p>
                </article>
              ))}
            </div>
            <Link
              to="/governance"
              className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
            >
              Read the governance model →
            </Link>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="label-mono">The longer-term network idea</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                Governance comes before collaboration, not after.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                The bigger Secure Integrity Network idea is about responsible intelligence-sharing
                across organisations, where that's appropriate and permitted. It isn't a national
                blacklist, and an investigator can't just turn a local signal into a shared network
                notice on their own.
              </p>
              <Link
                to="/network"
                className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
              >
                Explore the network vision →
              </Link>
            </div>
            <div className="grid gap-px border border-border bg-border">
              <div className="bg-background p-7">
                <p className="label-mono text-primary">Today</p>
                <p className="mt-3 text-xl">Analysis and investigation, scoped per organisation</p>
              </div>
              <div className="bg-background p-7">
                <p className="label-mono">Where we're headed</p>
                <p className="mt-3 text-xl">Controlled, cross-organisation integrity intelligence</p>
              </div>
              <div className="bg-background p-7 text-sm leading-relaxed text-muted-foreground">
                Any future sharing model has to protect purpose, authorisation, auditability and
                each organisation's own accountability.
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">See the workflow in context</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                From something worth noticing to an investigation you can stand behind.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Have a look at the product interface, or see how this could fit into a medical
                scheme's claims-integrity function.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/product"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore the product
              </Link>
              <Link
                to="/for-medical-schemes"
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
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
