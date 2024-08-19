import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductModal = ({ product, closeModal, addToCart }) => {
  const handleAddToCart = (product) => {
    console.log('Adding product to cart:', product);
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
          <img className='modal-image' src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button className='add-to-cart-button' onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductModal;
