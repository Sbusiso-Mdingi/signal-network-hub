import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sequrin" },
      {
        name: "description",
        content:
          "Read the Sequrin Privacy Policy, including POPIA-aligned processing, healthcare claims data, human-led decision-making, security, retention and data-subject rights.",
      },
      { property: "og:title", content: "Privacy Policy | Sequrin" },
      {
        property: "og:description",
        content:
          "Sequrin's privacy framework for its public website, authenticated service and customer-controlled healthcare claims information.",
      },
      { property: "og:url", content: "https://sequrin.tech/privacy/" },
      { name: "twitter:title", content: "Privacy Policy | Sequrin" },
      {
        name: "twitter:description",
        content:
          "Sequrin's privacy framework for its public website, authenticated service and customer-controlled healthcare claims information.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/privacy/" }],
  }),
  component: PrivacyPage,
});

const commitments = [
  "Customer claims data remains customer-controlled.",
  "Identifiable and pseudonymised customer claims data is not reused to train Sequrin's own general models.",
  "Analytical signals support investigation. They do not make adverse claims decisions.",
  "Cross-organisation sharing requires a separate lawful and governed process.",
];

function PrivacySection({
  number,
  id,
  title,
  children,
}: {
  number: string;
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-border py-9 last:border-b-0">
      <div className="grid gap-5 md:grid-cols-[72px_1fr] md:gap-8">
        <p className="label-mono text-primary">{number}</p>
        <div>
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="label-mono">Privacy Policy</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              Privacy is part of the operating model.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              This policy explains how Sequrin handles personal information across its public
              website, authenticated claims-integrity service, evaluations and business operations,
              including when Sequrin processes information for a medical scheme or other authorised
              customer.
            </p>
            <p className="label-mono mt-7">Last updated 17 August 2026</p>
          </div>
        </section>

        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-20">
            <div>
              <p className="label-mono text-primary">At a glance</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Four commitments shape this policy.
              </h2>
            </div>
            <ul className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              {commitments.map((commitment) => (
                <li key={commitment} className="border-l border-primary pl-4">
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
            <PrivacySection number="01" id="scope" title="Introduction and scope">
              <p>
                Sequrin is a healthcare claims-integrity technology platform designed to help
                medical schemes and authorised claims-integrity teams identify unusual activity,
                understand relationships between claims and relevant entities, and conduct
                structured, human-led investigations.
              </p>
              <p>
                This Privacy Policy applies to the public website at sequrin.tech, the authenticated
                Sequrin service, pilot projects and controlled evaluations, communications with
                Sequrin, and the administration, security and operation of the service.
              </p>
              <p>
                Sequrin is currently an unincorporated project operated by <strong>Sbusiso Mdingi</strong>.
                References to “Sequrin”, “we”, “us” or “our” mean Sbusiso Mdingi operating the
                Sequrin project and service.
              </p>
              <p>
                This policy is intended to operate in accordance with the Protection of Personal
                Information Act 4 of 2013 (“POPIA”), applicable regulations issued under POPIA,
                including the Regulations relating to the Processing of Data Subjects&apos; Health
                Information by Certain Responsible Parties, 2026, and other applicable South African
                law.
              </p>
            </PrivacySection>

            <PrivacySection number="02" id="roles" title="Responsible Party and Operator roles">
              <p>
                Sequrin&apos;s role depends on the processing context. We may act as a Responsible
                Party where we determine the purpose and means of processing, including for website
                visitors, business contacts, prospective customers and partners, authorised
                application users, and security, administrative or support records processed for our
                own purposes.
              </p>
              <p>
                Where a medical scheme, administrator or other authorised customer provides personal
                information to Sequrin for claims-integrity analysis or investigation, that customer
                will ordinarily determine why the information is processed. In that context the
                customer will ordinarily be the Responsible Party and Sequrin will ordinarily act as
                an Operator, processing the information only under lawful customer instructions,
                applicable agreements and applicable law.
              </p>
              <p>
                Sequrin does not obtain independent ownership of customer personal information merely
                because the information is processed through the platform.
              </p>
            </PrivacySection>

            <PrivacySection number="03" id="information-officer" title="Information Officer">
              <p>
                Sequrin&apos;s Information Officer is <strong>Sbusiso Mdingi</strong>. Privacy enquiries
                may be sent to{" "}
                <a
                  href="mailto:sbusiso@sequrin.tech"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  sbusiso@sequrin.tech
                </a>
                .
              </p>
              <p>
                Do not send patient records, medical-scheme claims, member information, clinical
                records, investigation evidence, passwords or other sensitive information to this
                address unless Sequrin has expressly provided an authorised secure method for doing
                so.
              </p>
            </PrivacySection>

            <PrivacySection number="04" id="information" title="Information Sequrin may process">
              <p>
                Depending on the service and customer scope, Sequrin may process medical-scheme
                membership and dependant identifiers; claim and transaction references; provider and
                healthcare-practitioner identifiers; facility information; dates and times of
                treatment or claims activity; benefit, tariff, procedure and service information;
                diagnoses or other health-related claim information; claim amounts and associated
                financial information; relationships between members, dependants, providers,
                facilities and claims; historical claims activity; and customer-supplied reference
                data.
              </p>
              <p>
                Sequrin may also generate or store analytical observations, anomaly indicators,
                model outputs, investigative signals, prioritisation information, relationship
                analysis, investigation notes, evidence references, chronology, case status,
                human-recorded findings and audit records.
              </p>
              <p>
                For authorised application users, Sequrin may process names, work email addresses,
                organisation, account status, authentication and session information, assigned roles,
                permissions, administrative actions, access history, security events and other
                activity required to maintain an auditable service.
              </p>
              <p>
                Infrastructure may process ordinary technical and security information such as IP
                addresses, access times, client information, authentication events, application
                events, errors and server or security logs.
              </p>
            </PrivacySection>

            <PrivacySection number="05" id="sources" title="Where information comes from">
              <p>
                Information may be obtained directly from a Data Subject, from a customer using
                Sequrin, from an administrator or other party authorised by the customer, from
                authorised users, from customer-approved reference data, from activity generated
                through authorised use of the platform, from communications sent to Sequrin, or from
                infrastructure and security systems used to operate the service.
              </p>
              <p>
                Where Sequrin acts as an Operator, the customer is responsible for ensuring that it
                is authorised to provide the information to Sequrin and to instruct Sequrin to
                process it.
              </p>
            </PrivacySection>

            <PrivacySection number="06" id="purposes" title="Why information is processed">
              <p>
                Personal information may be processed to provide and secure the service; authenticate
                users; enforce organisational and role-based access; analyse claims for authorised
                claims-integrity purposes; identify unusual activity; generate investigative signals;
                analyse relationships; support human-led investigations; record evidence, chronology
                and investigation activity; preserve auditability; provide support; conduct
                controlled evaluations; administer customer and prospective-customer relationships;
                respond to requests; establish or defend legal rights; and comply with legal or
                regulatory obligations.
              </p>
              <p>
                Sequrin will not process customer information for an unrelated purpose merely because
                the information is technically available to the platform.
              </p>
            </PrivacySection>

            <PrivacySection
              number="07"
              id="model-training"
              title="Customer claims data is not used to train Sequrin's own general models"
            >
              <p>
                Sequrin does <strong>not</strong> use identifiable or pseudonymised customer claims
                data, investigation data or other customer-controlled personal information to train,
                fine-tune, benchmark, develop or improve Sequrin&apos;s own general models or models
                intended for use across customers.
              </p>
              <p>
                Customer data may be processed by analytical methods within the service where
                necessary to provide the agreed service to the customer that supplied or controls the
                information. That does not authorise Sequrin to reuse the data for independent
                model-development purposes.
              </p>
              <p>
                Product development, testing and general model development may instead use synthetic
                data, lawfully obtained non-customer datasets, genuinely de-identified information
                that cannot reasonably be linked back to a Data Subject, and permitted non-sensitive
                service telemetry or feedback. Pseudonymised information is not treated as
                de-identified merely because direct identifiers have been removed.
              </p>
            </PrivacySection>

            <PrivacySection
              number="08"
              id="special-information"
              title="Health and other Special Personal Information"
            >
              <p>
                Claims information may contain health information and other Special Personal
                Information protected under POPIA. Sequrin recognises the heightened sensitivity of
                this information and processes it only for authorised and defined purposes, subject
                to customer instructions where applicable, confidentiality obligations, reasonable
                technical and organisational safeguards, and applicable South African law.
              </p>
              <p>
                Claims-integrity work may also involve allegations, suspicions or information
                potentially relating to unlawful or criminal behaviour. The existence of an anomaly,
                signal, network connection, allegation or investigation does not mean that misconduct
                has been established.
              </p>
            </PrivacySection>

            <PrivacySection number="09" id="children" title="Children and dependant information">
              <p>
                The Sequrin application is intended for authorised professional and organisational
                users and is not directed at children. Medical-scheme claims may nevertheless
                lawfully include information relating to child dependants.
              </p>
              <p>
                Sequrin may process such information where it forms part of customer-controlled
                claims data and the relevant Responsible Party is lawfully authorised to process it.
                Sequrin does not treat a child appearing in claims data as a user of the service and
                does not independently solicit healthcare information from children through the
                public website.
              </p>
            </PrivacySection>

            <PrivacySection
              number="10"
              id="automated-processing"
              title="Analytical processing and human decision-making"
            >
              <p>
                Sequrin may use rules, statistical methods, analytical models and relationship
                analysis to identify activity that deserves closer examination. These systems may
                generate anomalies, scores, patterns, relationships, prioritisation information or
                investigative signals.
              </p>
              <p>
                A Sequrin signal does not, by itself, establish fraud or misconduct, reject or delay
                a claim, withhold or redirect payment, recover money, impose a sanction, terminate a
                provider or member relationship, make a criminal allegation, or publish a person or
                organisation into a shared warning network.
              </p>
              <p>
                Consequential conclusions and actions remain subject to the customer&apos;s authorised
                human and organisational processes. Sequrin is designed so analytical detection does
                not independently exercise claims-adjudication, sanction or publication authority.
              </p>
            </PrivacySection>

            <PrivacySection
              number="11"
              id="network"
              title="Secure Integrity Network and cross-organisation sharing"
            >
              <p>
                Sequrin&apos;s current claims-integrity operating model is based on controlled
                organisational and customer boundaries. Sequrin does not operate an unrestricted
                national fraud blacklist, and information belonging to one customer is not made
                available to another merely because both organisations use Sequrin.
              </p>
              <p>
                Any future Secure Integrity Network functionality involving cross-organisational
                integrity information will require additional governance before implementation,
                including lawful purpose, defined roles, information minimisation, evidence and
                publication standards, access controls, correction and challenge mechanisms,
                auditability, contractual arrangements, Special Personal Information requirements
                and any applicable prior-authorisation obligations.
              </p>
            </PrivacySection>

            <PrivacySection number="12" id="lawful-processing" title="Lawful processing">
              <p>
                Where Sequrin acts as a Responsible Party, personal information will only be
                processed where permitted by POPIA and applicable law. Depending on the
                circumstances, processing may be justified by consent where appropriate, contractual
                necessity, a legal obligation, protection of a legitimate interest, performance of
                an applicable public-law duty, or legitimate interests where permitted by POPIA.
              </p>
              <p>
                Where Sequrin acts as an Operator, the customer is responsible for establishing the
                lawful basis and purpose for processing customer-controlled information. Sequrin
                processes that information within the authority granted by the customer and
                applicable law.
              </p>
            </PrivacySection>

            <PrivacySection number="13" id="disclosure" title="Disclosure and service providers">
              <p>
                Sequrin does not sell personal information. Customer data may be made available to
                appropriately authorised users of the relevant customer under organisational, role
                and permission controls.
              </p>
              <p>
                Sequrin may use carefully selected service providers to operate, secure or support
                the service. The authenticated Sequrin platform uses <strong>Amazon Web Services (AWS)</strong>
                for cloud infrastructure. Service providers receive only information reasonably
                necessary for the relevant service and are subject to appropriate contractual,
                confidentiality and security requirements where required.
              </p>
              <p>
                Information may also be disclosed to professional advisers under appropriate
                confidentiality obligations, to legal or regulatory authorities where lawfully
                required, or to a recipient that the relevant Responsible Party lawfully instructs
                Sequrin to use.
              </p>
            </PrivacySection>

            <PrivacySection number="14" id="transfers" title="Hosting and international transfers">
              <p>
                The authenticated Sequrin platform uses AWS cloud infrastructure. The specific AWS
                region, service configuration and processing location applicable to a customer
                deployment may be documented in the relevant customer agreement, technical
                documentation or subprocessor information.
              </p>
              <p>
                Sequrin does not assume that use of a cloud provider automatically means all
                information remains inside South Africa. Where personal information is transferred to
                a recipient outside South Africa, the transfer must satisfy applicable POPIA
                requirements, including section 72 where relevant.
              </p>
              <p>
                Where Sequrin acts as an Operator, international transfers of customer data will be
                carried out only in accordance with the customer&apos;s lawful instructions,
                applicable contractual safeguards and applicable law.
              </p>
            </PrivacySection>

            <PrivacySection number="15" id="security" title="Security">
              <p>
                Sequrin applies reasonable technical and organisational safeguards appropriate to
                the nature and sensitivity of the information processed. Controls may include
                organisational and tenant boundaries, role-based access, restricted administrative
                privileges, authentication controls, access and activity logging, audit trails,
                secure cloud infrastructure, security monitoring, protected backups, vulnerability
                and dependency management, controlled development and deployment processes, and
                confidentiality obligations.
              </p>
              <p>
                No security system can eliminate every risk. Sequrin therefore maintains safeguards
                intended to reduce risk, identify incidents and support an appropriate response.
              </p>
            </PrivacySection>

            <PrivacySection number="16" id="incidents" title="Security compromises">
              <p>
                Where Sequrin acts as an Operator and there are reasonable grounds to believe that
                customer-controlled personal information has been accessed or acquired by an
                unauthorised person, Sequrin will notify the relevant Responsible Party as required
                by POPIA and the applicable agreement.
              </p>
              <p>
                Where Sequrin acts as the Responsible Party, Sequrin will notify the Information
                Regulator and affected Data Subjects where and in the manner required by applicable
                law. Sequrin will also take reasonable steps to investigate, contain and mitigate the
                incident, preserve relevant evidence and address identified weaknesses where
                appropriate.
              </p>
            </PrivacySection>

            <PrivacySection number="17" id="retention" title="Retention and deletion">
              <p>
                Personal information should not be kept for longer than necessary for the purpose
                for which it is processed, subject to legal, contractual, evidentiary and regulatory
                requirements.
              </p>
              <p>
                Customer Claims Data and Investigation Data remain customer-controlled. Unless a
                customer agreement, legal obligation, preservation requirement or lawful customer
                instruction provides otherwise, customer data will be retained while required to
                provide the service and, after termination or a valid deletion instruction, will
                ordinarily be scheduled for deletion from active systems within 90 days. Protected
                residual copies may remain in backups for up to a further 90 days before being
                overwritten through the ordinary backup lifecycle.
              </p>
              <p>
                Application-user, administrative, security and general platform audit records may
                ordinarily be retained for up to 24 months after the relevant relationship or event,
                unless longer retention is reasonably required for a legal claim, investigation,
                security incident, contractual requirement or regulatory process.
              </p>
              <p>
                Information that has genuinely been de-identified so that a Data Subject cannot
                reasonably be identified may be retained for longer. Pseudonymised customer data is
                not treated as de-identified for this purpose.
              </p>
            </PrivacySection>

            <PrivacySection number="18" id="rights" title="Data Subject rights">
              <p>
                Subject to POPIA and other applicable law, a Data Subject may have rights to ask
                whether a Responsible Party holds information about them; request access; request
                correction or deletion in appropriate circumstances; object to certain processing;
                withdraw consent where processing depends on consent; object to direct marketing;
                and lodge a complaint with the Information Regulator.
              </p>
              <p>
                Sequrin may require reasonable proof of identity before acting on a request. Rights
                may be subject to lawful limitations, including confidentiality obligations,
                third-party rights, legal claims, investigations, statutory retention and the
                Promotion of Access to Information Act.
              </p>
            </PrivacySection>

            <PrivacySection
              number="19"
              id="customer-requests"
              title="Requests relating to customer-controlled information"
            >
              <p>
                Where Sequrin processes information solely as an Operator for a customer, the
                relevant customer is ordinarily the appropriate organisation to determine and
                respond to a Data Subject request. For example, a medical-scheme member or dependant
                should ordinarily direct a request concerning scheme claims to the scheme or other
                organisation responsible for that information.
              </p>
              <p>
                Where required, Sequrin will assist the customer in responding to requests relating
                to information processed through the service. Sequrin will not independently amend,
                delete or disclose customer-controlled claims or investigation records contrary to
                the lawful instructions of the Responsible Party.
              </p>
            </PrivacySection>

            <PrivacySection number="20" id="website" title="Public website and email">
              <p>
                The public Sequrin website is primarily informational. As at the date of this policy,
                it does not intentionally use advertising trackers, behavioural advertising
                technology, third-party advertising cookies or non-essential analytics cookies.
                Hosting, content-delivery, security and network infrastructure may nevertheless
                process ordinary technical request information where necessary to deliver and protect
                the website.
              </p>
              <p>
                Sequrin&apos;s public email addresses are intended for ordinary business, privacy,
                partnership, security and service communications. Do not send patient information,
                claims, clinical records, investigation evidence, passwords or other highly
                sensitive information through an ordinary public email address unless Sequrin has
                specifically authorised that transmission method.
              </p>
            </PrivacySection>

            <PrivacySection number="21" id="sale" title="No sale of personal information">
              <p>
                Sequrin does not sell, rent or trade customer claims data, health information or
                other personal information to data brokers, advertisers or unrelated third parties.
                Sequrin does not use medical-scheme member information for advertising.
              </p>
            </PrivacySection>

            <PrivacySection number="22" id="changes" title="Changes to this Privacy Policy">
              <p>
                Sequrin may update this policy to reflect changes to the service, processing
                activities, subprocessors, infrastructure, law, regulatory guidance, functionality
                or organisational structure. Where a change is material, Sequrin will take reasonable
                steps to make the updated policy available and, where appropriate, notify affected
                customers or users.
              </p>
              <p>
                If Sequrin becomes incorporated or the legal entity responsible for the service
                changes, this policy will be updated to identify that entity.
              </p>
            </PrivacySection>

            <PrivacySection number="23" id="contact" title="Contact Sequrin">
              <p>
                Privacy questions or requests concerning information for which Sequrin is the
                Responsible Party can be directed to <strong>Sbusiso Mdingi, Information Officer</strong>, at{" "}
                <a
                  href="mailto:sbusiso@sequrin.tech"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  sbusiso@sequrin.tech
                </a>
                . General enquiries can be sent to{" "}
                <a
                  href="mailto:info@sequrin.tech"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  info@sequrin.tech
                </a>
                .
              </p>
            </PrivacySection>

            <PrivacySection number="24" id="regulator" title="Information Regulator">
              <p>
                A Data Subject has the right to lodge a complaint with the Information Regulator
                (South Africa) where they believe personal information has been processed in
                contravention of POPIA.
              </p>
              <p>
                Information Regulator (South Africa), Woodmead North Office Park, 54 Maxwell Drive,
                Woodmead, Johannesburg. Postal address: P.O. Box 31533, Braamfontein, Johannesburg,
                2017. Telephone: 010 023 5200. Email: enquiries@inforegulator.org.za.
              </p>
            </PrivacySection>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
