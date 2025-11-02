import React from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛍 Shopping Cart using Redux Toolkit</h1>
      <ProductList />
      <Cart />
    </div>
  );
}
