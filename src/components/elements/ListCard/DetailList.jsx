import React from "react";

const DetailList = ({ highlight, children }) => {
  return (
    <p className="font-semibold">
      {highlight} <span className="font-normal">{children}</span>
    </p>
  );
};

export default DetailList;
