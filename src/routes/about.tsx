import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sequrin" },
      {
        name: "description",
        content:
          "The story behind Sequrin, a South African healthcare claims-integrity company combining analytical signals, network intelligence and investigation workflow for medical schemes.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/about/" }],
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
              Sequrin is a South African healthcare claims-integrity company helping medical schemes
              and their integrity teams surface patterns worth investigating and give investigators
              better context without turning the software into the thing that makes the call.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div>
              <p className="label-mono">Why Sequrin exists</p>
              <h2 className="mt-4 text-3xl md:text-5xl">A claim is a record. A pattern is a relationship.</h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>Claims-integrity work gets hard when the evidence that actually matters is scattered across claims, providers, members, facilities, services and time.</p>
              <p>Sequrin started from a simple observation: a claim can look completely normal on its own while the relationships around it tell a different story. The platform pulls those relationships into view so investigators can see where it is actually worth spending time.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">The platform</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Claims intelligence, connected context and investigation workflow.</h2>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              Sequrin brings the analytical and investigative parts of claims integrity into one
              connected workspace while keeping consequential decisions with authorised people and
              processes.
            </p>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              <article className="bg-surface p-7"><p className="label-mono">Product</p><h3 className="mt-3 text-xl">Connected claims review</h3><p className="mt-3 text-sm text-muted-foreground">Browser and desktop experiences bring claims, related entities, signals and investigation context into a focused review workflow.</p></article>
              <article className="bg-surface p-7"><p className="label-mono">Analytics</p><h3 className="mt-3 text-xl">Explainable signals</h3><p className="mt-3 text-sm text-muted-foreground">Rules, statistics and models help surface unusual activity while keeping the reasons behind a signal visible to the investigator.</p></article>
              <article className="bg-surface p-7"><p className="label-mono">Governance</p><h3 className="mt-3 text-xl">Human decision ownership</h3><p className="mt-3 text-sm text-muted-foreground">Sequrin supports review and investigation; the medical scheme retains responsibility for consequential decisions and actions.</p></article>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[minmax(260px,320px)_1fr] md:py-24 lg:gap-16">
            <figure className="aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-border-strong bg-background">
              <img
                src="/sbusiso-mdingi-founder.webp"
                alt="Sbusiso Mdingi, founder of Sequrin"
                className="h-full w-full object-cover object-[50%_24%]"
              />
            </figure>
            <div>
              <p className="label-mono">Founder</p>
              <h2 className="mt-3 text-3xl md:text-5xl">Sbusiso Mdingi</h2>
              <div className="mt-6 max-w-3xl space-y-5 leading-relaxed text-muted-foreground">
                <p>I started Sequrin because of one question I couldn't stop thinking about: what changes if you treat claims not as isolated transactions, but as observations inside a much bigger connected system?</p>
                <p>That question turned into a platform built around analytical signals, relationship intelligence and the way investigators actually work. My goal is to help people see more and investigate better, then leave the consequential decision with the people and processes that are actually accountable for it.</p>
                <p className="text-sm">Sequrin operates through Sequrin Technologies, a South African registered company (Enterprise No. 2026/662912/07).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">Contact</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Bring us one real claims-integrity question.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">If you work in a medical scheme, claims integrity, investigations, analytics or governance and want to see where Sequrin might fit, get in touch.</p>
            </div>
            <div className="flex gap-3">
              <a href={PUBLIC_CONTACT_MAILTO} className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">{PUBLIC_CONTACT_EMAIL}</a>
              <Link to="/product" className="rounded-md border border-border-strong px-6 py-3 text-sm">Explore the product</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
