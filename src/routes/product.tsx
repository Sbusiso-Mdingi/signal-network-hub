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
    title: "Signals stay investigative",
    body: "Analytical output can prioritise attention. It does not establish fraud or make a claims decision.",
  },
  {
    title: "Access stays governed",
    body: "Roles, permissions and organisational boundaries determine who can enter sensitive claims-integrity workflows.",
  },
  {
    title: "Actions stay accountable",
    body: "Important investigative and administrative activity can remain traceable rather than disappearing into an informal process.",
  },
  {
    title: "Consequential decisions stay human",
    body: "Sequrin does not reject claims, withhold payment or impose sanctions from a detection result.",
  },
];

const operatingFlow = [
  ["01", "Connect", "Bring relevant claims and integrity data into a governed analytical context."],
  [
    "02",
    "Detect",
    "Surface unusual activity through rules, statistical methods and network analysis.",
  ],
  [
    "03",
    "Investigate",
    "Bring signals, relationships, evidence and review history into one structured workspace.",
  ],
  [
    "04",
    "Decide",
    "Keep consequential conclusions and claims decisions with accountable human processes.",
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
              From isolated claims to connected investigation.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin brings signal detection, relationship intelligence and structured
              investigation into one governed workspace for medical schemes and authorised
              claims-integrity teams. It helps teams decide what deserves attention without turning
              analytical output into an automated claims decision.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span>Signals, not verdicts</span>
              <span aria-hidden="true">•</span>
              <span>Connected investigative context</span>
              <span aria-hidden="true">•</span>
              <span>Human-led decisions</span>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">01 · Signal detection</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Surface the activity worth examining.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Rules, statistical methods and analytical models can surface unusual activity into a
                prioritised review queue. Signals help scarce investigative attention move toward
                patterns that warrant closer examination.
              </p>
              <p className="mt-5 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                A signal is an investigative lead. It does not establish misconduct or change the
                payment status of a claim.
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
                See relationships individual records can hide.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Sequrin can connect claims, providers, members, facilities, timing and other
                relevant relationships into investigative context. Investigators can move beyond a
                single record and examine the structure around it.
              </p>
              <p className="mt-5 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                A relationship is context, not proof of misconduct. Network structure helps
                investigators ask better questions.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">03 · Investigation workspace</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Turn a signal into a traceable investigation.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Authorised investigators can bring signals, connected entities, evidence and review
                history into a structured case workspace. The investigation becomes a coherent
                process rather than a collection of disconnected analytical outputs and notes.
              </p>
              <p className="mt-5 border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">
                Investigators establish context and remain responsible for findings and
                consequential decisions.
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
                The product boundary is part of the product.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Claims-integrity tooling handles sensitive information and can influence where
                investigators focus. Sequrin is designed so analytical capability sits inside
                explicit access, organisational and decision boundaries.
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
                Detection creates a signal. Investigation establishes context. Humans remain
                accountable for consequential decisions.
              </p>
              <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted-foreground">
                A detection result cannot itself reject, delay or withhold a claim, impose a
                sanction, or publish a shared-network notice. Those boundaries are deliberate parts
                of how Sequrin is designed to operate.
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
            <p className="label-mono">One operating flow</p>
            <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
              The pieces work together around investigation.
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
                A clearer operating layer for claims-integrity teams.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                See how Sequrin can fit into a medical scheme's claims-integrity operation, from
                analytical attention through human-led investigation and governed administration.
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
