import { getCliClient } from "sanity/cli";

// Sets plausible, varied likes/views on the published blog posts (seeded at 0).
// Idempotent: fixed numbers per slug. Run:
//   npx sanity exec scripts/seed-engagement.ts --with-user-token
const client = getCliClient();

// id (without drafts. prefix) -> engagement
const ENGAGEMENT: Record<string, { views: number; likes: number }> = {
  "fxcrm-how-to-start-a-forex-brokerage-2026": { views: 3184, likes: 217 },
  "fxcrm-what-is-a-forex-crm": { views: 2576, likes: 168 },
  "fxcrm-mt5-vs-mt4-for-brokers": { views: 2341, likes: 153 },
  "fxcrm-kyc-aml-compliance-for-forex-brokers": { views: 1897, likes: 124 },
  "fxcrm-introducing-broker-rebate-management-explained": { views: 1648, likes: 109 },
  "fxcrm-launching-a-white-label-forex-brokerage": { views: 1502, likes: 98 },
  "fxcrm-a-book-vs-b-book-forex-risk-models": { views: 1376, likes: 91 },
  "fxcrm-payment-gateways-for-forex-brokers": { views: 1184, likes: 73 },
  "fxcrm-reducing-client-churn-at-a-forex-brokerage": { views: 967, likes: 64 },
  "fxcrm-trading-gold-silver-xau-xag-for-brokers": { views: 842, likes: 51 },
};

async function run() {
  let tx = client.transaction();
  for (const [id, { views, likes }] of Object.entries(ENGAGEMENT)) {
    tx = tx.patch(id, (p) => p.set({ views, likes }));
  }
  await tx.commit();
  console.log(`Updated engagement on ${Object.keys(ENGAGEMENT).length} posts.`);

  const check = await client.fetch(
    `*[_type=="blogPost" && !(_id in path("drafts.**"))]{ "slug": slug.current, views, likes } | order(views desc)`,
  );
  console.log(JSON.stringify(check, null, 2));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
