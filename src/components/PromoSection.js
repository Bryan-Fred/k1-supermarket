import React, { useEffect } from 'react';

const slidesData = [
  { src: 'https://img.freepik.com/premium-photo/fresh-fruits-supermarket_392895-11434.jpg', alt: 'Promo 1', text: 'Fruits' },
  { src: 'https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-alcoholic-beverages-are-in-supermarkets-image_15693383.jpg', alt: 'Promo 2', text: 'Beverages' },
  { src: 'https://d3rctclhuobtt7.cloudfront.net/Pictures/1024x536/3/3/1/234331_tesco_957314_crop.jpg', alt: 'Promo 3', text: 'Pastries' },
  { src: 'https://kevsbest.com/wp-content/uploads/2021/03/Best-Middle-Eastern-Supermarkets-in-Chicago.jpg', alt: 'Promo 4', text: 'Condiments'},
  { src: 'https://kevsbest.com/wp-content/uploads/2021/03/Best-Middle-Eastern-Supermarkets-in-Chicago.jpg', alt: 'Promo 5', text: 'Pastries'},

];

const PromoSection = () => {
  useEffect(() => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      setTimeout(showSlides, 10000); // Change image every 3 seconds
    }
  }, []);

  return (
    <section className="promo-section">
      <div className="slideshow-container">
        {slidesData.map((slide, index) => (
          <div key={index} className="mySlides fade">
            <img src={slide.src} alt={slide.alt} />
            <div className="text">
              <div>{slide.text}</div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        {slidesData.map((_, index) => (
          <span key={index} className="dot"></span>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
