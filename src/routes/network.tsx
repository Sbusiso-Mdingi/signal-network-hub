import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Long-term network direction | Sequrin" },
      {
        name: "description",
        content:
          "Learn about Sequrin's longer-term Secure Integrity Network direction and the governance needed for responsible cross-organisation claims-integrity collaboration.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/network/" }],
  }),
  component: NetworkPage,
});

const requirements = [
  ["Clear purpose", "Everyone involved needs to know what can be shared, why it is being shared and who has authority to use it."],
  ["Evidence and correction", "Shared integrity information needs an evidence standard, controlled publication and a real way to challenge or correct it when the facts change."],
  ["Proof that it helps", "Usefulness, false positives, bias and operational impact need to be measured before wider participation makes sense."],
];

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
              Sequrin is pronounced “Securing”. The name comes from Secure Integrity Network, the
              longer-term idea behind the company: helping authorised healthcare organisations
              understand important claims-integrity relationships that no one participant could see
              on its own.
            </p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:py-24">
            <div>
              <p className="label-mono">What exists today</p>
              <h2 className="mt-4 text-3xl md:text-5xl">Build the foundation first.</h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Right now Sequrin is focused on helping authorised teams understand claims signals,
                relationships and investigation context inside their own organisation.
              </p>
              <p>
                The broader network comes later. We are not running a national cross-scheme network
                today, and we are not building a shortcut that turns local suspicion into a shared
                conclusion.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">What a network would need</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              More participation means a higher bar, not a lower one.
            </h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
              {requirements.map(([title, body]) => (
                <article key={title} className="bg-background p-7">
                  <h3 className="text-xl">{title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">The line we would keep</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Connect the context. Do not spread the conclusion.
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              A useful network should help authorised participants recognise relationships they
              could not see alone. It should not become an unrestricted data pool, an automatic
              fraud register or a place where one investigator can publish an allegation to
              everyone else.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">Where we are now</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Start with the claims-integrity workspace.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The immediate job is simpler: make analysis and investigation useful inside one
                organisation, prove that it works, and build the governance that anything broader
                would depend on.
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/product" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Explore the product</Link>
              <Link to="/about" className="rounded-md border border-border-strong px-6 py-3 text-sm">About Sequrin</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
