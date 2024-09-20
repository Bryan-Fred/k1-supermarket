import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const categories = [
  { name: 'Toiletries', path: '/toiletries' },
  { name: 'Frozen Foods', path: '/frozen-foods' },
  { name: 'Grains', path: '/grains' },
  { name: 'Breakfast', path: '/breakfast' },
  { name: 'Pastries', path: '/pastries' },
];

const CategoryCards = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="category-cards">
      {categories.map((category) => (
        <Link key={category.name} to={category.path} className="link">
          <div
            className={`category-card ${currentPath === category.path ? 'active-category' : ''}`}
          >
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCards;
