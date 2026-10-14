import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowDownToLine, ArrowRight, ArrowUpRight, Check, CircleHelp, Clock3, FileCheck2, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { site, services, industries } from "@/config/site";
import { iconMap, PageHeading, PrimaryLink, SectionIntro, TickList } from "@/components/site-chrome";
import teamPhoto from "@/assets/fiscalogic-team.jpg";

export function ServicesPage() {
  return <>
    <PageHeading eyebrow="Services · Your finance desk" title={<>Your numbers. Our <em className="text-primary">business.</em></>} detail="From books and filings to payroll and business insight, a senior-led team takes ownership of the finance work that keeps you moving." />
    <section className="border-y border-border bg-surface"><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="flex flex-wrap gap-2">{services.map((service, index) => <a key={service.id} href={`#${service.id}`} className="rounded-sm border border-border bg-background px-3 py-2 text-xs font-medium text-foreground hover:border-primary hover:text-primary"><span className="mr-2 font-mono text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>{service.title}</a>)}</div></div></section>
    <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">{services.map((service, index) => { const Icon = iconMap[service.icon]; return <section id={service.id} key={service.id} className={`grid scroll-mt-24 gap-8 border-b border-border py-14 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 ${index % 2 === 1 ? "lg:pl-16" : ""}`}><div><p className="font-mono text-xs text-primary">SERVICE {String(index + 1).padStart(2, "0")}</p><span className="mt-5 grid size-12 place-items-center rounded-sm bg-soft-tint text-primary"><Icon className="size-6" /></span><h2 className="mt-5 font-display text-4xl text-navy">{service.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p><div className="mt-6"><PrimaryLink /></div></div><div className="grid gap-5 sm:grid-cols-2"><div className="rounded-sm border border-border p-5"><p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">WHAT'S INCLUDED</p><div className="mt-4"><TickList items={service.includes} /></div></div><div className="space-y-3"><div className="rounded-sm bg-surface p-5"><p className="font-mono text-[10px] uppercase tracking-wide text-muted-foreground">GOOD FIT FOR</p><p className="mt-2 text-sm leading-6 text-foreground">Growing businesses who want a dependable owner for this part of their finance operation.</p></div><div className="rounded-sm bg-soft-tint p-5"><p className="font-mono text-[10px] uppercase tracking-wide text-primary">HOW IT RUNS</p><p className="mt-2 text-sm leading-6 text-foreground">Recurring monthly service, with filings and supporting records tracked to a clear calendar.</p></div></div></div></section>; })}</div>
    <section className="bg-navy"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 text-background sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><h2 className="font-display text-3xl">Start with the books you have.</h2><p className="mt-2 text-sm text-background/70">We’ll show you a clear next step before anything changes.</p></div><PrimaryLink /></div></section>
  </>;
}

export function IndustriesPage() {
  return <><PageHeading eyebrow="Industries · India-wide support" title={<>A finance partner who gets <em className="text-primary">your world.</em></>} detail="We work with founders and operators across India. The reporting and compliance stay grounded in how your business actually earns, spends and grows." />
    <section className="bg-surface"><div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8"><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{industries.map((industry, index) => <article key={industry.title} className="rounded-sm border border-border bg-background p-6"><p className="font-mono text-xs text-primary">INDUSTRY / {String(index + 1).padStart(2, "0")}</p><h2 className="mt-4 font-display text-2xl text-navy">{industry.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{industry.detail}</p><p className="mt-5 flex gap-2 border-t border-border pt-4 text-xs leading-5 text-foreground"><Check className="mt-0.5 size-4 shrink-0 text-primary" />Accounts, filings and monthly insight shaped to your operating rhythm.</p></article>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8"><SectionIntro index="01" label="Across India" title={<>Nagpur base. <em className="text-primary">India-wide.</em></>} detail="The handover, check-ins and monthly close work remotely, with in-person conversations available around Nagpur by arrangement." /><PrimaryLink /></section></>;
}

const comparison = [
  ["Response time", "When available", "Indicative 24h target"],
  ["Proactive deadline alerts", "Often founder-tracked", "Tracked with filing confirmations"],
  ["Monthly MIS in plain English", "May be an add-on", "Built into the agreed scope"],
  ["Predictable monthly pricing", "Hourly or filing-based", "Fixed fee, in writing"],
  ["Senior team ownership", "Depends on the engagement", "Senior CA-led team"],
  ["Year-round audit readiness", "Often assembled later", "Schedules kept current"],
];

export function WhyPage() {
  return <><PageHeading eyebrow="Why Fiscalogic · Better finance habits" title={<>Your finance function, with its <em className="text-primary">own team.</em></>} detail="Not a once-a-year scramble. Not an inbox full of questions. A senior CA-led finance desk that keeps the small things from becoming big things." />
    <section className="bg-surface"><div className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8"><div className="overflow-x-auto rounded-sm border border-border bg-background"><table className="w-full min-w-[680px] border-collapse text-left"><thead><tr className="border-b border-border"><th scope="col" className="p-5 font-mono text-xs uppercase text-muted-foreground">The difference</th><th scope="col" className="p-5 font-display text-xl text-muted-foreground">Typical accountant</th><th scope="col" className="bg-soft-tint p-5 font-display text-xl text-primary">Fiscalogic</th></tr></thead><tbody>{comparison.map(([feature, typical, fiscalogic]) => <tr key={feature} className="border-b border-border last:border-0"><th scope="row" className="p-5 text-sm font-semibold text-navy">{feature}</th><td className="p-5 text-sm text-muted-foreground">{typical}</td><td className="bg-soft-tint/60 p-5 text-sm font-medium text-navy"><span className="mr-2 inline-grid size-5 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-3" /></span>{fiscalogic}</td></tr>)}</tbody></table></div><p className="mt-3 text-xs text-muted-foreground">Typical approaches vary. Your actual scope, timelines and response commitments are agreed in your written proposal.</p></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8"><SectionIntro index="01" label="A useful difference" title={<>Not more reports. <em className="text-primary">More clarity.</em></>} detail="The point is not to flood you with figures. It is to know what changed, what needs attention and what to do next." /><div className="grid gap-3 sm:grid-cols-3">{[["A senior owner", "You know who has the whole picture and who to reach."], ["A fee you can plan around", "The scope and monthly number are written down before we begin."], ["A steadier month-end", "Books, filings and reporting get a recurring place in the calendar."]].map(([title, detail]) => <article key={title} className="border-t-2 border-primary pt-4"><h3 className="font-display text-xl text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p></article>)}</div></section>
    <section className="bg-navy"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 text-background sm:flex-row sm:items-center sm:justify-between lg:px-8"><p className="max-w-2xl font-display text-3xl">Put the numbers on the table. We'll make sense of them together.</p><PrimaryLink /></div></section></>;
}

export function AboutPage() {
  return <><PageHeading eyebrow="About · Fiscalogic" title={<>A finance team built for the people building <em className="text-primary">businesses.</em></>} detail="Fiscalogic exists to give growing businesses the finance function they need—without requiring them to build a whole department first." />
    <section className="bg-surface"><div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-2 lg:px-8"><img src={teamPhoto} alt="A chartered accountant and business owner reviewing a ledger in a workshop office" width={1536} height={1024} loading="lazy" className="aspect-[1.4] w-full rounded-sm object-cover" /><div><p className="font-mono text-xs text-primary">WHY WE'RE HERE</p><h2 className="mt-4 font-display text-4xl text-navy">Your business deserves a finance desk, not another loose end.</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Accounting is more than getting a filing done. It is knowing where cash is going, keeping the records ready and having a senior person who can explain what the numbers mean. We bring those jobs together under one monthly retainer.</p><p className="mt-4 text-sm leading-7 text-muted-foreground">Based in Nagpur, Maharashtra, Fiscalogic supports SMEs, startups and growing businesses across India with a practical, responsive finance team.</p></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8"><SectionIntro index="01" label="Our values" title={<>A tick is a small mark. <em className="text-primary">A serious promise.</em></>} /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{[["Accuracy", "We reconcile, check and make the source of a number clear."], ["Transparency", "Scope, fees and findings are explained without hiding in jargon."], ["Proactiveness", "We raise the flag early, while there is room to respond."], ["Confidentiality", "Access and information are handled with care and discretion."]].map(([title, detail]) => <article key={title} className="rounded-sm border border-border p-5"><Check className="size-5 text-primary" /><h3 className="mt-4 font-display text-xl text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p></article>)}</div></section>
    <section className="bg-soft-tint"><div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8"><SectionIntro index="02" label="The people" title={<>Senior ownership, from day <em className="text-primary">one.</em></>} detail="Team bios and qualifications need to be confirmed by Fiscalogic before publication. We have not invented staff names or credentials." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{["CA partner profile · details to confirm", "Client finance lead · details to confirm", "Compliance lead · details to confirm"].map((person, index) => <div key={person} className="border border-border bg-background p-5"><p className="font-mono text-xs text-primary">TEAM / 0{index + 1}</p><div className="mt-5 grid size-14 place-items-center rounded-full bg-soft-tint font-display text-2xl text-primary">✓</div><p className="mt-4 font-display text-lg text-navy">{person}</p></div>)}</div></div></section></>;
}

const articles = [
  ["GST", "A practical monthly GST checklist for growing businesses", "An overview of the records and reconciliations that make regular filing less stressful."],
  ["TDS", "TDS deposits and returns: what founders should keep track of", "A plain-English guide to the moving parts behind deductions, deposits and return dates."],
  ["CASH FLOW", "A cash-flow view you can actually use", "How to spot the gap between a profitable month and a comfortable bank balance."],
  ["COMPLIANCE", "Your year-round compliance calendar", "How one shared calendar helps filings stop arriving as last-minute surprises."],
  ["BOOKKEEPING", "Behind on the books? Start with these three steps", "A calmer way to assess a backlog before committing to a cleanup plan."],
  ["MIS", "Five questions a monthly MIS should answer", "From margin to runway: make your regular numbers answer real business questions."],
] as const;

function downloadCalendar() {
  const rows = [
    ["Illustrative compliance calendar 2026–27", "Regular monthly filer dates only; confirm the current law and any government extensions."],
    ["GSTR-3B", "20th of each month"], ["TDS deposit", "7th of the following month; 30 April for March deductions"],
    ["PF / ESI", "15th of each month"], ["Advance tax", "15 June, 15 September, 15 December, 15 March"],
  ];
  const csv = rows.map((row) => row.map((field) => `"${field.replaceAll('"', '""')}"`).join(",")).join("\r\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "fiscalogic-compliance-calendar-2026-27.csv";
  anchor.click();
  URL.revokeObjectURL(url);
}

export function ResourcesPage() {
  return <><PageHeading eyebrow="Resources · Practical finance notes" title={<>Make the numbers easier to <em className="text-primary">follow.</em></>} detail="Plain-English reading on compliance, cash flow and bookkeeping. Sample article cards are placeholders until Fiscalogic approves the final content." />
    <section className="bg-surface"><div className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8"><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{articles.map(([category, title, description], index) => <article key={title} className="flex min-h-64 flex-col rounded-sm border border-border bg-background p-5"><p className="font-mono text-[10px] uppercase tracking-wide text-primary">{category} · SAMPLE ARTICLE</p><h2 className="mt-5 font-display text-2xl leading-snug text-navy">{title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p><span className="mt-5 border-t border-border pt-4 text-xs text-muted-foreground">Coming soon · {index + 4} min read</span></article>)}</div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8"><div className="grid gap-8 rounded-sm border border-primary/20 bg-soft-tint p-6 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="font-mono text-xs text-primary">COMPLIANCE CALENDAR · 2026–27</p><h2 className="mt-3 font-display text-3xl text-navy">A useful starting point for regular filers.</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">A downloadable sample calendar of recurring due dates. Government notifications, filing schemes and extensions can change dates—confirm what applies to your business.</p></div><Button variant="outline" onClick={downloadCalendar} className="h-11 rounded-sm bg-background"><ArrowDownToLine /> Download calendar</Button></div></section></>;
}

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  business: z.string().trim().min(2, "Please enter your business name."),
  phone: z.string().trim().min(8, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  city: z.string().trim().min(2, "Please enter your city."),
  turnover: z.string().min(1, "Please choose an annual turnover range."),
  message: z.string().trim().min(10, "Please add a little more detail."),
});
type ContactFields = z.infer<typeof contactSchema>;
const serviceOptions = ["Accounting", "Bookkeeping", "GST & tax", "ROC compliance", "Payroll", "MIS reporting", "Audit readiness"];

export function ContactPage() {
  const [serviceSelection, setServiceSelection] = useState<string[]>([]);
  const { register, handleSubmit, setValue, watch, formState: { errors, isSubmitting } } = useForm<ContactFields>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", business: "", phone: "", email: "", city: "", turnover: "", message: "" } });
  const turnover = watch("turnover");
  const onSubmit = handleSubmit(async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 250));
    toast.message("Contact form preview", { description: "Your details were checked in this browser only. Nothing was sent or stored." });
  });
  return <><PageHeading eyebrow="Contact · Start with a conversation" title={<>Let's make the numbers <em className="text-primary">make sense.</em></>} detail="Tell us what your business needs. We’ll start with a free 30-minute conversation and a clear next step." />
    <section className="bg-surface"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:py-16 lg:grid-cols-[1fr_.75fr] lg:px-8"><div className="rounded-sm border border-border bg-background p-5 sm:p-8"><p className="font-mono text-xs text-primary">TELL US A LITTLE ABOUT YOUR BUSINESS</p><form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">{([["name", "Your name", "text"], ["business", "Business name", "text"], ["phone", "Phone", "tel"], ["email", "Email", "email"], ["city", "City", "text"]] as const).map(([field, label, type]) => <div key={field}><label htmlFor={`contact-${field}`} className="mb-2 block text-sm font-medium text-navy">{label}</label><Input id={`contact-${field}`} type={type} autoComplete={field === "name" ? "name" : field === "email" ? "email" : field === "phone" ? "tel" : "organization"} aria-invalid={Boolean(errors[field])} {...register(field)} />{errors[field] && <p className="mt-1 text-xs text-danger">{errors[field]?.message}</p>}</div>)}
        <div><label className="mb-2 block text-sm font-medium text-navy" htmlFor="turnover">Annual turnover</label><Select value={turnover} onValueChange={(value) => setValue("turnover", value, { shouldValidate: true })}><SelectTrigger id="turnover" aria-label="Annual turnover range"><SelectValue placeholder="Choose a range" /></SelectTrigger><SelectContent>{["Under ₹1 crore", "₹1–5 crore", "₹5–25 crore", "₹25–100 crore", "Over ₹100 crore", "Prefer not to say"].map((range) => <SelectItem key={range} value={range}>{range}</SelectItem>)}</SelectContent></Select>{errors.turnover && <p className="mt-1 text-xs text-danger">{errors.turnover.message}</p>}</div></div>
      <fieldset><legend className="mb-2 text-sm font-medium text-navy">Services needed <span className="font-normal text-muted-foreground">(choose any)</span></legend><div className="flex flex-wrap gap-2">{serviceOptions.map((service) => { const selected = serviceSelection.includes(service); return <button type="button" key={service} aria-pressed={selected} onClick={() => setServiceSelection((current) => selected ? current.filter((value) => value !== service) : [...current, service])} className={`min-h-10 rounded-sm border px-3 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${selected ? "border-primary bg-soft-tint text-primary" : "border-border bg-background text-muted-foreground hover:border-primary"}`}>{selected && <Check className="mr-1 inline size-3" />}{service}</button>; })}</div></fieldset>
      <div><label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-navy">What would you like help with?</label><Textarea id="contact-message" rows={4} aria-invalid={Boolean(errors.message)} {...register("message")} />{errors.message && <p className="mt-1 text-xs text-danger">{errors.message.message}</p>}</div>
      <Button type="submit" disabled={isSubmitting} className="h-12 w-full rounded-sm sm:w-auto">{isSubmitting ? "Preparing…" : "Request a free consultation"}<ArrowRight /></Button><p className="text-xs leading-5 text-muted-foreground">This form is a preview. Submissions are not stored or sent until a secure backend is connected.</p>
    </form></div>
    <aside className="space-y-5"><div className="border border-border bg-background p-5 sm:p-6"><p className="font-mono text-xs text-primary">FISCALOGIC · NAGPUR</p><div className="mt-5 space-y-4 text-sm">{[[MapPin, site.contact.address], [Phone, site.contact.phone], [Mail, site.contact.email], [Clock3, site.contact.officeHours]].map(([Icon, text]) => { const ItemIcon = Icon as typeof MapPin; return <p key={text as string} className="flex items-start gap-3 text-muted-foreground"><ItemIcon className="mt-0.5 size-4 shrink-0 text-primary" />{text as string}</p>; })}</div><a href={`mailto:${site.contact.email}`} className="tick-link mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">Email Fiscalogic <ArrowUpRight className="size-4" /></a><a href={site.contact.whatsapp} target="_blank" rel="noreferrer" className="mt-3 flex items-center gap-2 text-sm font-medium text-primary"><Phone className="size-4" />WhatsApp Fiscalogic</a></div>
      <div className="overflow-hidden border border-border bg-background"><iframe title="Map showing Nagpur, Maharashtra" src="https://maps.google.com/maps?q=Nagpur%2C%20Maharashtra%2C%20India&z=12&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full border-0" /><p className="px-4 py-3 text-xs text-muted-foreground">Based in Nagpur. Supporting businesses across India.</p></div></aside></div></section></>;
}

export function LoginPage() {
  return <><PageHeading eyebrow="Client area · Secure access" title={<>Your finance desk, <em className="text-primary">close at hand.</em></>} detail="The secure client portal is not connected in this preview. Contact your Fiscalogic representative for account or document access." /><section className="grid place-items-center bg-surface px-5 py-16"><div className="w-full max-w-lg border border-border bg-background p-6 sm:p-9"><p className="font-mono text-xs text-primary">CLIENT AREA</p><h1 className="mt-4 font-display text-4xl text-navy">Client login</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">No login details are collected here.</p><div className="mt-6 rounded-sm bg-soft-tint p-4"><p className="flex items-center gap-2 text-sm font-medium text-navy"><ShieldCheck className="size-4 text-primary" />Portal access coming soon</p><p className="mt-2 text-xs leading-5 text-muted-foreground">For account or document access, contact your Fiscalogic representative directly.</p></div><div className="mt-6"><PrimaryLink /></div></div></section></>;
}

export function LegalPage({ kind }: { kind: "privacy" | "terms" }) {
  const privacy = kind === "privacy";
  return <><PageHeading eyebrow={`Fiscalogic · ${privacy ? "Privacy" : "Terms"}`} title={privacy ? <>Your information deserves <em className="text-primary">care.</em></> : <>Clear terms make better <em className="text-primary">working relationships.</em></>} detail="Draft placeholder. This page is not legal advice and must be reviewed and completed by Fiscalogic before publication." />
    <section className="bg-surface"><div className="mx-auto max-w-3xl space-y-8 px-5 py-12 sm:py-16 lg:px-8"><div className="border-l-2 border-gold bg-background p-5 text-sm leading-6 text-foreground">Draft content only. Do not treat this placeholder as a complete policy or agreement.</div>
      {(privacy ? [["Information you provide", "A live contact form must explain what information it collects, why it is collected and who receives it. The preview form does not transmit or store submissions."], ["Use and sharing", "Before collecting information, document how it will be used, who may access it and which service providers handle it."], ["Retention and your choices", "Set clear retention periods and explain how individuals can ask to access, correct or delete their information."], ["Contact", `For privacy questions, contact ${site.contact.email}. Confirm the final privacy contact and applicable legal requirements before publication.`]] : [["Using this website", "This preview is informational only. Confirm the final scope, service terms and limitations in a signed written agreement."], ["Professional engagement", "No professional advice or engagement is created by visiting the website or using a preview form. Applicable services, deliverables, fees and responsibilities must be agreed in writing."], ["Dates and information", "Compliance dates and website content are illustrative and may change. Confirm current official requirements for your circumstances."], ["Questions", `For questions about a proposed engagement, contact ${site.contact.email}. Have counsel review the final terms before publication.`]]).map(([title, text]) => <article key={title}><h2 className="font-display text-2xl text-navy">{title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}
      <p className="border-t border-border pt-5 font-mono text-xs text-muted-foreground">Draft updated for review · 2026</p></div></section></>;
}
