import React from 'react';

const ProductModal = ({ product, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
          <img className='modal-image' src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductModal;
