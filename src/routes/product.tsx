import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product | Sequrin" },
      {
        name: "description",
        content:
          "Explore how Sequrin connects signal detection, network intelligence and human-led investigation in a governed healthcare claims-integrity workspace.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/product" }],
  }),
  component: ProductPage,
});

const guardrails = [
  {
    title: "A signal gives you somewhere to look",
    body: "Analytical output helps prioritise attention. It does not turn itself into a fraud finding or a claims decision.",
  },
  {
    title: "Access follows the job",
    body: "Roles, permissions and organisation boundaries decide who can reach sensitive claims-integrity work, not simply who has an account.",
  },
  {
    title: "The important actions leave a trail",
    body: "Investigation and administrative activity can be reviewed later instead of disappearing into email threads, spreadsheets and memory.",
  },
  {
    title: "The consequential calls stay with people",
    body: "Sequrin does not reject a claim, hold a payment or impose a sanction because a model surfaced something unusual.",
  },
];

const operatingFlow = [
  ["01", "Connect", "Bring the claims and integrity data you actually need into one analytical context."],
  [
    "02",
    "Detect",
    "Use rules, statistics, models and network analysis to find activity worth a second look.",
  ],
  [
    "03",
    "Investigate",
    "Review the signal, connected relationships, evidence and case history in one workspace.",
  ],
  [
    "04",
    "Decide",
    "Your authorised process decides what the evidence means and what happens next.",
  ],
];

function ProductShot({
  src,
  alt,
  caption,
  eager = false,
}: {
  src: string;
  alt: string;
  caption: string;
  eager?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border-strong bg-card shadow-[0_22px_70px_rgba(0,0,0,0.24)]">
      <img
        src={src}
        alt={alt}
        width={768}
        height={459}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="block h-auto w-full"
      />
      <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function ProductPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Product</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              See the claim. Then see everything connected to it.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin brings detection, relationship intelligence and investigation into one place
              for medical-scheme integrity teams. The point is simple: help your investigators get
              from "something looks off" to useful context faster, without handing the actual
              decision to the software.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Find what stands out</span>
              <span aria-hidden="true">•</span>
              <span>See what connects</span>
              <span aria-hidden="true">•</span>
              <span>Investigate in context</span>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">01 · Signal detection</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Find what is worth a second look.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Rules, statistics and analytical models look across activity for patterns that stand
                out. Instead of dropping every anomaly into the same pile, Sequrin helps turn that
                output into a prioritised queue your investigators can actually work through.
              </p>
              <p className="mt-5 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                A signal is the start of the question. It is not the answer.
              </p>
            </div>
            <ProductShot
              src="/assets/product/signal-intelligence.webp"
              alt="Illustrative Sequrin signal intelligence workspace showing a prioritised investigation queue and analytical context."
              caption="Illustrative Sequrin signal-intelligence view using synthetic data."
              eager
            />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-24 lg:grid-cols-[1.28fr_0.72fr] lg:items-center">
            <ProductShot
              src="/assets/product/network-intelligence.webp"
              alt="Illustrative Sequrin network intelligence workspace showing connected provider, member, facility and claim entities."
              caption="Illustrative Sequrin network-intelligence view using synthetic data."
            />
            <div className="lg:order-2">
              <p className="label-mono text-primary">02 · Network intelligence</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                See what one record leaves out.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                A claim can make perfect sense in isolation and still sit inside a pattern that
                deserves attention. Sequrin connects claims with providers, members, facilities,
                timing and other relevant relationships so investigators can see the structure
                around the record, not just the record itself.
              </p>
              <p className="mt-5 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                A connection is context. Your investigator still has to work out what it means.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">03 · Investigation workspace</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Keep the case together once you start digging.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Signals, connected entities, evidence, notes and review history can live in one
                structured case workspace. That means less time reconstructing what happened across
                separate systems and more time understanding whether the evidence actually supports
                further action.
              </p>
              <p className="mt-5 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                The workspace supports the investigation. The investigator owns the reasoning.
              </p>
            </div>
            <ProductShot
              src="/assets/product/investigation-workspace.webp"
              alt="Illustrative Sequrin investigation workspace showing evidence, signal context, a decision boundary and investigation history."
              caption="Illustrative Sequrin investigation workspace using synthetic data."
            />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono text-primary">04 · Governance and access</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Sensitive work needs more than a login screen.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Claims-integrity teams handle sensitive information and decisions that can have real
                consequences. So access, authority and auditability are part of the product itself,
                not a compliance layer we plan to add later.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              {guardrails.map((guardrail) => (
                <article key={guardrail.title} className="bg-background p-7 md:p-8">
                  <h3 className="text-xl">{guardrail.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {guardrail.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 border border-border-strong bg-surface p-7 md:p-9">
              <p className="font-display text-2xl leading-snug md:text-3xl">
                Sequrin helps you find the question, build the case and keep the work traceable.
                Your organisation still makes the call.
              </p>
              <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                That separation matters most when a decision could affect a claim, payment, sanction
                or future shared-network action. Those decisions stay inside the authorised process
                that is accountable for them.
              </p>
              <Link
                to="/governance"
                className="mt-6 inline-flex text-sm text-primary underline-offset-4 hover:underline"
              >
                Explore Sequrin governance →
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">How the pieces fit</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              One workflow from raw activity to a decision you can explain.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-4">
              {operatingFlow.map(([number, title, body]) => (
                <article key={number} className="bg-background p-6">
                  <p className="label-mono text-primary">{number}</p>
                  <h3 className="mt-3 text-xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
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

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">For medical schemes</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                Want to see how it fits around the way your team already works?
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                We can start with one bounded claims-integrity question and work from there, using
                your investigators, your governance boundaries and measures agreed before the pilot
                begins.
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
                to="/how-it-works"
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                How it works
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
