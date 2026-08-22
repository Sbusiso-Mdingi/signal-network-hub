import { createFileRoute } from "@tanstack/react-router";
import { PublicLegalPage } from "@/components/site/PublicLegalPage";

export const Route = createFileRoute("/paia")({
  head: () => ({
    meta: [
      { title: "PAIA Manual | Sequrin" },
      { name: "description", content: "The PAIA Manual for Sequrin Technologies (Pty) Ltd, including records, request steps and POPIA particulars." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/paia/" }],
  }),
  component: PaiaPage,
});

const sections = [
  { title: "Private body", paragraphs: ["Sequrin Technologies (Pty) Ltd, enterprise number 2026/662912/07, was incorporated on 19 August 2026. Its registered office and company-record location is 1918 Potomac Street, Rietvallei, Krugersdorp, Gauteng, 1754. The head of the private body is the sole recorded director, Sbusiso Mdingi.", "Requests may be sent to info@sequrin.com. No Information Regulator registration number is published because registration evidence has not yet been located."] },
  { title: "Guide and records", paragraphs: ["Use the current private-body request form and fee rules published by the Information Regulator. Record categories may include corporate, governance, finance, people, customer, commercial, product, research, intellectual-property, privacy, security and website records.", "Access may be limited by confidentiality, personal-information, third-party, legal, security and trade-secret protections. No production medical-scheme dataset or customer deployment was evidenced when this manual was prepared."] },
  { title: "Available without a request", paragraphs: ["Public website pages, public policies, CIPC-searchable corporate facts and public marketing material are available through their normal channels. Voluntary availability does not waive intellectual-property, confidentiality or bulk-reuse restrictions."] },
  { title: "How to request a record", paragraphs: ["Complete the current prescribed private-body form; identify the record and the right to be exercised or protected; provide proportionate identity and authority evidence; and send it to info@sequrin.com with the subject 'PAIA request', or deliver it to the registered office. Pay only a fee authorised by the current rules after a valid notice.", "Sequrin will record receipt, verify the requester, search reasonably, consider third-party notice and refusal grounds, and communicate its decision within the applicable period. There is no internal appeal from a private-body decision."] },
  { title: "POPIA particulars", paragraphs: ["Current purposes include corporate administration, legal compliance, finance, business relationships, website and security operations and responding to communications. A future claims pilot requires a settled role, lawful basis, contract, impact assessment, security review, transfer map and prior-authorisation decision."] },
  { title: "Availability and control", paragraphs: ["This page is the publication copy of the manual. A signed approval and publication record must be retained in Sequrin's controlled corporate repository. Current forms and channels are available from the Information Regulator at inforegulator.org.za/paia/."] },
];

function PaiaPage() {
  return <PublicLegalPage eyebrow="PAIA Manual" title="How to request access to a Sequrin record." lead="Prepared under section 51 of the Promotion of Access to Information Act 2 of 2000 and including relevant POPIA particulars." updated="Version 0.9 · 22 August 2026" sections={sections} />;
}
