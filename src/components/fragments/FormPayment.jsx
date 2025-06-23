import React from "react";
import FormInput from "../elements/FormInput";
import FormSelectInput from "../elements/FormSelectInput";
import FormSubmit from "../elements/FormSubmit";
import MediumFont from "../elements/ListFont/MediumFont";
import SmallFont from "../elements/ListFont/SmallFont";

const FormPayment = () => {
  return (
    <div className="p-5">
      <SmallFont style="text-center uppercase mb-5">Donasi Sekarang</SmallFont>
      <form action="" className="grid grid-cols-2 gap-5" method="POST">
        <FormInput
          type="number"
          name="nominal_donasi"
          placeholder="Masukkan Nominal"
        >
          Nominal Donasi
        </FormInput>
        <FormSelectInput name="metode_pembayaran">
          Pilih Metode Pembayaran
        </FormSelectInput>
        <FormSubmit value="Bayar" name="bayar" style=" max-w-max" />
      </form>
    </div>
  );
};

export default FormPayment;
