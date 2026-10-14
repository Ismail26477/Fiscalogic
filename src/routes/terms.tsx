import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/page-content";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Use Draft | Fiscalogic" },
    { name: "description", content: "Draft website terms for Fiscalogic. Obtain legal review and complete before publication." },
    { property: "og:title", content: "Terms of Use Draft | Fiscalogic" },
    { property: "og:description", content: "Draft information about the Fiscalogic website and professional engagements." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: () => <LegalPage kind="terms" />,
});