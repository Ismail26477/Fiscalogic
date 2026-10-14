import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/page-content";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy Draft | Fiscalogic" },
    { name: "description", content: "Draft privacy information for the Fiscalogic website. Review and complete before publication." },
    { property: "og:title", content: "Privacy Policy Draft | Fiscalogic" },
    { property: "og:description", content: "Draft privacy information for the Fiscalogic website." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: () => <LegalPage kind="privacy" />,
});