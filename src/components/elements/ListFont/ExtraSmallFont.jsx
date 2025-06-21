import React from "react";

const ExtraSmallFont = ({children, style=""}) => {
  return <p className={`text-gray-800 ${style} text-xs `}>{children}</p>;
};

export default ExtraSmallFont;
