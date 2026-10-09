import type { ImageMetadata } from "astro";
import briyoLiveDesktop from "../assets/work/briyo-live-desktop.png";
import briyoLiveMobile from "../assets/work/briyo-live-mobile.png";
import briyoArchive from "../assets/work/briyo.png";
import workspaceco from "../assets/work/workspaceco.png";
import visheshDesktop from "../assets/work/vishesh-desktop.png";
import visheshMobile from "../assets/work/vishesh-mobile.png";
import sarvati from "../assets/work/sarvati.png";
import axy from "../assets/work/axy.png";
import sentiment from "../assets/work/sentiment.png";
import estateos from "../assets/work/estateos.png";
import interiors from "../assets/work/1602-interiors.png";

/*
  Projects awaiting client approval are kept out of this file (and out of git) in the
  local, git-ignored private/unpublished/ folder.

  Evidence notes (keep in sync with docs/redesign/FOUNDER_DECISIONS.md):
  - Briyo: storefront captured live 9 Oct 2026; recovery board + ops modules from the
    abandoned-cart repository README and lib/ folder. Briyo + tags listed on nerdshouse.com/work.
  - WorkSpaceCo: website screenshot from nerdshouse.com/work; Sports site footer credits Nerdshouse.
  - Outcomes: no verified metrics exist for any project. None are shown.
*/

export type Shot = { src: ImageMetadata; alt: string; kind: "desktop" | "mobile" | "app"; url?: string; caption?: string };

