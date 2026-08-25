import { createFileRoute } from "@tanstack/react-router";
import { PublicLegalPage } from "@/components/site/PublicLegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Website Terms | Sequrin" },
      { name: "description", content: "Terms governing use of the public Sequrin website and its product information." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/terms/" }],
  }),
  component: TermsPage,
});

const sections = [
  { title: "Product information", paragraphs: ["The site describes Sequrin's product capabilities, company and longer-term direction. Interface views may use demonstration data. Nothing on the site is medical, claims, forensic, legal or investment advice; a promise of savings or detection accuracy; an offer to provide a regulated service; or evidence of a customer deployment, regulatory approval or certification."] },
  { title: "Lawful use", paragraphs: ["You may view the site and share links for ordinary informational use. Do not interfere with security, access restrictions or availability; reverse engineer protected software; imply endorsement; remove notices; or use protected content to train a competing model without written permission or a lawful exception."] },
  { title: "Intellectual property and links", paragraphs: ["Sequrin owns or lawfully uses the site content, brand and software material. Third-party material remains its owners' property. External links are provided for convenience; Sequrin does not control their continued availability or content."] },
  { title: "Availability and liability", paragraphs: ["The site is provided as available. To the maximum extent permitted by law, Sequrin is not liable for indirect or consequential loss from informational site use. Nothing excludes liability that cannot lawfully be excluded or applicable consumer rights."] },
  { title: "Privacy, law and contact", paragraphs: ["The Privacy Notice explains current information handling and the PAIA Manual explains record requests. South African law applies; courts with jurisdiction in Gauteng are non-exclusive. Send legal or intellectual-property notices to info@sequrin.com."] },
];

function TermsPage() {
  return <PublicLegalPage eyebrow="Website Terms" title="Terms of Use for sequrin.com" lead="These terms govern sequrin.com, operated by Sequrin Technologies (Pty) Ltd, enterprise number 2026/662912/07." updated="Last updated 22 August 2026" sections={sections} />;
}
