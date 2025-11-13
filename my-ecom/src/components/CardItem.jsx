import React from "react";
import { PriceType } from "../utils/PriceType";

export default function CartItem({ item, onRemove, onChangeQty }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px dashed #e5e7eb",
      }}
    >
      <div>
        <div style={{ fontWeight: 700 }}> {item.name} </div>
        <div style={{ fontSize: 13, color: "#6b7280" }}>
          {PriceType(item.price)} each
        </div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div
          style={{
            display: "flex",
            gap: 6,
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={() => onChangeQty(-1)}
            style={{ padding: "6px 8px" }}
          >
            -
          </button>
          <div>{item.quantity}</div>
          <button
            onClick={() => onChangeQty(+1)}
            style={{ padding: "6px 8px" }}
          >
            +
          </button>
        </div>
        <button
          onClick={onRemove}
          style={{
            background: "transparent",
            color: "#ef4444",
            border: "none",
            cursor: "pointer",
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
