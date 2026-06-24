import { ImageResponse } from "next/og";

// Build-time 180x180 apple-touch-icon. Next auto-wires the correct
// <link rel="apple-touch-icon" sizes="180x180"> from this file.
export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#06170f",
          color: "#00E676",
          fontSize: 120,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        F
      </div>
    ),
    { ...size },
  );
}
