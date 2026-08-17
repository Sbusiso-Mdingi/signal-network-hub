import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { PUBLIC_CONTACT_EMAIL, PUBLIC_CONTACT_MAILTO } from "@/lib/siteLinks";

export const Route = createFileRoute("/policies")({
  head: () => ({
    meta: [
      { title: "Policies and website notices | Sequrin" },
      {
        name: "description",
        content:
          "Privacy, website-use, security and contact notices for Sequrin, with access to the full Sequrin Privacy Policy.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/policies/" }],
  }),
  component: PoliciesPage,
});

const policies = [
  {
    id: "privacy",
    title: "Privacy",
    body: "Sequrin handles different information in different roles. For our own website and business activity, we may be the Responsible Party. When a medical scheme or another authorised customer gives us claims data to process for its own claims-integrity work, we will ordinarily act as its Operator. We do not sell personal information, and we do not use identifiable or pseudonymised customer claims data to train or improve Sequrin's own general models.",
    to: "/privacy" as const,
    linkLabel: "Read the full Privacy Policy",
  },
  {
    id: "email",
    title: "Email",
    body: "Use our public email addresses for ordinary business, partnership, privacy and website enquiries. Please do not send patient records, member information, claims, clinical records, passwords or other sensitive material unless we have specifically given you a secure and authorised way to send it.",
  },
  {
    id: "terms",
    title: "About the information on this site",
    body: "This website describes an early-stage company and a product that is still being developed and evaluated. It is general information, not clinical, legal, financial or claims-decision advice, and it does not create a customer relationship on its own. A customer agreement may add more specific terms around data, security, retention and use of the service.",
  },
  {
    id: "security",
    title: "Security enquiries",
    body: "If you notice a security concern, tell us before testing it. Do not include sensitive healthcare data, credentials or detailed exploit material in your first message, and do not test Sequrin systems without written authorisation.",
  },
];

function PoliciesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Policies and notices</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
              The practical rules for using and contacting Sequrin.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              This is the short version. Our full Privacy Policy explains how we handle personal
              information across the public website, the authenticated service and customer-controlled
              claims data in much more detail.
            </p>
            <Link
              to="/privacy"
              className="mt-7 inline-flex text-sm text-primary underline-offset-4 hover:underline"
            >
              Read the full Privacy Policy →
            </Link>
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
                  {"to" in policy ? (
                    <Link
                      to={policy.to}
                      className="mt-4 inline-flex text-sm text-primary underline-offset-4 hover:underline"
                    >
                      {policy.linkLabel} →
                    </Link>
                  ) : null}
                </section>
              ))}
            </div>

            <div className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              <p>
                General policy questions can go to{" "}
                <a
                  href={PUBLIC_CONTACT_MAILTO}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {PUBLIC_CONTACT_EMAIL}
                </a>
                .
              </p>
              <p className="mt-2">
                For privacy matters, contact Sbusiso Mdingi, Sequrin&apos;s Information Officer, at{" "}
                <a
                  href="mailto:sbusiso@sequrin.tech"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  sbusiso@sequrin.tech
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
