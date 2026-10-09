// Long-form case-study content. Sources are noted per project; nothing here is a metric or
// an outcome we cannot show. "notShared" lists what we deliberately leave out until the client approves.

export type CaseStudy = {
  slug: string;
  context: string;
  challenge: string[];
  modules: { name: string; when?: string; what: string; details: string[] }[];
  engineering: { k: string; v: string }[];
  status: string[];
  notShared: string[];
  source: string; // internal note, rendered small for transparency
};

export const CASES: Record<string, CaseStudy> = {
  "briyo-supplements": {
    slug: "briyo-supplements",
    context:
      "Briyo Supplements is an Indian direct-to-consumer brand selling daily vitamins and nutrition supplements online. As the brand grew, the work moved from the storefront into the operations behind it.",
    challenge: [
      "A D2C team lives in many tools at once: the store, the checkout provider, marketplaces, ads, couriers and WhatsApp.",
      "Abandoned checkouts arrive from the checkout provider. The team needed one shared place to follow up on them — with status, notes and a clear view of what was overdue.",
    ],
    modules: [
      {
        name: "Brand and storefront",
        what: "Brand identity, strategy and the Shopify storefront, through several releases.",
        details: ["Custom storefront sections", "Mobile storefront", "Ongoing storefront releases"],
      },
      {
        name: "Checkout recovery board",
        what: "Every abandoned checkout lands on one shared board, with status and notes the whole team sees.",
        details: [
          "Receives the checkout provider's webhook, verified with a shared secret",
          "Stores each cart with its full original payload",
          "Sign-in by WhatsApp one-time code, for allow-listed numbers only",
          "A WhatsApp digest of overdue carts for the operations lead",
          "Reads data only — it never changes the storefront",
        ],
      },
      {
        name: "Operations modules",
        what: "The board grew into an internal operations tool.",
        details: ["Shopify orders through webhooks and polling", "Marketplace and ads data", "Affiliates and commissions", "Inventory, support and logistics views", "Permissions per module"],
      },
    ],
    engineering: [
      { k: "Storefront", v: "Shopify, with custom theme sections." },
      { k: "Operations tools", v: "Node.js and Express with Postgres (Neon), deliberately simple front end with no build step." },
      { k: "Security", v: "Hashed one-time codes, rate limits on sign-in, constant-time comparisons and an allow-list." },
      { k: "Reliability", v: "Retries on outbound calls; a mock mode so the board can be used and tested without live data." },
    ],
    status: ["Storefront live at briyosupplements.com (checked 9 October 2026)", "Recovery board and operations modules deployed for the Briyo team"],
    notShared: ["Recovery rates and revenue — not published", "Internal screens, which contain customer data"],
    source: "Live storefront (captured 9 October 2026); recovery-board repository README and modules; project listing on our previous site.",
  },
  workspaceco: {
    slug: "workspaceco",
    context: "WorkSpaceCo is a co-working space — a venture by The He Ha Studio — that also runs sports events and tournaments for its community.",
    challenge: [
      "The space needed a brand identity and a website.",
      "Events needed quick registration with verified phone numbers, without asking everyone to create an account.",
    ],
    modules: [
      {
        name: "Brand and website",
        what: "Brand identity, design and development of the main website.",
        details: ["Brand identity and templates", "Website with plans, team and newsletter sign-up"],
      },
      {
        name: "Sports events site",
        what: "A separate site for sports, events and tournaments.",
        details: ["Pages per sport, event and tournament", "WhatsApp one-time code before registration", "Codes verified on the server, never in the browser"],
      },
    ],
    engineering: [
      { k: "Events site", v: "Next.js with server routes to send and verify one-time codes." },
      { k: "Verification", v: "Codes handled with server-side cryptography helpers; nothing secret reaches the browser." },
    ],
    status: ["Website and events site delivered"],
    notShared: ["Usage and sign-up numbers — not published"],
    source: "Project listing and screenshot from our previous site; events-site repository (footer credit to Nerdshouse).",
  },
};
