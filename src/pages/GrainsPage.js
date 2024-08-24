import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GrainsPage = ({ addToCart, cartCount }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://k1-backend.onrender.com/api/products?category=Grains');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  useEffect(() => {
    // Scroll to top when the component mounts or the currentPage changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="main-products-pages">
      <div className="products-pages-unique">
        <h2>Grains</h2>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          <>
            {currentProducts.length === 0 ? (
              <p>No products available.</p>
            ) : (
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
            )}
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
          </>
        )}
      </div>
      <ToastContainer className="custom-toast-container" />
    </div>
  );
};

export default GrainsPage;
