import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "@/components/page-content";

export const Route = createFileRoute("/industries")({
  head: () => ({ meta: [
    { title: "Industries We Support Across India | Fiscalogic" },
    { name: "description", content: "Finance and compliance support for manufacturing, trading, retail, healthcare, startups and growing businesses across India." },
    { property: "og:title", content: "Industries We Support | Fiscalogic" },
    { property: "og:description", content: "Accounting shaped around how your business actually runs." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: IndustriesPage,
});