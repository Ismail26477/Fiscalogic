import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/page-content";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Fiscalogic | Nagpur Accounting & Finance Team" },
    { name: "description", content: "Meet the mission, values and team behind Fiscalogic, a Nagpur-based CA-led finance partner for growing businesses." },
    { property: "og:title", content: "About Fiscalogic | Your numbers, made logical" },
    { property: "og:description", content: "A finance team built for the people building businesses." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});