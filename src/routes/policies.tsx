import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Website notices | Sequrin" },
      {
        name: "description",
        content: "Privacy, website-use and contact information for the public Sequrin website.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/policies/" }],
  }),
  component: PoliciesPage,
});

const policies = [
  {
    id: "privacy",
    title: "Privacy on this website",
    body: "The public website does not currently provide a contact form or use analytics, advertising trackers or cookies. Hosting and network providers may process routine technical request data needed to deliver and protect the service under their own terms.",
  },
  {
    id: "email",
    title: "Email contact",
    body: "Email is intended for business, partnership and website enquiries. Never send patient, member, claim, clinical, credential or other sensitive information to the public inbox.",
  },
  {
    id: "terms",
    title: "Informational use",
    body: "This website describes an early-stage company and technology under development. Its content is general information, not clinical, legal, financial or claims-decision advice.",
  },
  {
    id: "security",
    title: "Security enquiries",
    body: "General concerns about the public website can be sent to Sequrin. Do not include sensitive healthcare data, credentials or exploit details in an initial message, and do not test systems without written authorisation.",
  },
];

function PoliciesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Website notices</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
              How this public website operates.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              These notices cover the public website at sequrin.tech. They do not cover the
              authenticated Sequrin application or any future customer agreement.
            </p>
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
            <p className="mt-10 text-sm text-muted-foreground">
              Policy enquiries:{" "}
              <a
                href={PUBLIC_CONTACT_MAILTO}
                className="text-foreground underline-offset-4 hover:underline"
              >
                {PUBLIC_CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
