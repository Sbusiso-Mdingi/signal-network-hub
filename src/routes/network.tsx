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
          "The Secure Integrity Network is Sequrin's longer-term direction for governed cross-organisation claims-integrity collaboration; it is not a live service today.",
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
              Sequrin's direction for cross-organisation integrity intelligence
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
              <h2 className="mt-4 text-3xl md:text-5xl">The network is a future direction.</h2>
            </div>
            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Right now Sequrin is focused on helping authorised teams understand claims signals,
                relationships and investigation context inside their own organisation.
              </p>
              <p>
                Sequrin is not running a national cross-scheme network today. Any future shared
                service would require a distinct operating model, participant agreements and the
                controls described in our <Link to="/governance" className="text-primary underline-offset-4 hover:underline">governance principles</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <p className="label-mono">What a network would need</p>
            <h2 className="mt-4 max-w-4xl text-3xl leading-tight md:text-5xl">
              Participation requires a higher governance standard.
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
              Controlled publication, evidence standards and correction rights
            </h2>
            <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
              A future network would need to help authorised participants recognise relevant
              relationships without creating an unrestricted data pool or automatic fraud register.
              Shared information would require an identified publisher, an evidence basis, defined
              recipients and a practical route to challenge or correct the record.
            </p>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">Where we are now</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Explore the current product scope.</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The product page covers the organisation-bound workspace now under development;
                the About page explains the company stage and longer-term direction.
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
