import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Claims integrity product | Sequrin" },
      {
        name: "description",
        content:
          "A product tour of Sequrin's claims review, network intelligence, risk signals and investigation workspace for medical-scheme integrity teams.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/product/" }],
  }),
  component: ProductPage,
});

const features = [
  {
    label: "Network intelligence",
    title: "See what a single record leaves out.",
    body: "Claims rarely exist in isolation. Connected views bring providers, members, facilities, timing and related claims into the same picture so investigators can see the relationships around an unusual record, not just the record itself.",
    src: "/assets/product/connected-claims-network.webp",
    alt: "Sequrin network view connecting synthetic claim, member and provider tokens.",
  },
  {
    label: "Claims review",
    title: "A queue that tells you why something is worth a look.",
    body: "Claim state, risk context and investigation status can sit together instead of being scattered across separate tools. Investigators can see what surfaced, why it surfaced and where to go next.",
    src: "/assets/product/claims-review-queue.webp",
    alt: "Sequrin claims review queue using synthetic claim and entity tokens.",
  },
  {
    label: "Desktop workspace",
    title: "Keep the work in one place.",
    body: "The desktop workspace is built around focused claims review inside an organisation's own boundary. It gives authorised users a dedicated view of the work without creating a second, disconnected version of the investigation.",
    src: "/assets/product/desktop-overview.webp",
    alt: "Sequrin desktop overview using an illustrative medical scheme and synthetic claim totals.",
  },
  {
    label: "Risk signals",
    title: "Show why something surfaced.",
    body: "Scores are more useful when the rules, related activity and claim context sit beside them. Sequrin keeps that rationale close to the record, where an investigator can inspect it without switching tools.",
    src: "/assets/product/desktop-risk-signals.webp",
    alt: "Sequrin desktop risk-signals view using synthetic claim activity.",
  },
];

const foundations = [
  ["Signal intelligence", "Rules, statistics and models find activity worth a second look and explain what drew attention to it."],
  ["Investigation workflow", "Claims, evidence, relationships, notes and case history can stay together instead of being rebuilt from scattered alerts."],
  ["Governed access", "Roles, permissions, organisation boundaries and a traceable record of important actions are built into how the workspace is meant to operate."],
];

function ProductPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Product</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              The Sequrin claims-integrity workspace
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin brings claims review, relationship intelligence, signal rationale and case
              context into one place for medical-scheme integrity teams. Each view is designed to
              reduce the time spent reconstructing an investigation across disconnected systems.
            </p>
          </div>
        </section>

        {features.map((feature, index) => (
          <section
            key={feature.label}
            className={`border-b border-border ${index % 2 === 0 ? "bg-surface" : ""}`}
          >
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
              <div className={index % 2 ? "lg:order-2" : ""}>
                <p className="label-mono text-primary">{feature.label}</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{feature.title}</h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">{feature.body}</p>
              </div>
              <figure className={index % 2 ? "lg:order-1" : ""}>
                <img
                  src={feature.src}
                  alt={feature.alt}
                  className="w-full border border-border-strong"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <figcaption className="mt-3 text-xs text-muted-foreground">
                  Illustrative Sequrin interface using synthetic data. Product under development.
                </figcaption>
              </figure>
            </div>
          </section>
        ))}

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Product foundations</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
              The useful parts work better together.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {foundations.map(([title, body]) => (
                <article key={title} className="bg-background p-7">
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">How it works</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Follow the product through the investigation workflow.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The Approach page shows where each product capability enters the four-step process
                and what information should move forward with the work.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/how-it-works" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
                See the approach
              </Link>
              <a href={PUBLIC_CONTACT_MAILTO} className="rounded-md border border-border-strong px-6 py-3 text-sm">
                Contact Sequrin
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
