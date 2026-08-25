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
              A South African company focused on connected claims intelligence
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin Technologies builds investigation software for medical schemes and
              claims-integrity teams. The founder-led company is focused on connected claims
              intelligence, explainable signals and a practical workspace for developing and
              reviewing cases.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div>
              <p className="label-mono">Why Sequrin exists</p>
              <h2 className="mt-4 text-3xl md:text-5xl">Claims investigations need a connected field of view.</h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>Integrity teams often have the records they need but not a coherent way to move between them. A provider history may sit in one system, claim detail in another, and investigation notes somewhere else entirely.</p>
              <p>Sequrin grew from the idea that those fragments should be examined as a connected system. The product direction follows from that premise: preserve the relationships, show the analytical rationale and give investigators a usable place to develop the case.</p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div><p className="label-mono">How the company is building</p><h2 className="mt-4 text-3xl md:text-5xl">Close to the work, careful about the claims.</h2></div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>Development centres on the working habits of investigators: what they need to understand a signal, how they move through related records, and what must remain visible when another person reviews the case.</p>
              <p>The product already spans browser and desktop investigation experiences. The next meaningful company milestone is a controlled evaluation that can show where it helps, where it creates noise and what needs to change.</p>
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
                <p>That question turned into a platform built around analytical signals, relationship intelligence and the way investigators actually work. My job now is to test that premise rigorously with the people who understand claims-integrity work from the inside.</p>
                <p className="text-sm">Sequrin is being developed through Sequrin Technologies, a South African registered company (Enterprise No. 2026/662912/07).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">Contact</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Contact the Sequrin team.</h2>
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
