import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance principles | Sequrin" },
      {
        name: "description",
        content:
          "Sequrin's governance principles cover investigative signals, role-based access, auditability and accountable claims decisions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/governance/" }],
  }),
  component: GovernancePage,
});

const principles = [
  ["01", "A signal is a lead, not a finding", "Rules, models, statistics and network analysis can surface activity worth examining. What comes out is a reason to look closer, not a fraud verdict."],
  ["02", "Access follows the job", "Being able to sign in should not mean being able to see every investigation or perform every privileged action. Roles and organisation boundaries matter."],
  ["03", "The important stuff leaves a trail", "Investigation history, evidence, access decisions and significant administrative actions should be reviewable later, not just remembered."],
  ["04", "The judgement calls stay human", "Evidence, context and the organisation's own accountable process are what produce a conclusion and any consequential decision."],
];

function GovernancePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Governance</p>
            <h1 className="mt-5 max-w-5xl text-4xl leading-[1.08] md:text-6xl">
              Governance principles for Sequrin investigations
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              A signal is a lead, not a finding. Sequrin can surface and organise activity for
              investigation, while evidence is assessed by authorised people and consequential
              decisions remain with the medical scheme's accountable processes. Access, casework
              and significant administrative actions should also be reviewable after the event.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-px border-x border-border bg-border md:grid-cols-2">
            {principles.map(([number, title, body]) => (
              <article key={number} className="bg-background p-8 md:p-10">
                <p className="label-mono text-primary">{number}</p>
                <h2 className="mt-4 text-2xl">{title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-px border border-border bg-border md:grid-cols-2">
              <article className="bg-surface p-8">
                <p className="label-mono">Sequrin can help your team</p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>Surface unusual activity for review</li>
                  <li>See patterns and relationships more clearly</li>
                  <li>Keep evidence and case context together</li>
                  <li>Make important activity easier to review later</li>
                </ul>
              </article>
              <article className="bg-background p-8">
                <p className="label-mono">What stays outside detection</p>
                <ul className="mt-6 space-y-3 text-muted-foreground">
                  <li>Deciding that someone committed fraud or misconduct</li>
                  <li>Rejecting, delaying or withholding a claim</li>
                  <li>Imposing a sanction or contractual consequence</li>
                  <li>Publishing a cross-organisation warning on its own</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div>
              <p className="label-mono">Why the separation matters</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Detection gives you a reason to look closer. It doesn't give you permission to punish.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>An investigator can gather evidence, build context and reach a conclusion through the organisation's own process. That does not automatically give them authority to take every downstream action or publish something beyond the organisation.</p>
              <p>The same principle applies to the longer-term Secure Integrity Network idea: collaboration across organisations would need more rules and more accountability than an internal investigation, not less.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">Evaluation planning</p>
              <h2 className="mt-4 max-w-4xl text-3xl md:text-4xl">Discuss governance requirements for an evaluation.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">We can map roles, access boundaries, evidence handling and decision ownership against the way your organisation already works.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/how-it-works" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">See the approach</Link>
              <a href={PUBLIC_CONTACT_MAILTO} className="rounded-md border border-border-strong px-6 py-3 text-sm">Ask a governance question</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
