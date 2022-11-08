import React from 'react';
import './Categories.scss';

const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    'All',
    'Iphone XR',
    'Iphone 11',
    'Iphone 12',
    'Iphone 12 Pro',
    'Iphone 13',
    'Iphone 13 Mini',
    'Iphone 13 Pro',
    'Iphone 13 ProMax',
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
