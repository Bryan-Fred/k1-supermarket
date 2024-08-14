import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';
import { Link, Outlet } from 'react-router-dom';

const Toiletries = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const toiletriesProducts = [
    { id: 'modal1', img: 'https://theskinstory.in/cdn/shop/files/1_101b2734-5b84-4ccd-97c3-ea15e483f1f0.jpg?v=1704451340', name: 'Shampoo', price: '$10.00', description: 'A high-quality shampoo for smooth hair.' },
    { id: 'modal2', img: 'https://springs.com.pk/cdn/shop/products/8901030005176.jpg?v=1650026762', name: 'Soap', price: '$2.00', description: 'A bar of organic soap.' },
    { id: 'modal3', img: 'https://target.scene7.com/is/image/Target/GUEST_8c740ce1-71b7-41b4-93ad-ae50581232e6?wid=488&hei=488&fmt=pjpeg', name: 'Toothpaste', price: '$3.00', description: 'Minty fresh toothpaste.' },
    { id: 'modal4', img: 'https://cdn0.woolworths.media/content/wowproductimages/large/231529.jpg', name: 'Deodorant', price: '$5.00', description: 'Long-lasting deodorant.' },
    { id: 'modal5', img: 'https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//j/o/johnson-s-baby-lotion-500ml_2.jpg', name: 'Lotion', price: '$7.00', description: 'Moisturizing body lotion.' },
    { id: 'modal6', img: 'https://i5.walmartimages.com/seo/Tresemme-Rich-Moisture-Rich-Moisture-Shampoo-and-Conditioner-28-oz-2-Count_52a93c3b-a4a8-4264-97e8-096a9d81ef6f.2c69d6cb75ed84211fee8e8bcc1550e0.jpeg', name: 'Conditioner', price: '$10.00', description: 'Smooth and silky conditioner.' },
    { id: 'modal7', img: 'https://i5.walmartimages.com/seo/Dove-Pampering-Long-Lasting-Gentle-Women-s-Body-Wash-All-Skin-Type-Shea-Butter-Vanilla-30-fl-oz_6e045b7a-5489-4a22-be56-05202865c5d7.7573a922808968a4836e0aa0a24def57.jpeg', name: 'Body Wash', price: '$8.00', description: 'Refreshing body wash.' },
    { id: 'modal8', img: 'https://m.media-amazon.com/images/I/71-Hc6cJRmL._SL1500_.jpg', name: 'Hand Sanitizer', price: '$4.00', description: 'Kills 99.9% of germs.' },
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
      <h2>toiletries</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container" ref={containerRef}>
        {toiletriesProducts.map(product => (
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
      <Link to="/toiletries" className='pages-links'>
      <div className="category-link">See All</div>
      </Link>
    </section>
  );
};

export default Toiletries;
