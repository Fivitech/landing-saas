"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

// Optimistic like button. Persists a "liked" flag in localStorage so a reload
// keeps the heart filled, and POSTs to /api/like-post (write client). The API
// returns 503 when Sanity is unconfigured — the UI just keeps the optimistic
// state and ignores the failure.
export function LikeButton({ postId, initialLikes }: { postId: string; initialLikes: number }) {
  const storageKey = `liked:${postId}`;
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(initialLikes);

  useEffect(() => {
    setLiked(false);
    setCount(initialLikes);
    try {
      if (localStorage.getItem(storageKey) === "1") {
        setLiked(true);
        setCount(initialLikes + 1);
      }
    } catch {
      // localStorage unavailable — ignore
    }
  }, [storageKey, initialLikes]);

  const toggle = async () => {
    if (!liked) {
      setLiked(true);
      setCount((c) => c + 1);
      try {
        localStorage.setItem(storageKey, "1");
      } catch {
        // ignore
      }
      try {
        await fetch("/api/like-post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ postId }),
        });
      } catch {
        // network/unconfigured — keep optimistic state
      }
    } else {
      setLiked(false);
      setCount((c) => c - 1);
      try {
        localStorage.removeItem(storageKey);
      } catch {
        // ignore
      }
    }
  };

  return (
    <div className="my-16 flex justify-center">
      <button
        onClick={toggle}
        className={`glass-panel inline-flex items-center gap-3 rounded-full px-7 py-3.5 transition-colors ${
          liked ? "border-primary/50" : "hover:border-border"
        }`}
        aria-pressed={liked}
      >
        <Heart
          className={`h-5 w-5 transition-colors ${
            liked ? "fill-primary text-primary" : "text-foreground"
          }`}
        />
        <span className="text-sm font-semibold tabular-nums">{count.toLocaleString()}</span>
      </button>
    </div>
  );
}
