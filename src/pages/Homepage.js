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
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <div className="body-content">
        <PromoSection />
        <FeaturedProducts />
        <Toiletries />
        <FrozenFoods />
        <Grains />
        <Breakfast />
        <Pastries />
        <CustomerTestimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
