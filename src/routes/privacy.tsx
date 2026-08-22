import { createFileRoute } from "@tanstack/react-router";
import { PublicLegalPage } from "@/components/site/PublicLegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Website Privacy Notice | Sequrin" },
      { name: "description", content: "How Sequrin Technologies (Pty) Ltd handles information on sequrin.com and through ordinary business communications." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/privacy/" }],
  }),
  component: PrivacyPage,
});

const sections = [
  { title: "Responsible organisation", paragraphs: ["Sequrin Technologies (Pty) Ltd, enterprise number 2026/662912/07, is a South African healthcare-technology company. Privacy, PAIA and rights enquiries may be sent to info@sequrin.com. Information Officer registration evidence is being verified; this notice does not publish an unverified registration claim."] },
  { title: "What the current website processes", paragraphs: ["The reviewed public site has no contact form, visitor account, advertising tracker or non-essential analytics. Hosting and network services may process limited request and security data to deliver and protect the site.", "If you email Sequrin, the company processes your contact details, message and related correspondence to respond, manage the relationship, keep necessary records and protect its rights and systems."] },
  { title: "Synthetic demonstrations", paragraphs: ["Current product demonstrations use synthetic and development data. Do not send medical claims, patient details, fraud allegations, credentials or investigation evidence through the public email address."] },
  { title: "Future customer processing", paragraphs: ["A future controlled claims evaluation requires a documented customer role, purpose, lawful basis, contract, retention, recipients, safeguards and rights route. Sequrin does not use identifiable or pseudonymised customer claims for general model training, and a risk signal is not a fraud finding or automatic adverse decision."] },
  { title: "Sharing, retention and security", paragraphs: ["Information is shared only where necessary and lawful. POPIA transfer safeguards apply where required. Correspondence and logs are retained for a justified period, then deleted or de-identified. Sequrin applies safeguards proportionate to the information and does not claim an unevidenced certification."] },
  { title: "Rights and contact", paragraphs: ["Subject to POPIA, PAIA and third-party rights, you may ask about access, correction, deletion or objection by emailing info@sequrin.com. The PAIA Manual explains record requests, and complaints may be made through the Information Regulator's official channels."] },
];

function PrivacyPage() {
  return <PublicLegalPage eyebrow="Website Privacy Notice" title="Privacy starts with an accurate description of what exists now." lead="This notice covers sequrin.com and ordinary business communications. It does not claim that Sequrin currently operates a production medical-scheme service." updated="Last updated 22 August 2026" sections={sections} />;
}
