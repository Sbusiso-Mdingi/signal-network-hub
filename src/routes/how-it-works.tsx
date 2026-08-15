import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "@/components/site/PageScaffold";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Sequrin" },
      { name: "description", content: "Understand the governed Sequrin path from healthcare claims data to investigation." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/how-it-works" }],
  }),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return <PageScaffold label="How Sequrin works" title="A governed path from data to investigation." intro="Sequrin is structured so analytical methods help people decide what deserves investigation without becoming the authority for consequential claims decisions." sections={[
    { title: "Connect", body: "Relevant claims and integrity data enter a governed analytical environment with stable organisation, member, provider and claim identifiers." },
    { title: "Detect", body: "Rules, statistical methods, models and network analysis identify patterns worth examining." },
    { title: "Signal", body: "Analytical output becomes an investigative signal: a prompt to look closer rather than a finding of misconduct." },
    { title: "Investigate", body: "Authorised investigators review evidence, relationships, chronology and context." },
    { title: "Govern", body: "Consequential decisions remain with accountable human and organisational processes, while access and important actions remain controlled and auditable." },
  ]} note="The detailed integration and workflow story will be developed on this page in a later pass." />;
}
