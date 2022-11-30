import React, { useState, useMemo } from 'react';

export const useSortDevice = (items) => {
  const [sortBy, setSortBy] = useState(false);

  const sortedDevice = useMemo(() => {
    const newDevice = [...items];

    newDevice.sort((a, b) => {
      if (+a.price < +b.price) return sortBy ? 1 : -1;
      if (+a.price > +b.price) return sortBy ? -1 : 1;

      return 0;
    });
    return newDevice;
  }, [sortBy, items]);

  return {
    sortedDevice,
    sortBy,
    setSortBy,
  };
};
