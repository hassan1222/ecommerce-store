// Cart.js
import React from 'react';
import { useCart } from '../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  console.log('Cart:', cart);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    // Ensure newQuantity is a positive integer
    const parsedQuantity = parseInt(newQuantity, 10);

    if (!isNaN(parsedQuantity) && parsedQuantity > 0) {
      // Update quantity only if it's a positive integer
      updateQuantity(productId, parsedQuantity);
    } else {
      // If the input is not a positive integer, set the quantity to 1
      updateQuantity(productId, 1);
    }
  };

  return (
    <div className='main-cart'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className='cart-table'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.name} />
                </td>
                <td>{product.name}</td>
                <td>${product.new_price}</td>
                <td>
                  <input
                    type='number'
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    min="1"
                  />
                </td>
                <td>${product.new_price * product.quantity}</td>
                <td>
                  <button onClick={() => handleRemove(product.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Cart;
