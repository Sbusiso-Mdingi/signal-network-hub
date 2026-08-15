import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "@/components/site/PageScaffold";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact | Sequrin" },
      { name: "description", content: "Why stronger healthcare claims integrity can matter beyond individual investigations." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/impact" }],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return <PageScaffold label="Impact" title="Claims integrity is ultimately about protecting healthcare resources." intro="Sequrin's wider purpose is to help strengthen the infrastructure around how finite healthcare resources are protected, investigated and governed." sections={[
    { title: "Protecting healthcare resources", body: "Avoidable fraudulent or abusive claims expenditure reduces the resources available for legitimate healthcare. Better investigative visibility can support stronger claims-integrity processes." },
    { title: "Affordability and access", body: "Claims leakage is one of many pressures on healthcare financing. Reducing avoidable expenditure cannot solve affordability on its own, but it can help more of the contribution pool serve its intended purpose." },
    { title: "Jobs and capability", body: "A growing healthcare-integrity technology ecosystem can support work across software engineering, analytics, investigation, compliance, implementation, operations and other specialised roles." },
    { title: "Public-health relevance", body: "The structural need for accountable claims-integrity infrastructure can extend beyond private medical schemes. Any future public-sector application would require its own procurement, privacy, governance and oversight framework." },
  ]} note="Quantitative impact claims will only be added once they are supported by defensible sources and appropriately scoped evidence." />;
}
