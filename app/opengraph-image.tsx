import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/constants/seo";
import { COMPANY_TAGLINE } from "@/constants/helper";
export const alt = `${SITE_NAME} · ${COMPANY_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#041d2a",
        color: "#f5f3ed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
      }}
    >
      <div
        style={{
          fontSize: 26,
          letterSpacing: 6,
          color: "#b0c1c8",
          marginBottom: 32,
        }}
      >
        {COMPANY_TAGLINE.toUpperCase()}
      </div>
      <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.15 }}>
        {SITE_NAME}
      </div>
      <div
        style={{ width: 120, height: 5, background: "#b0c1c8", marginTop: 48 }}
      />
    </div>,
    size,
  );
}
