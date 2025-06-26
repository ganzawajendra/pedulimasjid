import React from "react";

const DetailList = ({ highlight, children }) => {
  return (
    <p className="font-semibold transition-all
    md:text-sm
    sm:text-xs
    max-sm:text-xs">
      {highlight} <span className="font-normal">{children}</span>
    </p>
  );
};

export default DetailList;
