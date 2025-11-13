# 🛒 Ecommerce Filtering System (React)

A simple and clean React-based e-commerce demo where users can browse products, filter them by category, and manage a shopping cart.  
This project focuses on **state management**, **component structure**, and **dynamic UI updates** using React Hooks.

---

## 🚀 Live Demo  
(Deploy the app on Netlify or Vercel and paste your link here)

**🔗 Live Website:** _Coming Soon_

---

## 📌 Features

### ⭐ Product Display
- Shows a list of products with **name, category, price, and image**.
- Clean card-based UI.

### ⭐ Category Filtering
- Dynamic filter bar that automatically detects product categories.
- Users can filter by:
  - Electronics  
  - Clothing  
  - Books  
  - Home & Kitchen  
  - Accessories  
  - Gaming  
  - All

### ⭐ Shopping Cart
- Add items to cart
- Increase/decrease quantity
- Remove items
- Auto-calculated cart total
- Cart state is completely independent from filter state

### ⭐ State Management Logic
Uses React Hooks:
- `useState` → cart & filters  
- `useMemo` → filtered product list & totals  
- Clean component structure with reusable UI parts

---

## 📂 Folder Structure

src/
├── components/
│ ├── FilterBar.jsx
│ ├── ProductList.jsx
│ ├── ProductCard.jsx
│ ├── Cart.jsx
│ └── CartItem.jsx
├── data/
│ └── products.js
├── utils/
│ └── currency.js
├── App.jsx
├── main.jsx
└── index.css


---

## 🛠️ Tech Stack

- **React (Vite)**
- **JavaScript**
- **CSS / Inline Styles**
- **React Hooks (`useState`, `useMemo`)**

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/anuragksingh/ecommerce-filtering-system.git
cd ecommerce-filtering-system
