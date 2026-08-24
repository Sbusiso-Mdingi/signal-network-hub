import { createFileRoute } from "@tanstack/react-router";
import { PublicLegalPage } from "@/components/site/PublicLegalPage";

export const Route = createFileRoute("/paia")({
  head: () => ({
    meta: [
      { title: "PAIA Manual | Sequrin" },
      {
        name: "description",
        content:
          "Sequrin Technologies (Pty) Ltd's section 51 PAIA Manual, including access procedures and POPIA particulars.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/paia/" }],
  }),
  component: PaiaPage,
});

const sections = [
  {
    title: "Private body and contact details",
    paragraphs: [
      "Sequrin Technologies (Pty) Ltd, enterprise number 2026/662912/07, is a South African private company. Its principal place of business and registered office is 1918 Potomac Street, Rietvallei, Krugersdorp, Gauteng, 1754.",
      "The head of the private body and Information Officer is Sbusiso Mdingi, Chief Executive Officer. Sequrin is registered with the Information Regulator under organisation registration number 2026-064989, registered on 22 August 2026. The Information Officer appointment date is 19 August 2026. There is currently no Deputy Information Officer.",
      "PAIA requests and access enquiries may be sent to info@sequrin.com or +27 84 222 0684. Physical inspection or delivery at the principal place of business should be arranged in advance because the premises are not operated as a public reception office.",
    ],
  },
  {
    title: "Purpose and the Information Regulator Guide",
    paragraphs: [
      "This Manual is prepared under section 51 of the Promotion of Access to Information Act 2 of 2000, as amended. It explains the records Sequrin holds, how to request a record, and the personal-information particulars required of a private body following the POPIA amendments.",
      "The Information Regulator publishes the PAIA Guide, current prescribed forms, fee information and complaint procedures at inforegulator.org.za/paia/. For public inspection at Sequrin's principal place of business, the Guide is made available in English and isiZulu by prior arrangement through info@sequrin.com.",
    ],
  },
  {
    title: "Records available without a formal request",
    paragraphs: [
      "Public website and statutory publications may be available without a formal PAIA request, including this Manual, the Website Privacy Notice, Cookie and Tracking Statement, Website Terms, public company information, public product descriptions and public contact details.",
      "Voluntary publication does not waive copyright, confidentiality, intellectual-property, security or lawful bulk-reuse restrictions applicable to a record.",
    ],
  },
  {
    title: "Records held and other legislation",
    paragraphs: [
      "Record subjects may include corporate and statutory records; governance and compliance; finance and tax; people; customers and commercial relationships; product, research and intellectual property; privacy and security; and website and communications records.",
      "Applicable record frameworks include the Companies Act 71 of 2008, PAIA, POPIA, the Tax Administration Act 28 of 2011 and the Income Tax Act 58 of 1962, together with other legislation applicable to the particular record. Listing a category does not mean that access cannot lawfully be refused.",
    ],
  },
  {
    title: "How to request access to a record",
    paragraphs: [
      "Use the current prescribed Form 02 from the Information Regulator. Identify the record with enough detail for a reasonable search, identify the right you seek to exercise or protect and explain why the record is required for that purpose, state the preferred form of access, and provide proportionate proof of identity and authority where relevant.",
      "Send the request to info@sequrin.com with the subject 'PAIA request', or arrange lawful physical delivery. Sequrin will record the request, conduct a reasonable search, apply any required third-party procedure and communicate its decision within the period required by PAIA, subject to a lawful extension.",
    ],
  },
  {
    title: "Fees, refusal grounds and remedies",
    paragraphs: [
      "Request, deposit and access fees are governed by PAIA and the Regulations. Sequrin will not require payment other than as authorised by the applicable rules.",
      "Access may be refused only on a lawful basis, including where applicable protection of third-party privacy, commercial or confidential information, safety and property, legal privilege, Sequrin's commercial information or protected research information. There is no statutory internal appeal from a decision of the head of a private body. A requester or affected third party may use the Information Regulator complaint process and applicable court remedies.",
    ],
  },
  {
    title: "Processing of personal information",
    paragraphs: [
      "Sequrin acts as Responsible Party for personal information processed for its own corporate and operational purposes. Where Sequrin processes information on a customer's documented instructions, the POPIA role is determined by the actual processing activity, contract and law.",
      "Current purposes include corporate administration, legal compliance, finance, business relationships, recruitment or contracting where applicable, website and system security, responding to communications and regulatory matters, and research and product development using information authorised for that environment.",
      "Sequrin's current claims-product R&D environment is restricted to genuinely synthetic, non-re-identifiable data. Real customer claims, health or clinical information is not authorised for ordinary development or demonstration.",
    ],
  },
  {
    title: "Data subjects, recipients and transfers",
    paragraphs: [
      "Current data-subject categories may include directors, shareholders and beneficial owners; customers and prospective customers; partners; vendors and advisers; applicants, contractors or personnel where applicable; website users and correspondents; and regulators or authorities.",
      "Where necessary and lawful, information may be supplied to authorised Sequrin personnel or contractors, professional advisers, financial-administration providers, approved hosting/cloud/security/communications providers, customers or counterparties, and regulators, courts or authorities.",
      "Technology providers may involve infrastructure, support personnel or subprocessors outside South Africa. Sequrin assesses the actual provider, information exposed, storage and support locations and applies section 72 of POPIA where required. Any future customer-controlled health or claims deployment requires a deployment-specific transfer assessment before processing begins.",
    ],
  },
  {
    title: "Information security",
    paragraphs: [
      "Sequrin requires safeguards proportionate to the information and system, which may include least-privilege access, authentication and credential controls, encryption, logging and audit trails, secure development and change management, vulnerability/configuration management, resilience controls, supplier-security requirements and incident-response procedures.",
      "These are framework requirements, not a claim that every control is deployed identically in every system. Deployment-specific controls must be documented and evidenced before real customer claims or health information is authorised.",
    ],
  },
  {
    title: "Availability and updating",
    paragraphs: [
      "The current public version of this Manual is available free of charge on this page and may also be requested from info@sequrin.com. It is available for public inspection at Sequrin's principal place of business during normal business hours by prior arrangement and will be supplied to the Information Regulator upon request as required by PAIA.",
      "Sequrin reviews the Manual at least annually and when a material change affects contact details, records, processing activities, legal obligations or access procedures.",
    ],
  },
];

function PaiaPage() {
  return (
    <PublicLegalPage
      eyebrow="PAIA Manual"
      title="PAIA Manual for Sequrin Technologies (Pty) Ltd"
      lead="This manual is prepared under section 51 of the Promotion of Access to Information Act 2 of 2000, as amended, and includes relevant POPIA particulars."
      updated="Version 1.1 · 23 August 2026"
      sections={sections}
    />
  );
}
