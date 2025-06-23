import React from "react";
import Label from "./Label";
import Input from "./Input";

const FormInput = ({type, name, placeholder, children, style = ""}) => {
  return (
    <div className={style}>
      <Label name={name}>{children}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
