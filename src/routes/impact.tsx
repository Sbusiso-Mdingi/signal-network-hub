import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact | Sequrin" },
      {
        name: "description",
        content:
          "Explore the wider impact Sequrin is designed to support through stronger healthcare claims integrity, protected resources and local capability.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/impact" }],
  }),
  component: ImpactPage,
});

const impactChain = [
  ["01", "See the pattern", "Bring signals, relationships and investigation context together."],
  ["02", "Spend time better", "Point limited investigative capacity at activity worth a closer look."],
  ["03", "Build the case", "Give authorised investigators a structured way to test what the signal means."],
  ["04", "Make the call", "Keep findings and consequential decisions inside the scheme's own process."],
  ["05", "Count what changed", "Measure avoided or recovered leakage only where the evidence supports it."],
];

const capabilityRoles = [
  {
    title: "Inside Sequrin",
    roles: [
      "Software engineering",
      "Data and statistical analysis",
      "Security and cloud operations",
      "Implementation and customer support",
      "Product, operations and administration",
    ],
  },
  {
    title: "Across scheme operations",
    roles: [
      "Claims-integrity investigation",
      "Healthcare data analysis",
      "Integrity operations and case management",
      "Compliance and governance",
      "Systems integration and technical support",
    ],
  },
];

const measurementPoints = [
  {
    title: "Investigative relevance",
    body: "How often a prioritised signal gives an investigator a genuine reason to look closer, and which methods are actually useful.",
  },
  {
    title: "Operational efficiency",
    body: "Whether teams can get from signal to useful context and a documented outcome faster, without cutting governance corners.",
  },
  {
    title: "Confirmed financial effect",
    body: "Recoveries or avoided leakage that the scheme can verify after a completed investigation, not value inferred from a model score.",
  },
  {
    title: "Capability growth",
    body: "The analytical, investigative, implementation and operational skill built around a stronger claims-integrity function.",
  },
];

function ImpactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Impact</p>
            <h1 className="mt-5 max-w-5xl text-4xl leading-[1.08] md:text-6xl">
              The point is not to flag more claims. It is to protect more of what already funds care.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin only matters if better context helps integrity teams use their time better and,
              where the evidence supports it, prevent or recover avoidable leakage. The software is
              one part of that chain. The investigation and the outcome still have to hold up on
              their own.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Protect healthcare resources</span>
              <span aria-hidden="true">•</span>
              <span>Use investigative time well</span>
              <span aria-hidden="true">•</span>
              <span>Build local capability</span>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono text-primary">How value shows up</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                The financial result is the end of the chain, not the first metric.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                First you have to see something useful, investigate it properly and reach an outcome
                you can defend. Only then does it make sense to ask what financial effect that work
                actually had.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-5">
              {impactChain.map(([number, title, body]) => (
                <article key={number} className="bg-background p-6">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 max-w-4xl border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
              We will not turn a model score into a savings number. Financial value only counts when
              a scheme has investigated the activity and can verify the outcome.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="label-mono text-primary">01 · Healthcare resources</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Every avoidable rand lost is money the system cannot use twice.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Medical-scheme resources are finite. When avoidable leakage comes out of the same
                pool that pays legitimate claims, it competes with the care those contributions were
                collected to fund.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                That does not mean every signal has a rand value attached to it. If we want to say
                Sequrin protected a certain amount, we need a baseline, a completed investigation
                and a scheme-validated outcome that shows what actually changed.
              </p>
            </div>

            <div className="border border-border-strong bg-surface p-7 md:p-9">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Better claims integrity does not create more healthcare funding. It can help less of
                the funding already there leak away unnecessarily.
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sequrin is built to improve visibility, prioritisation and investigative context.
                Where that helps a scheme substantiate a real issue, the scheme is in a better
                position to prevent or recover avoidable expenditure through its own lawful process.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">02 · Cost pressure</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Claims leakage is not the whole affordability problem. It is one part we can work on.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Medical-aid affordability is shaped by far more than claims integrity. We are not
                going to pretend one product can make contributions cheap or solve healthcare costs.
                But avoidable leakage is still a pressure worth reducing when the evidence shows it
                is there.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                The practical goal is to help more of the available pool reach the purpose it was
                meant for instead of being lost to activity that a proper investigation could have
                identified and addressed.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                The size of that opportunity will be different for every scheme. That is why a
                controlled evaluation should measure the actual problem in scope instead of starting
                with a headline fraud percentage.
              </p>
            </div>

            <div className="grid gap-px border border-border bg-border">
              <div className="bg-background p-7">
                <p className="label-mono">What we will not say</p>
                <p className="mt-3 text-lg font-medium">"Sequrin will make medical aid cheaper."</p>
              </div>
              <div className="bg-background p-7">
                <p className="label-mono text-primary">What we can defend</p>
                <p className="mt-3 text-lg font-medium">
                  Better claims integrity can reduce one avoidable source of pressure on healthcare
                  financing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-4xl">
              <p className="label-mono text-primary">03 · Jobs and capability</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                If Sequrin grows, the capability around it has to grow too.
              </h2>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                A software company is not just a licence. Building, securing, implementing and
                supporting the product takes technical, analytical and operational people. Schemes
                using stronger integrity tooling also need investigators, data people, governance
                owners and implementation capability on their side.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              {capabilityRoles.map((group) => (
                <article key={group.title} className="bg-surface p-7 md:p-9">
                  <p className="label-mono">{group.title}</p>
                  <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                    {group.roles.map((role) => (
                      <li key={role} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
              These are the kinds of roles growth could support. We are not presenting them as jobs
              already created.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="label-mono text-primary">04 · Wider healthcare relevance</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                The same integrity problem exists wherever healthcare claims are paid.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Private medical schemes are where Sequrin starts, but the underlying problem is not
                unique to them. Any healthcare financing environment that pays claims,
                reimbursements or providers needs a way to investigate unusual activity and keep
                consequential decisions accountable.
              </p>
            </div>

            <div className="border border-border-strong bg-background p-7 md:p-9">
              <p className="label-mono">Could this apply in the public sector?</p>
              <p className="mt-4 text-xl leading-relaxed">
                Potentially, but that would be a separate use case to prove, not a market we can
                simply copy the private-scheme product into.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Public procurement",
                  "Privacy and lawful data use",
                  "Public-sector integration",
                  "Independent oversight",
                  "Decision accountability",
                  "Appropriate governance",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-border bg-surface px-4 py-3 text-sm text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-7 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                Sequrin is not currently deployed in, contracted to or approved for a public
                healthcare system. Any future public-sector use would need its own evidence,
                procurement, integration, privacy review and oversight.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono text-primary">Measure, then claim</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                If we cannot measure it properly, we should not market it as impact.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Early evaluations should establish a baseline before anyone starts talking about
                percentages or savings. If Sequrin eventually makes a quantitative impact claim, it
                should be tied to evidence, a defined scope and an outcome the scheme can verify.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              {measurementPoints.map((point) => (
                <article key={point.title} className="bg-background p-7 md:p-8">
                  <h3 className="text-xl">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">For medical schemes</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                Start by proving that the integrity operation gets better.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Before we make a bigger impact claim, we should be able to show that your
                investigators got more useful context, spent their time better and could verify any
                financial outcome that followed.
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
              <Link
                to="/for-medical-schemes"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                For medical schemes
              </Link>
              <Link
                to="/product"
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                Explore the product
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
