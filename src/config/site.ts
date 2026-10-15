export const site = {
  name: "Fiscalogic",
  tagline: "Your numbers, made logical.",
  description:
    "CA-led accounting, GST, payroll and finance support for growing businesses. Based in Nagpur, serving businesses across India.",
  contact: {
    address: "Nagpur, Maharashtra, India",
    phone: "+91 XXXXX XXXXX",
    email: "hello@fiscalogic.in",
    officeHours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
    whatsapp: "https://wa.me/910000000000?text=Hi%20Fiscalogic%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.",
  },
  stats: [
    { value: "10+", label: "Years of CA experience", isPlaceholder: true },
    { value: "100+", label: "Businesses served", isPlaceholder: true },
    { value: "₹0", label: "Late-filing penalties", isPlaceholder: true },
    { value: "24h", label: "Max response time", isPlaceholder: true },
  ],
  testimonials: [
    {
      quote:
        "We went from wondering what our numbers meant to making decisions with confidence. Month-end no longer takes over our month.",
      name: "Business owner",
      role: "Manufacturing · Placeholder testimonial",
    },
    {
      quote:
        "The team tells us what matters in plain English and gets the filings done without a chase. It feels like finance finally has an owner.",
      name: "Founder",
      role: "Technology · Placeholder testimonial",
    },
    {
      quote:
        "Our old books were a worry we kept postponing. Fiscalogic gave us a clear plan, then quietly got everything back in order.",
      name: "Director",
      role: "Trading · Placeholder testimonial",
    },
    { quote: "I finally know what is happening in the business before the month is over.", name: "Co-founder", role: "E-commerce · Placeholder testimonial" },
    { quote: "Clear answers, clean reports and no last-minute filing panic.", name: "Managing partner", role: "Professional services · Placeholder testimonial" },
    { quote: "The monthly rhythm has made our cash flow conversations much easier.", name: "Founder", role: "Healthcare · Placeholder testimonial" },
    { quote: "They turned a backlog into a plan we could actually follow.", name: "Business owner", role: "Construction · Placeholder testimonial" },
    { quote: "Our team spends less time chasing documents and more time serving customers.", name: "Operations lead", role: "Retail · Placeholder testimonial" },
    { quote: "The numbers are no longer a surprise at the end of every quarter.", name: "Director", role: "Manufacturing · Placeholder testimonial" },
    { quote: "Everything is explained without jargon, and every action has an owner.", name: "Founder", role: "SaaS · Placeholder testimonial" },
    { quote: "Having one team for accounts and compliance has removed so much friction.", name: "Partner", role: "Consulting · Placeholder testimonial" },
    { quote: "We can make decisions with confidence because the reports arrive when promised.", name: "CEO", role: "Logistics · Placeholder testimonial" },
    { quote: "Fiscalogic brought structure to the parts of finance we kept putting off.", name: "Business owner", role: "Hospitality · Placeholder testimonial" },
    { quote: "The team is proactive, practical and always clear about the next step.", name: "Managing director", role: "Distribution · Placeholder testimonial" },
    { quote: "Our records are ready when we need them, not weeks after we ask.", name: "Founder", role: "Education · Placeholder testimonial" },
  ],
} as const;

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Why Fiscalogic", to: "/why-fiscalogic" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
] as const;

