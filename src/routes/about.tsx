import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sequrin | Secure Integrity Network" },
      {
        name: "description",
        content:
          "The story behind Sequrin, a South African healthcare claims-integrity technology venture building connected investigation infrastructure for medical schemes.",
      },
      { property: "og:title", content: "About Sequrin | Secure Integrity Network" },
      {
        property: "og:description",
        content:
          "Why Sequrin exists, what the name means, where the product is today, and who is building it.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://sequrin.tech/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">About Sequrin</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              Built from a belief that claims make more sense in context.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is a South African healthcare claims-integrity technology venture. It is being
              built to help medical schemes and authorised integrity teams detect investigative
              signals, understand connected activity and give investigators better context without
              turning analytical systems into the authority for consequential decisions.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label-mono">Why it exists</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                A claim is a record. A pattern is a relationship.
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                Claims-integrity work becomes harder when relevant evidence is fragmented across
                claims, providers, members, facilities, services and time.
              </p>
              <p className="leading-relaxed">
                Sequrin began with a simple product thesis: an individual claim can look ordinary
                while the relationships around it tell a very different story. Statistical methods,
                deterministic rules, machine learning and network analysis can help surface those
                relationships so that investigators know where deeper attention may be worthwhile.
              </p>
              <p className="leading-relaxed">
                The objective is not to automate judgement. It is to make complex activity easier to
                investigate, help scarce integrity capacity focus on the right questions, and
                support more accountable protection of finite healthcare resources.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <figure className="max-w-4xl">
              <blockquote className="font-display text-3xl leading-snug md:text-4xl">
                “Detection should create questions worth investigating, not automated verdicts.”
              </blockquote>
              <figcaption className="label-mono mt-6">Product philosophy</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="label-mono">The name</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Sequrin, pronounced “Securing.”</h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                The name points directly to the long-term idea behind the company:
                <span className="text-primary"> Secure Integrity Network</span>.
              </p>
              <p className="leading-relaxed">
                “Sequr” evokes secure, while “in” represents Integrity Network. The name reflects a
                belief that claims integrity becomes stronger when useful relationships can be
                understood without giving up the governance that should surround sensitive
                healthcare information.
              </p>
              <p className="leading-relaxed">
                The network is a direction, not a claim that a national or cross-scheme network is
                already operating. Sequrin's current work is focused on building the analytical,
                investigative and governance foundation required before broader collaboration should
                be considered.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="label-mono">Built in South Africa</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Starting with the realities of medical-scheme claims integrity.
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                Sequrin is being built in South Africa, where healthcare affordability, finite
                scheme resources and the quality of claims-integrity operations have direct
                consequences for members and the sustainability of healthcare financing. The sector
                covers approximately 9 million beneficiaries, but membership has stagnated near that
                level for nearly a decade (CMS, 2023/24; Alexander Forbes Medical Aid Insights
                2022/2023), making efficient stewardship of existing resources more important than
                expansion.
              </p>
              <p className="leading-relaxed">
                That local starting point matters. The aim is to build serious analytical and
                investigative infrastructure that can be evaluated against real operational needs,
                while also contributing to local capability in software engineering, analytics,
                investigations, administration and governance as the company grows.
              </p>
              <p className="leading-relaxed">
                Wider healthcare or public-sector applicability may become possible over time, but
                it would require its own evidence, procurement, privacy, integration and oversight.
                It is not presented as a current deployment claim.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="label-mono">Current stage</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Build the foundation before the network.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Sequrin is early-stage. The priority is proving that the product can make
                claims-integrity work more useful and more accountable before making larger claims
                about scale.
              </p>
            </div>
            <div className="mt-12 border-y border-border">
              {[
                [
                  "01",
                  "Product foundation",
                  "Tenant-scoped signal detection, network context, investigation workflows, access controls and auditability.",
                ],
                [
                  "02",
                  "Scheme evaluation",
                  "Work with medical schemes around bounded claims-integrity questions and measure investigative relevance, review efficiency, context quality and confirmed financial effect.",
                ],
                [
                  "03",
                  "Governed network direction",
                  "Only after the foundations are proven should broader cross-organisational collaboration be considered, with separate participation, evidence and publication governance.",
                ],
              ].map(([number, title, body]) => (
                <div
                  key={number}
                  className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[80px_240px_1fr] md:gap-7"
                >
                  <span className="font-display text-3xl text-primary">{number}</span>
                  <h3 className="text-xl">{title}</h3>
                  <p className="text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="label-mono">Founder</p>
            <div className="mt-8 grid gap-10 border border-border bg-surface p-8 md:grid-cols-[200px_1fr] md:p-12">
              <div>
                <img
                  src="/sbusiso-mdingi-founder.webp"
                  alt="Sbusiso Mdingi, founder of Sequrin"
                  width={640}
                  height={640}
                  loading="lazy"
                  decoding="async"
                  className="h-32 w-32 border border-border-strong object-cover"
                />
                <p className="mt-5 font-display text-xl">Sbusiso Mdingi</p>
                <p className="label-mono mt-2">Founder</p>
              </div>
              <div className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  Sbusiso Mdingi founded Sequrin and is building the company from South Africa
                  around a focused question: how can connected claims context support earlier, more
                  careful investigation?
                </p>
                <p className="leading-relaxed">
                  Sequrin grew from a question about healthcare integrity: what changes when claims
                  are treated not only as individual transactions, but as connected observations
                  within a wider risk system? That question became the basis for a platform
                  combining analytical signals, relationship intelligence and an
                  investigator-centred workflow.
                </p>
                <p className="leading-relaxed">
                  The founder's objective is to build useful claims-integrity infrastructure without
                  confusing analytical confidence with decision authority. Sequrin is designed to
                  help people see more, investigate better and make accountable decisions through
                  the processes that already carry that responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">Contact</p>
              <h2 className="mt-4 text-3xl md:text-4xl">
                Start with one real claims-integrity question.
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                If you work in a medical scheme, claims integrity, investigations, analytics or
                governance and want to explore where Sequrin could fit, get in touch.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PUBLIC_CONTACT_MAILTO}
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {PUBLIC_CONTACT_EMAIL}
              </a>
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
