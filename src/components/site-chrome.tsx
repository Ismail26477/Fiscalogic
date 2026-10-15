import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUp, BadgeCheck, BriefcaseBusiness, BookOpenCheck, Building2,
  ChartNoAxesCombined, Check, ChevronRight, Clock3, FileCheck2, Landmark,
  Menu, MessageCircle, ReceiptIndianRupee, ShieldCheck, Sparkles, UsersRound,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site, navItems } from "@/config/site";

export function Wordmark({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2 font-display text-3xl font-semibold tracking-tight ${light ? "text-background" : "text-navy"}`} aria-label="Fiscalogic home">
      <span>Fiscalogic</span>
      <svg aria-hidden="true" viewBox="0 0 22 22" className={compact ? "h-4 w-4" : "h-5 w-5"}>
        <path d="m4 11.5 4.3 4.2L18.5 5.7" fill="none" stroke="var(--color-primary)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </svg>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <header className={`${pathname === "/" ? "absolute inset-x-0 top-0 border-transparent text-background" : "sticky top-0 border-b border-border/80"} z-40 bg-transparent transition-shadow ${scrolled && pathname !== "/" ? "shadow-sm" : ""}`}>
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:flex sm:justify-between lg:px-8">
          <Wordmark light={pathname === "/"} />
          <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => <Link key={item.to} to={item.to} className={`tick-link text-sm font-semibold ${pathname === item.to ? "text-primary" : pathname === "/" ? "text-background/90 hover:text-background" : "text-foreground/80 hover:text-primary"}`}>{item.label}</Link>)}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild size="sm" className="h-10 rounded-sm px-4"><Link to="/contact">Book a free call <ArrowRight /></Link></Button>
          </div>
          <div className="flex justify-end lg:hidden">
            <Sheet>
              <SheetTrigger asChild><Button variant={pathname === "/" ? "secondary" : "outline"} size="icon" className="min-h-11 min-w-11" aria-label="Open navigation"><Menu /></Button></SheetTrigger>
              <SheetContent side="right" className="flex w-full flex-col gap-0 p-0 sm:max-w-lg">
                <div className="border-b border-border p-6"><SheetTitle className="text-left"><Wordmark /></SheetTitle><p className="mt-2 text-sm text-muted-foreground">Your numbers, made logical.</p></div>
                <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-6 py-4">
                  {navItems.map((item, index) => <SheetClose asChild key={item.to}><Link to={item.to} className="flex items-center justify-between border-b border-border py-4 font-display text-xl text-navy" activeProps={{ className: "text-primary" }}><span><span className="mr-3 font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>{item.label}</span><ChevronRight className="size-4" /></Link></SheetClose>)}
                </nav>
                <div className="space-y-3 border-t border-border p-6"><p className="text-sm text-muted-foreground">{site.contact.address}<br />{site.contact.officeHours}</p><SheetClose asChild><Button asChild className="w-full rounded-sm"><Link to="/contact">Book a free call <ArrowRight /></Link></Button></SheetClose></div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return <footer className="bg-navy text-background">
    <div className="border-b border-background/15"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">
      <div><p className="font-display text-2xl">Good reminders. Fewer surprises.</p><p className="mt-1 text-sm text-background/70">Monthly compliance notes, without the noise.</p></div>
      <form className="flex w-full max-w-md gap-2" onSubmit={(event) => { event.preventDefault(); if (email.includes("@")) toast.message("Newsletter preview", { description: "This preview does not store your address or send emails." }); }}>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" required value={email} onChange={(event) => { setEmail(event.target.value); setSubscribed(false); }} placeholder="you@company.com" className="h-11 min-w-0 flex-1 rounded-sm border border-background/30 bg-background/10 px-3 text-sm text-background placeholder:text-background/60 focus-visible:outline-background" />
        <Button type="submit" variant="secondary" className="h-11 rounded-sm px-4">Subscribe</Button>
      </form>
    </div></div>
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.1fr] lg:px-8">
      <div><Wordmark light /><p className="mt-4 max-w-xs text-sm leading-6 text-background/70">Your numbers, made logical. A senior CA-led finance team for businesses ready to grow.</p><div className="mt-5 flex gap-4 text-background/75">{[["LinkedIn", "https://linkedin.com"], ["Instagram", "https://instagram.com"], ["X", "https://x.com"], ["Facebook", "https://facebook.com"]].map(([label, url]) => <a key={label} className="tick-link text-xs" href={url} target="_blank" rel="noreferrer" aria-label={label}>{label}</a>)}</div></div>
      <div><p className="font-mono text-xs text-background/50">EXPLORE</p><div className="mt-4 flex flex-col gap-3 text-sm">{navItems.map((item) => <Link key={item.to} to={item.to} className="text-background/75 hover:text-background">{item.label}</Link>)}<Link to="/privacy" className="text-background/75 hover:text-background">Privacy</Link><Link to="/terms" className="text-background/75 hover:text-background">Terms</Link></div></div>
      <div><p className="font-mono text-xs text-background/50">SERVICES</p><div className="mt-4 grid gap-3 text-sm">{[["Accounting", "takeover"], ["GST & tax", "gst"], ["Payroll", "payroll"], ["MIS reporting", "mis"], ["Audit readiness", "audit"]].map(([label, hash]) => <Link key={hash} to="/services" hash={hash} className="text-background/75 hover:text-background">{label}</Link>)}</div></div>
      <div><p className="font-mono text-xs text-background/50">FIND US</p><div className="mt-4 space-y-3 text-sm text-background/75"><p>{site.contact.address}</p><a href={`mailto:${site.contact.email}`} className="block hover:text-background">{site.contact.email}</a><p>{site.contact.phone}</p><p>{site.contact.officeHours}</p></div></div>
    </div>
    <div className="border-t border-background/15"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between lg:px-8"><span>© 2026 Fiscalogic. All rights reserved.</span><span>Checked. Reconciled. <span className="text-background">Fiscalogic ✓</span></span></div></div>
  </footer>;
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 550);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-3">
    <a href={site.contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Fiscalogic on WhatsApp" className="grid size-12 place-items-center rounded-full bg-success text-background shadow-lg transition hover:scale-105"><MessageCircle className="size-5" /></a>
    {visible && <Button variant="outline" size="icon" className="size-12 rounded-full bg-background shadow-lg" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp /></Button>}
  </div>;
}

export const iconMap = { BriefcaseBusiness, BookOpenCheck, Building2, ChartNoAxesCombined, Landmark, ReceiptIndianRupee, UsersRound, BadgeCheck, Check, ShieldCheck, Sparkles, Clock3, FileCheck2, Zap };

export function TickList({ items }: { items: readonly string[] }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-soft-tint text-primary"><Check className="size-3.5" /></span><span>{item}</span></li>)}</ul>;
}

export function PageHeading({ eyebrow, title, detail, imageSrc, imageAlt }: { eyebrow: string; title: React.ReactNode; detail: string; imageSrc?: string; imageAlt?: string }) {
  if (imageSrc) {
    return <section className="relative isolate min-h-[460px] overflow-hidden border-b border-border bg-navy sm:min-h-[540px]"><img src={imageSrc} alt={imageAlt ?? ""} width={1536} height={1024} loading="lazy" className="absolute inset-0 size-full object-cover" /><div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-5 py-16 sm:min-h-[540px] sm:py-20 lg:px-8"><div className="max-w-3xl text-background"><p className="font-mono text-xs uppercase tracking-[0.12em] text-background/80">{eyebrow}</p><h1 className="mt-5 max-w-2xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-xl text-base leading-7 text-background/85 sm:text-lg sm:leading-8">{detail}</p></div></div></section>;
  }
  return <div className="mx-auto max-w-7xl px-5 pb-14 pt-16 sm:pb-20 sm:pt-24 lg:px-8"><p className="font-mono text-xs uppercase tracking-[0.12em] text-primary">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.05] text-navy sm:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{detail}</p></div>;
}

export function SectionIntro({ index, label, title, detail }: { index: string; label: string; title: React.ReactNode; detail?: string }) {
  return <div className="mb-10 max-w-2xl"><p className="mb-3 font-mono text-xs text-primary">{index} — {label}</p><h2 className="font-display text-4xl leading-tight text-navy sm:text-5xl">{title}</h2>{detail && <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{detail}</p>}</div>;
}

export function PrimaryLink({ children = "Book a free consultation", to = "/contact" }: { children?: React.ReactNode; to?: "/contact" | "/services" }) {
  return <Button asChild className="h-12 rounded-sm px-5 text-sm"><Link to={to}>{children}<ArrowRight /></Link></Button>;
}
