import React, { memo } from 'react';
import SortIcon from '@mui/icons-material/Sort';
import FilterListIcon from '@mui/icons-material/FilterList';
import './Sort.scss';

const Sort = memo(({ sort, setSortBy, sortBy }) => {
  return (
    <div className="sortBlock">
      {sortBy ? (
        <SortIcon onClick={() => setSortBy(!sortBy)} />
      ) : (
        <FilterListIcon onClick={() => setSortBy(!sortBy)} />
      )}
      <span>Сортировать по цене </span>
    </div>
  );
});

export default Sort;
