// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import ProductDetail from './Pages/Details'; // Renamed to ProductDetail for clarity

import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <div>
      <Router>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </CartProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
