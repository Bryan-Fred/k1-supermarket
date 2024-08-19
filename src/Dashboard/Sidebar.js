import React from 'react';
import { FaHome, FaBox, FaTags, FaShoppingCart } from 'react-icons/fa';

const Sidebar = ({ setPage, activePage }) => {
  return (
    <div className="sidebar">
      <ul>
        <li 
          onClick={() => setPage('Overview')} 
          className={activePage === 'Overview' ? 'active' : ''}
        >
          <FaHome className="icon" /> Overview
        </li>
        <li 
          onClick={() => setPage('Products')} 
          className={activePage === 'Products' ? 'active' : ''}
        >
          <FaBox className="icon" /> Products
        </li>
        <li 
          onClick={() => setPage('Categories')} 
          className={activePage === 'Categories' ? 'active' : ''}
        >
          <FaTags className="icon" /> Categories
        </li>
        <li 
          onClick={() => setPage('Orders')} 
          className={activePage === 'Orders' ? 'active' : ''}
        >
          <FaShoppingCart className="icon" /> Orders
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
