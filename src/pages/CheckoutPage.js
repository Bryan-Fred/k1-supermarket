import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] }; // Fallback to an empty array if cart is not provided

  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handlePlaceOrder = () => {
    // Logic for placing the order
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      
      <div className="checkout-section order-summary">
        <h2>Order Summary</h2>
        <ul>
          {cart.map(item => (
            <li key={item._id}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p><strong>Total: ${calculateTotalPrice()}</strong></p>
      </div>

      <div className="checkout-section shipping-info">
        <h2>Shipping Information</h2>
        <input type="text" name="address" placeholder="Address" value={shippingInfo.address} onChange={handleShippingChange} />
        <input type="text" name="city" placeholder="City" value={shippingInfo.city} onChange={handleShippingChange} />
        <input type="text" name="state" placeholder="State" value={shippingInfo.state} onChange={handleShippingChange} />
        <input type="text" name="zip" placeholder="ZIP Code" value={shippingInfo.zip} onChange={handleShippingChange} />
      </div>

      <div className="checkout-section payment-info">
        <h2>Payment Information</h2>
        <input type="text" name="cardNumber" placeholder="Card Number" value={paymentInfo.cardNumber} onChange={handlePaymentChange} />
        <input type="text" name="expiry" placeholder="Expiry Date (MM/YY)" value={paymentInfo.expiry} onChange={handlePaymentChange} />
        <input type="text" name="cvv" placeholder="CVV" value={paymentInfo.cvv} onChange={handlePaymentChange} />
      </div>

      <div className="checkout-section review-confirm">
        <h2>Review & Confirm</h2>
        <p><strong>Shipping to:</strong> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.state}, {shippingInfo.zip}</p>
        <p><strong>Payment Method:</strong> **** **** **** {paymentInfo.cardNumber.slice(-4)}</p>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
