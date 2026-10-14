import { createFileRoute } from "@tanstack/react-router";
import { LoginPage } from "@/components/page-content";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [
    { title: "Client Login | Fiscalogic" },
    { name: "description", content: "Fiscalogic client portal access information." },
    { property: "og:title", content: "Client Login | Fiscalogic" },
    { property: "og:description", content: "Information about Fiscalogic client portal access." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: LoginPage,
});