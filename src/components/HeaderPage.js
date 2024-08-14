import React, { useState, useEffect, useRef } from "react";
import "../App.css"; // Using App.css for styles
import myLogo from "../images/myLogo.png";
import {
  FaShoppingCart,
  FaUser,
  FaHome,
  FaTags,
  FaPhone,
  FaInfoCircle,
  FaChevronDown,
  FaChevronUp,
  FaBoxes,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaRedoAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const HeaderPage = ({ cartCount, products, setSearchResults }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    if (isNavbarVisible) {
      setIsCategoriesVisible(false); // Reset categories list when closing sidebar
    }
    setIsNavbarVisible(!isNavbarVisible);
  };

  const toggleCategories = () => {
    setIsCategoriesVisible(!isCategoriesVisible);
  };

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      !event.target.matches(".hamburger")
    ) {
      setIsNavbarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="homepage">
      <div className="header-component">
        <header className="header">
          <div className="hamburger" onClick={toggleNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="logo-area">
            <img src={myLogo} alt="Logo" className="img-logo" />
            <div className="logo-name">Supermarket</div>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="search product" />
            <button className="search-button">search</button>
          </div>
          <div className="user-actions">
            <a href="/login">Login</a> <a href="/signup">Register</a>
            <div className="cart">
              <span>cart</span>
              <FaUser className="user-icon" size={25} />
              <FaShoppingCart size={25} />
            </div>
          </div>
        </header>
        <span className="cart-count">{cartCount}</span>
        <div className="small-screen-search-bar">
          <input type="text" placeholder="search product" />
          <button className="search-button">search</button>
        </div>

        <nav
          ref={navbarRef}
          className={`navbar ${isNavbarVisible ? "show" : ""}`}
        >
          <span className="close-btn" onClick={toggleNavbar}>
            <FaTimes />
          </span>
          <a href="homepage">
            <FaHome className="sidebar-icons" /> Home
          </a>
          <a href="/">
            <FaTags className="sidebar-icons" /> Offers
          </a>
          <a href="/">
            <FaPhone className="sidebar-icons" /> Contact Us
          </a>
          <a href="/">
            <FaInfoCircle className="sidebar-icons" /> About Us
          </a>
          <div className="categories">
            <a onClick={toggleCategories} href="#">
              <FaBoxes /> Categories{" "}
              {isCategoriesVisible ? <FaChevronUp className="arrow-in-sidebar"/> : <FaChevronDown className="arrow-in-sidebar"/>}
            </a>
            <div
              className={`categories-list ${
                isCategoriesVisible ? "expanded" : ""
              }`}
            >
              <a href="toiletries">Toiletries</a>
              <a href="FrozenFoods">Frozen Foods</a>
              <a href="grains">Grains</a>
              <a href="breakfast">Breakfast</a>
              <a href="pastries">Pastries</a>
            </div>
          </div>
          <div className="added-links">
            <a href="/store-locator">
              <FaMapMarkerAlt className="sidebar-icons" /> Store Locator
            </a>
            <a href="support">
              <FaQuestionCircle className="sidebar-icons" /> Customer Support
            </a>
            <a href="/return-policy">
              <FaRedoAlt className="sidebar-icons" /> Return Policy
            </a>
          </div>

          <div className="sidebar-bottom">
            <div className="social-media">
              <a href="https://facebook.com">
                <FaFacebook className="sidebar-icons" />
              </a>
              <a href="https://instagram.com">
                <FaInstagram className="sidebar-icons" />
              </a>
              <a href="https://twitter.com">
                <FaTwitter className="sidebar-icons" />
              </a>
            </div>
            <p>&copy; 2024 K1 Supermarket. All rights reserved.</p>
          </div>
        </nav>
        <div
          className={`overlay ${isNavbarVisible ? "show" : ""}`}
          onClick={toggleNavbar}
        ></div>
      </div>
    </div>
  );
};

export default HeaderPage;