export type Project = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  year?: string;
  headline: string;
  summary: string;
  role: string[];
  stack: string[];
  capability: string; // slug of capability page
  status: string;
  hero?: Shot;
  shots?: Shot[];
  detail: boolean;
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "briyo-supplements",
    name: "Briyo Supplements",
    client: "Briyo Supplements",
    sector: "D2C health & nutrition · India",
    headline: "A storefront, and the operations software behind it.",
    summary:
      "Brand, strategy and storefront work for an Indian supplements brand — then the internal tooling a growing D2C team needs: a recovery board for abandoned checkouts with WhatsApp sign-in, which has grown into modules for orders, inventory and affiliates.",
    role: ["Brand identity & strategy", "Storefront design & development", "Checkout-recovery tooling", "Internal operations software"],
    stack: ["Shopify", "GoKwik webhooks", "Node · Express", "Postgres (Neon)", "WhatsApp OTP (11za)", "Role-based access"],
    capability: "custom-software-development",
    status: "Storefront live at briyosupplements.com; internal tools deployed for the team",
    liveUrl: "https://www.briyosupplements.com",
    hero: {
      src: briyoLiveDesktop,
      alt: "Briyo Supplements homepage: headline 'Daily nutrition. Made in India.' with two product sachets and a 'Find your routine' button.",
      kind: "desktop",
      url: "briyosupplements.com",
      caption: "Live storefront, captured 9 October 2026.",
    },
    shots: [
      {
        src: briyoLiveMobile,
        alt: "Briyo Supplements mobile homepage with product range and bottom navigation.",
        kind: "mobile",
        caption: "Mobile storefront, captured 9 October 2026.",
      },
      {
        src: briyoArchive,
        alt: "An earlier Briyo Supplements homepage: 'Global-Quality Supplements Made Accessible' with a bestsellers row.",
        kind: "desktop",
        url: "briyosupplements.com · earlier release",
        caption: "Earlier release, as shown on our previous site.",
      },
    ],
    detail: true,
  },
  {
    slug: "workspaceco",
    name: "WorkSpaceCo",
    client: "WorkSpaceCo — a venture by The He Ha Studio",
    sector: "Co-working spaces",
    headline: "A co-working brand online, and an events site with WhatsApp sign-in.",
    summary:
      "Brand and website for a co-working space, followed by a separate sports events and tournaments site where members verify with a one-time code on WhatsApp before they register.",
    role: ["Brand identity", "Website design & development", "Events & tournaments site", "WhatsApp OTP verification"],
    stack: ["Next.js", "WhatsApp OTP", "Server-side verification"],
    capability: "mvp-development",
    status: "Website and events site delivered",
    hero: {
      src: workspaceco,
      alt: "WorkSpaceCo homepage: 'You bring in the heart, We set the Stage for Teamwork.' over a photo of the co-working lounge, with partner logos below.",
      kind: "desktop",
      url: "WorkSpaceCo · homepage",
      caption: "As shown on our previous site.",
    },
    detail: true,
  },
  {
    slug: "vishesh-masala",
    name: "Vishesh Masala",
    client: "Vishesh Masala",
    sector: "Spices · family brand since 1970",
    headline: "A Shopify rebuild for a 50-year-old Surat spice brand.",
    summary: "Storefront rebuild, catalogue clean-up and tracking checks for checkout and analytics.",
    role: ["Storefront rebuild", "Catalogue data", "Analytics & checkout tracking checks"],
    stack: ["Shopify", "GoKwik", "GA4"],
    capability: "mvp-development",
    status: "Live at visheshmasala.com",
    liveUrl: "https://visheshmasala.com",
    hero: {
      src: visheshDesktop,
      alt: "Vishesh Masala homepage: 'Spices of Bharat — Kitchen se dil tak' with an illustration of a woman grinding spices.",
      kind: "desktop",
      url: "visheshmasala.com",
      caption: "Live storefront, captured 9 October 2026.",
    },
    shots: [{ src: visheshMobile, alt: "Vishesh Masala mobile homepage.", kind: "mobile" }],
    detail: false,
  },
  {
    slug: "goosebumps-arena",
    name: "Goosebumps Arena",
    client: "Goosebumps Arena Pvt. Ltd.",
    sector: "Entertainment & gaming venue · Pune",
    headline: "Online bookings and payments for a gaming arena.",
    summary: "Online bookings, payments and WhatsApp verification for an entertainment venue.",
    role: ["Platform adaptation", "Bookings & payments"],
    stack: ["Next.js", "Supabase", "PhonePe", "WhatsApp OTP"],
    capability: "custom-software-development",
    status: "Live at goosebumpsarena.com",
    liveUrl: "https://goosebumpsarena.com",
    detail: false,
  },
  {
    slug: "sarvati",
    name: "Sarvati",
    client: "Sarvati",
    sector: "Ethnic wear & jewellery",
    headline: "Ecommerce storefront for an ethnic-wear label.",
    summary: "Design, brand identity and development, as listed on our previous site.",
    role: ["Design", "Brand identity", "Development"],
    stack: ["Shopify"],
    capability: "mvp-development",
    status: "Storefront",
    hero: { src: sarvati, alt: "Sarvati storefront homepage with two models in silk sarees.", kind: "desktop", url: "sarvati.com" },
    detail: false,
  },
  {
    slug: "axy",
    name: "AXY",
    client: "AXY",
    sector: "Research tooling",
    headline: "Product site for a knowledge-graph tool for research groups.",
    summary: "Design research, brand identity and development, as listed on our previous site.",
    role: ["Design research", "Brand identity", "Development"],
    stack: [],
    capability: "mvp-development",
    status: "Private beta site",
    hero: { src: axy, alt: "AXY landing page: 'Every scientist thinks in knowledge graphs. Make yours visible.'", kind: "desktop", url: "AXY" },
    detail: false,
  },
  {
    slug: "estateos",
    name: "EstateOS",
    client: "EstateOS",
    sector: "Real estate",
    headline: "Broker tools: visiting cards, stamp-duty and loan calculators.",
    summary: "Design research, design and development of a small suite of real-estate tools.",
    role: ["Design research", "Design", "Development"],
    stack: ["Next.js", "Supabase"],
    capability: "mvp-development",
    status: "Tools site",
    hero: { src: estateos, alt: "EstateOS page 'Designed for Efficient Real Estate' with six service tiles and a tools menu.", kind: "desktop", url: "EstateOS" },
    detail: false,
  },
  {
    slug: "sentiment",
    name: "Sentiment",
    client: "Sentiment",
    sector: "Web3 · lending protocol",
    headline: "Brand and site for a lending protocol.",
    summary: "Design, brand identity and development, as listed on our previous site.",
    role: ["Design", "Brand identity", "Development"],
    stack: [],
    capability: "mvp-development",
    status: "Marketing site",
    hero: { src: sentiment, alt: "Sentiment landing page: 'Maximize your stake.' with protocol figures below.", kind: "desktop", url: "Sentiment" },
    detail: false,
  },
  {
    slug: "1602-interiors",
    name: "1602 Interiors",
    client: "1602 Interiors by Shivani Baweja",
    sector: "Interior design studio",
    headline: "Portfolio site for an interior design studio.",
    summary: "Brand identity, design research and development, as listed on our previous site.",
    role: ["Brand identity", "Design", "Development"],
    stack: [],
    capability: "mvp-development",
    status: "Portfolio site",
    hero: { src: interiors, alt: "1602 Interiors homepage with the studio name over a photo of a glass-walled office.", kind: "desktop", url: "1602 Interiors" },
    detail: false,
  },
];

// Listed on the previous nerdshouse.com/work page. Scope of work not stated there, so names only.
export const OTHER_CLIENTS = [
  "Kohinoor Jewellers",
  "Panaka Craft Beers",
  "Phaelora",
  "Doeraa",
  "Phehchan",
  "Raypay",
  "Mirari Cielador",
  "Atara The Wedding Props",
  "Naara Aaba",
  "Swagat Callista",
  "Shrimpco",
  "Shubhalakshmi",
  "Deegeesaw",
  "Pranay Vinod",
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
