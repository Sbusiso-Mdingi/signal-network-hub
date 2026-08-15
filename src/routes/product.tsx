import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "@/components/site/PageScaffold";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product | Sequrin" },
      { name: "description", content: "Explore Sequrin's healthcare claims-integrity product capabilities." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/product" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  return <PageScaffold label="Product" title="Claims-integrity infrastructure built around investigation." intro="Sequrin brings analytical detection, network intelligence, investigation workflows and governed collaboration into one claims-integrity environment." sections={[
    { title: "Signal detection", body: "Statistical models, analytical methods and deterministic rules can surface unusual activity for investigation. Analytical output is treated as a signal, not a verdict." },
    { title: "Network intelligence", body: "Relationships between claims, providers, members, facilities and organisations can reveal patterns that individual records may hide." },
    { title: "Investigation workspace", body: "Authorised teams can examine signals, evidence, linked entities and investigative history through a structured workflow." },
    { title: "Governed collaboration", body: "Sequrin is being designed to support accountable sharing of relevant integrity information while preserving organisational boundaries and access controls." },
  ]} note="This page establishes the product structure. Each capability will be expanded in a dedicated design and content pass." />;
}
