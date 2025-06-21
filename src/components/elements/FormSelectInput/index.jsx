import React from "react";
import Label from "../FormInput/Label";
import SelectInput from "./SelectInput";

const FormSelectInput = ({ name, children }) => {
  const optionValue = ["Transfer Bank", "E-Wallet", "Qris"];
  return (
    <div>
      <Label name={name}>{children}</Label>
      <SelectInput name={name}>
        {optionValue.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </SelectInput>
    </div>
  );
};

export default FormSelectInput;
