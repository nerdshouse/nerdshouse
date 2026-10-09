// Single source of truth for company facts.
// Only verified facts live here. Anything needing founder confirmation is listed in
// docs/redesign/FOUNDER_DECISIONS.md and is NOT rendered as fact.

export const SITE = {
  name: "Nerdshouse",
  legalName: "Nerdshouse Technologies LLP",
  url: "https://www.nerdshouse.com",
  tagline: "Technology & AI engineering partner",
  // Verified: MCA record (LLPIN AAT-0623, incorporated 25 July 2020) and current /about page.
  founded: "2020-07-25",
  foundedLabel: "July 2020",
  locality: "Surat",
  region: "Gujarat",
  country: "India",
  // Verified: current nerdshouse.com/contact page.
  email: "nerd@nerdshouse.com",
  founderEmail: "axit@nerdshouse.com",
  phone: "+91 99097 09080",
  phoneHref: "+919909709080",
  defaultDescription:
    "Technology and AI engineering partner in Surat, India. We build AI workflows, new software products and custom business systems — and stay to improve them.",
} as const;

export const CAPABILITIES = [
  {
    slug: "ai-agent-engineering",
    short: "AI & Agentic Engineering",
    nav: "AI & agent workflows",
    summary: "AI that works inside your real tools — with permissions, approvals and a record of every action.",
    index: "01",
  },
  {
    slug: "mvp-development",
    short: "MVP & Product Engineering",
    nav: "MVPs & new products",
    summary: "From a rough idea to a first release real people can use, then the releases after it.",
    index: "02",
  },
  {
    slug: "custom-software-development",
    short: "Custom Business Systems",
    nav: "Custom business software",
    summary: "Internal tools, dashboards and integrations that replace the spreadsheets your operations depend on.",
    index: "03",
  },
  {
    slug: "technology-partner",
    short: "Technology Partnership",
    nav: "Ongoing technology partner",
    summary: "A senior engineering team that keeps making good technical decisions with you after launch.",
    index: "04",
  },
] as const;

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;
