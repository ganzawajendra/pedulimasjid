import React from "react";
import Label from "./Label";
import Input from "./Input";

const FormInput = ({type, name, placeholder, children}) => {
  return (
    <div>
      <Label name={name}>{children}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
