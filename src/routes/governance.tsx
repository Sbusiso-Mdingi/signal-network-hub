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
    title: "A signal is a lead, not a finding",
    body: "Rules, models, statistics and network analysis can surface activity worth examining. What comes out is a signal. It's not a finding of fraud or misconduct, and we don't treat it like one.",
  },
  {
    number: "02",
    title: "Detection has no say over a claim",
    body: "A detection result can't reject, delay, redirect or withhold a claim or benefit payment on its own, and it can't impose a sanction either.",
  },
  {
    number: "03",
    title: "The judgement calls stay human",
    body: "Evidence, context and your organisation's own accountable process are what actually produce a conclusion and any consequential decision.",
  },
  {
    number: "04",
    title: "Access follows role, not login",
    body: "Sensitive claims-integrity information should only reach people who are actually authorised for it, inside clear organisational boundaries.",
  },
  {
    number: "05",
    title: "The important stuff leaves a trail",
    body: "Investigation history, access decisions and significant administrative actions should be reviewable and auditable, not just remembered.",
  },
  {
    number: "06",
    title: "Sharing across organisations needs its own rules",
    body: "Cross-organisational sharing isn't a casual extension of one investigation. Anything that reaches a shared network needs its own governed process.",
  },
];

const accessControls = [
  [
    "Organisation boundary",
    "Operational data and staff access stay scoped to your organisation. It doesn't become globally visible by default just because it's in the system.",
  ],
  [
    "Explicit authority",
    "Reaching sensitive functions follows what someone's actually responsible for, not just whether they have an account.",
  ],
  [
    "Administrative separation",
    "Managing access and making an investigative finding are two different jobs, so one workflow can't quietly grant the other kind of authority.",
  ],
  [
    "A trail that holds up",
    "Meaningful role, permission and admin changes leave something you can go back and check later.",
  ],
];

const collaborationRequirements = [
  "Clear rules on who can participate and access what",
  "Defined evidence and publication standards",
  "Purpose limits and real data-governance controls",
  "A hard line between investigation and network publication",
  "A way to correct, challenge and review a finding",
  "Auditability that works across every participating organisation",
];

function GovernancePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Governance</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              Governance isn't a disclaimer we tacked on. It's part of how this is built.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Claims-integrity work touches sensitive information and decisions with real
              consequences. We've deliberately kept analysis, access, investigation and
              collaboration as separate things, rather than folding them into one system that
              decides everything on its own.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono text-primary">Core principles</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              Six lines we don't let Sequrin cross.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {principles.map((principle) => (
                <article key={principle.number} className="bg-background p-7">
                  <p className="label-mono text-primary">{principle.number}</p>
                  <h3 className="mt-4 text-xl leading-snug">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {principle.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono text-primary">Where the line actually sits</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Analytics can point at something. They can't decide what it means.
              </h2>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-2">
              <article className="bg-surface p-7 md:p-9">
                <p className="label-mono">Analytical layer</p>
                <h3 className="mt-4 text-2xl">What Sequrin might surface</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>Claim or entity behaviour that looks unusual and is worth a closer look.</li>
                  <li>Relationships across providers, members, facilities, claims and timing.</li>
                  <li>Priority signals that help investigators decide where to spend attention.</li>
                  <li>
                    Structured evidence and a timeline that can actually support an investigation.
                  </li>
                </ul>
              </article>

              <article className="bg-background p-7 md:p-9">
                <p className="label-mono text-primary">Where a person has to step in</p>
                <h3 className="mt-4 text-2xl">What stays outside detection, always</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>Deciding that a person or provider actually committed fraud or misconduct.</li>
                  <li>
                    Rejecting, delaying, withholding, redirecting or recovering a claim payment.
                  </li>
                  <li>Imposing a sanction, a contractual consequence, or any other adverse action.</li>
                  <li>
                    Publishing a shared-network notice or anything like a cross-organisational
                    warning.
                  </li>
                </ul>
              </article>
            </div>

            <div className="mt-8 border border-border-strong bg-surface p-7 md:p-9">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Detection gives you a reason to look closer. It doesn't give you permission to
                punish.
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
                  Sensitive access should be deliberate, and reviewable after the fact.
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  We keep identity and operational authority separate. Being able to log in
                  shouldn't, on its own, mean someone can see every investigation, administer every
                  user, or take every privileged action.
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
            <p className="label-mono text-primary">Investigation vs. publication</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              A finding inside your organisation isn't automatically a network publication.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              We keep investigation and cross-organisational publication deliberately separate. An
              investigator can gather evidence, build context, and reach a conclusion through your
              organisation's own accountable process. That doesn't hand them the authority to
              publish a shared network notice on top of it.
            </p>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
              {[
                ["01", "Signal", "Analytical activity surfaces for review."],
                ["02", "Investigate", "Authorised people look at evidence and context."],
                [
                  "03",
                  "Conclude internally",
                  "Your organisation runs it through its own accountable process.",
                ],
                [
                  "04",
                  "Govern separately",
                  "Any future shared-network publication follows its own separate, governed process.",
                ],
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
                Collaborating across organisations needs a higher bar, not a lower one.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                The longer-term Secure Integrity Network idea isn't a shared blacklist.
                Cross-organisational intelligence would need more rules and more accountability
                than anything required inside a single medical scheme, not less.
              </p>
              <Link
                to="/network"
                className="mt-7 inline-flex text-sm text-primary underline-offset-4 hover:underline"
              >
                Explore the Secure Integrity Network direction →
              </Link>
            </div>

            <div className="border border-border bg-background p-7 md:p-9">
              <p className="label-mono">Any future network model would need</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {collaborationRequirements.map((item) => (
                  <div
                    key={item}
                    className="border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground"
                  >
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
                <p className="label-mono">Governance, in one sentence</p>
                <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
                  Sequrin can help you see more clearly. The authority stays with your people and
                  your organisation.
                </h2>
                <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                  That's not a limit we bolted on after the product was built. It's what the
                  product was meant to be from the start.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  to="/how-it-works"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  How it works
                </Link>
                <Link
                  to="/for-medical-schemes"
                  className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
                >
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
