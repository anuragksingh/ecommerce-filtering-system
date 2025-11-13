import React, { useMemo } from "react";
import CartItem from "./cardItem";
import { PriceType } from "../utils/PriceType";

export default function Cart({ items, onRemove, onChangeQty }) {
  const total = useMemo(
    () => items.reduce((s, it) => s + it.price * it.quantity, 0),
    [items]
  );
  return (
    <div style={{ background: "#fff", padding: 16, borderRadius: 8 }}>
      <h2>Shopping Cart</h2>{" "}
      {items.length === 0 ? (
        <div style={{ color: "#6b7280" }}> Cart is empty.</div>
      ) : (
        <div>
          {items.map((it) => (
            <CartItem
              key={it.id}
              item={it}
              onRemove={() => onRemove(it.id)}
              onChangeQty={(delta) => onChangeQty(it.id, delta)}
            />
          ))}
          <div style={{ marginTop: 12, fontWeight: 800, textAlign: "right" }}>
            {" "}
            Total: {PriceType(total)}{" "}
          </div>
        </div>
      )}
    </div>
  );
}
