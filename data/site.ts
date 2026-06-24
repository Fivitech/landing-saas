import {
  BadgeCheck,
  CreditCard,
  Database,
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

export type SiteFeature = {
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
  image?: string;
  visualLabel: string;
};

export const features: SiteFeature[] = [
  {
    icon: LayoutDashboard,
    title: "Backoffice CRM",
    body: "Run leads, retention, onboarding, support, and trading-account operations from one command center built for forex teams.",
    bullets: ["Lead pipeline", "Role access", "Audit trail"],
    image: "/accounts.png",
    visualLabel: "CRM dashboard",
  },
  {
    icon: Network,
    title: "Multi-level IB Portal",
    body: "Create partner trees, automate tiered rebates, and give every introducing broker transparent performance and payout tracking.",
    bullets: ["Unlimited tiers", "Auto rebates", "Sub-IB tracking"],
    visualLabel: "IB network",
  },
  {
    icon: FileCheck2,
    title: "KYC & Compliance",
    body: "Collect documents, monitor verification states, and keep onboarding moving without drowning your desk in manual follow-up.",
    bullets: ["Document flow", "Status tracking", "Compliance queue"],
    visualLabel: "KYC workflow",
  },
  {
    icon: CreditCard,
    title: "Payments & Wallets",
    body: "Connect regional PSPs, reconcile deposits and withdrawals, and keep wallet activity tied to client and trading-account history.",
    bullets: ["Multi-PSP", "Wallet ledger", "Auto reconcile"],
    visualLabel: "Gateway stack",
  },
  {
    icon: Repeat2,
    title: "MT5 & Copy Trading",
    body: "Support MetaTrader workflows and client allocation tools with the operational layer brokers need around trading infrastructure.",
    bullets: ["MT5 ready", "Risk limits", "Live allocation"],
    visualLabel: "Trading platform",
  },
  {
    icon: ShieldCheck,
    title: "White-label Launch",
    body: "Ship the complete brokerage stack under your own domain, logo, colors, and operational rules in days instead of quarters.",
    bullets: ["Own domain", "Brand system", "Managed launch"],
    visualLabel: "White-label suite",
  },
];

export const marqueeItems = [
  "Multi-level IB",
  "Client Portal",
  "Backoffice CRM",
  "KYC & Compliance",
  "Payment Gateways",
  "MT5 Integration",
  "Copy Trading",
  "Wallet System",
  "Real-time Reporting",
  "White-label",
];

export const seoDefaults = {
  title: "Fivitech FXCRM | Forex CRM, IB Portal & Client Area",
  description:
    "Launch and scale a forex brokerage with Fivitech's CRM, client portal, IB management, KYC workflows, payment gateways, and MT5-ready operations.",
};

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
