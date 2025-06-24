import React from "react";
import FormInput from "../elements/FormInput";
import FormSelectInput from "../elements/FormSelectInput";
import FormSubmit from "../elements/FormSubmit";

const FormPayment = () => {
  return (
    <div className="p-5 w-full flex items-center flex-col">
      <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Donasi Sekarang</h3>
      <form action="" className="w-1/2 flex flex-col gap-3" method="POST">
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
        <div className="w-full flex items-center justify-end">
        <FormSubmit value="Bayar" name="bayar" style=" max-w-max px-7" />
        </div>
      </form>
    </div>
  );
};

export default FormPayment;
