import React from "react";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";
import SmallFont from "../elements/ListFont/SmallFont";

const FormAddPengurus = () => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm w-full">
        <SmallFont style="text-center mb-3">Daftar Pengurus Sekarang</SmallFont>
        <form action="/form-masjid" method="post" autoComplete="off" className="flex flex-col space-y-4">
            <FormInput type="text" variant="namaLengkap" placeholder="John Doe">Nama Lengkap</FormInput>
            <FormInput type="email" variant="email" placeholder="example@gmail.com">Email</FormInput>
            <FormInput type="password" variant="password" placeholder="********">Password</FormInput>
            <FormInput type="text" variant="noTelp" placeholder="9878457398">Nomor Telepon</FormInput>
            <FormInput type="text" variant="alamat" placeholder="Jl. Jend. Sudirman">Alamat</FormInput>
            <FormSubmit value="Daftar Donatur" name="daftar_donatur" />
        </form>
      </div>
    </>
  );
};

export default FormAddPengurus;
