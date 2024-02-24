// Product.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import './Product.css';

const Product = ({ id, name, category, image, new_price, old_price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const productToAdd = {
      id,
      name,
      category,
      image,
      new_price,
      old_price,
    };

    console.log('Adding to cart:', productToAdd);

    addToCart(productToAdd);
  };

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <div className="product-prices">
          <span className="new-price">${new_price}</span>
          <span className="old-price">${old_price}</span>
        </div>
        <div className="product-buttons">
          {/* Updated Link to navigate to ProductDetail */}
          <Link to={`/product/${id}`} className="view-button">
            View Product
          </Link>
          <button className="cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
