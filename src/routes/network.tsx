import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Secure Integrity Network | Sequrin" },
      {
        name: "description",
        content:
          "Explore the longer-term Secure Integrity Network direction behind Sequrin and the governance conditions required for responsible cross-organisational claims-integrity collaboration.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/network" }],
  }),
  component: NetworkPage,
});

const networkConditions = [
  {
    number: "01",
    title: "Participation must be authorised",
    body: "An organisation should not enter a shared integrity process merely because the technology can connect data. Participation needs explicit authority, defined responsibilities and accountable ownership.",
  },
  {
    number: "02",
    title: "Evidence standards must be clear",
    body: "A suspicion, an investigative signal and a substantiated finding are not the same thing. Shared intelligence needs a standard that preserves those distinctions.",
  },
  {
    number: "03",
    title: "Purpose must stay limited",
    body: "Information should be used for a defined claims-integrity purpose rather than becoming an unrestricted data pool or a general-purpose profile of people and providers.",
  },
  {
    number: "04",
    title: "Publication must stay separate",
    body: "An investigator should not automatically gain authority to publish information beyond their organisation. Cross-organisational publication requires its own governed decision.",
  },
  {
    number: "05",
    title: "Review and correction must exist",
    body: "Participants need a controlled way to challenge, review, correct or withdraw shared integrity information when evidence changes or an earlier conclusion proves incomplete.",
  },
  {
    number: "06",
    title: "Every important action should be traceable",
    body: "Access, publication, review and correction should leave an accountable history so collaboration does not become an opaque exchange of allegations.",
  },
];

const path = [
  [
    "Now",
    "Tenant-scoped intelligence",
    "Connect claims and entities inside one governed organisational workspace.",
  ],
  [
    "Now",
    "Human-led investigation",
    "Turn analytical signals into structured investigations with evidence and review history.",
  ],
  [
    "Now",
    "Access and auditability",
    "Control who can enter sensitive workflows and keep important actions traceable.",
  ],
  [
    "Direction",
    "Governed network participation",
    "Only then extend selected integrity intelligence across authorised organisations under a separate governance model.",
  ],
];

function NetworkDiagram() {
  return (
    <div className="border border-border-strong bg-surface p-5 md:p-7">
      <svg
        viewBox="0 0 920 500"
        role="img"
        aria-label="Conceptual Secure Integrity Network diagram"
        className="block h-auto w-full"
      >
        <defs>
          <radialGradient id="networkGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.17" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="460" cy="250" r="175" fill="url(#networkGlow)" />

        <g stroke="var(--border)" strokeWidth="1.5" fill="none">
          <path d="M215 125 C300 125 330 190 385 220" />
          <path d="M215 375 C300 375 330 310 385 280" />
          <path d="M705 125 C620 125 590 190 535 220" />
          <path d="M705 375 C620 375 590 310 535 280" />
        </g>

        <g stroke="var(--primary)" strokeWidth="2" fill="none" opacity="0.85">
          <path d="M385 220 C420 200 500 200 535 220" />
          <path d="M385 280 C420 300 500 300 535 280" />
          <path d="M430 205 L430 295" />
          <path d="M490 205 L490 295" />
        </g>

        {[
          ["Scheme A", 95, 85],
          ["Scheme B", 95, 335],
          ["Scheme C", 685, 85],
          ["Scheme D", 685, 335],
        ].map(([label, x, y]) => (
          <g key={String(label)}>
            <rect
              x={Number(x)}
              y={Number(y)}
              width="140"
              height="80"
              rx="8"
              fill="var(--card)"
              stroke="var(--border)"
            />
            <circle cx={Number(x) + 26} cy={Number(y) + 40} r="8" fill="var(--accent)" />
            <text
              x={Number(x) + 46}
              y={Number(y) + 36}
              fill="var(--foreground)"
              fontSize="15"
              fontWeight="600"
            >
              {label}
            </text>
            <text
              x={Number(x) + 46}
              y={Number(y) + 55}
              fill="var(--muted-foreground)"
              fontSize="10"
            >
              governed boundary
            </text>
          </g>
        ))}

        <g>
          <rect
            x="355"
            y="190"
            width="210"
            height="120"
            rx="12"
            fill="var(--card)"
            stroke="var(--primary)"
            strokeWidth="1.5"
          />
          <circle
            cx="460"
            cy="230"
            r="15"
            fill="var(--primary)"
            fillOpacity="0.16"
            stroke="var(--primary)"
          />
          <circle cx="460" cy="230" r="5" fill="var(--primary)" />
          <text
            x="460"
            y="265"
            textAnchor="middle"
            fill="var(--foreground)"
            fontSize="17"
            fontWeight="600"
          >
            Secure Integrity Network
          </text>
          <text x="460" y="285" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">
            governed integrity intelligence
          </text>
        </g>

        <text x="460" y="465" textAnchor="middle" fill="var(--muted-foreground)" fontSize="10">
          Conceptual future-state architecture. Not a representation of a live cross-scheme network.
        </text>
      </svg>
    </div>
  );
}

function NetworkPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Secure Integrity Network</p>
            <h1 className="mt-5 max-w-5xl text-4xl leading-[1.08] md:text-6xl">
              Integrity risks do not stop at the edge of one claim, one provider or one
              organisation.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is pronounced “Securing”. Its name comes from Secure Integrity Network, a
              longer-term direction in which authorised healthcare organisations could understand
              significant claims-integrity relationships that no single participant can see alone.
            </p>
            <div className="mt-9 border-l border-primary pl-5 text-sm leading-relaxed text-muted-foreground md:max-w-3xl">
              This is a development direction, not a claim that a national or cross-scheme Sequrin
              network is currently operating. The product today is focused on the analytical,
              investigative and governance foundation that responsible collaboration would require.
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">Why a network?</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                A pattern can be invisible when every organisation sees only its own fragment.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                One organisation may see a provider relationship. Another may see a recurring
                facility pattern. A third may see a separate cluster of unusual claims.
                Individually, those observations may appear unrelated.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                The network idea is that carefully governed integrity intelligence could make
                important relationships visible without erasing organisational boundaries or turning
                suspicion into a shared verdict.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                South Africa has over 70 registered medical schemes, both open and restricted. Each
                operates within its own governed boundary. A pattern visible across those boundaries
                may therefore be entirely invisible to any individual participant.
              </p>
            </div>
            <NetworkDiagram />
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="max-w-3xl">
              <p className="label-mono">The distinction matters</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                A network should connect context, not spread conclusions.
              </h2>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              <article className="bg-surface p-7 md:p-9">
                <p className="label-mono text-primary">The direction</p>
                <h3 className="mt-4 text-2xl">Governed integrity intelligence</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>Relevant relationships and substantiated integrity context.</li>
                  <li>Defined participants, purposes and access boundaries.</li>
                  <li>Separate authority for investigation, publication and review.</li>
                  <li>Traceable decisions and mechanisms for correction.</li>
                </ul>
              </article>

              <article className="bg-background p-7 md:p-9">
                <p className="label-mono">What it is not</p>
                <h3 className="mt-4 text-2xl">A shared blacklist</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>Not an automatic fraud registry built from detection scores.</li>
                  <li>Not unrestricted pooling of scheme data.</li>
                  <li>Not a mechanism for automatic claim rejection or payment withholding.</li>
                  <li>
                    Not a system where one investigator can publish an allegation to every
                    participant.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono text-primary">Governance before scale</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Cross-organisational intelligence needs a higher bar than an internal investigation.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              The value of a network grows with participation, but so does the consequence of
              getting access, evidence or publication wrong. Responsible expansion therefore depends
              on explicit conditions rather than technical connectivity alone.
            </p>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {networkConditions.map((condition) => (
                <article key={condition.number} className="bg-background p-7">
                  <p className="label-mono text-primary">{condition.number}</p>
                  <h3 className="mt-4 text-xl">{condition.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {condition.body}
                  </p>
                </article>
              ))}
            </div>

            <Link
              to="/governance"
              className="mt-8 inline-flex text-sm text-primary underline-offset-4 hover:underline"
            >
              Read the governance model →
            </Link>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">The path</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              The network is not the starting point. It is what the foundation is being built
              toward.
            </h2>

            <div className="mt-12 border-y border-border">
              {path.map(([state, title, body], index) => (
                <div
                  key={title}
                  className="grid gap-4 border-b border-border py-7 last:border-b-0 md:grid-cols-[90px_260px_1fr] md:items-baseline md:gap-8"
                >
                  <span
                    className={state === "Direction" ? "label-mono text-primary" : "label-mono"}
                  >
                    {state}
                  </span>
                  <h3 className="text-xl md:text-2xl">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="mr-3 font-mono text-xs text-primary">0{index + 1}</span>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_0.9fr] md:items-start md:py-24">
            <div>
              <p className="label-mono text-primary">Why build toward it?</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Because systemic patterns can require systemic visibility.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Claims-integrity teams work inside organisational boundaries, but some relationships
                can span those boundaries. A carefully governed network could help authorised
                participants recognise recurring structures earlier and investigate them with better
                context.
              </p>
              <p>
                That potential only matters if the network preserves due process, evidence quality,
                privacy, organisational authority and human accountability. The governance is
                therefore not an obstacle to the network. It is what would make the network
                credible.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">Build the foundation first</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                Start with one organisation, one governed workflow and evidence that the model adds
                value.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                Sequrin's immediate focus is helping medical-scheme claims-integrity teams connect
                signals, relationships and investigation. Responsible network participation comes
                later, after the operating and governance foundation is proven.
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
                to="/governance"
                className="rounded-md border border-border-strong px-6 py-3 text-sm transition-colors hover:bg-secondary"
              >
                Governance
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
