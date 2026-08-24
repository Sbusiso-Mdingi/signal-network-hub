import { createFileRoute } from "@tanstack/react-router";
import { PublicLegalPage } from "@/components/site/PublicLegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie and Tracking Statement | Sequrin" },
      { name: "description", content: "Current cookie, analytics and tracking position for the public Sequrin website." },
    ],
    links: [{ rel: "canonical", href: "https://sequrin.com/cookies/" }],
  }),
  component: CookiesPage,
});

const sections = [
  { title: "Current position", paragraphs: ["Sequrin has not intentionally added advertising cookies, behavioural advertising, visitor profiling or non-essential analytics to the reviewed public site. The public site has no visitor account or contact form."] },
  { title: "Essential delivery information", paragraphs: ["Hosting and network infrastructure may process routine request and security information needed to deliver and protect the site, such as IP address, requested resource, browser or device information and time. Sequrin does not use this information for behavioural advertising."] },
  { title: "Future changes", paragraphs: ["Sequrin will reassess this statement before adding analytics, embedded third-party media, chat, forms, authentication or marketing technology. Non-essential tracking will not be introduced silently: the notice and, where legally required, consent choices will be updated before activation."] },
  { title: "Questions", paragraphs: ["See the Privacy Notice or email info@sequrin.com."] },
];

function CookiesPage() {
  return <PublicLegalPage eyebrow="Cookie and Tracking Statement" title="Cookie and Tracking Statement" lead="This statement describes the cookies, analytics and related tracking technologies used by the current sequrin.com build." updated="Last updated 22 August 2026" sections={sections} />;
}
