import React from 'react';
import styles from './Categories.module.scss';

const Categories = ({ value, onChangeCategory }) => {
  const categories = [
    'Все',
    'Iphone XR',
    'Iphone 11',
    'Iphone 12',
    'Iphone 12 Pro',
    'Iphone 13',
    'Iphone 13 Pro',
    'Iphone 13 ProMax',
  ];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(categoryName)}
            className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
