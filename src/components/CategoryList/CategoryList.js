// src/components/CategoryList/CategoryList.js
import React from 'react';
import './CategoryList.css'

const categories = [
  'A Place To Start', 'Entertainment', 'Autos', 'Celebrities',
  'Food', 'Games', 'LGBT+', 'Health', 'Sports'
];

const CategoryList = ({ onCategoryClick }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index} onClick={() => onCategoryClick(category)}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
