import React from "react";

const TotalItems = ({totalProductItems}) => {
  return (
    <div>
      <label className="font-mono text-white text-xs flex items-center">
        Total Items: {totalProductItems}
      </label>
    </div>
  );
};

export default TotalItems;