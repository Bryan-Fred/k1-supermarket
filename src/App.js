import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
import Homepage from "./pages/Homepage";
import ToiletriesPage from "./pages/ToiletriesPage";
import CartPage from "./pages/CartPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
