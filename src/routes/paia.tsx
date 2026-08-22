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
      "Sequrin Technologies (Pty) Ltd is a South African private company, enterprise number 2026/662912/07. Its Information Regulator organisation registration number is 2026-064989, registered on 22 August 2026. The head of the private body and Information Officer is Sbusiso Mdingi, Chief Executive Officer (CEO), with an Information Officer appointment date of 19 August 2026. No Deputy Information Officer is currently appointed.",
      "Street address / registered office: 1918 Potomac Street, Rietvallei, Krugersdorp, Gauteng, 1754. Postal address: the same address. Telephone: 084 222 0684. Fax: not applicable. PAIA and privacy requests may be sent to info@sequrin.com.",
      "The street address is published for statutory contact and manual-availability purposes. It is not represented as a public walk-in office. Physical inspection or delivery should be arranged in advance through info@sequrin.com.",
    ],
  },
  {
    title: "Purpose and legal framework",
    paragraphs: [
      "This manual is prepared under section 51 of the Promotion of Access to Information Act 2 of 2000 (PAIA), as amended, and includes the personal-information particulars required by section 51(1)(c) following the amendments introduced by the Protection of Personal Information Act 4 of 2013 (POPIA).",
      "PAIA gives a requester a right of access to a record of a private body where the record is required for the exercise or protection of a right, the procedural requirements are met and access is not refused on a lawful ground. Listing a record category does not mean every record in that category will be disclosed.",
    ],
  },
  {
    title: "Information Regulator guide, forms and assistance",
    paragraphs: [
      "The Information Regulator publishes the current Guide on how to use PAIA, prescribed forms, fee information and complaint channels at inforegulator.org.za/paia/. The Guide explains the objects of PAIA and POPIA, how to make requests, available assistance, fees and remedies.",
      "Sequrin applies the forms and fee rules in force when a request is received. At the publication date, Form 02 is the request-for-access form, Form 03 is the outcome and fees form and Form 05 is the PAIA complaint form.",
    ],
  },
  {
    title: "Records available without a formal PAIA request",
    paragraphs: [
      "Public pages and documents on sequrin.com, published policies and notices, public marketing and company information expressly released by Sequrin, corporate facts lawfully available through CIPC or another public register, and other records expressly designated for unrestricted public access are ordinarily available through their normal public channels.",
      "Sequrin does not currently rely on a separate section 52 voluntary-disclosure notice. Public availability does not waive copyright, intellectual-property rights, confidentiality obligations, security restrictions or lawful restrictions on reuse.",
    ],
  },
  {
    title: "Records maintained under other legislation",
    paragraphs: [
      "Depending on the record and circumstances, Sequrin creates, retains or makes records available under the Companies Act 71 of 2008; the Promotion of Access to Information Act 2 of 2000; the Protection of Personal Information Act 4 of 2013; the Tax Administration Act 28 of 2011; and the Income Tax Act 58 of 1962. Additional statutory record categories will be added when they become applicable.",
      "A reference to legislation does not create a right of access beyond the rights available under that legislation or PAIA.",
    ],
  },
  {
    title: "Subjects and categories of records",
    paragraphs: [
      "Sequrin may hold corporate and statutory records; governance and compliance records; finance and tax records; people and contractor records where applicable; customer and commercial records; product, research and intellectual-property records; privacy and security records; and website and communications records.",
      "Examples include incorporation records, the memorandum of incorporation, resolutions, governance registers, policies, accounts, invoices, proposals, contracts, correspondence, source code, architecture, models, datasets, test results, research records, licences, processing records, access logs, privacy requests, risk and impact assessments, incidents, investigations, vendor reviews and published website material.",
      "Privacy, confidentiality, legal privilege, commercial information, third-party rights, safety, security, research and trade-secret protections may apply.",
    ],
  },
  {
    title: "How to request access",
    paragraphs: [
      "Use the current prescribed private-body request form (currently Form 02); identify the requested record with enough detail for a reasonable search; identify the right to be exercised or protected and explain why the record is required; state the preferred form of access; and provide proportionate proof of identity and, where acting for another person, authority.",
      "Send the completed request to info@sequrin.com with the subject 'PAIA request'. Electronic submission is preferred. If physical delivery or inspection is necessary, arrange it in advance. Pay only a fee lawfully required under PAIA and the current Regulations after receiving the prescribed notice.",
      "Sequrin will record the request, verify the requester where necessary, conduct a reasonable search, consider third-party procedures and lawful refusal grounds, and communicate its decision within the prescribed period. The ordinary decision period is 30 days, subject to a lawful extension under section 57. There is no internal appeal from a private-body decision; a requester or affected third party may use the Information Regulator complaint process or approach a competent court in accordance with PAIA.",
    ],
  },
  {
    title: "POPIA: purposes and data subjects",
    paragraphs: [
      "Sequrin may process personal information for corporate administration and governance; legal and regulatory compliance; finance and banking administration; management of customers, prospective customers, partners, vendors and advisers; recruitment and contracting where applicable; operation, security and support of websites and systems; communications and rights requests; protection of Sequrin's rights, systems and intellectual property; research, product development, testing, validation and demonstrations; and authorised claims-integrity, analytics, investigative-intelligence or related services under applicable customer arrangements.",
      "Data subjects may include directors, shareholders and beneficial owners; customers and prospective customers; partners; vendors, advisers and service providers; applicants, contractors and personnel; website users and correspondents; regulators and authorities; and, where processing is lawfully authorised, members, beneficiaries, dependants, providers and other persons represented in customer-controlled claims data.",
      "Information may include identity, contact, corporate-role, ownership, organisation, correspondence, contract, financial, application, technical-request and security information and, where lawfully authorised, claims, benefit, provider, health or clinical information, alleged unlawful conduct indicators and derived risk or investigative signals.",
    ],
  },
  {
    title: "POPIA: recipients, transborder flows and security",
    paragraphs: [
      "Where lawful and necessary, personal information may be supplied to authorised Sequrin personnel and contractors; professional advisers, auditors and insurers; banks and financial-administration providers; approved hosting, cloud, security, communications, software-development and IT providers; customers and counterparties; and regulators, courts, law-enforcement bodies or other authorities.",
      "Sequrin may use service providers whose infrastructure, support personnel or processing operations are outside South Africa. Any transfer of personal information outside South Africa must comply with section 72 of POPIA and other applicable legal and contractual requirements. Sensitive customer-controlled information will be transferred only where the actual architecture, customer instructions, recipient location, contractual safeguards and applicable law permit the transfer.",
      "General safeguards include role-based access control and least privilege; authentication and credential controls; encryption in transit and where appropriate at rest; logging and audit trails; secure development and change management; vulnerability, dependency and configuration management; backup and recovery; confidentiality and supplier-security requirements; incident response; and periodic privacy and security risk review. This is not a claim that Sequrin holds a particular certification or that every control applies identically to every system.",
    ],
  },
  {
    title: "Availability, inspection, approval and updates",
    paragraphs: [
      "The current public version of this manual is available at sequrin.com/paia/. A copy may also be requested through info@sequrin.com. Inspection at the applicable business address may be arranged in advance during reasonable business hours. The manual will be supplied to the Information Regulator upon request as required by PAIA.",
      "This Version 1.0 was approved for publication by Sbusiso Mdingi in the capacity of Information Officer and Chief Executive Officer on 22 August 2026. Sequrin will review and update the manual regularly and whenever there is a material change to its contact details, record holdings, processing activities, legal obligations or access procedures.",
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
