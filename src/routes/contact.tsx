import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/page-content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Fiscalogic | Book a Free Finance Consultation" },
    { name: "description", content: "Contact Fiscalogic in Nagpur for a free 30-minute conversation about accounting, GST, payroll and finance support." },
    { property: "og:title", content: "Contact Fiscalogic | Start with a conversation" },
    { property: "og:description", content: "Book a free 30-minute consultation with Fiscalogic’s CA-led team." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});