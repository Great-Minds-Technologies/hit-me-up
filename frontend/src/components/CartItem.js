// components/CartItem.js
import React from 'react';
import './css/CartItem.css'; // Create this CSS file for styling

function CartItem({ item, onRemove }) {
  if (!item || !item.product) return null;
  return (
    <tr className="cart-item">
      <td className="cart-product-info">
        <img src={item.product.image} alt={item.product.productName} className="product-image" />
        <div className="product-details">
          <span>{item.product.productName}</span>
          <button className="remove-btn" onClick={() => onRemove(item.product._id)}>Remove</button>
        </div>
      </td>
      <td>R{item.product.price}</td>
      <td>{item.quantity}</td>
      <td>R{item.product.price * item.quantity}</td>
    </tr>
  );
}

export default CartItem;
