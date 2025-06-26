import React, { useState } from "react";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";
import { handleInput, register } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const FormAddPengurus = () => {
  const navigate = useNavigate()
  const [valuePengurus, setValuePengurus] = useState({
    name: "",
    noTelp: "",
    address: "",
    email: "",
    password: "",
    role: "pengurus",
    created_at: new Date().toISOString().slice(0, 10)
  });

  const onInput = (e) => {
    handleInput(e, valuePengurus, setValuePengurus)
  }

  const handleRegister = (e) =>{
    register(e, valuePengurus, () => navigate("/form-masjid"))
  }

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm w-full">
        <h3 className="font-semibold text-gray-800 text-center mb-2
        lg:text-2xl 
        md:text-lg
        sm:text-md
        max-sm:text-sm">Daftar Pengurus Sekarang</h3>
        <form onSubmit={handleRegister} autoComplete="off" className="flex flex-col space-y-4">
            <FormInput type="text" name="name" placeholder="John Doe" onChange={onInput}>Nama Lengkap</FormInput>
            <FormInput type="text" name="noTelp" placeholder="9878457398" onChange={onInput}>Nomor Telepon</FormInput>
            <FormInput type="text" name="address" placeholder="Jl. Jend. Sudirman" onChange={onInput}>Alamat</FormInput>
            <FormInput type="email" name="email" placeholder="example@gmail.com" onChange={onInput}>Email</FormInput>
            <FormInput type="password" name="password" placeholder="********" onChange={onInput}>Password</FormInput>
            <FormSubmit value="Daftar Donatur" name="daftar_donatur" />
        </form>
      </div>
    </>
  );
};

export default FormAddPengurus;
