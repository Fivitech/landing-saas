/**
 * Seed script: 10 forex-industry SEO blog posts (as DRAFTS) + 1 author + 5 categories.
 *
 * Run with the logged-in Sanity session (no token file needed):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=657k70ty NEXT_PUBLIC_SANITY_DATASET=production \
 *     npx sanity exec scripts/seed-blog.ts --with-user-token
 *
 * Idempotent: author + categories use stable _ids and createOrReplace; posts are
 * drafts (`drafts.fxcrm-<slug>`) via createOrReplace, so re-running updates in place.
 */
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-01-01" });

// ---------------------------------------------------------------------------
// Portable Text builders. Every block / span / markDef gets a unique _key via a
// monotonically increasing counter, scoped per-document so re-runs are stable.
// ---------------------------------------------------------------------------
type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type MarkDef = { _key: string; _type: "link"; href: string };
type Block = {
  _type: "block";
  _key: string;
  style: string;
  markDefs: MarkDef[];
  children: Span[];
  listItem?: "bullet";
  level?: number;
};

function makeKeygen(prefix: string) {
  let n = 0;
  return () => `${prefix}${(n++).toString(36)}`;
}

/**
 * Mini-DSL for body content. Each entry is one of:
 *   ["h2", "Heading text"]
 *   ["h3", "Sub-heading"]
 *   ["p", "Paragraph text"]                 -> plain paragraph
 *   ["p", [ "text ", {t:"link text", href:"/features"}, " more text" ]]  -> linked
 *   ["quote", "Blockquote text"]
 *   ["li", "Bullet item"]                   -> single bullet
 *   ["li", [ ...inline parts ]]             -> linked bullet
 */
type InlinePart = string | { t: string; href: string };
type Entry = [string, string | InlinePart[]];

function buildBody(entries: Entry[], docKeyPrefix: string): Block[] {
  const key = makeKeygen(`${docKeyPrefix}-b`);
  const spanKey = makeKeygen(`${docKeyPrefix}-s`);
  const linkKey = makeKeygen(`${docKeyPrefix}-l`);

  return entries.map(([kind, content]) => {
    const style =
      kind === "h2" ? "h2" : kind === "h3" ? "h3" : kind === "quote" ? "blockquote" : "normal";
    const isBullet = kind === "li";

    const markDefs: MarkDef[] = [];
    const parts: InlinePart[] = Array.isArray(content) ? content : [content];
    const children: Span[] = parts.map((part) => {
      if (typeof part === "string") {
        return { _type: "span", _key: spanKey(), text: part, marks: [] };
      }
      const lk = linkKey();
      markDefs.push({ _key: lk, _type: "link", href: part.href });
      return { _type: "span", _key: spanKey(), text: part.t, marks: [lk] };
    });

    const block: Block = {
      _type: "block",
      _key: key(),
      style,
      markDefs,
      children,
    };
    if (isBullet) {
      block.listItem = "bullet";
      block.level = 1;
    }
    return block;
  });
}

// ---------------------------------------------------------------------------
// Author + categories (stable ids)
// ---------------------------------------------------------------------------
const AUTHOR_ID = "author.fivitech-team";

const author = {
  _id: AUTHOR_ID,
  _type: "author",
  name: "Fivitech Team",
  slug: { _type: "slug", current: "fivitech-team" },
  bio: [
    {
      _type: "block",
      _key: "auth-bio-0",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: "auth-bio-s0",
          text: "The Fivitech team builds CRM, client-portal, and trading infrastructure for forex and multi-asset brokers. We write about brokerage operations, compliance, and the technology that runs modern trading desks.",
          marks: [],
        },
      ],
    },
  ],
};

const CATEGORIES: { id: string; title: string; slug: string; description: string; color: string }[] =
  [
    {
      id: "category.brokerage-operations",
      title: "Brokerage Operations",
      slug: "brokerage-operations",
      description: "Running the desk: onboarding, IB programs, payments, and day-to-day broker operations.",
      color: "#00E676",
    },
    {
      id: "category.compliance",
      title: "Compliance",
      slug: "compliance",
      description: "KYC, AML, licensing, and regulatory obligations for forex and CFD brokers.",
      color: "#2979FF",
    },
    {
      id: "category.trading",
      title: "Trading",
      slug: "trading",
      description: "Instruments, execution, liquidity, and risk models that shape the trading experience.",
      color: "#FFB300",
    },
    {
      id: "category.technology",
      title: "Technology",
      slug: "technology",
      description: "Platforms, integrations, and the software stack behind a brokerage.",
      color: "#7C4DFF",
    },
    {
      id: "category.growth",
      title: "Growth",
      slug: "growth",
      description: "Acquisition, retention, and scaling a forex brokerage profitably.",
      color: "#FF5252",
    },
  ];

