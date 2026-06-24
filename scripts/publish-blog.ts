import { getCliClient } from "sanity/cli";

// Publishes every blogPost draft: creates the published doc (id without the
// `drafts.` prefix) from the draft's content, then deletes the draft.
// Run: npx sanity exec scripts/publish-blog.ts --with-user-token
const client = getCliClient();

async function run() {
  const drafts = await client.fetch(
    `*[_type == "blogPost" && _id in path("drafts.**")]`,
  );
  console.log(`Found ${drafts.length} blogPost drafts to publish...`);

  for (const draft of drafts) {
    const publishedId = draft._id.replace(/^drafts\./, "");
    // Strip system-managed fields; set the published _id.
    const { _rev, _createdAt, _updatedAt, ...rest } = draft;
    const published = { ...rest, _id: publishedId };

    await client.createOrReplace(published);
    await client.delete(draft._id);
    console.log(`  published: ${publishedId}`);
  }

  const counts = await client.fetch(
    `{ "published": count(*[_type=="blogPost" && !(_id in path("drafts.**"))]), "drafts": count(*[_type=="blogPost" && _id in path("drafts.**")]) }`,
  );
  console.log("Verification:", JSON.stringify(counts));
  console.log("Publish complete.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
