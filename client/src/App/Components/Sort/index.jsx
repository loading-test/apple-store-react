import React from 'react';
import SortIcon from '@mui/icons-material/Sort';
import './Sort.scss';

const Sort = ({ sortBy }) => {
  return (
    <div className="sortBlock">
      <SortIcon onClick={() => console.log(sortBy)} /> <span>сортировка по цене</span>
    </div>
  );
};

export default Sort;
