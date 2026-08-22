import { createFileRoute } from "@tanstack/react-router";
import { PublicLegalPage } from "@/components/site/PublicLegalPage";

export const Route = createFileRoute("/paia")({
  head: () => ({
    meta: [
      { title: "PAIA Manual | Sequrin" },
      {
        name: "description",
        content:
          "Section 51 PAIA Manual for Sequrin Technologies (Pty) Ltd, including records, request procedures and POPIA particulars.",
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
      "Sequrin Technologies (Pty) Ltd is a South African private company, enterprise number 2026/662912/07, incorporated on 19 August 2026. The head of the private body and Information Officer is Sbusiso Mdingi, Director. PAIA and privacy requests may be sent to info@sequrin.com.",
      "Street address / registered office: 1918 Potomac Street, Rietvallei, Krugersdorp, Gauteng, 1754. Postal address: the same address. Sequrin does not currently maintain a dedicated business telephone number and does not use fax; email is the primary contact channel.",
      "The street address is published for statutory contact and manual-availability purposes. It is not represented as a public walk-in office. Physical inspection or delivery should be arranged in advance through info@sequrin.com.",
    ],
  },
  {
    title: "Purpose and legal basis",
    paragraphs: [
      "This manual is prepared under section 51 of the Promotion of Access to Information Act 2 of 2000 (PAIA), as amended, and includes the personal-information particulars required by section 51(1)(c) following the amendments introduced by the Protection of Personal Information Act 4 of 2013 (POPIA).",
      "It explains what records Sequrin may hold, what is ordinarily available without a formal request, how to request access and the relevant POPIA particulars. Publication of a record category does not mean every record in that category will be disclosed; each request remains subject to PAIA, third-party procedures and applicable grounds for refusal.",
    ],
  },
  {
    title: "Information Regulator guide, forms and assistance",
    paragraphs: [
      "The Information Regulator publishes the current Guide on how to use PAIA, prescribed request forms, fee information and complaint channels at inforegulator.org.za/paia/. The Guide explains the objects of PAIA and POPIA, how to make requests, available assistance, fees and remedies.",
      "A requester should use the current prescribed private-body request form and fee rules in force when the request is made.",
    ],
  },
  {
    title: "Records available without a PAIA request",
    paragraphs: [
      "Public pages on sequrin.com, published policies and notices, public marketing and company information released by Sequrin, and corporate facts made publicly searchable through CIPC or another lawful public register are ordinarily available through their normal public channels.",
      "Sequrin does not currently rely on a separate section 52(2) notice for these records. Voluntary public availability does not waive copyright, intellectual-property rights, confidentiality obligations, security restrictions or limits on bulk reuse.",
    ],
  },
  {
    title: "Records maintained under other legislation",
    paragraphs: [
      "Depending on the record and circumstances, Sequrin creates or maintains records under the Companies Act 71 of 2008; the Promotion of Access to Information Act 2 of 2000; the Protection of Personal Information Act 4 of 2013; the Tax Administration Act 28 of 2011; and the Income Tax Act 58 of 1962. Additional statutory record categories will be added when they become applicable.",
      "Access to a statutory record remains subject to the access rules, confidentiality provisions and other restrictions in the legislation governing that record.",
    ],
  },
  {
    title: "Subjects and categories of records",
    paragraphs: [
      "Sequrin may hold corporate and statutory records; governance and compliance records; finance and tax records; people and contractor records where applicable; customer and commercial records; product, research and intellectual-property records; privacy and security records; and website and communications records.",
      "Examples include incorporation records, the memorandum of incorporation, resolutions, governance registers, policies, accounts, invoices, proposals, contracts, correspondence, source code, architecture, models, synthetic datasets, test results, research records, licences, processing records, access logs, risk and impact assessments, incidents, vendor reviews and published website material.",
      "The fact that Sequrin holds a category of record does not create an automatic right of access. Confidentiality, privacy, legal privilege, third-party rights, safety, security, intellectual property and trade-secret protections may apply.",
    ],
  },
  {
    title: "How to request access",
    paragraphs: [
      "Use the current prescribed private-body request form; identify the requested record with enough detail for a reasonable search; identify the right to be exercised or protected and explain why the record is required; and provide proportionate proof of identity and, where acting for another person, authority.",
      "Send the request to info@sequrin.com with the subject 'PAIA request'. Electronic submission is preferred. If physical delivery or inspection is required, arrange it in advance through the same email address. Pay only a fee lawfully required under the current PAIA fee rules after receiving a valid notice.",
      "Sequrin will record the request, verify the requester where necessary, conduct a reasonable search, consider third-party notice requirements and statutory refusal grounds, and communicate its decision within the period prescribed by PAIA. The ordinary decision period is 30 days, subject to any lawful extension. There is no internal appeal from a private-body decision; a requester may use the Information Regulator complaint process or approach a court where PAIA permits.",
    ],
  },
  {
    title: "POPIA: purposes and data subjects",
    paragraphs: [
      "Sequrin may process personal information for corporate administration and governance; legal and regulatory compliance; finance and banking administration; management of customers, prospective customers, partners, vendors and advisers; recruitment and contracting where applicable; operation and security of websites, systems and development environments; communications and rights requests; protection of Sequrin's rights and systems; authorised research, product development, testing and demonstrations; and separately approved and contracted customer-controlled claims-integrity services.",
      "Current or prospective data subjects may include directors, shareholders and beneficial owners; customers and prospective customers; partners; vendors, advisers and service providers; applicants and contractors; website users and correspondents; and regulators or other authorities. Information may include identity, contact, corporate-role, ownership, organisation, correspondence, contract, financial, application, technical-request and security information.",
      "Real medical-scheme, member, beneficiary, provider or claims information, health information, alleged unlawful conduct and derived risk or investigative signals require a documented role, purpose, lawful basis, contract or instruction set, security assessment, retention rules, transfer assessment and any prior authorisation required by law before processing begins.",
    ],
  },
  {
    title: "POPIA: recipients, transborder flows and security",
    paragraphs: [
      "Where lawful and necessary, personal information may be supplied to authorised Sequrin personnel and contractors; professional advisers, auditors and insurers; banks and financial-administration providers; approved hosting, cloud, security, communications, software-development and IT providers; customers and counterparties; and regulators, courts, law-enforcement bodies or other authorities.",
      "Sequrin may use cloud, hosting, communications, security, software-development and collaboration providers whose infrastructure, support personnel or processing operations are outside South Africa. Any transfer of personal information outside South Africa must comply with section 72 of POPIA and other applicable legal and contractual requirements. Real medical-scheme or claims information will not be transferred outside South Africa merely because a service is technically available; the actual architecture, customer instructions, contract, recipient country, safeguards and legal requirements must first permit the transfer.",
      "General safeguards include role-based access control and least privilege; authentication and credential controls; encryption in transit and where appropriate at rest; logging and audit trails; secure development and change management; vulnerability, dependency and configuration management; backup and recovery; confidentiality and supplier-security requirements; incident response; and periodic privacy and security risk review. This is not a claim that Sequrin holds a particular certification or that every control applies identically to every system.",
    ],
  },
  {
    title: "Availability, inspection and updates",
    paragraphs: [
      "The current public version of this manual is available at sequrin.com/paia/. A copy may also be requested without charge at info@sequrin.com. Inspection at the street address may be arranged in advance during reasonable business hours. The manual will be provided to the Information Regulator when lawfully required.",
      "Sequrin will review and update this manual regularly and whenever there is a material change to its contact details, record holdings, processing activities, applicable law or access procedures.",
    ],
  },
];

function PaiaPage() {
  return (
    <PublicLegalPage
      eyebrow="PAIA Manual"
      title="How to request access to a Sequrin record."
      lead="Prepared under section 51 of the Promotion of Access to Information Act 2 of 2000, as amended, and including the relevant POPIA particulars."
      updated="Version 1.0 · Published 22 August 2026"
      sections={sections}
    />
  );
}
