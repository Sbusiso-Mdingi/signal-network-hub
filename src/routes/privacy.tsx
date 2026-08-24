import { createFileRoute } from "@tanstack/react-router";
import { PublicLegalPage } from "@/components/site/PublicLegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Website Privacy Notice | Sequrin" },
      {
        name: "description",
        content:
          "How Sequrin Technologies (Pty) Ltd handles information on sequrin.com and through ordinary business communications.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/privacy/" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Responsible organisation",
    paragraphs: [
      "Sequrin Technologies (Pty) Ltd, enterprise number 2026/662912/07, is a South African healthcare-technology company. Privacy, PAIA and data-subject rights enquiries may be sent to info@sequrin.com.",
      "Sbusiso Mdingi is Sequrin's registered Information Officer. Sequrin's Information Regulator organisation registration number is 2026-064989, registered on 22 August 2026.",
    ],
  },
  {
    title: "What the current website processes",
    paragraphs: [
      "The reviewed public site has no contact form, visitor account, advertising tracker or non-essential analytics. Hosting and network services may process limited request and security information, such as IP address, browser or device information, requested resource and time, to deliver and protect the site.",
      "If you email Sequrin, the company processes your contact details, message and related correspondence to respond, manage the relationship, keep necessary records and protect its rights and systems.",
    ],
  },
  {
    title: "Product demonstration data",
    paragraphs: [
      "Product views available on the public site use synthetic demonstration data. The public site is not a channel for submitting medical claims, patient details, fraud allegations, credentials or investigation evidence. Do not send that information through the public email address.",
    ],
  },
  {
    title: "Customer and evaluation data",
    paragraphs: [
      "Where Sequrin undertakes a controlled claims evaluation, processing is governed by a documented customer role, purpose, lawful basis, contract, impact assessment, security review, retention approach, recipients, transfer safeguards, rights route and prior-authorisation assessment where applicable.",
      "Sequrin does not have standing approval to use identifiable or pseudonymised customer claims for general model training. A risk signal is not a fraud finding or an automatic payment, recovery or sanction decision.",
    ],
  },
  {
    title: "Sharing and international processing",
    paragraphs: [
      "Information is shared only where necessary and lawful, including with approved technology providers, professional advisers, counterparties and authorities. Provider locations, remote support and onward processing are assessed for the actual service, and POPIA section 72 safeguards apply where required.",
    ],
  },
  {
    title: "Retention and security",
    paragraphs: [
      "Correspondence and technical logs are retained only for a justified business, security, contractual or legal period and are then deleted or de-identified in accordance with Sequrin's retention rules. Customer and evaluation data is subject to the applicable agreement, approved processing schedule and retention requirements.",
      "Sequrin requires safeguards proportionate to the information and maturity of the relevant service. No public statement should be read as an unevidenced security, privacy or regulatory certification.",
    ],
  },
  {
    title: "Your rights and contact",
    paragraphs: [
      "Subject to POPIA, PAIA and third-party rights, you may ask about access, correction, deletion or objection by emailing info@sequrin.com. The PAIA Manual explains record requests, and complaints may be made through the Information Regulator's official channels.",
    ],
  },
];

function PrivacyPage() {
  return (
    <PublicLegalPage
      eyebrow="Website Privacy Notice"
      title="Privacy and responsible data handling at Sequrin."
      lead="This notice explains how Sequrin Technologies (Pty) Ltd handles information through sequrin.com and ordinary business communications."
      updated="Last updated 24 August 2026"
      sections={sections}
    />
  );
}
