import React from "react";

export default function FilterBar({ categories, selected, onSelect }) {
  return (
    <div
      style={{ marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap" }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            padding: "8px 10px",
            borderRadius: 999,
            border: "1px solid #d1d5db",
            background: selected === cat ? "#44acfbff" : undefined,
            cursor: "pointer",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
