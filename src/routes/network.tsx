import { createFileRoute } from "@tanstack/react-router";
import { PageScaffold } from "@/components/site/PageScaffold";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "Secure Integrity Network | Sequrin" },
      { name: "description", content: "The longer-term Secure Integrity Network vision behind Sequrin." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.tech/network" }],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return <PageScaffold label="Secure Integrity Network" title="Some integrity risks are inherently networked." intro="Sequrin is named for a longer-term idea: relevant relationships can become more useful when they are understood across claims and organisational boundaries without collapsing the governance around them." sections={[
    { title: "Start with the individual claim", body: "A single claim can appear ordinary when it is viewed without the wider context around the member, provider, facility, timing and related activity." },
    { title: "Understand relationships", body: "Network analysis can help surface connected behaviour and recurring structures that are difficult to see through isolated records." },
    { title: "Preserve organisational boundaries", body: "The network vision is not a shared blacklist. Any cross-organisational intelligence must remain subject to authority, evidence, access controls and accountable governance." },
    { title: "Build toward responsible collaboration", body: "Where appropriate, governed integrity information could help authorised participants understand significant relationships that no single organisation can see alone." },
  ]} note="The Secure Integrity Network is a development direction. Sequrin's current product work is focused on the analytical, investigative and governance foundation needed to support that direction responsibly." />;
}
