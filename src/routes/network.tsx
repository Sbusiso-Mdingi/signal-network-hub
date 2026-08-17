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
    title: "Participation has to be deliberate",
    body: "Being technically able to connect organisations is not enough. Every participant needs clear authority, a defined role and someone accountable for how the shared process is used.",
  },
  {
    number: "02",
    title: "Everyone needs the same evidence bar",
    body: "A suspicion, a signal and a substantiated finding are three different things. Any shared intelligence has to keep those distinctions clear instead of flattening them into one label.",
  },
  {
    number: "03",
    title: "The purpose cannot quietly expand",
    body: "Information shared for claims integrity should stay there. It should not become a general-purpose profile of a member, provider or organisation just because the data exists.",
  },
  {
    number: "04",
    title: "Investigation is not publication",
    body: "Reaching a conclusion inside one organisation should not automatically give someone the right to publish it beyond that organisation. Sharing needs a separate decision and its own authority.",
  },
  {
    number: "05",
    title: "There has to be a way to challenge the record",
    body: "Evidence changes. Conclusions can change with it. Participants need a controlled way to review, correct or withdraw shared information when the record no longer supports it.",
  },
  {
    number: "06",
    title: "The important actions need a trail",
    body: "Who accessed something, who approved publication, what changed and why should all be traceable. A network like this cannot run on memory and informal handovers.",
  },
];

const path = [
  [
    "Now",
    "Intelligence inside one organisation",
    "Connect claims and relevant entities inside a workspace governed by that organisation.",
  ],
  [
    "Now",
    "Human-led investigation",
    "Turn analytical leads into structured investigations with evidence, notes and review history.",
  ],
  [
    "Now",
    "Access you can account for",
    "Control who can enter sensitive workflows and keep the important actions traceable.",
  ],
  [
    "Direction",
    "Governed participation across organisations",
    "Only after those foundations work do we consider sharing selected integrity intelligence under a separate governance model.",
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
              Some patterns only make sense once you can see past one organisation.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Sequrin is pronounced "Securing." The name comes from Secure Integrity Network, the
              longer-term idea behind the company: helping authorised healthcare organisations see
              important claims-integrity relationships that no one participant could see on its own.
            </p>
            <div className="mt-9 border-l border-primary pl-5 text-sm leading-relaxed text-muted-foreground md:max-w-3xl">
              We are not running a national or cross-scheme network today. Right now we're building
              the analysis, investigation and governance foundations that would have to work before
              responsible collaboration between organisations is even worth considering.
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
            <div>
              <p className="label-mono text-primary">Why a network?</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                If everyone sees one piece, nobody sees the whole pattern.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                One scheme might see a provider relationship. Another might see the same facility
                appearing in an unusual pattern. A third might be looking at a cluster of claims
                that seems unrelated. On their own, none of those views necessarily tells you much.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                The network idea is to make useful relationships visible across those boundaries
                without turning every suspicion into a shared conclusion or opening one scheme's
                entire data estate to another.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                South Africa has over 70 registered medical schemes, both open and restricted. Each
                works inside its own governed boundary, which means a pattern spanning several of
                them may be invisible to every participant looking at its data alone.
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
                Connect the context. Do not spread the conclusion.
              </h2>
            </div>

            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              <article className="bg-surface p-7 md:p-9">
                <p className="label-mono text-primary">What we're building toward</p>
                <h3 className="mt-4 text-2xl">Governed integrity intelligence</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>Useful relationships and integrity context that meet an agreed evidence bar.</li>
                  <li>Named participants with a clear purpose and defined access.</li>
                  <li>Separate authority for investigation, publication and review.</li>
                  <li>A record of decisions, plus a way to correct them when the evidence changes.</li>
                </ul>
              </article>

              <article className="bg-background p-7 md:p-9">
                <p className="label-mono">What we are not building</p>
                <h3 className="mt-4 text-2xl">A shared blacklist</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <li>No automatic fraud registry built from detection scores.</li>
                  <li>No unrestricted pooling of scheme data.</li>
                  <li>No automatic claim rejection or payment hold because something was shared.</li>
                  <li>No one investigator publishing an allegation to every participant.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono text-primary">Governance before scale</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Sharing across organisations should be harder than working inside one.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              A bigger network can reveal more, but mistakes also travel further. If access is too
              broad, the evidence bar is vague or publication is too easy, scale makes the problem
              worse. So the rules have to be settled before the network grows, not after.
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
            <p className="label-mono">How we get there</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              The network comes last, not first.
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
                Because some repeat patterns will never fit neatly inside one scheme.
              </h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Claims-integrity teams work inside organisational boundaries. The behaviour they're
                investigating does not always respect those same lines. A carefully governed network
                could help participating schemes notice recurring structures earlier and start with
                more context when they investigate.
              </p>
              <p>
                But the network is only useful if people can trust how information got there, who can
                see it, how it can be challenged and what it is allowed to influence. Governance is
                not the paperwork around the idea. It is the part that makes the idea viable.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_auto] md:items-end md:py-24">
            <div>
              <p className="label-mono">Build the foundation first</p>
              <h2 className="mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
                First prove that Sequrin helps one integrity team do better work.
              </h2>
              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                That's the immediate job: help medical-scheme teams connect signals, relationships
                and investigation inside a governed workflow, then measure whether it was actually
                useful. Broader network participation only makes sense after that foundation holds.
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
