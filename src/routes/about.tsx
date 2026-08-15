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
          "Sequrin, pronounced “Securing,” represents Secure Integrity Network, infrastructure being built to help healthcare claims-integrity teams detect signals and investigate connected activity.",
      },
      { property: "og:title", content: "About Sequrin | Secure Integrity Network" },
      {
        property: "og:description",
        content: "Why Sequrin is being built, what the name means, and who is behind it.",
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
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">About Sequrin</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] md:text-6xl">
              Claims-integrity work is harder when the evidence is fragmented.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Potentially related behaviour is often spread across individual claims, entities,
              organisations, datasets and time. Sequrin is being developed to provide
              infrastructure that helps authorised claims-integrity teams detect investigative
              signals, understand relationships and support responsible collaboration.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <figure className="max-w-3xl">
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
                Sequrin represents <span className="text-primary">Secure Integrity Network</span>.
              </p>
              <p className="leading-relaxed">
                Individual organisations naturally have visibility into their own claims
                environment. Some relationships only become apparent when appropriately governed
                information can be understood across organisational boundaries. Sequrin is being
                built toward infrastructure that can support that broader claims-integrity view,
                with governance and accountability designed in from the start.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="label-mono">Founder</p>
            <div className="mt-8 grid gap-10 border border-border bg-surface p-8 md:grid-cols-[200px_1fr] md:p-12">
              <div>
                <img
                  src="/sbusiso-mdingi-founder.jpg"
                  alt="Sbusiso Mdingi, founder of Sequrin"
                  width={400}
                  height={400}
                  className="h-32 w-32 border border-border-strong object-cover"
                />
                <p className="mt-5 font-display text-xl">Sbusiso Mdingi</p>
                <p className="label-mono mt-2">Founder</p>
              </div>
              <div className="space-y-5 text-muted-foreground">
                <p className="leading-relaxed">
                  Sbusiso Mdingi has a background in Actuarial Science, with interests spanning
                  statistical modelling, quantitative risk, machine learning and network analysis.
                  His work has focused on using data and analytical methods to understand complex
                  risk relationships rather than treating individual observations in isolation.
                </p>
                <p className="leading-relaxed">
                  Sbusiso founded Sequrin from an interest in how these methods could be applied to
                  healthcare claims integrity. Claims that appear ordinary individually can form
                  more meaningful patterns when relationships between providers, members,
                  facilities, services and time are considered together. Sequrin is being built
                  around that idea, combining analytical models, deterministic rules and network
                  intelligence to help claims-integrity teams identify activity worth investigating.
                </p>
                <p className="leading-relaxed">
                  A central principle behind Sequrin is that analytical detection should support
                  professional judgement rather than replace it. The platform is designed to surface
                  investigative signals and make complex relationships easier to examine, while
                  leaving consequential decisions with authorised human investigators and the
                  organisations responsible for them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl">Interested in Sequrin?</h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                For product, partnership, pilot or other business enquiries.
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
                to="/"
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                Back to overview
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