export const services = [
  {
    id: "takeover",
    title: "Accounting Takeover",
    short: "The whole finance desk, without hiring one.",
    description: "Invoicing, payables, receivables, reconciliations and monthly close—run by a dedicated CA-led team.",
    includes: ["Customer invoicing and collections tracking", "Vendor bills and payment schedules", "Bank and balance-sheet reconciliations", "A dependable monthly close"],
    icon: "BriefcaseBusiness",
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping & Backlog Cleanup",
    short: "From months behind to up to date.",
    description: "Clean, reconciled ledgers kept current every week. We can first untangle the backlog you already have.",
    includes: ["Historical records organized", "Transactions coded and reconciled", "Receivables and payables brought current", "Weekly bookkeeping rhythm"],
    icon: "BookOpenCheck",
  },
  {
    id: "gst",
    title: "GST & Indirect Tax",
    short: "Fewer deadline surprises. More proof filed.",
    description: "Registration, return preparation, filing and reconciliation for the GST obligations that apply to you.",
    includes: ["GST registrations and updates", "GSTR-1 and GSTR-3B preparation", "Input credit and books reconciliation", "Annual returns and filing confirmations"],
    icon: "ReceiptIndianRupee",
  },
  {
    id: "income-tax",
    title: "Income Tax & TDS",
    short: "Tax obligations handled before they become urgent.",
    description: "TDS returns, advance tax, income tax returns and clear help understanding notices.",
    includes: ["TDS calculations, deposits and returns", "Advance tax planning and tracking", "ITR preparation and filing", "Notice review and plain-English next steps"],
    icon: "Landmark",
  },
  {
    id: "roc",
    title: "ROC & Company Compliance",
    short: "Company paperwork, kept in good order.",
    description: "Support with incorporation, annual filings and ongoing Ministry of Corporate Affairs compliance.",
    includes: ["Incorporation and registrations", "Annual returns and statutory filings", "Compliance calendar monitoring", "Director and company record support"],
    icon: "Building2",
  },
  {
    id: "payroll",
    title: "Payroll, PF & ESI",
    short: "Payday runs smoothly. Statutory dues too.",
    description: "Salary processing and payroll compliance managed accurately, privately and on schedule.",
    includes: ["Monthly salary processing", "Payslips and payroll records", "PF and ESI contributions", "Payroll statutory deposits and returns"],
    icon: "UsersRound",
  },
  {
    id: "mis",
    title: "MIS & Business Insights",
    short: "Know what your numbers are trying to tell you.",
    description: "Clear monthly reporting on profit, cash, margins, runway and the parts of your business driving them.",
    includes: ["Profit and loss and cash-flow reports", "Margins by product, customer or branch", "Runway and working-capital visibility", "A short, human explanation of the numbers"],
    icon: "ChartNoAxesCombined",
  },
  {
    id: "audit",
    title: "Audit Readiness",
    short: "Audit season, without the archaeology.",
    description: "Schedules, supporting documents and auditor coordination maintained throughout the year.",
    includes: ["Reconciled supporting schedules", "Organized source documents", "Year-round audit-ready records", "Coordination with your statutory auditor"],
    icon: "BadgeCheck",
  },
] as const;

export const industries = [
  { title: "Manufacturing", detail: "Job costs, inventory and margins that show where value is really made." },
  { title: "Trading & Distribution", detail: "Stock, vendor payments and customer collections with fewer blind spots." },
  { title: "Retail & E-commerce", detail: "Sales channels, settlements, GST and product-level performance in one view." },
  { title: "Healthcare & Clinics", detail: "Clear practice accounts and dependable payroll and tax compliance." },
  { title: "Real Estate & Construction", detail: "Project-wise cash flow, vendor tracking and records ready for review." },
  { title: "Restaurants & Hospitality", detail: "Daily sales, food costs and payroll reconciled into a useful monthly picture." },
  { title: "IT & Startups", detail: "Runway, investor-ready reporting and compliance that can grow with you." },
  { title: "Professional Services", detail: "Know your billable margins, receivables and the health of each engagement." },
  { title: "Education", detail: "Fee cycles, payroll and statutory records managed with a steady monthly rhythm." },
] as const;

export const problems = [
  { title: "Your books are months behind", fix: "We clear the backlog, then keep ledgers current every week." },
  { title: "Your accountant appears only at deadlines", fix: "A dedicated team works on your books every month—not only at filing time." },
  { title: "Every tax deadline becomes a panic", fix: "We track filings before the due date and send confirmations when they are done." },
  { title: "You don't know what actually makes money", fix: "Monthly MIS shows real margins by product, client and branch." },
  { title: "Audit season means rebuilding a year of records", fix: "Audit-ready schedules and documents are maintained all year." },
  { title: "A tax notice lands and nobody knows what it means", fix: "We read it, explain it in plain English and help plan the response." },
] as const;

export const faqs = [
  { question: "What's included in the retainer?", answer: "Your written monthly scope can include accounting operations, filings, payroll and a monthly MIS—based on what your business needs. There are no surprise hourly bills." },
  { question: "Do you work with businesses outside Nagpur?", answer: "Yes. We are based in Nagpur and work with businesses across India using secure digital document sharing and regular calls." },
  { question: "Which accounting software do you support?", answer: "We work with Tally Prime, Zoho Books, QuickBooks, Busy, Marg, SAP and spreadsheets. No rip-and-replace unless you want one." },
  { question: "How do you handle our backlog?", answer: "We start with a books health-check, agree on a cleanup plan and quote it clearly before work begins. Then we move into a regular monthly close." },
  { question: "How quickly do you respond?", answer: "The brief's indicative service target is within 24 hours. Your actual response expectations are agreed in writing before onboarding." },
  { question: "Is my financial data secure?", answer: "Access is limited to the people working on your account, and files are handled through controlled, business-appropriate channels. We agree on the exact working process with you." },
  { question: "Can you handle GST notices?", answer: "We can review a notice, explain what it asks for and help coordinate a response. The right next step depends on the notice and filing history." },
  { question: "How does onboarding work?", answer: "A free 30-minute call, a books health-check, a fixed quote in writing, then a planned handover with monthly reporting and support." },
] as const;
