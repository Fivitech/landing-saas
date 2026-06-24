import { NextResponse } from "next/server";
import { isSanityConfigured } from "@/lib/sanity";
import { writeClient } from "@/lib/sanity.write";
import { enforceRateLimit } from "@/lib/rate-limit";

const POST_ID_RE = /^[A-Za-z0-9_.-]{1,100}$/;

export async function POST(req: Request) {
  // No Sanity project yet — there is nothing to write to.
  if (!isSanityConfigured() || !process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json({ error: "Likes are not available yet." }, { status: 503 });
  }

  const limited = enforceRateLimit(req, "like-post", { max: 30, windowSec: 3600 });
  if (limited) return limited;

  let postId: unknown;
  try {
    ({ postId } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof postId !== "string" || !POST_ID_RE.test(postId)) {
    return NextResponse.json({ error: "Invalid postId" }, { status: 400 });
  }

  try {
    const updated = await writeClient
      .patch(postId)
      .setIfMissing({ likes: 0 })
      .inc({ likes: 1 })
      .commit();
    return NextResponse.json({ success: true, likes: updated.likes });
  } catch (error) {
    console.error("Error updating likes:", error);
    return NextResponse.json({ error: "Failed to update likes" }, { status: 500 });
  }
}
