// src/components/CartItem.js
import React, { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const CartItem = ({ id, image, name, quantity, price }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <li className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={name} />
      </div>
      <div className="cart-item-details">
        <h4>{name}</h4>
        <p>Price: INR:{price}</p>
        <div className="cart-item-quantity">
          <button onClick={() => decrement(id)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => increment(id)}>+</button>
        </div>
        <p>Subtotal: €{(price * quantity).toFixed(2)}</p>
      </div>
      <div className="cart-item-remove">
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;