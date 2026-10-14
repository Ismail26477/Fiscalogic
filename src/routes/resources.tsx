import { createFileRoute } from "@tanstack/react-router";
import { ResourcesPage } from "@/components/page-content";

export const Route = createFileRoute("/resources")({
  head: () => ({ meta: [
    { title: "Finance & Compliance Resources | Fiscalogic" },
    { name: "description", content: "Plain-English guides to GST, TDS, cash flow, bookkeeping and a sample Indian compliance calendar for 2026–27." },
    { property: "og:title", content: "Finance & Compliance Resources | Fiscalogic" },
    { property: "og:description", content: "Practical finance notes for founders and growing businesses." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ResourcesPage,
});