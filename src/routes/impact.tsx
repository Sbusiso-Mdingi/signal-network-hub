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
  ["01", "See more clearly", "Connect analytical signals, relationships and investigative context."],
  ["02", "Focus attention", "Help integrity teams prioritise the activity that warrants closer examination."],
  ["03", "Investigate better", "Give authorised people a structured, traceable way to establish context."],
  ["04", "Respond accountably", "Keep findings and consequential decisions inside governed human processes."],
  ["05", "Protect resources", "Reduce avoidable leakage where investigations ultimately substantiate it."],
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
    body: "How often prioritised signals lead to substantive human review, and which analytical methods contribute useful context.",
  },
  {
    title: "Operational efficiency",
    body: "How quickly teams can move from a signal to triage, investigation and a documented outcome without weakening governance.",
  },
  {
    title: "Confirmed financial effect",
    body: "Scheme-validated recoveries or avoided leakage where the financial effect can be attributed to a completed integrity process.",
  },
  {
    title: "Capability growth",
    body: "The analytical, investigative, implementation and operational capacity built around stronger claims-integrity processes.",
  },
];

function ImpactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Impact</p>
            <h1 className="mt-5 max-w-5xl text-4xl leading-[1.08] md:text-6xl">
              The value of claims integrity is what it helps preserve.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is being built to strengthen the operating capability behind healthcare claims integrity. The wider goal is not simply to find unusual claims. It is to help healthcare organisations protect finite resources, use investigative capacity more effectively and build stronger local integrity capability.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Protect healthcare resources</span>
              <span aria-hidden="true">•</span>
              <span>Reduce unnecessary cost pressure</span>
              <span aria-hidden="true">•</span>
              <span>Build local capability</span>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono text-primary">The impact chain</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Impact begins long before a financial outcome is recorded.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sequrin's contribution starts with visibility and investigative focus. Any financial effect comes later, after authorised people establish context and the organisation completes its own governed process.
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
              This is an impact pathway, not a guaranteed savings claim. A signal only becomes financially meaningful when investigation and the scheme's own processes substantiate an avoidable loss.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="label-mono text-primary">01 · Healthcare resources</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                More of the healthcare pool should serve healthcare.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Medical-scheme resources are finite. When avoidable claims leakage is absorbed by the same funding system that pays for legitimate care, it competes with the purpose those resources were collected to serve.
              </p>
            </div>

            <div className="border border-border-strong bg-surface p-7 md:p-9">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Better integrity capability cannot create healthcare funding. It can help protect the funding that already exists.
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sequrin is designed to improve the visibility, prioritisation and investigative context available to authorised teams. Where that leads to substantiated action, the organisation has a better opportunity to prevent or recover avoidable expenditure through its own lawful processes.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">02 · Cost pressure</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Avoidable leakage is one pressure the system should not have to carry.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Healthcare affordability is shaped by many forces. Claims leakage is only one of them. Sequrin does not promise lower contributions or cheaper healthcare, but stronger integrity processes can help remove one unnecessary source of financial pressure.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                The objective is straightforward: help more of the available pool reach its intended purpose rather than being lost to activity that a proper investigation could have identified and addressed.
              </p>
            </div>

            <div className="grid gap-px border border-border bg-border">
              <div className="bg-background p-7">
                <p className="label-mono">Not the claim</p>
                <p className="mt-3 text-lg font-medium">"Sequrin will make medical aid cheaper."</p>
              </div>
              <div className="bg-background p-7">
                <p className="label-mono text-primary">The defensible claim</p>
                <p className="mt-3 text-lg font-medium">
                  Better claims integrity can reduce an avoidable source of pressure on healthcare financing.
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
                A healthcare-integrity platform can build capability around the technology, not only inside it.
              </h2>
              <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
                If Sequrin grows, the economic effect is broader than a software licence. Building, operating and implementing the platform can create demand for technical, analytical, operational and administrative work. Medical schemes can also strengthen the people and processes around investigation, governance and data.
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
              These are potential capability effects of growth and adoption, not claims about jobs already created.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="label-mono text-primary">04 · Wider healthcare relevance</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Claims integrity is not only a private-scheme problem.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Any healthcare financing system that processes claims, reimbursements or provider payments needs controls around integrity, investigation and accountability. The structural problem can therefore extend beyond private medical schemes.
              </p>
            </div>

            <div className="border border-border-strong bg-background p-7 md:p-9">
              <p className="label-mono">Future public-sector application</p>
              <p className="mt-4 text-xl leading-relaxed">
                Sequrin could eventually be evaluated for public-health financing environments, but that would be a separate deployment context with its own requirements.
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
                  <div key={item} className="border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-7 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                This is a future applicability case, not a claim that Sequrin is currently deployed in, contracted to or approved for a public healthcare system.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono text-primary">Measure, then claim</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Impact should be demonstrated, not decorated with a percentage.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sequrin will only make quantitative impact claims when the underlying evidence is defensible and the measurement is properly scoped. Early pilots should establish operational and financial baselines before broader claims are made.
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
                The impact case starts with a stronger integrity operation.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Explore how Sequrin fits into a medical scheme's workflow, or discuss a controlled introduction designed to establish evidence before making broader impact claims.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                <a href={PUBLIC_CONTACT_MAILTO} className="text-foreground underline-offset-4 hover:underline">
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