const CAT = Object.fromEntries(CATEGORIES.map((c) => [c.slug, c.id])) as Record<string, string>;

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------
interface Article {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  categories: string[]; // category slugs
  body: Entry[];
}

const ARTICLES: Article[] = [
  // 1 -----------------------------------------------------------------------
  {
    slug: "how-to-start-a-forex-brokerage-2026",
    title: "How to Start a Forex Brokerage in 2026: A Step-by-Step Guide",
    excerpt:
      "A practical, step-by-step roadmap to launching a forex brokerage in 2026 — from licensing and liquidity to your CRM, payments, and first clients.",
    metaTitle: "How to Start a Forex Brokerage in 2026",
    metaDescription:
      "Step-by-step guide to starting a forex brokerage in 2026: licensing, liquidity, platform, CRM, payments, and client acquisition.",
    publishedAt: "2026-06-22T09:00:00Z",
    categories: ["brokerage-operations"],
    body: [
      ["p", "Starting a forex brokerage in 2026 is more accessible than it was a decade ago, but it is also more competitive and more heavily regulated. The brokers who launch successfully treat it as a structured project: a sequence of licensing, technology, and operational decisions that each unlock the next. This guide walks through that sequence in the order most founders actually face it."],
      ["h2", "1. Choose your model and jurisdiction"],
      ["p", "Before anything else, decide what kind of broker you want to be. Will you operate your own trading server, or start as an introducing broker or white-label partner? Your answer determines your capital requirements, your regulatory exposure, and how quickly you can go live."],
      ["p", "Jurisdiction is the next fork. Tier-1 regulators such as the FCA, ASIC, or CySEC bring credibility and access to premium payment providers, but demand significant capital and ongoing compliance. Offshore jurisdictions lower the barrier to entry but can limit which markets and banking partners you can reach."],
      ["h2", "2. Secure licensing and incorporate"],
      ["p", "Licensing is the longest pole in the tent. Build your timeline around it. You will typically need a registered legal entity, a compliance officer, documented AML/KYC procedures, and proof of minimum capital. Engaging a specialist law firm early almost always pays for itself in avoided delays."],
      ["h2", "3. Line up liquidity and your trading platform"],
      ["p", "Your traders need prices and execution. That means a liquidity provider or prime-of-prime relationship feeding into a trading platform — most commonly MT5, MT4, or cTrader. At this stage you also decide your risk model: whether you internalize flow (B-book), pass it straight through (A-book), or run a hybrid."],
      ["h3", "Core technology checklist"],
      ["li", "Trading platform (MT5/MT4/cTrader) and server hosting"],
      ["li", "One or more liquidity providers with a tested feed"],
      ["li", "A brokerage CRM to manage clients, KYC, and IB rebates"],
      ["li", "Payment gateways for deposits and withdrawals"],
      ["li", "A client portal for onboarding, funding, and account management"],
      ["h2", "4. Stand up your CRM and client portal"],
      ["p", [
        "The CRM is the operational heart of the brokerage — it is where onboarding, KYC review, funding, IB rebates, and support all come together. Trying to run a broker on spreadsheets is the most common early-stage mistake. A purpose-built brokerage platform ties these workflows together from day one. You can see how Fivitech approaches this on our ",
        { t: "features page", href: "/features" },
        ".",
      ]],
      ["h2", "5. Connect payments and go live"],
      ["p", "Finally, integrate deposit and withdrawal rails, run a full test of the end-to-end client journey, and onboard a controlled group of first clients before opening the doors widely. Treat launch as a soft launch: watch your funding flow, your execution quality, and your support response times closely."],
      ["h2", "Your launch roadmap, in one line"],
      ["p", [
        "Pick a model, get licensed, line up liquidity and a platform, run everything through a real CRM and client portal, then connect payments and launch. If you want help mapping that stack to your jurisdiction and budget, ",
        { t: "get in touch with our team", href: "/contact" },
        " — we have helped brokers go from idea to live trading.",
      ]],
    ],
  },
  // 2 -----------------------------------------------------------------------
  {
    slug: "what-is-a-forex-crm",
    title: "What Is a Forex CRM and Why Every Broker Needs One",
    excerpt:
      "A forex CRM is the operational backbone of a brokerage. Here's what it does, why generic CRMs fall short, and how the right one drives retention and revenue.",
    metaTitle: "What Is a Forex CRM and Why Brokers Need One",
    metaDescription:
      "Learn what a forex CRM does — onboarding, KYC, IB rebates, funding, retention — and why generic CRMs fail forex brokers.",
    publishedAt: "2026-06-20T09:00:00Z",
    categories: ["technology", "brokerage-operations"],
    body: [
      ["p", "Ask ten brokers what a CRM is and you will get ten answers. For a forex brokerage, a CRM is far more than a contact database — it is the system that runs the business. It connects the client portal, the trading platform, your payment providers, and your compliance workflows into one place. Without it, those systems drift apart and your team spends its days reconciling them by hand."],
      ["h2", "What a forex CRM actually does"],
      ["p", "A purpose-built forex CRM brings the entire client lifecycle under one roof. The headline capabilities most brokers rely on are:"],
      ["li", "Client onboarding and KYC document collection, review, and approval"],
      ["li", "Account management synced with the trading platform (MT5/MT4)"],
      ["li", "Deposit and withdrawal processing across multiple payment gateways"],
      ["li", "Introducing-broker and affiliate management with multi-level rebates"],
      ["li", "Segmentation, sales pipelines, and retention workflows"],
      ["li", "Compliance reporting and a full audit trail of every action"],
      ["h2", "Why generic CRMs fall short"],
      ["p", "Salesforce or HubSpot can store contacts, but they have no concept of a trading account, a lot of XAUUSD, a rebate tier, or a KYC status. A forex broker who adopts a generic CRM ends up building expensive custom integrations to bolt on the things a specialized platform does out of the box — and still has gaps in compliance and reconciliation."],
      ["h2", "The retention and revenue case"],
      ["p", "The real return on a forex CRM is not tidiness — it is money. When your team can see a client's trading activity, funding history, and support tickets in one view, they retain that client longer and identify upsell moments faster. When IB rebates calculate automatically, your partners get paid correctly and on time, and they bring you more volume."],
      ["quote", "The brokerage that knows its clients best, keeps them longest."],
      ["h2", "Choosing the right platform"],
      ["p", [
        "Look for a CRM built specifically for brokers, with native trading-platform integration, configurable IB structures, and compliance baked in rather than bolted on. Explore the capabilities on our ",
        { t: "features page", href: "/features" },
        ", or ",
        { t: "talk to our team", href: "/contact" },
        " about a walkthrough tailored to your desk.",
      ]],
    ],
  },
  // 3 -----------------------------------------------------------------------
  {
    slug: "introducing-broker-rebate-management-explained",
    title: "Introducing Broker (IB) & Multi-Level Rebate Management Explained",
    excerpt:
      "IB programs are one of the most powerful growth channels in forex. Here's how introducing brokers, multi-level rebate structures, and automated payouts work.",
    metaTitle: "IB & Multi-Level Rebate Management Explained",
    metaDescription:
      "How introducing broker (IB) programs and multi-level rebate structures work, and why automated rebate management drives brokerage growth.",
    publishedAt: "2026-06-18T09:00:00Z",
    categories: ["brokerage-operations", "growth"],
    body: [
      ["p", "Introducing brokers are one of the most cost-effective acquisition channels in the industry. Instead of spending directly on advertising, a broker partners with individuals and firms who refer traders in exchange for a share of the spread or commission those traders generate. Done well, it is a growth engine that scales itself. Done badly, it is a reconciliation nightmare."],
      ["h2", "What is an introducing broker?"],
      ["p", "An introducing broker (IB) refers clients to your brokerage and earns a rebate on the trading activity of those clients. The IB owns the relationship and the marketing; you own the platform, execution, and back office. It is a partnership that aligns incentives: the IB earns more when their referred clients trade more and stay longer."],
      ["h2", "How multi-level rebate structures work"],
      ["p", "Multi-level (or 'master IB') structures let IBs recruit sub-IBs beneath them, forming a tree. When a trader generates volume, the rebate flows up through every level of that tree according to the rates you have configured. A master IB earns an override on the activity their sub-IBs bring in, which motivates them to build and support a network rather than just refer a handful of clients."],
      ["h3", "A typical rebate flow"],
      ["li", "A referred client trades 10 lots of EURUSD"],
      ["li", "The direct IB earns their per-lot rebate on that volume"],
      ["li", "The master IB above them earns a smaller override per lot"],
      ["li", "Each rebate is logged, attributed, and queued for payout automatically"],
      ["h2", "Why automation matters"],
      ["p", "Calculating multi-level rebates by hand is where brokers lose money and trust. A single mis-attributed trade or late payout can cost you a productive partner. Automated rebate management calculates entitlements in real time from actual trading activity, handles arbitrarily deep IB trees, and produces a clean statement for every partner — so your IBs are paid accurately and you keep your margins intact."],
      ["h2", "Turn partners into a growth channel"],
      ["p", [
        "A well-run IB program with transparent, automated rebates is one of the highest-leverage investments a broker can make. See how our platform models multi-level IB structures on the ",
        { t: "features page", href: "/features" },
        ", or compare plans on our ",
        { t: "pricing page", href: "/pricing" },
        ".",
      ]],
    ],
  },
  // 4 -----------------------------------------------------------------------
  {
    slug: "kyc-aml-compliance-for-forex-brokers",
    title: "KYC & AML Compliance for Forex Brokers: A Practical Guide",
    excerpt:
      "KYC and AML are non-negotiable for forex brokers. This guide covers the core requirements, common pitfalls, and how to build compliance into your workflow.",
    metaTitle: "KYC & AML Compliance for Forex Brokers",
    metaDescription:
      "A practical guide to KYC and AML compliance for forex brokers: requirements, risk-based onboarding, monitoring, and avoiding costly pitfalls.",
    publishedAt: "2026-06-16T09:00:00Z",
    categories: ["compliance"],
    body: [
      ["p", "For a forex broker, compliance is not a department — it is a license to operate. Know Your Customer (KYC) and Anti-Money-Laundering (AML) obligations sit at the center of that. Get them right and they fade into the background of a smooth onboarding flow. Get them wrong and you risk frozen accounts, regulatory penalties, and reputational damage that is hard to undo."],
      ["h2", "What KYC requires"],
      ["p", "KYC is the process of verifying that clients are who they claim to be. At a minimum, a compliant onboarding flow collects and verifies:"],
      ["li", "Government-issued identity documents (passport, national ID, or driver's license)"],
      ["li", "Proof of address, such as a recent utility bill or bank statement"],
      ["li", "Confirmation that the client is not on any sanctions or PEP list"],
      ["li", "An understanding of the source of the client's funds where required"],
      ["h2", "What AML adds"],
      ["p", "AML extends KYC from the moment of onboarding to the entire life of the relationship. It means applying a risk-based approach — higher-risk clients get more scrutiny — and monitoring transactions for patterns that suggest money laundering, such as rapid deposits and withdrawals with little genuine trading in between. Suspicious activity must be flagged and, where required, reported to the relevant authority."],
      ["h3", "Common pitfalls"],
      ["li", "Treating KYC as a one-time checkbox instead of an ongoing obligation"],
      ["li", "Manual document review that is slow, inconsistent, and hard to audit"],
      ["li", "No clear audit trail to demonstrate compliance to a regulator"],
      ["li", "Weak screening that misses sanctioned or politically exposed persons"],
      ["h2", "Building compliance into the workflow"],
      ["p", "The brokers who handle compliance best do not treat it as a separate, painful step. They build it into onboarding so that document collection, verification, screening, and approval happen in one guided flow — with every action timestamped and stored for audit. That turns compliance from a bottleneck into a competitive advantage: clients onboard faster, and your team has the records it needs when a regulator asks."],
      ["h2", "Make compliance a strength, not a scramble"],
      ["p", [
        "A purpose-built brokerage platform bakes KYC and AML into onboarding, with a complete audit trail by default. See how on our ",
        { t: "features page", href: "/features" },
        ", or ",
        { t: "contact us", href: "/contact" },
        " to discuss your jurisdiction's specific requirements.",
      ]],
    ],
  },
  // 5 -----------------------------------------------------------------------
  {
    slug: "trading-gold-silver-xau-xag-for-brokers",
    title: "Trading Gold and Silver (XAU/XAG): What Brokers Should Know",
    excerpt:
      "Gold and silver are among the most-traded instruments after major currency pairs. Here's what brokers need to know about XAU/XAG pricing, risk, and demand.",
    metaTitle: "Trading Gold & Silver (XAU/XAG) for Brokers",
    metaDescription:
      "What forex brokers should know about offering gold and silver (XAU/XAG): pricing, leverage, risk management, and surging client demand.",
    publishedAt: "2026-06-14T09:00:00Z",
    categories: ["trading"],
    body: [
      ["p", "For most brokers, currency pairs are the headline product — but precious metals are rarely far behind. Gold (XAUUSD) and silver (XAGUSD) are among the most actively traded instruments on any retail platform, and demand for them spikes precisely when markets get nervous. Offering them well is both a client-acquisition opportunity and a risk-management challenge."],
      ["h2", "Why clients want gold and silver"],
      ["p", "Gold is the classic safe-haven asset. When inflation rises, currencies wobble, or geopolitical tension flares, retail and institutional traders alike rotate into gold. Silver offers a similar appeal with higher volatility, attracting traders who want bigger moves. For a broker, that means metals draw consistent volume across very different market conditions."],
      ["h2", "How XAU/XAG pricing and contracts work"],
      ["p", "Metals are quoted against the US dollar — XAUUSD is the price of one ounce of gold in dollars, XAGUSD the same for silver. Contract sizes, tick values, and margin requirements differ from FX pairs, so they need to be configured correctly on your platform. A few things brokers should get right from the start:"],
      ["li", "Accurate contract specifications and tick values for each metal"],
      ["li", "Sensible leverage limits that reflect metals' volatility"],
      ["li", "Reliable metals pricing from your liquidity provider"],
      ["li", "Clear swap and rollover handling for overnight positions"],
      ["h2", "The risk management angle"],
      ["p", "Gold and silver can move sharply, especially around economic data and major news. If you are internalizing metals flow on a B-book basis, a sudden gap can hurt. Many brokers route metals — or at least large metals positions — to liquidity providers to cap their exposure. Whatever model you choose, set leverage and margin on metals deliberately rather than copying your FX settings."],
      ["quote", "When uncertainty rises, volume in gold rises with it — be ready for both."],
      ["h2", "Offer metals with confidence"],
      ["p", [
        "Precious metals are a high-demand product that pairs naturally with a forex offering — as long as your pricing, leverage, and risk controls are sound. To see how our platform helps you manage multi-asset instruments and risk, visit our ",
        { t: "features page", href: "/features" },
        ".",
      ]],
    ],
  },
  // 6 -----------------------------------------------------------------------
  {
    slug: "a-book-vs-b-book-forex-risk-models",
    title: "A-Book vs B-Book: Forex Broker Risk Models & Liquidity Explained",
    excerpt:
      "A-book, B-book, or hybrid? Your risk model defines how you make money and how much risk you carry. Here's how each works and when to use it.",
    metaTitle: "A-Book vs B-Book: Forex Risk Models Explained",
    metaDescription:
      "A-book vs B-book vs hybrid forex risk models explained: how each handles liquidity, revenue, and risk, and when brokers should use them.",
    publishedAt: "2026-06-12T09:00:00Z",
    categories: ["trading", "brokerage-operations"],
    body: [
      ["p", "Every forex broker has to answer one foundational question: what happens to a client's trade after they click buy? The answer is your risk model, and it shapes everything from your revenue to your regulatory profile. The three options — A-book, B-book, and hybrid — are simpler than the jargon suggests."],
      ["h2", "A-book: pass the trade through"],
      ["p", "In an A-book model, the broker passes client orders straight through to a liquidity provider. The broker is an intermediary, earning revenue from the spread markup or a commission rather than from client losses. Because client trades are hedged externally, the broker carries little market risk — but margins per trade are thinner and depend on volume."],
      ["h2", "B-book: internalize the flow"],
      ["p", "In a B-book model, the broker takes the other side of client trades internally rather than routing them out. When a client loses, the broker keeps the difference; when a client wins, the broker pays it. This can be highly profitable — most retail traders lose over time — but it concentrates market risk on the broker's own book, which can be dangerous during sharp market moves."],
      ["h2", "Hybrid: the model most brokers actually run"],
      ["p", "In practice, most established brokers run a hybrid book. They classify flow and route it accordingly:"],
      ["li", "Consistently profitable or large clients are A-booked to hedge their risk"],
      ["li", "Smaller, retail-style flow is B-booked to capture the spread and statistical edge"],
      ["li", "Routing rules can adjust automatically as a client's behavior changes"],
      ["h2", "Choosing your model"],
      ["p", "There is no universally 'correct' answer. A pure A-book is lower risk and regulator-friendly but demands scale. A pure B-book is higher margin but higher risk and invites conflict-of-interest scrutiny. A well-managed hybrid captures the best of both, but it requires solid risk-management tooling and a clear, data-driven routing policy."],
      ["h2", "Run the model that fits your desk"],
      ["p", [
        "Your risk model is too important to default into by accident. Whichever you choose, you need a back office that gives you real-time visibility into exposure. Compare what fits your scale on our ",
        { t: "pricing page", href: "/pricing" },
        ", or ",
        { t: "talk to our team", href: "/contact" },
        " about risk tooling.",
      ]],
    ],
  },
  // 7 -----------------------------------------------------------------------
  {
    slug: "mt5-vs-mt4-for-brokers",
    title: "MT5 vs MT4 for Brokers: Which Trading Platform to Choose",
    excerpt:
      "MT4 is the legacy standard; MT5 is the modern successor. This guide compares them for brokers across instruments, performance, and long-term support.",
    metaTitle: "MT5 vs MT4 for Brokers: Which to Choose",
    metaDescription:
      "MT5 vs MT4 for forex brokers compared: instruments, performance, regulation, and future support. Which trading platform should you launch with?",
    publishedAt: "2026-06-10T09:00:00Z",
    categories: ["technology", "trading"],
    body: [
      ["p", "For two decades, MetaTrader has been the default trading platform in retail forex. The question for a new or growing broker is no longer whether to use MetaTrader, but which version: the entrenched MT4, or its more capable successor MT5. The right answer in 2026 leans clearly one way, but the trade-offs are worth understanding."],
      ["h2", "MT4: the legacy standard"],
      ["p", "MT4 launched in 2005 and became the industry default. Traders know it, third-party tools support it, and its simplicity is a genuine strength. But it was designed for forex first and foremost, its multi-asset support is limited, and its development is effectively frozen — the vendor is steering the market toward MT5."],
      ["h2", "MT5: the modern successor"],
      ["p", "MT5 is a ground-up rebuild that addresses MT4's structural limits. It is faster, supports far more instruments natively, and is built for a multi-asset world. For brokers, the headline advantages are:"],
      ["li", "Native support for forex, stocks, futures, and more from one platform"],
      ["li", "More timeframes, order types, and built-in analytical tools"],
      ["li", "An economic calendar and depth-of-market data built in"],
      ["li", "Active development and the vendor's long-term support focus"],
      ["h2", "Which should you choose?"],
      ["p", "If you are launching today, MT5 is the stronger default. It future-proofs your offering, supports the multi-asset products clients increasingly expect, and aligns with where the platform vendor is investing. The main reason to consider MT4 is a specific client base that already lives there or a dependency on an MT4-only tool — and even then, many brokers offer both."],
      ["quote", "Choosing a platform is a decade-long decision — optimize for where the market is going."],
      ["h2", "Connect either platform to your back office"],
      ["p", [
        "Whichever platform you run, the deciding factor for your operations is how cleanly it connects to your CRM, client portal, and IB system. Our platform integrates natively with MetaTrader so accounts, trades, and rebates stay in sync. Explore the integration on our ",
        { t: "features page", href: "/features" },
        ".",
      ]],
    ],
  },
  // 8 -----------------------------------------------------------------------
  {
    slug: "reducing-client-churn-at-a-forex-brokerage",
    title: "Reducing Client Churn at a Forex Brokerage",
    excerpt:
      "Acquiring a forex client is expensive; losing one is worse. Here's how brokers reduce churn through better onboarding, engagement, and data-driven retention.",
    metaTitle: "Reducing Client Churn at a Forex Brokerage",
    metaDescription:
      "How forex brokers reduce client churn: faster onboarding, proactive engagement, data-driven retention, and using your CRM to spot at-risk clients.",
    publishedAt: "2026-06-08T09:00:00Z",
    categories: ["growth", "brokerage-operations"],
    body: [
      ["p", "In forex, the cost of acquiring a client is high and rising. That makes retention the most underrated lever in the business. A broker that keeps clients trading for twelve months instead of three earns multiples more from the same marketing spend. Yet many brokers pour money into acquisition while letting hard-won clients quietly drift away."],
      ["h2", "Why clients leave"],
      ["p", "Churn rarely has a single cause, but the patterns are familiar. Clients leave when onboarding is slow or confusing, when they lose money quickly without any support or education, when withdrawals are painful, or simply when nobody reaches out and they forget you exist. The common thread is a lack of timely, relevant contact."],
      ["h2", "The retention playbook"],
      ["p", "Reducing churn is less about grand gestures and more about consistent, well-timed touches. The fundamentals most brokers should nail first:"],
      ["li", "Make onboarding fast and frictionless so first impressions are positive"],
      ["li", "Reach out proactively to new clients in their critical first weeks"],
      ["li", "Make deposits and withdrawals smooth and predictable"],
      ["li", "Segment clients and tailor communication to their activity and value"],
      ["li", "Offer education and support to clients who are struggling early"],
      ["h2", "Use your data to see churn coming"],
      ["p", "The brokers who retain best do not react to churn — they predict it. The signals are in your own data: a sudden drop in trading activity, a stalled deposit, an unanswered support ticket, a client who hasn't logged in for weeks. A CRM that surfaces these at-risk signals lets your team intervene while the relationship is still recoverable, instead of discovering the loss after the client is gone."],
      ["quote", "Retention is not a campaign; it is a habit your whole desk shares."],
      ["h2", "Turn retention into a system"],
      ["p", [
        "Retention works best when it is built into your tools rather than left to memory. A CRM that segments clients, flags at-risk behavior, and automates timely outreach turns retention from guesswork into a repeatable system. See how on our ",
        { t: "features page", href: "/features" },
        ", or ",
        { t: "get in touch", href: "/contact" },
        " for a walkthrough.",
      ]],
    ],
  },
  // 9 -----------------------------------------------------------------------
  {
    slug: "payment-gateways-for-forex-brokers",
    title: "Payment Gateways for Forex Brokers: A Practical Guide",
    excerpt:
      "Deposits and withdrawals make or break the client experience. This guide covers choosing payment gateways, managing risk, and offering the methods clients expect.",
    metaTitle: "Payment Gateways for Forex Brokers Guide",
    metaDescription:
      "A practical guide to payment gateways for forex brokers: choosing providers, managing chargebacks and fraud, and offering the methods clients expect.",
    publishedAt: "2026-06-06T09:00:00Z",
    categories: ["brokerage-operations", "technology"],
    body: [
      ["p", "A trader's relationship with your brokerage starts and ends with money moving. The first deposit is the moment of commitment; the first withdrawal is the moment of trust. If either is slow, confusing, or unreliable, even a great trading platform won't save the relationship. Payment infrastructure is not a back-office afterthought — it is core to the client experience."],
      ["h2", "What clients expect"],
      ["p", "Modern traders expect choice and speed. The methods they reach for vary by region, so a broker serving a global audience usually needs to offer several:"],
      ["li", "Cards (Visa/Mastercard) for instant, familiar deposits"],
      ["li", "Bank transfers and local payment methods for larger amounts"],
      ["li", "E-wallets that are popular in specific regions"],
      ["li", "Cryptocurrency, increasingly expected by a segment of traders"],
      ["h2", "Choosing the right providers"],
      ["p", "No single gateway covers every region, currency, and method well. Most brokers integrate several and route each client to the best option for them. When evaluating providers, weigh settlement times, fees, supported currencies and regions, and — critically — how they treat forex businesses, which some payment processors classify as high-risk."],
      ["h2", "Managing risk: fraud and chargebacks"],
      ["p", "Payments are also where fraud lives. Chargebacks, stolen-card deposits, and money-laundering attempts all flow through your gateways, and they tie directly back to your KYC and AML obligations. A solid setup matches payment activity against verified client identities, flags mismatches, and keeps a clean record of every transaction for both reconciliation and compliance."],
      ["h2", "Tie payments into your back office"],
      ["p", "The biggest operational win is integration. When deposits and withdrawals flow through your CRM and client portal, balances update automatically, withdrawals route through proper approval and compliance checks, and your finance team reconciles in minutes instead of days. Disconnected payment tools, by contrast, create manual work and reconciliation errors that scale painfully as you grow."],
      ["h2", "Build payments that clients trust"],
      ["p", [
        "Smooth, well-integrated, compliant payments are a competitive advantage, not just plumbing. To see how our platform connects multiple gateways to your client portal and back office, explore our ",
        { t: "features page", href: "/features" },
        ", or ",
        { t: "contact us", href: "/contact" },
        " about your payment stack.",
      ]],
    ],
  },
  // 10 ----------------------------------------------------------------------
  {
    slug: "launching-a-white-label-forex-brokerage",
    title: "Launching a White-Label Forex Brokerage",
    excerpt:
      "A white-label model lets you launch a branded brokerage faster and cheaper than building from scratch. Here's how it works, the trade-offs, and how to choose a partner.",
    metaTitle: "Launching a White-Label Forex Brokerage",
    metaDescription:
      "How to launch a white-label forex brokerage: what white-label means, the costs and trade-offs versus going independent, and choosing the right partner.",
    publishedAt: "2026-06-04T09:00:00Z",
    categories: ["brokerage-operations", "growth"],
    body: [
      ["p", "Building a forex brokerage entirely from scratch — your own trading server, liquidity relationships, CRM, and infrastructure — is expensive and slow. The white-label model exists to short-circuit that. It lets you launch a fully branded brokerage on someone else's proven technology, often in weeks rather than months. For many founders, it is the smartest way to enter the market."],
      ["h2", "What is a white-label brokerage?"],
      ["p", "In a white-label arrangement, a primary broker or technology provider supplies the underlying platform, liquidity, and back office, and you put your brand on top. Your clients see your name, your colors, and your client portal; the heavy infrastructure runs behind the scenes. You focus on what differentiates you — your brand, your clients, and your service — instead of reinventing the stack."],
      ["h2", "The advantages"],
      ["p", "The appeal is speed and cost. A white-label launch typically gives you:"],
      ["li", "A faster path to market — weeks instead of many months"],
      ["li", "Lower upfront capital and technology cost"],
      ["li", "Access to established liquidity and platform infrastructure"],
      ["li", "A proven CRM and client portal under your own brand"],
      ["h2", "The trade-offs to weigh"],
      ["p", "White-label is not free of compromise. You typically have less control over the underlying technology, you share revenue or pay platform fees, and you may have limited ability to customize deeply. As you scale, some brokers outgrow the model and transition toward a more independent setup. The key is choosing a partner whose model and terms still make sense at your target size, not just at launch."],
      ["h2", "Choosing the right partner"],
      ["p", "The partner you choose effectively becomes part of your product. Evaluate the quality and reliability of their platform and liquidity, the flexibility of their CRM and branding, the transparency of their pricing, and the support they provide when something breaks at 2am. The cheapest option is rarely the one your clients will thank you for."],
      ["h2", "Launch your brand, not your infrastructure"],
      ["p", [
        "A white-label model lets you put your energy into your brand and your clients while a proven platform handles the rest. To explore launching a branded brokerage on our technology, review our ",
        { t: "pricing page", href: "/pricing" },
        " or ",
        { t: "get in touch", href: "/contact" },
        " to discuss your launch.",
      ]],
    ],
  },
];

