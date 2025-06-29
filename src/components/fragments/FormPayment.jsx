import React from "react";
import FormInput from "../elements/FormInput";
import FormSelectInput from "../elements/FormSelectInput";
import FormSubmit from "../elements/FormSubmit";

const FormPayment = () => {
  const optionValue = ["Transfer Bank", "E-Wallet", "Qris"];
  return (
    <div className="p-5 w-full flex items-center flex-col ">
      <h3 className="font-semibold text-gray-800 text-center mb-2
      lg:text-2xl 
        md:text-lg
        sm:text-md
        max-sm:text-sm">Donasi Sekarang</h3>
      <form action="" className="flex flex-col gap-3
      lg:w-1/2
      md:w-3/4
      sm:w-full
      max-sm:w-full" method="POST">
        <FormInput
          type="number"
          name="nominal_donasi"
          placeholder="Masukkan Nominal"
        >
          Nominal Donasi
        </FormInput>
        <FormSelectInput name="metode_pembayaran" option={optionValue}>
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
