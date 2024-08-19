import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="contact-banner">
        <h1>About Us</h1>
        <p>Learn more about our journey, values, and what makes us unique.</p>
      </div>
      <div className="about-content">
      <section className="about-introduction">
        <h2>Our Story</h2>
        <p>
          Supermarket was founded with a simple mission: to provide fresh, high-quality groceries to our community. What started as a small family-owned store has now grown into a trusted brand, serving thousands of customers daily. We are committed to offering the best products at the most affordable prices, ensuring a great shopping experience for everyone.
        </p>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Quality:</strong> We source only the freshest and highest quality products.</li>
          <li><strong>Community:</strong> We believe in giving back and supporting our local community.</li>
          <li><strong>Sustainability:</strong> We are committed to eco-friendly practices and reducing our carbon footprint.</li>
          <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority, and we strive to meet your needs with a smile.</li>
        </ul>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <p>
          Our team is made up of dedicated professionals who are passionate about providing excellent service. From our friendly cashiers to our knowledgeable product experts, everyone at Supermarket is here to help you have the best shopping experience possible.
        </p>
      </section>

      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We’d love to hear from you! Feel free to reach out to us via our contact page or visit us in-store.
        </p>
      </section>
    </div>
    </div>
  );
};

export default AboutPage;