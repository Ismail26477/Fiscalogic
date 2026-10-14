import { createFileRoute } from "@tanstack/react-router";
import { WhyPage } from "@/components/page-content";

export const Route = createFileRoute("/why-fiscalogic")({
  head: () => ({ meta: [
    { title: "Why Fiscalogic | A Senior CA-Led Finance Team" },
    { name: "description", content: "See how Fiscalogic brings proactive support, predictable fees, monthly MIS and senior ownership to your finance function." },
    { property: "og:title", content: "Why Fiscalogic | Finance with a clear owner" },
    { property: "og:description", content: "A senior CA-led team, fixed monthly fee and a steadier close." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: WhyPage,
});