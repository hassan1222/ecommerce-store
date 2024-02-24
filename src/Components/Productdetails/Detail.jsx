import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../Assets/all_product';
import './Detail.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const ProductDetail = () => {
  // Get the product ID from the URL parameters
  const { id } = useParams();

  // State to store the product details
  const [product, setProduct] = useState(null);

  // State to track loading status
  const [loading, setLoading] = useState(true);

  // useEffect to fetch product details when the component mounts
  useEffect(() => {
    const fetchProductDetails = () => {
      try {
        // Search for the product in the local array based on the ID
        const foundProduct = all_product.find((p) => p.id === parseInt(id, 10));

        // Check if the product is found
        if (foundProduct) {
          // Set the product details in the state
          setProduct(foundProduct);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        // Set loading to false once the data has been fetched
        setLoading(false);
      }
    };

    // Call the fetchProductDetails function
    fetchProductDetails();
  }, [id]); // Trigger the effect whenever the ID changes

  // Display a loading message while the data is being fetched
  if (loading) {
    console.log('Rendering "Loading..."');
    return <p>Loading...</p>;
  }

  // Render the product details
  return (
    <div className='main'>
      {product && (
        <>
          <div className='left'>
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>
          <div className='middle'>
            <img src={product.image} alt={product.name} />
          </div>
          <div className='right'>
            <h1>{product.name} <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span> <span className="fa fa-star checked"></span></h1>
            <p>Category: {product.category}</p>
            <p>New Price: ${product.new_price}</p>
            <p>Old Price: ${product.old_price}</p>
            {/* Add more details as needed */}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
