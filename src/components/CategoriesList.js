// src/components/CategoryList.js
import React from 'react';

const categories = [
  'A Place To Start', 'Arts and Entertainment', 'Autos', 'Black Voices', 'Celebrities',
  'Food', 'Friends', 'Games', 'Gay & Lesbian', 'Health', 'International'
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
