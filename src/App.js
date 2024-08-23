import { Analytics } from "@vercel/analytics/react";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
import Homepage from "./pages/Homepage";
import ToiletriesPage from "./pages/ToiletriesPage";
import CartPage from "./pages/CartPage";
import BreakfastPage from "./pages/BreakfastPage";
import PastriesPage from "./pages/PastriesPage";
import GrainsPage from "./pages/GrainsPage";
import FrozenFoodsPage from "./pages/FrozenFoodsPage";
import CustomerSupport from "./pages/CustomerSupport";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage" ;
import SignupPage from "./pages/SignupPage";
import OffersPage from "./pages/OffersPage";
import Dashboard from "./Dashboard/Dashboard";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log("Product added to cart:", product);
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateCartQuantity = (id, quantity) => {
    setCart(
      cart.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HeaderPage cartCount={cartCount} setSearchResults={setSearchResults} />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route path="homepage" element={<Homepage />} />
        <Route
          path="/toiletries"
          element={<ToiletriesPage addToCart={addToCart} cartCount={cartCount} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="/breakfast" element={<BreakfastPage addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/pastries" element={<PastriesPage addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/grains" element={<GrainsPage addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/FrozenFoods" element={<FrozenFoodsPage addToCart={addToCart} cartCount={cartCount} />} />
        <Route path="/support" element={<CustomerSupport/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/offers" element={<OffersPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <ScrollToTopButton />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
