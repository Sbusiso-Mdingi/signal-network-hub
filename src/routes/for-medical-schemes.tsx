import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "@/components/site/PageScaffold";

export const Route = createFileRoute("/for-medical-schemes")({
  head: () => ({
    meta: [
      { title: "For Medical Schemes | Sequrin" },
      { name: "description", content: "How Sequrin is being designed to support medical-scheme claims-integrity teams." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/for-medical-schemes" }],
  }),
  component: ForMedicalSchemesPage,
});

function ForMedicalSchemesPage() {
  return <PageScaffold label="For medical schemes" title="Give claims-integrity teams a broader investigative view without surrendering control." intro="Sequrin is being designed around the operational concerns of medical schemes: limited investigative capacity, sensitive data, organisational boundaries and accountable decision-making." sections={[
    { title: "See more than the individual claim", body: "Relationships across providers, members, facilities, timing and other claims can reveal patterns that isolated records may hide." },
    { title: "Prioritise investigative capacity", body: "Analytical signals can help teams focus attention on activity that warrants closer examination while preserving human judgement." },
    { title: "Keep investigators in control", body: "Detection does not become an automated fraud verdict or payment instruction. Evidence and context remain central to investigation." },
    { title: "Protect organisational boundaries", body: "Scheme access, workforce identity and tenant-scoped operational data are designed to remain governed and organisation-bound." },
    { title: "Make important work auditable", body: "Access, investigation history and important administrative actions are designed to support accountability rather than opaque automation." },
  ]} note="Pilot, onboarding and integration details will be developed separately once the customer journey is addressed page by page." />;
}
