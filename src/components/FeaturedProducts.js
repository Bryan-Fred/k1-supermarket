import React, { useState } from 'react';
import ProductModal from './ProductModal';

const FeaturedProducts = () => {
  const [modalContent, setModalContent] = useState(null);

  const products = [
    { id: 'modal1', img: 'https://via.placeholder.com/150', name: 'Product 1', price: '$10.00' },
    { id: 'modal2', img: 'https://via.placeholder.com/150', name: 'Product 2', price: '$12.00' },
    { id: 'modal3', img: 'https://via.placeholder.com/150', name: 'Product 3', price: '$8.00' },
    { id: 'modal4', img: 'https://via.placeholder.com/150', name: 'Product 4', price: '$15.00' },
    { id: 'modal5', img: 'https://via.placeholder.com/150', name: 'Product 5', price: '$20.00' },
    { id: 'modal6', img: 'https://via.placeholder.com/150', name: 'Product 5', price: '$20.00' },
    { id: 'modal7', img: 'https://via.placeholder.com/150', name: 'Product 5', price: '$20.00' },
    { id: 'modal8', img: 'https://via.placeholder.com/150', name: 'Product 5', price: '$20.00' },

    // Add more products as needed
  ];

  const openModal = (product) => {
    setModalContent(product);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const scrollProducts = (direction) => {
    const container = document.querySelector('.products-container');
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="category-section">
      <h2>Featured Products</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container">
        {products.map(product => (
          <div className="product" key={product.id}>
          <div className= "product-image-container">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="product-name-price">
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </div>
            <button className="quick-view-btn" onClick={() => openModal(product)}>Quick View</button>
          </div>
        ))}
      </div>
      <div className="arrow-container right-arrow" onClick={() => scrollProducts('right')}>&#10095;</div>
      {modalContent && <ProductModal product={modalContent} closeModal={closeModal} />}
      <div className="category-link">See All</div>
    </section>
  );
};

export default FeaturedProducts;