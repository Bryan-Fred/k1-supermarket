import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPlus, FaMinus } from 'react-icons/fa';

const CustomerSupport = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    { question: "How can I track my order?", answer: "You can track your order by logging into your account and navigating to the 'My Orders' section." },
    { question: "What is your return policy?", answer: "Our return policy allows you to return products within 30 days of purchase. Please visit our Return Policy page for more details." },
    { question: "How do I change my account information?", answer: "To change your account information, log in and go to the 'Account Settings' page where you can update your details." },
    // Add more FAQs as needed
  ];

  return (
    <div className="customer-support">
      <h1>Customer Support</h1>
      
      {/* Contact Information */}
      <section className="contact-info">
        <h2>Contact Us</h2>
        <p><FaPhone /> Call us: +123-456-7890</p>
        <p><FaEnvelope /> Email: support@supermarket.com</p>
        <p><FaMapMarkerAlt /> Address: 123 Supermarket St, Cityville</p>
      </section>
      
      {/* FAQs */}
      <section className="faqs">
        <h2>Frequently Asked Questions</h2>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} onClick={() => toggleFAQ(index)}>
              <div className="faq-question">
                {faq.question} {expandedFAQ === index ? <FaMinus /> : <FaPlus />}
              </div>
              {expandedFAQ === index && <p className="faq-answer">{faq.answer}</p>}
            </li>
          ))}
        </ul>
      </section>

      {/* Support Form */}
      <section className="support-form">
        <h2>Contact Us</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="order-number">Order Number:</label>
            <input type="text" id="order-number" name="order-number" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Social Media Links */}
      <section className="media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="https://www.facebook.com"><FaFacebook size={30} /></a>
          <a href="https://www.twitter.com"><FaTwitter size={30} /></a>
          <a href="https://www.instagram.com"><FaInstagram size={30} /></a>
          <a href="https://www.linkedin.com"><FaLinkedin size={30} /></a>
        </div>
      </section>

      {/* Business Hours */}
      <section className="business-hours">
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </section>
    </div>
  );
};

export default CustomerSupport;
