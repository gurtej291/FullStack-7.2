import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Smartphone", price: 25000 },
  { id: 3, name: "Headphones", price: 3500 },
  { id: 4, name: "Smartwatch", price: 8000 },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Available Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ margin: "10px 0" }}>
          {p.name} — ₹{p.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => dispatch(addItem(p))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
