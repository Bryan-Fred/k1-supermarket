import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import PromoSection from "../components/PromoSection";
import FeaturedProducts from "../components/FeaturedProducts";
import Toiletries from "../components/Toiletries";
import FrozenFoods from "../components/FrozenFoods";
import Grains from "../components/Grains";
import Breakfast from "../components/Breakfast";
import Pastries from "../components/Pastries";
import CustomerTestimonials from "../components/CustomerTestimonials";
import HeaderPage from "../components/HeaderPage";
import Footer from "../components/Footer";
import CustomerReviews from "../components/CustomerReviews";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="body-content">
        <PromoSection />
        <FeaturedProducts />
        <Toiletries />
        <FrozenFoods />
        <Grains />
        <Breakfast />
        <Pastries />
        {/* <CustomerTestimonials /> */}
        <CustomerReviews/>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
