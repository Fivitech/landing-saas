import { ImageResponse } from "next/og";

// Build-time static OG image (1200x630). No dynamic params => rendered to a
// static PNG at build, so it works on Netlify without runtime og support.
export const runtime = "nodejs";
export const alt = "Fivitech — All-in-One Forex CRM Solution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 120% at 0% 0%, #06170f 0%, #070707 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            color: "#00E676",
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#00E676",
              color: "#06170f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            F
          </div>
          Fivitech FXCRM
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 36,
            fontSize: 70,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 940,
            letterSpacing: -1.5,
          }}
        >
          <span>The Complete&nbsp;</span>
          <span style={{ color: "#00E676" }}>&nbsp;Forex Brokerage&nbsp;</span>
          <span>&nbsp;Solution</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#9ca3af",
            maxWidth: 880,
          }}
        >
          CRM, client portal, IB management, KYC, payments and MT5 — in one platform.
        </div>
      </div>
    ),
    { ...size },
  );
}
