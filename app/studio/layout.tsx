import type { Metadata, Viewport } from "next";

// Studio is a private editing surface — keep it out of search indexes.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// Sanity Studio manages its own viewport; this prevents the site's root
// metadata viewport from forcing a scale on the embedded Studio.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
