import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';
import { Link } from "react-router-dom";

const Grains = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const grainsProducts = [
    { id: 'modal1', img: 'https://m.media-amazon.com/images/I/51m-7JWZpcL.jpg', name: 'Rice', price: '$1.00/lb', description: 'Premium quality rice.' },
    { id: 'modal2', img: 'https://thumbs.dreamstime.com/b/flour-package-box-isolated-white-transparent-background-300901043.jpg', name: 'Wheat Flour', price: '$2.00/lb', description: 'Whole wheat flour.' },
    { id: 'modal3', img: 'https://img.freepik.com/premium-photo/3d-rendering-oat-flakes-paper-packaging-isolated-white-background_771335-31722.jpg', name: 'Oats', price: '$3.00', description: 'Organic rolled oats.' },
    { id: 'modal4', img: 'https://premiumgourmetfood.com.au/wp-content/uploads/2023/05/QUINOA006_Quinoa-Mix-500g.jpg', name: 'Quinoa', price: '$4.00', description: 'Nutritious quinoa.' },
    { id: 'modal5', img: 'https://oldschool.com/wp-content/uploads/2021/04/OldSchoolMill_2021WhiteBackground-50-MEDIUM.jpg', name: 'Cornmeal', price: '$1.50', description: 'Ground cornmeal.' },
    { id: 'modal6', img: 'https://cloudfront.timesnownews.com/media/barley.PNG', name: 'Barley', price: '$2.50', description: 'Whole grain barley.' },
    { id: 'modal7', img: 'https://spicedivine.ca/cdn/shop/products/Project_700x700.jpg?v=1687213656', name: 'Millet', price: '$3.00', description: 'Gluten-free millet.' },
    { id: 'modal8', img: 'https://www.lidl.es/media/product/0/0/6/6/6/3/4/couscous-zoom.jpg', name: 'Couscous', price: '$2.00', description: 'Moroccan-style couscous.' },
  ];

  const openModal = (product) => {
    setModalContent(product);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const scrollProducts = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="category-section">
      <h2>Grains</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container" ref={containerRef}>
        {grainsProducts.map(product => (
          <div className="product" key={product.id}>
            <div className="product-image-container">
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
      <Link to="/grains" className='pages-links'>
      <div className="category-link">See All</div>
      </Link>
    </section>
  );
};

export default Grains;
