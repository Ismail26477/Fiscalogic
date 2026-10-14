import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/page-content";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Accounting, GST & Finance Services | Fiscalogic Nagpur" },
    { name: "description", content: "Accounting takeover, bookkeeping, GST, TDS, ROC, payroll, MIS and audit readiness from Fiscalogic’s CA-led team." },
    { property: "og:title", content: "Accounting, GST & Finance Services | Fiscalogic" },
    { property: "og:description", content: "One senior team for the finance work that keeps your business moving." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});