import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Policies | Sequrin" },
      { name: "description", content: "Reserved policy pages for Sequrin." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/policies" }],
  }),
  component: PoliciesPage,
});

const policies = [
  { id: "privacy", title: "Privacy Policy", body: "Placeholder reserved for Sequrin's public privacy policy." },
  { id: "terms", title: "Terms of Use", body: "Placeholder reserved for Sequrin's public website and service terms." },
  { id: "security", title: "Security & Responsible Disclosure", body: "Placeholder reserved for security information and a responsible disclosure process." },
];

function PoliciesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Policies</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] md:text-6xl">Public policy pages are being prepared.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">The links are reserved now so the public site structure does not need to change when the full policies are published.</p>
          </div>
        </section>
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="divide-y divide-border border-y border-border">
              {policies.map((policy) => (
                <section id={policy.id} key={policy.id} className="scroll-mt-24 py-8">
                  <h2 className="text-2xl md:text-3xl">{policy.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{policy.body}</p>
                </section>
              ))}
            </div>
            <p className="mt-10 text-sm text-muted-foreground">Policy enquiries: <a href={PUBLIC_CONTACT_MAILTO} className="text-foreground underline-offset-4 hover:underline">{PUBLIC_CONTACT_EMAIL}</a></p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
