import React, { useEffect, useState } from 'react';

const slidesData = [
  { 
    src: 'https://img.freepik.com/premium-photo/fresh-fruits-supermarket_392895-11434.jpg', 
    alt: 'Promo 1', 
    title: 'Fresh Fruits', 
    text: 'Experience the best quality fruits delivered to your door.' 
  },
  { 
    src: 'https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-alcoholic-beverages-are-in-supermarkets-image_15693383.jpg', 
    alt: 'Promo 2', 
    title: 'Beverages', 
    text: 'Refresh your day with our exclusive beverage collection.' 
  },
  { 
    src: 'https://d3rctclhuobtt7.cloudfront.net/Pictures/1024x536/3/3/1/234331_tesco_957314_crop.jpg', 
    alt: 'Promo 3', 
    title: 'Delicious Pastries', 
    text: 'Indulge in our freshly baked pastries made with love.' 
  },
  { 
    src: 'https://kevsbest.com/wp-content/uploads/2021/03/Best-Middle-Eastern-Supermarkets-in-Chicago.jpg', 
    alt: 'Promo 4', 
    title: 'World of Condiments', 
    text: 'Spice up your meals with our diverse range of condiments.' 
  },
  { 
    src: 'https://kevsbest.com/wp-content/uploads/2021/03/Best-Middle-Eastern-Supermarkets-in-Chicago.jpg', 
    alt: 'Promo 5', 
    title: 'Baked to Perfection', 
    text: 'Discover our wide selection of freshly baked goods.' 
  },
];

const PromoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
      setAnimationClass(''); // Reset animation class
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Apply the animation classes when the slide changes
    const timeout = setTimeout(() => {
      setAnimationClass('show');
    }, 100); // Delay to ensure the slide transition completes

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAnimationClass(''); // Reset animation class
  };

  return (
    <section className="promo-section">
      <div className="slideshow-container">
        {slidesData.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={slide.src} alt={slide.alt} className="slide-image" />
            <div className={`text-overlay ${index === currentSlide ? animationClass : ''}`}>
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
        <button className="prev" onClick={() => goToSlide((currentSlide - 1 + slidesData.length) % slidesData.length)}>&#10094;</button>
        <button className="next" onClick={() => goToSlide((currentSlide + 1) % slidesData.length)}>&#10095;</button>
      </div>
      <div className="dots-container">
        {slidesData.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
