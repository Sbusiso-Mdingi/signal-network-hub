import { createFileRoute } from "@tanstack/react-router";
import { PublicLegalPage } from "@/components/site/PublicLegalPage";

export const Route = createFileRoute("/paia")({
  head: () => ({
    meta: [
      { title: "PAIA Manual | Sequrin" },
      {
        name: "description",
        content:
          "Current section 51 PAIA Manual for Sequrin Technologies (Pty) Ltd, effective 23 August 2026, including access procedures and POPIA particulars.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/paia/" }],
  }),
  component: PaiaPage,
});

const sections = [
  {
    title: "1. Private body and contact details",
    paragraphs: [
      "Sequrin Technologies (Pty) Ltd is a South African private company. For PAIA purposes, the head of the private body and Information Officer is Sbusiso Mdingi, Chief Executive Officer (CEO).",
      "Legal name: Sequrin Technologies (Pty) Ltd. Trading name: Sequrin. Enterprise number: 2026/662912/07. Information Regulator organisation registration number: 2026-064989. Information Regulator registration date: 22 August 2026. Information Officer appointment date: 19 August 2026. No Deputy Information Officer is currently designated.",
      "Principal place of business / registered office: 1918 Potomac Street, Rietvallei, Krugersdorp, Gauteng, 1754. Postal address: same as principal place of business. Telephone: +27 84 222 0684. Email: info@sequrin.com. Website: https://sequrin.com.",
      "The manual may be inspected at Sequrin's principal place of business during normal business hours. Because the premises are not operated as a public reception office, physical inspection or delivery should be arranged in advance by email at info@sequrin.com.",
    ],
  },
  {
    title: "2. Purpose and legal framework",
    paragraphs: [
      "This manual is prepared under section 51 of the Promotion of Access to Information Act 2 of 2000 (PAIA), as amended. It also contains the personal-information particulars required by section 51(1)(c), following the amendments introduced by the Protection of Personal Information Act 4 of 2013 (POPIA).",
      "PAIA gives a requester a right of access to a record of a private body when the record is required for the exercise or protection of a right, the procedural requirements are met, and access is not refused on a ground permitted by PAIA. This manual sets out Sequrin's records, the procedure for requesting access, and the information required by section 51.",
    ],
  },
  {
    title: "3. Information Regulator PAIA Guide, forms and assistance",
    paragraphs: [
      "The Information Regulator publishes the Guide on how to use PAIA, together with prescribed forms, fee information and complaint procedures. The Guide explains how to exercise rights under PAIA and POPIA and the remedies available. Official PAIA resources are available at https://inforegulator.org.za/paia/.",
      "For a request to Sequrin, the principal prescribed forms are Form 02 (Request for Access to Record), Form 03 (Outcome of Request and Fees Payable) and Form 05 (Complaint Form). Form 13 is used to request a PAIA compliance assessment from the Information Regulator.",
      "The Guide is available in each official language and in Braille. Sequrin keeps copies of the Guide in English and isiZulu available for public inspection at its principal place of business during normal business hours.",
    ],
  },
  {
    title: "4. Records available without a formal PAIA request",
    paragraphs: [
      "Website and statutory publications, including the PAIA Manual, privacy and website notices, cookie information and other public compliance material, are available through the Sequrin website or by email request.",
      "Company and product information, including the public company profile, product descriptions, governance statements, public announcements and marketing material released by Sequrin, is available through the Sequrin website or another public channel used for publication.",
      "Public business contact details and other information expressly released for unrestricted public access are available through the Sequrin website or by email request.",
    ],
  },
  {
    title: "5. Records available under other legislation",
    paragraphs: [
      "Sequrin maintains corporate and statutory records in accordance with the Companies Act 71 of 2008; PAIA manuals, requests and access decisions in accordance with the Promotion of Access to Information Act 2 of 2000; privacy governance and data-subject rights records in accordance with the Protection of Personal Information Act 4 of 2013; and tax, accounting and supporting records in accordance with the Tax Administration Act 28 of 2011 and Income Tax Act 58 of 1962.",
    ],
  },
  {
    title: "6. Subjects on which Sequrin holds records and categories of records",
    paragraphs: [
      "Corporate and statutory records may include incorporation records, the memorandum of incorporation, director and securities records, resolutions, beneficial-ownership supporting records and statutory filings. Governance and compliance records may include policies, registers, approvals, risk records, compliance evidence, legal and regulatory assessments and decision records.",
      "Finance and tax records may include accounts, budgets, forecasts, invoices, banking records, tax records and supporting financial documentation. People records may include director, applicant, contractor, adviser, training, remuneration and personnel-related records where applicable. Customer and commercial records may include proposals, contracts, procurement material, due-diligence records, correspondence, support records and relationship-management records.",
      "Product, research and intellectual-property records may include source code, architecture, models, datasets, test results, research records, designs, technical documentation, licences and intellectual-property records. Privacy and security records may include processing records, access logs, privacy requests, risk and impact assessments, security reviews, incidents, investigations and vendor assessments. Website and communications records may include published pages, brand material, business correspondence, website configuration and limited technical or security logs.",
    ],
  },
  {
    title: "7. How to request access to a record",
    paragraphs: [
      "A requester should obtain the current prescribed private-body request form (Form 02) from the Information Regulator; identify the requested record with enough detail to enable a reasonable search; identify the right the requester seeks to exercise or protect and explain why the requested record is required for that purpose; state the preferred form of access and provide the contact particulars required by the prescribed form; and provide proportionate proof of identity and, if acting for another person, proof of authority or capacity.",
      "The completed request should be sent to info@sequrin.com with the subject line 'PAIA request', or delivered lawfully to the principal place of business by prior arrangement. Any request, deposit or access fee lawfully required under PAIA and the Regulations is payable only after the prescribed notice is received.",
      "Requests may be submitted electronically. Where supporting material contains sensitive or special personal information, Sequrin will provide an appropriate secure submission method where necessary.",
    ],
  },
  {
    title: "8. Decisions, refusal grounds, fees and remedies",
    paragraphs: [
      "Sequrin will record the request, verify the requester where necessary, conduct a reasonable search, follow any required third-party procedure and communicate a decision as soon as reasonably possible and, ordinarily, within 30 days as required by PAIA, subject to a lawful extension under section 57.",
      "Request fees, deposits and access fees, where applicable, are governed by section 54 of PAIA and the Regulations. Sequrin will not require payment other than as authorised by the applicable rules.",
      "A request may be refused only on a lawful basis. Depending on the record, relevant grounds may include the mandatory protection of third-party privacy; third-party commercial or confidential information; safety and property; legally privileged records; Sequrin's commercial information; and protected research information.",
      "There is no statutory internal appeal from a decision of the head of a private body. A requester or affected third party may lodge a complaint with the Information Regulator in the prescribed manner and may approach a competent court in accordance with PAIA. The Regulator currently provides Form 05 for PAIA complaints.",
    ],
  },
  {
    title: "9. Processing of personal information",
    paragraphs: [
      "The particulars in this section describe Sequrin's processing of personal information in its corporate, website, research, development and service activities. The nature and extent of processing depend on the relevant business activity or customer arrangement. Sequrin acts as a responsible party for personal information processed for its own corporate and operational purposes. Where Sequrin processes information on behalf of a customer under documented instructions, its role is determined by the applicable contractual and statutory arrangement.",
      "Sequrin may process personal information for corporate administration, governance and statutory compliance; finance, accounting, banking, tax and procurement administration; management of customers, prospective customers, partners, vendors, advisers and other business relationships; recruitment, contracting and workforce administration where applicable; operation, security, support and improvement of websites, software, systems and development environments; communications, rights requests, PAIA requests, legal notices and regulatory enquiries; protection of Sequrin's systems, rights, intellectual property and legitimate business interests; research, product development, testing, validation, demonstrations and quality assurance; and authorised claims-integrity analytics, fraud/waste/abuse risk detection, investigation support or related services under applicable customer arrangements.",
      "Any processing of real medical-scheme, member, beneficiary, dependant, provider, clinical or claims information is subject to the applicable POPIA role allocation, lawful basis, contractual terms, security requirements, retention rules, transfer requirements and any required prior authorisation.",
      "Categories of data subjects may include directors, shareholders and beneficial owners; customers, prospective customers and partners; vendors, advisers and service providers; applicants, contractors and personnel; website users and correspondents; regulators and authorities; and members, beneficiaries, dependants, providers and other persons represented in customer-controlled claims data where lawfully processed.",
      "Recipients may include authorised Sequrin personnel and contractors; professional advisers, auditors and insurers; banks, payment providers and financial-administration providers; approved hosting, cloud, security, communications, software-development and IT providers; customers, counterparties and their authorised representatives where relevant to the relationship; and regulators, law-enforcement bodies, courts or other authorities where disclosure is authorised or required by law.",
      "Sequrin uses technology and cloud service providers that may process business information outside South Africa. Transborder processing is managed in accordance with section 72 of POPIA and applicable contractual and security requirements. For customer-controlled claims, health or clinical information, permitted processing locations and transfer arrangements are determined for the relevant customer deployment. Cross-border processing of such information is permitted only where the applicable customer instructions, legal basis, safeguards and any required prior authorisation allow it.",
      "Sequrin applies risk-based technical and organisational safeguards appropriate to the nature of the information and the relevant system. These include, as applicable, role-based access control and least privilege; authentication, credential-management and access-review controls; encryption in transit and, where appropriate to the system and risk, at rest; logging, monitoring and audit trails; secure software-development, review and change-management practices; vulnerability, dependency and configuration management; backup, recovery, continuity and resilience measures; confidentiality obligations and supplier-security requirements; incident identification, escalation, response and notification procedures; and periodic privacy, security and vendor-risk review.",
      "For customer deployments involving live claims or health information, deployment-specific access controls, data flows, retention rules, incident responsibilities and security requirements are documented as part of the implementation and customer arrangements.",
    ],
  },
  {
    title: "10. Availability and updating of the manual",
    paragraphs: [
      "The current public version of this manual is available on Sequrin's website at https://sequrin.com/paia/. A copy may also be requested by email from info@sequrin.com. The manual is available for public inspection at Sequrin's principal place of business during normal business hours. Inspection should be arranged in advance using the contact details in section 1. The manual will be supplied to the Information Regulator upon request as required by PAIA.",
      "Sequrin reviews this manual at least annually and whenever a material change affects its contact details, record holdings, processing activities, legal obligations or access procedures. Electronic copies are provided without charge. Any fee for a printed copy is limited to the amount permitted by PAIA and the Regulations.",
      "Issued by Sbusiso Mdingi in the capacity of Information Officer / Chief Executive Officer. Effective date: 23 August 2026. Next scheduled review: 23 August 2027, or earlier on material change.",
    ],
  },
  {
    title: "11. Official references",
    paragraphs: [
      "Promotion of Access to Information Act 2 of 2000, as amended: https://www.justice.gov.za/legislation/acts/2000-002.pdf",
      "Information Regulator — PAIA resources, Guide and forms: https://inforegulator.org.za/paia/",
      "Information Regulator — PAIA Manual Template for a Private Body: https://inforegulator.org.za/wp-content/uploads/2020/07/PAIA-Manual-Template-Private-Body.pdf",
      "PAIA Regulations, 2021 (Government Notice R.757): https://www.justice.gov.za/legislation/notices/2021/20210827-gg45057gon757-PAIAregulations.pdf",
      "Protection of Personal Information Act 4 of 2013: https://www.justice.gov.za/legislation/acts/2013-004.pdf",
    ],
  },
];

function PaiaPage() {
  return (
    <PublicLegalPage
      eyebrow="Public document"
      title="PAIA Manual"
      lead="Sequrin Technologies (Pty) Ltd — prepared in terms of section 51 of the Promotion of Access to Information Act 2 of 2000, as amended."
      updated="Version 1.0 · Effective 23 August 2026"
      sections={sections}
    />
  );
}
