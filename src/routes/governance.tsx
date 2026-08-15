import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance | Sequrin" },
      {
        name: "description",
        content:
          "See the decision, access, audit and collaboration boundaries that shape how Sequrin supports accountable healthcare claims-integrity work.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/governance" }],
  }),
  component: GovernancePage,
});

const principles = [
  {
    number: "01",
    title: "Signals are investigative, not determinative",
    body: "Rules, models, statistical methods and network analysis may surface activity worth examining. Their output is a signal, not a finding of fraud or misconduct.",
  },
  {
    number: "02",
    title: "Detection has no claims authority",
    body: "A detection result cannot itself reject, delay, redirect or withhold a claim or benefit payment, and cannot impose a sanction.",
  },
  {
    number: "03",
    title: "Consequential judgement remains human",
    body: "Evidence, context and accountable organisational processes remain responsible for conclusions and consequential decisions.",
  },
  {
    number: "04",
    title: "Access follows role and organisation",
    body: "Sensitive claims-integrity information should only be available to appropriately authorised people within controlled organisational boundaries.",
  },
  {
    number: "05",
    title: "Important actions should be traceable",
    body: "Investigation history, access decisions and significant administrative actions should support review, accountability and auditability.",
  },
  {
    number: "06",
    title: "Collaboration requires separate governance",
    body: "Cross-organisational sharing is not an informal extension of an investigation. Any shared-network action requires its own governed process.",
  },
];

const accessControls = [
  ["Organisation boundary", "Operational data and workforce access remain scoped to the relevant organisation rather than becoming globally visible by default."],
  ["Explicit authority", "Access to sensitive functions should follow assigned responsibilities rather than broad platform membership alone."],
  ["Administrative separation", "Managing access is distinct from making investigative findings, reducing the chance that one workflow silently grants another form of authority."],
  ["Traceable change", "Important role, permission and administrative changes should leave evidence that can be reviewed later."],
];

const collaborationRequirements = [
  "Clear participation and access rules",
  "Defined evidence and publication standards",
  "Purpose limitation and data-governance controls",
  "Separation between investigation and network publication",
  "Correction, challenge and review mechanisms",
  "Auditability across participating organisations",
];

function GovernancePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Governance</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              Governance is not a disclaimer. It is part of the operating model.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Claims-integrity technology works in a sensitive environment. Sequrin is designed so analytical capability, access, investigation and collaboration each operate inside explicit boundaries rather than collapsing into one automated decision system.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono text-primary">Core principles</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              Six boundaries shape how Sequrin should be used.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle) => (
                <article key={principle.number} className="bg-background p-7">
                  <p className="label-mono text-primary">{principle.number}</p>
                  <h3 className="mt-4 text-xl leading-snug">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{principle.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono text-primary">Decision boundary</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Analytics can prioritise attention. They do not inherit decision authority.
              </h2>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-2">
              <article className="bg-surface p-7 md:p-9">
                <p className="label-mono">Analytical layer</p>
                <h3 className="mt-4 text-2xl">What Sequrin may help surface</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>Unusual claim or entity behaviour worth closer examination.</li>
                  <li>Relationships between providers, members, facilities, claims and timing.</li>
                  <li>Priority signals that help investigators decide where to spend attention.</li>
                  <li>Structured evidence and chronology that can support a human investigation.</li>
                </ul>
              </article>

              <article className="bg-background p-7 md:p-9">
                <p className="label-mono text-primary">Accountable authority</p>
                <h3 className="mt-4 text-2xl">What remains outside detection</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>Determining that a person or provider committed fraud or misconduct.</li>
                  <li>Rejecting, delaying, withholding, redirecting or recovering a claim payment.</li>
                  <li>Imposing a sanction, contractual consequence or other adverse action.</li>
                  <li>Publishing a shared-network notice or equivalent cross-organisational warning.</li>
                </ul>
              </article>
            </div>

            <div className="mt-8 border border-border-strong bg-surface p-7 md:p-9">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Detection creates a reason to investigate. It does not create permission to punish.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="label-mono text-primary">Access governance</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Sensitive access should be deliberate, scoped and reviewable.
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Sequrin separates identity from operational authority. Being able to sign in does not, by itself, mean a person should be able to see every investigation, administer every user or perform every privileged action.
                </p>
              </div>

              <div className="grid gap-px border border-border bg-border md:grid-cols-2">
                {accessControls.map(([title, body]) => (
                  <article key={title} className="bg-background p-7">
                    <h3 className="text-xl">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono text-primary">Investigation and publication</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              A finding inside one organisation is not automatically a network publication.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              Sequrin deliberately separates investigation from cross-organisational publication. An investigator may gather evidence, record context and reach an internal conclusion through the organisation's accountable process. That does not grant direct authority to publish a shared network notice.
            </p>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
              {[
                ["01", "Signal", "Analytical activity is surfaced for review."],
                ["02", "Investigate", "Authorised people examine evidence and context."],
                ["03", "Conclude internally", "The organisation applies its own accountable decision process."],
                ["04", "Govern separately", "Any future shared-network publication follows an additional governed process."],
              ].map(([number, title, body]) => (
                <article key={number} className="bg-background p-6">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label-mono text-primary">Secure Integrity Network</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Network collaboration needs a higher governance bar, not a lower one.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                The longer-term Secure Integrity Network vision is not a shared blacklist. Cross-organisational integrity intelligence would need additional rules, controls and accountability beyond those required inside a single medical scheme.
              </p>
              <Link to="/network" className="mt-7 inline-flex text-sm text-primary underline-offset-4 hover:underline">
                Explore the Secure Integrity Network direction →
              </Link>
            </div>

            <div className="border border-border bg-background p-7 md:p-9">
              <p className="label-mono">Any future network model should require</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {collaborationRequirements.map((item) => (
                  <div key={item} className="border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="label-mono">Governance in one sentence</p>
                <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
                  Sequrin can help people see more clearly, but authority remains with accountable people and governed organisations.
                </h2>
                <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                  That boundary is not a limitation added after the product was built. It is part of what the product is intended to be.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/how-it-works" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                  How it works
                </Link>
                <Link to="/for-medical-schemes" className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary">
                  For medical schemes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
