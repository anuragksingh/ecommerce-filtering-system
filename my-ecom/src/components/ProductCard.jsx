import React, { useState } from "react";
import { PriceType } from "../utils/PriceType";

export default function ProductCard({ product, onAdd }) {
  // local state to replace broken images with fallback
  const [imgSrc, setImgSrc] = useState(product.image || "");

  // simple inline SVG fallback data URL (no external fetch required)
  const svgFallback = `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'><rect width='100%' height='100%' fill='#f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-family='Arial' font-size='18'>Image not available</text></svg>`
  )}`;

  const handleError = () => setImgSrc(svgFallback);

  return (
    <div
      style={{
        padding: 12,
        borderRadius: 8,
        border: "1px solid #e6e9ef",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 140,
          marginBottom: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 6,
          background: "#fff",
        }}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={product.name}
            onError={handleError}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        ) : (
          <img
            src={svgFallback}
            alt="no-image"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        )}
      </div>

      <div style={{ fontWeight: 700 }}>{product.name}</div>
      <div style={{ fontSize: 12, color: "#6b7280" }}>{product.category}</div>
      <div style={{ marginTop: 8, fontWeight: 600 }}>
        {PriceType(product.price)}
      </div>

      <div style={{ marginTop: 10 }}>
        <button
          onClick={onAdd}
          style={{
            padding: "8px 10px",
            borderRadius: 6,
            border: "none",
            background: "#10b981",
            color: "#fff",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
