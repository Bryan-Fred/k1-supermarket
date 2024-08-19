import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  // const [products, setProducts] = useState([]);
  // const categories = ['Breakfast', 'Pastries', 'Frozen Foods', 'Grains', 'Toiletries'];

  // useEffect(() => {
  //   axios.get('http://localhost:5000/products')
  //     .then(response => setProducts(response.data))
  //     .catch(error => alert('Error fetching products'));
  // }, []);

  // const handleRemoveProduct = async (productId) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:5000/products/${productId}`);
  //     if (response.status === 200) {
  //       setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
  //       alert('Product removed successfully');
  //     } else {
  //       alert(`Error removing product: ${response.statusText}`);
  //     }
  //   } catch (error) {
  //     console.error('Error removing product:', error);
  //     alert(`Error removing product: ${error.message}`);
  //   }
  // };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {/* {categories.map(category => (
        <div key={category} className="category-section">
          <h3 className="category-title">{category}</h3>
          <div className="product-row">
            {products.filter(product => product.category === category).map(product => (
              <div key={product._id} className="product-card">
                <img
                  src={product.image && product.image.startsWith('http') ? product.image : `http://localhost:5000/${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-details">
                  <h4>{product.name}</h4>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleRemoveProduct(product._id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Products;
