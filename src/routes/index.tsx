import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home-page";
import { site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fiscalogic | CA Firm in Nagpur for Accounting, GST & Compliance" },
      { name: "description", content: "Your in-house finance team, without the hiring. CA-led accounting, GST, payroll and monthly reporting for growing businesses across India." },
      { property: "og:title", content: "Fiscalogic | CA Firm in Nagpur for Accounting, GST & Compliance" },
      { property: "og:description", content: "Accounting, compliance and reporting handled by a senior CA-led team. Based in Nagpur, serving businesses across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": ["AccountingService", "LocalBusiness"],
      name: site.name,
      description: site.description,
      address: { "@type": "PostalAddress", addressLocality: "Nagpur", addressRegion: "Maharashtra", addressCountry: "IN" },
      areaServed: { "@type": "Country", name: "India" },
      email: site.contact.email,
      telephone: site.contact.phone,
      openingHours: "Mo-Sa 10:00-19:00",
    }) }],
  }),
  component: HomePage,
});
