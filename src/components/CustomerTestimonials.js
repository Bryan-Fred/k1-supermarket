import React from 'react';

const CustomerTestimonials = () => {
  // Example testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "Great quality products and excellent customer service. Highly recommend!",
      imageUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg", // Placeholder image
      name: "Samuel Endrick",
      rating: 5,
    },
    {
      id: 2,
      quote: "I always find what I need at this supermarket. The prices are unbeatable.",
      imageUrl: "https://t3.ftcdn.net/jpg/04/60/91/88/360_F_460918802_XVCymFr7MoziFpnInbTDvrlblYhvAOi2.jpg", // Placeholder image
      name: "John Smith",
      rating: 4,
    },
    {
      id: 3,
      quote: "A fantastic shopping experience every time. Friendly staff and fresh produce.",
      imageUrl: "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg", // Placeholder image
      name: "Emily Johnson",
      rating: 5,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-list">
          {testimonials.map(testimonial => (
            <div className="testimonial-item" key={testimonial.id}>
              <div className="testimonial-quote">“</div>
              <p className="testimonial-comment">{testimonial.quote}</p>
              <div className="testimonial-customer-info">
                <div className="testimonial-customer-image" style={{ backgroundImage: `url(${testimonial.imageUrl})` }}></div>
                <h3 className="testimonial-customer-name">{testimonial.name}</h3>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <span key={index}>&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
