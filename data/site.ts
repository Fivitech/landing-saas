import {
  BadgeCheck,
  CreditCard,
  FileCheck2,
  LayoutDashboard,
  Network,
  Repeat2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Fivitech", href: "https://fivitech.com", external: true },
];

export const stats = [
  { value: "120+", label: "Brokers launched" },
  { value: "$4.2B", label: "Monthly volume routed" },
  { value: "99.99%", label: "Platform uptime" },
  { value: "30+", label: "Countries served" },
];

export type FeatureMockup = "ib-portal" | "rebate" | "kyc" | "payments" | "crm" | "white-label";

export type SiteFeature = {
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
  /** Real product screenshot (pre-optimized WebP in /public/screens). */
  image?: string;
  alt?: string;
  /** Intrinsic dimensions of `image`, used by next/image. */
  imageWidth?: number;
  imageHeight?: number;
  /** How the image sits in the 4:3 frame. Defaults to "cover". */
  imageFit?: "cover" | "contain";
  /** Styled on-brand mockup for features with no real screenshot. */
  mockup?: FeatureMockup;
  visualLabel: string;
};

export const features: SiteFeature[] = [
  {
    icon: LayoutDashboard,
    title: "Backoffice CRM",
    body: "Run leads, retention, onboarding, support, and trading-account operations from one command center built for forex teams.",
    bullets: ["Lead pipeline", "Role access", "Audit trail"],
    mockup: "crm",
    visualLabel: "CRM dashboard",
  },
  {
    icon: Network,
    title: "Multi-level IB Portal",
    body: "Create partner trees, automate tiered rebates, and give every introducing broker transparent performance and payout tracking.",
    bullets: ["Unlimited tiers", "Auto rebates", "Sub-IB tracking"],
    mockup: "ib-portal",
    visualLabel: "IB network",
  },
  {
    icon: Repeat2,
    title: "Rebate & Commission",
    body: "Run automated rebate cycles per IB and instrument, preview payouts before they go out, and keep a clean audit trail of every commission run.",
    bullets: ["Per-lot rebates", "Scheduled runs", "Payout preview"],
    mockup: "rebate",
    visualLabel: "Rebate engine",
  },
  {
    icon: FileCheck2,
    title: "KYC & Compliance",
    body: "Collect documents, monitor verification states, and keep onboarding moving without drowning your desk in manual follow-up.",
    bullets: ["Document flow", "Status tracking", "Compliance queue"],
    mockup: "kyc",
    visualLabel: "KYC workflow",
  },
  {
    icon: CreditCard,
    title: "Payments & Wallets",
    body: "Connect regional PSPs, reconcile deposits and withdrawals, and keep wallet activity tied to client and trading-account history.",
    bullets: ["Multi-PSP", "Wallet ledger", "Auto reconcile"],
    mockup: "payments",
    visualLabel: "Gateway stack",
  },
  {
    icon: Repeat2,
    title: "Trading Platforms & Copy Trading",
    body: "Connect MetaTrader 4, MetaTrader 5, and cTrader, plus client allocation and copy-trading tools — with the operational layer brokers need around trading infrastructure.",
    bullets: ["MT4 · MT5 · cTrader", "Risk limits", "Live allocation"],
    image: "/screens/trading-web.webp",
    alt: "MT5 web trader platform interface",
    imageWidth: 1029,
    imageHeight: 540,
    visualLabel: "Trading platform",
  },
  {
    icon: ShieldCheck,
    title: "White-label Launch",
    body: "Ship the complete brokerage stack under your own domain, logo, colors, and operational rules in days instead of quarters.",
    bullets: ["Own domain", "Brand system", "Managed launch"],
    mockup: "white-label",
    visualLabel: "White-label suite",
  },
];

export const marqueeItems = [
  "Multi-level IB",
  "Client Portal",
  "Backoffice CRM",
  "KYC & Compliance",
  "Payment Gateways",
  "MT4 / MT5 / cTrader",
  "Copy Trading",
  "Mobile Apps",
  "Wallet System",
  "Real-time Reporting",
  "White-label",
];

export const seoDefaults = {
  title: "Fivitech FXCRM | Forex CRM, IB Portal & Client Area",
  description:
    "Launch and scale a forex brokerage with Fivitech's CRM, client portal, IB management, KYC workflows, payment gateways, mobile apps, and MT4/MT5/cTrader-ready operations.",
};

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How long does it take to implement Fivitech?",
    answer:
      "Most brokerages go live in 2–4 weeks for a standard setup. More complex deployments with custom integrations typically take 4–8 weeks. Our team works alongside yours throughout to keep the rollout smooth.",
  },
  {
    question: "Which trading platforms does Fivitech integrate with?",
    answer:
      "Fivitech integrates with MetaTrader 4, MetaTrader 5, and cTrader out of the box, and supports custom API integrations for proprietary platforms. We can run a compatibility assessment for your exact stack.",
  },
  {
    question: "Is my data secure with Fivitech?",
    answer:
      "Security is foundational. Fivitech uses end-to-end encryption, regular security audits, and compliance with international data-protection standards. Data is held in secure, redundant data centers with 24/7 monitoring.",
  },
  {
    question: "Can I customize the client portal to match my brand?",
    answer:
      "Yes. Every plan includes white-labeling — your colors, logo, and domain. The Enterprise plan adds deeper customization including bespoke UI elements and workflows.",
  },
  {
    question: "Do you provide training for our team?",
    answer:
      "Yes. Implementation includes admin training, user training, and full documentation. Advanced and Enterprise plans add refresher sessions and ongoing knowledge-base access.",
  },
  {
    question: "What support do you offer?",
    answer:
      "All customers get email support with guaranteed response times. Advanced plans add priority support, and Enterprise includes 24/7 dedicated support with a named account manager and emergency phone line.",
  },
];

export const contactDetails = {
  email: "contact@fivitechnologies.com",
  phone: "+971 56 881 9915",
  tel: "+971568819915",
  address: "Office: 1F 2696, Building: C1, Fivitech Office, Ajman Free Zone, United Arab Emirates",
};

export const complianceHighlights = [
  { icon: BadgeCheck, label: "UAE-based forex technology partner" },
  { icon: ShieldCheck, label: "Brokerage-grade workflows and auditability" },
];
