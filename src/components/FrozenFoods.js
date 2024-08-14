import React, { useState, useRef } from 'react';
import ProductModal from './ProductModal';
import { Link } from "react-router-dom";

const FrozenFoods = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const frozenFoodsProducts = [
    { id: 'modal1', img: 'https://img.freepik.com/premium-photo/pizza-with-ham-smoked-meat-olives-slices-tomato-mushrooms-mozzarella-piece-is-cut-off-from-pizza-white-background-isolated-close-up_323569-287.jpg', name: 'Frozen Pizza', price: '$5.00', description: 'A delicious frozen pizza.' },
    { id: 'modal2', img: 'https://t4.ftcdn.net/jpg/02/88/88/35/360_F_288883517_0pkKyR0CSsMERWUBwvWdNqoUIC2gV3sL.jpg', name: 'Ice Cream', price: '$3.00', description: 'Creamy vanilla ice cream.' },
    { id: 'modal3', img: 'https://i5.walmartimages.com/asr/8016b9bd-7bbd-4542-9095-3dba5476f3da.92c3b9d15994e0df744896460f07fb33.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF', name: 'Frozen Peas', price: '$2.00', description: 'Fresh frozen peas.' },
    { id: 'modal4', img: 'https://www.shutterstock.com/image-photo/frozen-ecological-berries-reusable-plastic-600nw-1118914010.jpg', name: 'Frozen Berries', price: '$4.00', description: 'Mixed frozen berries.' },
    { id: 'modal5', img: 'https://nutritionmeetsfoodscience.com/wp-content/uploads/2023/05/d1.png', name: 'Frozen Chicken', price: '$10.00', description: 'Frozen chicken breasts.' },
    { id: 'modal6', img: 'https://i.pinimg.com/736x/99/0b/06/990b062ad963e7be3f83a42c8f9a3591.jpg', name: 'Frozen Fish', price: '$8.00', description: 'Frozen salmon fillets.' },
    { id: 'modal7', img: 'https://img.freepik.com/premium-photo/frozen-vegetables-package-isolated-white-transparent-background_771335-65798.jpg', name: 'Frozen Vegetables', price: '$5.00', description: 'Mixed frozen vegetables.' },
    { id: 'modal8', img: 'https://i.pinimg.com/736x/34/38/fb/3438fb0c7fc8d569e4a8719f1b27edd1.jpg', name: 'Frozen Fries', price: '$3.00', description: 'Crispy frozen fries.' },
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
      <h2>Frozen foods</h2>
      <div className="arrow-container left-arrow" onClick={() => scrollProducts('left')}>&#10094;</div>
      <div className="products-container" ref={containerRef}>
        {frozenFoodsProducts.map(product => (
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
      <Link to="/FrozenFoods" className='pages-links'>
      <div className="category-link">See All</div>
      </Link>
    </section>
  );
};

export default FrozenFoods;
