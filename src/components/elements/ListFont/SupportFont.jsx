import React from "react";

const SupportFont = ({children, style = ""}) => {
  return (
    <p className={`text-gray-600 text-md ${style}`}>
      {children}
    </p>
  );
};

export default SupportFont;
