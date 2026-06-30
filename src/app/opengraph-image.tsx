import { ImageResponse } from "next/og";

export const alt = "Sarvesh Ramani — Software Development Engineer II";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "1px solid #18181b",
            borderRadius: "16px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            fontSize: "14px",
            color: "#06b6d4",
            fontWeight: "bold",
            letterSpacing: "0.2em",
            marginBottom: "24px",
            textTransform: "uppercase",
          }}
        >
          {"// PORTFOLIO"}
        </div>

        <h1
          style={{
            fontSize: "76px",
            color: "white",
            fontWeight: "bold",
            margin: "0 0 20px 0",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Sarvesh Ramani
        </h1>

        <p
          style={{
            fontSize: "30px",
            color: "#a1a1aa",
            margin: "0 0 48px 0",
            maxWidth: "960px",
            lineHeight: 1.4,
          }}
        >
          Software Development Engineer II at <span style={{ color: "#ffffff" }}>AppViewX</span>.
          Building production PKI, secure enterprise systems, and AI/ML architectures.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "18px",
            color: "#a1a1aa",
            borderTop: "1px solid #18181b",
            paddingTop: "32px",
            width: "100%",
          }}
        >
          <span style={{ color: "#06b6d4", fontWeight: "bold" }}>M.Tech AI/ML (BITS Pilani)</span>
          <span style={{ color: "#27272a" }}>|</span>
          <span>Chennai, India</span>
          <span style={{ color: "#27272a" }}>|</span>
          <span>sarvesh-ramani.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
