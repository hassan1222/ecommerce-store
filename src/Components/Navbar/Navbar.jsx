// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CartContext'; // Update the path accordingly
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const { cart } = useCart();

  const cartCount = cart.length; // Get the number of products in the cart

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>STORE BY HASSAN</p>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/men">Men</Link></li>
        <li><Link to="/women">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <div className="cart-container">
          <Link to="/cart"><img src={cart_icon} alt="Cart" /></Link>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
