import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartPage = ({ cart, updateCartQuantity, removeFromCart, applyDiscountCode }) => {
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountError, setDiscountError] = useState('');

  const navigate = useNavigate();

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      updateCartQuantity(id, quantity);
    }
  };

  const handleApplyDiscount = () => {
    const result = applyDiscountCode(discountCode);
    if (result.success) {
      setDiscountApplied(true);
      setDiscountError('');
    } else {
      setDiscountError(result.message);
    }
  };

  const handleProceedToCheckout = () => {
    navigate('/checkout', { state: { cart } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <div className="cart-page-unique">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items-unique">
              {cart.map(item => (
                <div key={item._id} className="cart-item-unique">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details-unique">
                    <h3>{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="quantity-unique">
                      <button onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
                    </div>
                      <FaTrash className="cart-remover" onClick={() => removeFromCart(item._id)}/>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary-unique">
              <h3>Cart Summary</h3>
              <p>Total: ${calculateTotalPrice()}</p>
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Discount Code"
              />
              <button onClick={handleApplyDiscount}>Apply Discount</button>
              {discountError && <p className="error">{discountError}</p>}
              <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
