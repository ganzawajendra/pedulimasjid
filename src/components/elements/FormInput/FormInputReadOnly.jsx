import React from "react";
import Label from "./Label";

const FormInputReadOnly = ({type, name, value, children, style}) => {
  return (
    <div className={style}>
      <Label name={name}>{children}</Label>
      <input
        type={type}
        name={name}
        id={name}
        className="w-full text-gray-500 px-4 py-2 border border-gray-400 border-b-2 border-b-gray-800 focus:border-x-1 focus:border-t-1 focus:ring-0 focus:outline-none transition-all duration-300"
        readonly
        value={value}
      />
    </div>
  );
};

export default FormInputReadOnly;
