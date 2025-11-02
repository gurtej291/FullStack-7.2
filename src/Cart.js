import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) return <h3>Your cart is empty 🛒</h3>;

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ margin: "10px 0" }}>
          {item.name} — ₹{item.price} × {item.quantity}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 })
              )
            }
          >
            ➕
          </button>
          <button
            style={{ marginLeft: "5px" }}
            onClick={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity - 1 })
              )
            }
          >
            ➖
          </button>
          <button
            style={{ marginLeft: "10px", color: "red" }}
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
