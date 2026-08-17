import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { NetworkVisual } from "@/components/site/NetworkVisual";
import { APP_SIGN_IN_URL, PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sequrin | Healthcare Claims Integrity" },
      {
        name: "description",
        content:
          "Sequrin is a healthcare claims-integrity platform designed to help medical schemes and authorised integrity teams connect analytical signals, relationships and investigative context.",
      },
      { property: "og:title", content: "Sequrin | Healthcare Claims Integrity" },
      {
        property: "og:description",
        content:
          "Connect analytical signals, relationships and investigative context so suspicious activity can be examined as a pattern, not just a collection of isolated claims.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sequrin.tech/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sequrin",
          alternateName: "Secure Integrity Network",
          url: "https://sequrin.tech",
          email: PUBLIC_CONTACT_EMAIL,
          founder: {
            "@type": "Person",
            name: "Sbusiso Mdingi",
          },
          description:
            "Sequrin is a healthcare claims-integrity technology platform designed for medical schemes and authorised claims-integrity teams.",
        }),
      },
    ],
  }),
  component: HomePage,
});

const capabilities = [
  {
    id: "01",
    title: "Signal detection",
    body: "Rules, statistics and models look for activity that stands out. What they find is a lead worth checking, not a verdict.",
  },
  {
    id: "02",
    title: "Network intelligence",
    body: "See how a claim connects to other claims, providers, members and facilities — the relationships a single record won't show you.",
  },
  {
    id: "03",
    title: "Investigation workspace",
    body: "Evidence, connected entities and case notes live in one workspace, so investigators aren't piecing a case together across five tabs.",
  },
  {
    id: "04",
    title: "Governance and access",
    body: "Roles, permissions and organisation boundaries are built in from the start, not bolted on because someone asked.",
  },
];

const impactPoints = [
  {
    title: "Protect finite healthcare resources",
    body: "Claims leakage draws from the same pool that pays for care. Catching it earlier means less of that pool disappears before it does its job.",
  },
  {
    title: "Focus investigative capacity",
    body: "Investigators only have so many hours. Connected context should point that time at the activity actually worth chasing.",
  },
  {
    title: "Strengthen local capability",
    body: "Every scheme that builds this kind of capability strengthens the broader pool of analytical and investigative skill in South African healthcare.",
  },
];

