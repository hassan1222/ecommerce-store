// YourMainComponent.js

import React from 'react';
import Product from './Product';
import all_products from '../Assets/all_product';
import './Product.css';
import pic from '../Assets/banner_mens.png'

const Productm = () => {
  return (
    <div className='add'>
      <img src={pic} alt="men"></img>
    <div className='Productm'>
      <h2>Men's Products</h2>
      <div className="product-container">
        {all_products
          .filter(product => product.category === 'men')
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </div>
    </div>
  );
};

export default Productm;
