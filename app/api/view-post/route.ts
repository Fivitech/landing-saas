import { NextResponse } from "next/server";
import { isSanityConfigured } from "@/lib/sanity";
import { writeClient } from "@/lib/sanity.write";
import { enforceRateLimit } from "@/lib/rate-limit";

const POST_ID_RE = /^[A-Za-z0-9_.-]{1,100}$/;

export async function POST(req: Request) {
  if (!isSanityConfigured() || !process.env.SANITY_API_WRITE_TOKEN) {
    return NextResponse.json({ error: "View tracking is not available yet." }, { status: 503 });
  }

  const limited = enforceRateLimit(req, "view-post", { max: 60, windowSec: 3600 });
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
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit();
    return NextResponse.json({ success: true, views: updated.views || 1 });
  } catch (error) {
    console.error("Error updating view count:", error);
    return NextResponse.json({ error: "Failed to update view count" }, { status: 500 });
  }
}
