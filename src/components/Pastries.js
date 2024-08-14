import React, { useState, useRef } from "react";
import ProductModal from "./ProductModal";
import { Link } from "react-router-dom";

const Pastries = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const pastriesProducts = [
    {
      id: "modal1",
      img: "https://img.freepik.com/premium-photo/croissant-white-background_67394-221.jpg",
      name: "Croissant",
      price: "$2.00",
      description: "Fresh buttery croissant.",
    },
    {
      id: "modal2",
      img: "https://i5.walmartimages.com/seo/Freshness-Guaranteed-Mini-Blueberry-Muffins-2-6-oz-Pouch-3-Count-Shelf-Stable_0a48f5c4-c27f-42d6-9323-6eec1c2e66e1.c279bb6b01dc602ebe5535faa3561605.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Muffin",
      price: "$1.50",
      description: "Chocolate chip muffin.",
    },
    {
      id: "modal3",
      img: "https://media.istockphoto.com/id/1322520782/photo/glazed-doughnuts-in-paper-box-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=H6KgHn3YzBn103LWnBhdnt_HH1ATyxbGGvAaOHnaZ0A=",
      name: "Donut",
      price: "$1.00",
      description: "Glazed donut.",
    },
    {
      id: "modal4",
      img: "https://img.freepik.com/premium-photo/slice-strawberry-cake-white-background_884296-2480.jpg",
      name: "Cake Slice",
      price: "$3.00",
      description: "Slice of chocolate cake.",
    },
    {
      id: "modal5",
      img: "https://img.freepik.com/premium-photo/fruit-tart-isolated-white-background_316968-719.jpg",
      name: "Tart",
      price: "$2.50",
      description: "Fruit tart.",
    },
    {
      id: "modal6",
      img: "https://img.freepik.com/premium-photo/profiteroles-chocolate-cuisine-generate-ai_98402-17562.jpg",
      name: "Eclair",
      price: "$2.00",
      description: "Chocolate eclair.",
    },
    {
      id: "modal7",
      img: "https://www.shutterstock.com/image-photo/winneconne-wi-17-march-2020-600nw-1678991020.jpg",
      name: "Brownie",
      price: "$1.50",
      description: "Rich chocolate brownie.",
    },
    {
      id: "modal8",
      img: "https://thumbs.dreamstime.com/b/cookies-box-package-isolated-white-transparent-background-300900964.jpg",
      name: "Cookie",
      price: "$1.00",
      description: "Freshly baked cookie.",
    },
  ];

  const openModal = (product) => {
    setModalContent(product);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const scrollProducts = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === "left" ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="category-section">
      <h2>Pastries</h2>
      <div
        className="arrow-container left-arrow"
        onClick={() => scrollProducts("left")}
      >
        &#10094;
      </div>
      <div className="products-container" ref={containerRef}>
        {pastriesProducts.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-image-container">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-name-price">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
            <button
              className="quick-view-btn"
              onClick={() => openModal(product)}
            >
              Quick View
            </button>
          </div>
        ))}
      </div>
      <div
        className="arrow-container right-arrow"
        onClick={() => scrollProducts("right")}
      >
        &#10095;
      </div>
      {modalContent && (
        <ProductModal product={modalContent} closeModal={closeModal} />
      )}
      <Link to="/pastries" className='pages-links'>
        <div className="category-link">See All</div>
      </Link>
    </section>
  );
};

export default Pastries;
