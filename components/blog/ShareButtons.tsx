"use client";

import { useEffect, useState } from "react";
import { Twitter, Linkedin, Facebook, Link2, Check } from "lucide-react";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setUrl(window.location.href);
  }, []);

  const text = encodeURIComponent(title);
  const u = encodeURIComponent(url);
  const links = [
    { Icon: Twitter, label: "Twitter", href: `https://twitter.com/intent/tweet?text=${text}&url=${u}` },
    { Icon: Linkedin, label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { Icon: Facebook, label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  return (
    <div className="mt-8">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Share</p>
      <div className="flex flex-wrap items-center gap-2">
        {links.map(({ Icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${label}`}
            className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-all hover:-translate-y-0.5 hover:text-primary"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <button
          onClick={copy}
          className="glass-panel inline-flex h-10 items-center gap-2 rounded-full px-4 text-xs font-semibold text-muted-foreground transition-all hover:text-primary"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-primary" /> Copied!
            </>
          ) : (
            <>
              <Link2 className="h-3.5 w-3.5" /> Copy link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
