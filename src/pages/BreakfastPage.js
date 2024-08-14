import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BreakfastPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products?category=Breakfast');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="main-products-pages">
      <div className="products-pages-unique">
        <h2>Breakfast</h2>
        <div className="products-unique">
          {currentProducts.map(product => (
            <div key={product._id} className="product-unique">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className='add-to-cart-button' onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
          ))}
        </div>
        <div className="pagination-unique">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      <ToastContainer className="custom-toast-container" />
    </div>
  );
};

export default BreakfastPage;
