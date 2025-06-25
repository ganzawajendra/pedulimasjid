import React from "react";
import Label from "./Label";
import Input from "./Input";

const FormInput = ({type, name, children, style = "", value="", placeholder =""}) => {
  return (
    <div className={style}>
      <Label name={name}>{children}</Label>
      <Input type={type}  value={value} name={name} placeholder={placeholder}/>
    </div>
  );
};

export default FormInput;
