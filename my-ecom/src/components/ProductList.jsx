import React from "react";
import ProductCart from "./ProductCard";

export default function productList({ products, onAdd }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 12,
      }}
    >
      {products.map((prod) => (
        <ProductCart key={prod.id} product={prod} onAdd={() => onAdd(prod)} />
      ))}
    </div>
  );
}
