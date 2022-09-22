import { useState } from 'react';

export const useSortPrice = (devices = []) => {
  const [isDescSort, setIsDescSort] = useState(false);

  const sortedPrice = () => {
    const sortablePrice = [...devices];

    sortablePrice.sort((a, b) => {
      if (+a.price < b.price) return isDescSort ? 1 : -1;
      if (+a.price > b.price) return isDescSort ? -1 : 1;

      return 0;
    });

    return sortablePrice;
  };

  return {
    isDescSort,
    setIsDescSort,
    sortedPrice,
  };
};
