import React from "react";

const SmallFont = ({children, style = ""}) => {
return (
    <h2 className={`text-lg font-semibold text-gray-800 ${style}`}>
      {children}
    </h2>
  );
};

export default SmallFont;
