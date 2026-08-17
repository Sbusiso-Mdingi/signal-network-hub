import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Privacy and website notices | Sequrin" },
      {
        name: "description",
        content:
          "Privacy, data-protection, website-use and contact information for Sequrin, including access to the full Sequrin Privacy Policy.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/policies/" }],
  }),
  component: PoliciesPage,
});

const policies = [
  {
    id: "privacy",
    title: "Privacy and data protection",
    body: "Sequrin processes personal information within a privacy and governance framework designed for South Africa's healthcare claims-integrity environment. Depending on the processing context, Sequrin may act as a Responsible Party for its own operations or as an Operator processing customer-controlled information on behalf of a medical scheme or other authorised customer. Sequrin does not sell personal information and does not reuse identifiable or pseudonymised customer claims data to train or improve its own general models.",
    href: "/privacy/",
    linkLabel: "Read the full Sequrin Privacy Policy",
  },
  {
    id: "email",
    title: "Email contact",
    body: "Email is intended for business, partnership and website enquiries. Never send patient, member, claim, clinical, credential or other sensitive information to the public inbox unless Sequrin has expressly provided an authorised secure method for doing so.",
  },
  {
    id: "terms",
    title: "Informational use",
    body: "This website describes an early-stage company and technology under development. Its content is general information, not clinical, legal, financial or claims-decision advice. Customer-specific processing, security and retention terms may be supplemented by applicable agreements.",
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
            <p className="label-mono">Privacy and website notices</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
              Privacy, accountability and responsible use.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              These notices summarise how the public website operates and provide access to
              Sequrin&apos;s full Privacy Policy, which addresses the public website, the
              authenticated Sequrin service and Sequrin&apos;s role when processing information for
              authorised customers.
            </p>
          </div>
        </section>
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="divide-y divide-border border-y border-border">
              {policies.map((policy) => (
                <section id={policy.id} key={policy.id} className="scroll-mt-24 py-8">
                  <h2 className="text-2xl md:text-3xl">{policy.title}</h2>
                  <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                    {policy.body}
                  </p>
                  {policy.href ? (
                    <a
                      href={policy.href}
                      className="mt-4 inline-flex text-sm text-primary underline-offset-4 hover:underline"
                    >
                      {policy.linkLabel} →
                    </a>
                  ) : null}
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
              . Privacy enquiries may be directed to the Information Officer at{" "}
              <a
                href="mailto:sbusiso@sequrin.tech"
                className="text-foreground underline-offset-4 hover:underline"
              >
                sbusiso@sequrin.tech
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
