import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "@/components/site/PageScaffold";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Governance | Sequrin" },
      { name: "description", content: "The human-oversight and access-control principles that shape Sequrin." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/governance" }],
  }),
  component: GovernancePage,
});

function GovernancePage() {
  return <PageScaffold label="Governance" title="Built for investigation, not automated judgement." intro="Claims-integrity systems operate in a sensitive domain. Sequrin is being designed so analytical detection supports accountable people rather than becoming the authority for consequential decisions." sections={[
    { title: "Signals are not verdicts", body: "A suspicious pattern is something to investigate. It is not proof of fraud or misconduct." },
    { title: "No automated claims sanctions", body: "Detection is not authorised to reject, withhold, redirect or otherwise determine claims or benefit-payment outcomes." },
    { title: "Human accountability", body: "Evidence, context and consequential decisions remain with authorised human and organisational processes." },
    { title: "Governed access", body: "Sensitive claims-integrity information is intended to be available only to appropriately authorised users within controlled organisational boundaries." },
    { title: "Auditability", body: "Important investigative and administrative actions are designed to be traceable." },
    { title: "Controlled collaboration", body: "Cross-organisational sharing is intended to occur through separately governed processes rather than informal publication or a shared blacklist." },
  ]} />;
}
