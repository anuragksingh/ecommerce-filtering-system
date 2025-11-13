import React, { useState, useMemo } from "react";
import { productInfo } from "./data/Products";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = useMemo(() => {
    const set = new Set(productInfo.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return productInfo;
    return productInfo.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((it) => it.id === product.id);
      if (found)
        return prev.map((it) =>
          it.id === product.id ? { ...it, quantity: it.quantity + 1 } : it
        );
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((it) => it.id != productId));
  }

  function changeQuantity(productId, delta) {
    setCart((prev) =>
      prev.map((it) =>
        it.id === productId
          ? { ...it, quantity: Math.max(1, it.quantity + delta) }
          : it
      )
    ).filter((it) => it.quantity > 0);
  }

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "Arial, sans-serif",
        background: "#f6f8fb",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Dynamic Product Filter & Cart</h1>
      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        <div
          style={{ flex: 1, background: "#fff", padding: 16, borderRadius: 8 }}
        >
          <h2>Products</h2>
          <FilterBar
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <ProductList products={filteredProducts} onAdd={addToCart} />
        </div>
        <div style={{ width: 340 }}>
          <Cart
            items={cart}
            onRemove={removeFromCart}
            onChangeQty={changeQuantity}
          />
        </div>
      </div>
    </div>
  );
}
