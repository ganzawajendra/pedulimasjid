import React from "react";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";

const FormAddPencairan = ({style = "", action = ""}) => {
  return (
    <form action={action} method="post" autoComplete="off" className={style}>
      <FormInput type="number" name="nominal" placeholder="Rp 300000">
        Nominal
      </FormInput>
      <FormInput
        type="text"
        name="tujuan"
        placeholder="Pembangunan Atap Masjid"
      >
        Tujuan
      </FormInput>
      <FormSubmit value="Kirim Pencairan" name="submit_pencairan" />
    </form>
  );
};

export default FormAddPencairan;
