// In-memory per-IP rate limiter for App-Router route handlers.
//
// IMPORTANT: This is NON-DURABLE on serverless (Netlify Functions / Lambda).
// Each cold start gets a fresh module scope, so the store resets and a
// determined attacker can cycle fresh instances. It is best-effort abuse
// dampening for a marketing-site blog (likes/views), not a security control.
// Pinned to globalThis so warm invocations and HMR share one store.

type Bucket = { resetAt: number; count: number };

declare global {
  // eslint-disable-next-line no-var
  var __fxcrmRateLimitStore: Map<string, Bucket> | undefined;
}

const store: Map<string, Bucket> = globalThis.__fxcrmRateLimitStore ?? new Map();
globalThis.__fxcrmRateLimitStore = store;

function maybeSweep(now: number) {
  if (store.size < 1024) return;
  for (const [key, bucket] of store) {
    if (bucket.resetAt < now) store.delete(key);
  }
}

export type RateLimitResult = { ok: boolean; retryAfterSeconds: number };

export function rateLimit(
  key: string,
  options: { max: number; windowSec: number },
): RateLimitResult {
  const now = Date.now();
  maybeSweep(now);
  const bucket = store.get(key);
  if (!bucket || bucket.resetAt < now) {
    store.set(key, { resetAt: now + options.windowSec * 1000, count: 1 });
    return { ok: true, retryAfterSeconds: 0 };
  }
  if (bucket.count >= options.max) {
    return { ok: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) };
  }
  bucket.count += 1;
  return { ok: true, retryAfterSeconds: 0 };
}

/** Best-effort client IP from standard proxy headers (Netlify sets x-forwarded-for). */
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  const real = req.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

/**
 * Returns a 429 Response when the caller is over budget, otherwise null.
 * Callers should `const limited = enforceRateLimit(...); if (limited) return limited;`
 */
export function enforceRateLimit(
  req: Request,
  scope: string,
  options: { max: number; windowSec: number },
): Response | null {
  const ip = getClientIp(req);
  const result = rateLimit(`${scope}:${ip}`, options);
  if (!result.ok) {
    return new Response(
      JSON.stringify({ error: "Too many requests, please slow down." }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": String(result.retryAfterSeconds),
        },
      },
    );
  }
  return null;
}
