import React, { useEffect, useRef, useState } from 'react';
import './CustomerReviews.css';

const reviews = [
    { 
      id: 1, 
      text: "Great products and amazing service!", 
      author: "John Doe", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/men/1.jpg" 
    },
    { 
      id: 2, 
      text: "Fast delivery and top-notch quality.", 
      author: "Jane Smith", 
      rating: 4, 
      image: "https://randomuser.me/api/portraits/women/2.jpg" 
    },
    { 
      id: 3, 
      text: "Exceptional customer support and affordable prices.", 
      author: "Chris Johnson", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/men/3.jpg" 
    },
    { 
      id: 4, 
      text: "Wide range of products and easy to navigate website.", 
      author: "Sarah Lee", 
      rating: 4, 
      image: "https://randomuser.me/api/portraits/women/4.jpg" 
    },
    { 
      id: 5, 
      text: "I love the convenience and the quality.", 
      author: "Michael Brown", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/men/5.jpg" 
    },
    { 
      id: 6, 
      text: "Best shopping experience I've had in a long time.", 
      author: "Emily Davis", 
      rating: 5, 
      image: "https://randomuser.me/api/portraits/women/6.jpg" 
    },
];

const CustomerReviews = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const reviewsContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 600px)").matches);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      // Handle slide-in effect on mobile screens
      const reviewRefs = Array.from(reviewsContainerRef.current.children);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      reviewRefs.forEach((review, index) => {
        review.style.transitionDelay = `${index * 0.1}s`;
        if (index % 3 === 0) review.classList.add('bottom');
        else if (index % 3 === 1) review.classList.add('bottom');
        else review.classList.add('bottom');
        observer.observe(review);
      });

      return () => observer.disconnect();
    } else {
      // Handle carousel on desktop screens
      const autoSwipe = setInterval(() => {
        setCurrentReviewIndex(prevIndex => (prevIndex + 1) % reviews.length);
        reviewsContainerRef.current.scrollTo({
          left: (currentReviewIndex + 1) * reviewsContainerRef.current.clientWidth,
          behavior: 'smooth'
        });
      }, 6000);

      return () => clearInterval(autoSwipe);
    }
  }, [isMobile, currentReviewIndex]);

  const handleThumbnailClick = (index) => {
    setCurrentReviewIndex(index);
    reviewsContainerRef.current.scrollTo({
      left: index * reviewsContainerRef.current.clientWidth,
      behavior: 'smooth'
    });
  };

  return (
    <section id="customer-reviews" className="reviews-section">
      <h2>What Our Customers Say</h2>
      <div className={`reviews-carousel ${isMobile ? 'mobile' : 'desktop'}`}>
        <div className="reviews-container" ref={reviewsContainerRef}>
          {reviews.map((review, index) => (
            <div key={review.id} className={`review ${index === currentReviewIndex ? 'active' : ''}`}>
              <div className="review-header">
                <img src={review.image} alt={`${review.author}`} className="review-image" />
                <div className="review-author">
                  <h3>{review.author}</h3>
                  <div className="review-rating">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </div>
                </div>
              </div>
              <p>"{review.text}"</p>
            </div>
          ))}
        </div>
        {!isMobile && (
          <div className="thumbnails">
            {reviews.map((review, index) => (
              <img 
                key={review.id} 
                src={review.image} 
                alt={`${review.author}`} 
                className={`thumbnail ${index === currentReviewIndex ? 'active' : ''}`} 
                onClick={() => handleThumbnailClick(index)} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomerReviews;
