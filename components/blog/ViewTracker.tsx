"use client";

import { useEffect } from "react";

// Fires a single view increment per browser session per post. Failures
// (including the 503 returned when Sanity is unconfigured) are swallowed.
export function ViewTracker({ postId }: { postId: string }) {
  useEffect(() => {
    if (!postId) return;
    try {
      const viewed: string[] = JSON.parse(sessionStorage.getItem("viewedPosts") || "[]");
      if (viewed.includes(postId)) return;
      fetch("/api/view-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId }),
      }).catch(() => {});
      viewed.push(postId);
      sessionStorage.setItem("viewedPosts", JSON.stringify(viewed));
    } catch {
      // sessionStorage unavailable — skip
    }
  }, [postId]);

  return null;
}
