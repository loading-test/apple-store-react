import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import "./Sort.scss";

const Sort = () => {
  return (
    <div className="sortBlock">
      <SortIcon /> <span>сортировка по цене</span>
    </div>
  );
};

export default Sort;
