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
          "The story behind Sequrin, a South African healthcare claims-integrity company building connected investigation tools for medical schemes.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/about/" }],
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
              give investigators better context without turning the software into the thing that
              makes the call.
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
              <p>Sequrin started from a simple observation: a claim can look completely normal on its own while the relationships around it tell a different story. The aim is to pull those relationships into view so investigators know where it is actually worth spending time.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Where we are now</p>
            <h2 className="mt-4 text-3xl md:text-5xl">Foundation first, network later.</h2>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              Sequrin is early-stage. Right now the priority is proving that the product actually
              makes claims-integrity work more useful and more accountable before we make bigger
              claims about scale.
            </p>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              <article className="bg-surface p-7"><p className="label-mono">Product</p><h3 className="mt-3 text-xl">Working prototype</h3><p className="mt-3 text-sm text-muted-foreground">Browser and desktop experiences are being developed around connected claims review and investigation context.</p></article>
              <article className="bg-surface p-7"><p className="label-mono">Evaluation</p><h3 className="mt-3 text-xl">Test it properly</h3><p className="mt-3 text-sm text-muted-foreground">The next step is a bounded evaluation with real investigators and clear measures of whether the product helped.</p></article>
              <article className="bg-surface p-7"><p className="label-mono">Direction</p><h3 className="mt-3 text-xl">Broader collaboration later</h3><p className="mt-3 text-sm text-muted-foreground">Only once the foundations are proven do we look seriously at cross-organisation integrity intelligence.</p></article>
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