function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="relative border-b border-border">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <p className="label-mono">Healthcare claims integrity</p>
              <h1 className="mt-5 text-4xl leading-[1.08] md:text-6xl">
                A claim can look fine on its own. The pattern around it might not.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                We're building tools for medical schemes and claims-integrity teams to see how
                claims connect — through shared providers, timing, members, facilities — so a
                review isn't just one record in isolation. It's still early. What exists today is a
                working product and a clear idea of where it's going, not a finished national
                system.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/product"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Explore the product
                </Link>
                <a
                  href={APP_SIGN_IN_URL}
                  className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
                >
                  Sign In
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>We surface leads</span>
                <span aria-hidden="true">•</span>
                <span>You investigate</span>
                <span aria-hidden="true">•</span>
                <span>Access stays locked down</span>
              </div>
            </div>
            <div className="border border-border bg-surface p-4">
              <NetworkVisual className="w-full" />
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label-mono">The problem</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Risk usually isn't visible in one claim. It's visible across a few.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Most of the useful signal isn't in any single claim, it's in the pattern across
                several: the same provider showing up too often, timing that doesn't add up, a
                member connected to a cluster of related activity. We're building Sequrin to
                surface that kind of context without jumping to conclusions on your behalf.
              </p>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {[
                ["Claim", "Looks routine in isolation"],
                ["Provider", "Appears across related activity"],
                ["Member", "Connects multiple events"],
                ["Facility", "Shares repeated relationships"],
                ["Timing", "Reveals clustering or recurrence"],
                ["Network", "Turns separate records into context"],
              ].map(([key, value]) => (
                <div key={key} className="bg-background p-6">
                  <p className="label-mono">{key}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{value}</p>
                </div>
              ))}
              <div className="bg-background p-6 sm:col-span-2">
                <p className="text-sm leading-relaxed">
                  This isn't about calling something fraud. It's about noticing it early enough to
                  actually ask the right question.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="label-mono">The product</p>
                <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                  Everything an investigator needs, in one place.
                </h2>
              </div>
              <Link
                to="/product"
                className="text-sm text-primary underline-offset-4 hover:underline"
              >
                Explore the product →
              </Link>
            </div>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
              {capabilities.map((capability) => (
                <article key={capability.id} className="bg-background p-8 md:p-10">
                  <p className="label-mono">{capability.id}</p>
                  <h3 className="mt-4 text-2xl">{capability.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{capability.body}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-4">
              {[
                [
                  "01",
                  "Connect",
                  "Bring relevant claims and integrity data into a governed analytical context.",
                ],
                [
                  "02",
                  "Detect",
                  "Rules, models and network analysis surface what deserves a second look.",
                ],
                [
                  "03",
                  "Investigate",
                  "Review evidence, relationships and context through an authorised workflow.",
                ],
                ["04", "Decide", "The call stays with your team, through your process."],
              ].map(([number, title, body]) => (
                <div key={number} className="bg-surface p-6">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
            <Link
              to="/how-it-works"
              className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
            >
              See how Sequrin works →
            </Link>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">Why it matters</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              This isn't just about catching bad claims.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
              Every rand lost to claims leakage is a rand that didn't go toward care. We're
              building Sequrin because the operational side of claims integrity, the tooling, the
              visibility, the investigative capacity, has real room to get better, and better
              tooling here has a real effect on how far scheme funds actually stretch.
            </p>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
              {impactPoints.map((point) => (
                <article key={point.title} className="bg-background p-8">
                  <h3 className="text-2xl">{point.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Around 9 million South Africans rely on medical schemes for private healthcare access
              (CMS, 2023/24). That's the scale stronger integrity processes are meant to protect.
            </p>
            <Link
              to="/impact"
              className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
            >
              Explore the wider impact →
            </Link>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="label-mono">Accountable by design</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">Signals are not verdicts.</h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                We help people investigate faster and with better context. We don't make the call
                for them, that's not what this is for.
              </p>
              <Link
                to="/governance"
                className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
              >
                Read about governance →
              </Link>
            </div>
            <div className="border border-border bg-surface p-8 md:p-10">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Detection creates a signal. Investigation establishes context. Humans remain
                responsible for consequential decisions.
              </p>
              <ul className="mt-8 space-y-4 text-muted-foreground">
                {[
                  "Something unusual is a reason to look, not a verdict.",
                  "We don't reject claims, hold payments, or hand out sanctions. That's not our job.",
                  "Sensitive work stays behind access controls and organisation boundaries.",
                  "The important stuff, investigations, admin actions, leaves a paper trail.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="label-mono">Secure Integrity Network</p>
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
                Why the name is "Sequrin."
              </h2>
              <div className="mt-6 max-w-2xl space-y-5 leading-relaxed text-muted-foreground">
                <p>
                  Right now, Sequrin works inside one organisation at a time, no data crosses
                  scheme boundaries.
                </p>
                <p>
                  The name points at something bigger, though: a future where schemes could see
                  integrity patterns that cross those boundaries, with the right access rules and
                  evidence standards in place. We're not there. That groundwork, the governance,
                  the access model, the evidence bar, has to come first, and it's what we're
                  actually building right now.
                </p>
              </div>
              <Link
                to="/network"
                className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
              >
                Explore the network vision →
              </Link>
            </div>
            <div className="grid gap-px border border-border bg-border">
              <div className="bg-background p-8">
                <p className="label-mono">Sequr</p>
                <p className="mt-3 font-display text-3xl">Secure</p>
              </div>
              <div className="bg-background p-8">
                <p className="label-mono">IN</p>
                <p className="mt-3 font-display text-3xl">Integrity Network</p>
              </div>
              <div className="bg-background p-8">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Sequrin is pronounced "Securing." It's a nod to what we're actually trying to do,
                  protect claims integrity through context people can trust, not guess at.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">For medical schemes</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                See where Sequrin fits into your claims-integrity operation.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Want to see how this could work for your team? Have a look at the product, or just
                email us, we're happy to talk through what a careful first pilot would actually
                look like.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                <a
                  href={PUBLIC_CONTACT_MAILTO}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {PUBLIC_CONTACT_EMAIL}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                to="/for-medical-schemes"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                For medical schemes
              </Link>
              <a
                href={PUBLIC_CONTACT_MAILTO}
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
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
