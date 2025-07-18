import React from "react";
import Label from "../FormInput/Label";
import SelectInput from "./SelectInput";

const FormSelectInput = ({ name, children, option, style="", onChange }) => {
  return (
    <div className={style}>
      <Label name={name}>{children}</Label>
      <SelectInput name={name} onChange={onChange}>
        {option.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </SelectInput>
    </div>
  );
};

export default FormSelectInput;
