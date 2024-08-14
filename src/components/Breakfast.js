import React, { useState, useRef } from "react";
import ProductModal from "./ProductModal";
import { Link } from "react-router-dom";

const Breakfast = () => {
  const [modalContent, setModalContent] = useState(null);
  const containerRef = useRef(null);

  const breakfastProducts = [
    {
      id: "modal1",
      img: "https://media.istockphoto.com/id/1030319626/photo/3d-rendering-of-corn-flakes-paper-packaging-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=NXnFYsWMKXznwtfO-uIXZwblZ1eEjN8gYTMFghWKQH8=",
      name: "Cereal",
      price: "$3.00",
      description: "Crunchy breakfast cereal.",
    },
    {
      id: "modal2",
      img: "https://www.allrecipes.com/thmb/PgHR6Od-eSnVVAmWuYF1A2M8e4s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-value-pancake-mix-07a319363e3c4139818bea34fce4ff20.png",
      name: "Pancake Mix",
      price: "$4.00",
      description: "Fluffy pancake mix.",
    },
    {
      id: "modal3",
      img: "https://www.mayrand.ca/globalassets/mayrand/catalog-mayrand/epicerie/28307-gruau-instantane-regulier-en-sachet-280-g-quaker.jpg?w=380&h=380&mode=crop",
      name: "Oatmeal",
      price: "$2.50",
      description: "Instant oatmeal packs.",
    },
    {
      id: "modal4",
      img: "https://www.mompshop.com/cdn/shop/products/eggs_562bdcfe81_84b0507687_1.png?v=1662294332",
      name: "Eggs",
      price: "$2.00/dozen",
      description: "Farm fresh eggs.",
    },
    {
      id: "modal5",
      img: "https://www.nestle-cwa.com/sites/g/files/pydnoa346/files/styles/full_width_image_1920x795_/public/ideal-original-800x800.png.webp?itok=zBfQ916o",
      name: "Milk",
      price: "$1.50",
      description: "Organic whole milk.",
    },
    {
      id: "modal6",
      img: "https://food.fnr.sndimg.com/content/dam/images/food/products/2022/6/9/rx_thomas-plain-original-pre-sliced-bagels.jpeg.rend.hgtvcom.616.616.suffix/1654795353108.jpeg",
      name: "Bagels",
      price: "$3.00",
      description: "Freshly baked bagels.",
    },
    {
      id: "modal7",
      img: "https://i0.wp.com/ghfruit.com/wp-content/uploads/2021/01/fanyogo-strawberry-regular.png?fit=460%2C460&ssl=1",
      name: "Yogurt",
      price: "$1.00",
      description: "Greek yogurt.",
    },
    {
      id: "modal8",
      img: "https://st2.depositphotos.com/1003272/7787/i/950/depositphotos_77878870-stock-photo-granola-bar.jpg",
      name: "Granola Bars",
      price: "$2.50",
      description: "Healthy granola bars.",
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
      <h2>Breakfast</h2>
      <div
        className="arrow-container left-arrow"
        onClick={() => scrollProducts("left")}
      >
        &#10094;
      </div>
      <div className="products-container" ref={containerRef}>
        {breakfastProducts.map((product) => (
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
      <Link to="/breakfast" className="pages-links">
        <div className="category-link">See All</div>
      </Link>
    </section>
  );
};

export default Breakfast;