// ---------------------------------------------------------------------------
// Build documents
// ---------------------------------------------------------------------------
function buildPostDoc(a: Article) {
  return {
    _id: `drafts.fxcrm-${a.slug}`,
    _type: "blogPost",
    title: a.title,
    slug: { _type: "slug", current: a.slug },
    author: { _type: "reference", _ref: AUTHOR_ID },
    categories: a.categories.map((slug, i) => ({
      _type: "reference",
      _ref: CAT[slug],
      _key: `${a.slug}-cat${i}`,
    })),
    publishedAt: a.publishedAt,
    excerpt: a.excerpt,
    body: buildBody(a.body, a.slug),
    seo: {
      metaTitle: a.metaTitle,
      metaDescription: a.metaDescription,
    },
    likes: 0,
    views: 0,
  };
}

async function run() {
  // Sanity check: lengths the schema validates on.
  const problems: string[] = [];
  for (const a of ARTICLES) {
    if (a.excerpt.length > 300) problems.push(`excerpt too long (${a.excerpt.length}) for ${a.slug}`);
    if (a.metaTitle.length > 60) problems.push(`metaTitle too long (${a.metaTitle.length}) for ${a.slug}`);
    if (a.metaDescription.length > 160)
      problems.push(`metaDescription too long (${a.metaDescription.length}) for ${a.slug}`);
  }
  if (problems.length) {
    console.error("Validation problems:\n" + problems.join("\n"));
    process.exit(1);
  }

  const categoryDocs = CATEGORIES.map((c) => ({
    _id: c.id,
    _type: "category",
    title: c.title,
    slug: { _type: "slug", current: c.slug },
    description: c.description,
    color: c.color,
  }));

  // 1. Author + categories (createOrReplace -> idempotent)
  console.log("Seeding author + categories...");
  await client.createOrReplace(author);
  for (const c of categoryDocs) {
    await client.createOrReplace(c);
  }
  console.log(`  author.fivitech-team + ${categoryDocs.length} categories upserted.`);

  // 2. Posts as DRAFTS (createOrReplace -> idempotent)
  console.log("Seeding 10 blog post DRAFTS...");
  for (const a of ARTICLES) {
    const doc = buildPostDoc(a);
    await client.createOrReplace(doc);
    console.log(`  draft: ${doc._id}`);
  }

  // 3. Verify counts
  const postCount = await client.fetch<number>("count(*[_type=='blogPost'])");
  const authorCount = await client.fetch<number>("count(*[_type=='author'])");
  const catCount = await client.fetch<number>("count(*[_type=='category'])");
  console.log("\nVerification:");
  console.log(`  blogPost docs (incl. drafts): ${postCount}`);
  console.log(`  author docs: ${authorCount}`);
  console.log(`  category docs: ${catCount}`);
  console.log("\nSeed complete.");
}

run().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
