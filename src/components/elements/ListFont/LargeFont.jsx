import React from "react";

const MainFont = ({children, style = ""}) => {
  return (
    <h1 className={`text-lg ${style}`} >
      {children}
    </h1>
  );
};

export default MainFont;
