import React from "react";
import Label from "./Label";
import Input from "./Input";

const FormInput = ({type, name, children, style, value, placeholder, onChange}) => {
  return (
    <div className={style}>
      <Label name={name}>{children}</Label>
      <Input type={type}  value={value} name={name} placeholder={placeholder} onChange={onChange}/>
    </div>
  );
};

export default FormInput;
