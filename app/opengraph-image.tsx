import { ImageResponse } from "next/og";
import { company } from "@/data/company";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#171717",
          backgroundImage:
            "linear-gradient(to right, rgba(245,240,232,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,240,232,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#F5F0E8", display: "flex" }} />
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#8B1E24", display: "flex" }} />
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#F5F0E8", display: "flex" }} />
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 78,
            fontWeight: 600,
            color: "#FCFAF6",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          {company.name}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 34,
            color: "#8B1E24",
            fontWeight: 600,
            letterSpacing: "0.02em",
            display: "flex",
          }}
        >
          BUILD. AUTOMATE. GROW.
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 24,
            color: "#C9C2B4",
            maxWidth: 900,
            display: "flex",
          }}
        >
          Websites, AI automation, and digital marketing systems for modern businesses.
        </div>
      </div>
    ),
    { ...size }
  );
}
