// YourMainComponent.js

import React from 'react';
import Product from './Product';
import all_products from '../Assets/all_product';
import './Product.css';

const Productm = () => {
  return (
    <div className='Productm'>
      <h2>Products</h2>
      <div className="product-container">
        {all_products
          .filter(product => product.id % 3 === 0)
          .map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default Productm;
