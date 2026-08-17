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
              A claim makes more sense once you can see what's around it.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is a South African healthcare claims-integrity company. We're building it to
              help medical schemes and their integrity teams spot patterns worth investigating and
              give investigators better context, without turning our software into the thing that
              actually makes the call.
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
                Claims-integrity work gets hard when the evidence that actually matters is
                scattered across claims, providers, members, facilities, services and time.
              </p>
              <p className="leading-relaxed">
                Sequrin started from a simple observation: a claim can look completely normal on
                its own while the relationships around it tell a different story. Statistics, rules,
                machine learning and network analysis can pull those relationships into view, so
                investigators know where it's actually worth spending time.
              </p>
              <p className="leading-relaxed">
                We're not trying to automate judgement. We're trying to make complex activity
                easier to investigate, help stretched integrity teams focus on the right questions,
                and support better-informed decisions about how finite healthcare money gets spent.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <figure className="max-w-4xl">
              <blockquote className="font-display text-3xl leading-snug md:text-4xl">
                "Good detection should give you a question worth asking, not a verdict."
              </blockquote>
              <figcaption className="label-mono mt-6">Product philosophy</figcaption>
            </figure>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
            <div>
              <p className="label-mono">The name</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Sequrin, pronounced "Securing."</h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                The name is a nod to where we're eventually headed:
                <span className="text-primary"> Secure Integrity Network</span>.
              </p>
              <p className="leading-relaxed">
                "Sequr" is short for secure, "in" for Integrity Network. It reflects something we
                actually believe: claims integrity gets stronger when useful relationships can be
                understood, without giving up the governance that has to sit around sensitive
                healthcare information.
              </p>
              <p className="leading-relaxed">
                That network doesn't exist yet, and we're not pretending it does. Right now we're
                focused on the analytical, investigative and governance groundwork that would need
                to be in place before broader collaboration across organisations makes sense.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="label-mono">Built in South Africa</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Built around the realities of medical-scheme claims here, first.
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground">
              <p className="text-lg leading-relaxed text-foreground">
                We're building Sequrin in South Africa, where healthcare affordability, tight
                scheme budgets and the state of claims-integrity operations have real consequences
                for members and for how sustainable healthcare financing stays. The sector covers
                roughly 9 million beneficiaries, but that number has barely moved in almost a decade
                (CMS, 2023/24; Alexander Forbes Medical Aid Insights 2022/2023), which makes
                getting more out of existing resources more important than chasing growth.
              </p>
              <p className="leading-relaxed">
                That local starting point matters to us. We want to build analytical and
                investigative infrastructure that holds up against real operational needs, while
                also contributing to local skills in software engineering, analytics, investigation,
                administration and governance as the company grows.
              </p>
              <p className="leading-relaxed">
                Wider healthcare or public-sector use might be possible down the line, but that
                would need its own evidence, procurement process, privacy review, integration work
                and oversight. We're not claiming that's happening now.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="label-mono">Current stage</p>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Foundation first, network later.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Sequrin is early-stage. Right now the priority is proving the product actually
                makes claims-integrity work more useful and more accountable, before we make bigger
                claims about scale.
              </p>
            </div>
            <div className="mt-12 border-y border-border">
              {[
                [
                  "01",
                  "Product foundation",
                  "Signal detection scoped to each organisation, network context, investigation workflows, access controls, and a proper audit trail.",
                ],
                [
                  "02",
                  "Scheme evaluation",
                  "Work with medical schemes on bounded claims-integrity questions and actually measure whether it helped: investigative relevance, review efficiency, context quality, confirmed financial effect.",
                ],
                [
                  "03",
                  "Governed network direction",
                  "Only once the foundations are proven do we look at broader cross-organisational collaboration, with its own rules around participation, evidence and publication.",
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
                  I started Sequrin because of one question I couldn't stop thinking about: what
                  changes if you treat claims not as isolated transactions, but as observations
                  inside a much bigger, connected system? I'm building it from South Africa, and I
                  want it to earn its place before I say much more than that.
                </p>
                <p className="leading-relaxed">
                  That question turned into a platform: analytical signals, relationship
                  intelligence, and a workflow built around how investigators actually work, not how
                  a dashboard looks in a demo.
                </p>
                <p className="leading-relaxed">
                  My goal is to build claims-integrity infrastructure that's actually useful,
                  without confusing "the model flagged it" with "we decided it." Sequrin should help
                  people see more and investigate better, then get out of the way of the people and
                  processes that are actually accountable for the decision.
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
                Bring us one real claims-integrity question.
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                If you work in a medical scheme, claims integrity, investigations, analytics or
                governance and want to see where Sequrin might fit, get in touch.
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
