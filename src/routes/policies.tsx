import { createFileRoute } from "@tanstack/react-router";
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

const notices = [
  {
    id: "privacy",
    title: "Privacy",
    paragraphs: [
      "Sequrin handles different information in different roles. For our own website and business activity, we may be the Responsible Party. When a medical scheme or another authorised customer gives us claims data to process for its own claims-integrity work, we will ordinarily act as its Operator.",
      "We do not sell personal information, and we do not use identifiable or pseudonymised customer claims data to train or improve Sequrin's own general models.",
    ],
    link: { href: "/privacy/", label: "Read the full Sequrin Privacy Policy" },
  },
  {
    id: "email",
    title: "Email",
    paragraphs: [
      "Use our public email addresses for ordinary business, partnership, privacy and website enquiries. Please do not send patient records, member information, claims, clinical records, passwords or other sensitive material unless we have specifically given you a secure and authorised way to send it.",
    ],
  },
  {
    id: "terms",
    title: "About the information on this site",
    paragraphs: [
      "This website describes an early-stage company and a product that is still being developed and evaluated. It is general information, not clinical, legal, financial or claims-decision advice, and it does not create a customer relationship on its own. A customer agreement may add more specific terms around data, security, retention and use of the service.",
    ],
  },
  {
    id: "security",
    title: "Security enquiries",
    paragraphs: [
      "If you notice a security concern, tell us before testing it. Do not include sensitive healthcare data, credentials or detailed exploit material in your first message, and do not test Sequrin systems without written authorisation.",
    ],
  },
  {
    id: "application",
    title: "Application sign in",
    paragraphs: [
      "The Sign in link takes invited users to the separately hosted Sequrin application at app.sequrin.tech. The public website does not ask you to enter workspace credentials.",
    ],
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
            <p className="label-mono mt-6">Last updated 17 August 2026</p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="divide-y divide-border border-y border-border">
              {notices.map((notice, index) => (
                <section id={notice.id} key={notice.id} className="grid gap-5 py-8 md:grid-cols-[70px_1fr]">
                  <p className="label-mono">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h2 className="text-2xl md:text-3xl">{notice.title}</h2>
                    {notice.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                    {notice.link ? (
                      <a href={notice.link.href} className="mt-4 inline-flex text-sm text-primary underline-offset-4 hover:underline">
                        {notice.link.label} →
                      </a>
                    ) : null}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="label-mono">Questions</p>
              <h2 className="mt-4 text-3xl md:text-4xl">Need the detailed version?</h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                For privacy matters, contact Sbusiso Mdingi, Sequrin's Information Officer, at
                {" "}<a href="mailto:sbusiso@sequrin.tech" className="text-foreground underline-offset-4 hover:underline">sbusiso@sequrin.tech</a>.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="/privacy/" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Read the Privacy Policy</a>
              <a href={PUBLIC_CONTACT_MAILTO} className="rounded-md border border-border-strong px-6 py-3 text-sm">{PUBLIC_CONTACT_EMAIL}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
