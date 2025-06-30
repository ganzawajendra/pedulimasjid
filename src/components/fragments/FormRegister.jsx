import  { useState } from "react";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";
import { Link, useNavigate } from "react-router-dom";
import { handleInput, register } from "../../services/auth.service";

const FormRegister = () => {
  const navigate = useNavigate()
  const [valueRegister, setValueRegister] = useState({
    name: "",
    noTelp: "",
    address: "",
    email: "",
    password: "",
    role: "donatur",
    created_at : new Date().toISOString().slice(0, 10),
  });

  const onInput = (e) => {
    handleInput(e, valueRegister, setValueRegister);
  }

  const handleRegister = (e) =>{
    register(e, valueRegister, () => navigate('/login'));
  }

  return (
    <div className="w-full bg-white shadow-md p-8
    lg:col-span-1 lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-bl-none
    md:col-span-1 md:rounded-tr-xl md:rounded-br-xl md:rounded-bl-none
    sm:col-span-2 sm:rounded-tr-none sm:rounded-bl-xl sm:rounded-br-xl
    max-sm:col-span-2 max-sm:rounded-tr-none max-sm:rounded-bl-xl max-sm:rounded-br-xl">
      <h3 className="font-semibold text-gray-800 
      lg:text-xl
      md:text-lg
      sm:text-md
      max-sm:text-sm max-sm:font-bold">Register</h3>
      <p className=" text-gray-500 
      lg:text-md
      md:text-sm
      sm:text-xs
      max-sm:text-xs">
        Lengkapi form dibawah ini untuk mendaftar sebagai donatur
      </p>

      <form
        className="flex flex-col mt-5 gap-3"
        autoComplete="off"
        onSubmit={handleRegister}
      >
        <p className="text-red-500 text-sm"></p>
        <FormInput
          type="text"
          name="name"
          placeholder="John Doe"
          onChange={onInput}
        >
          Masukkan Nama Lengkap
        </FormInput>
        <FormInput
          type="text"
          name="noTelp"
          placeholder="08123456789"
          onChange={onInput}
        >
          Masukkan No Telp
        </FormInput>
        <FormInput
          type="text"
          name="address"
          placeholder="Jl. Jend. Sudirman"
          onChange={onInput}
        >
          Masukkan Alamat
        </FormInput>
        <FormInput
          type="email"
          name="email"
          placeholder="example@gmail.com"
          onChange={onInput}
        >
          Masukkan Email
        </FormInput>
        <FormInput
          type="password"
          name="password"
          placeholder="********"
          onChange={onInput}
        >
          Masukkan Password
        </FormInput>
        <FormSubmit value="Register" name="register" />
      </form>
      <p className="text-center text-gray-500 mt-3
      lg:text-md
      md:text-sm
      sm:text-xs
      max-sm:text-xs">
        Sudah Punya Akun?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-800">
          Login disini
        </Link>
      </p>
    </div>
  );
};

export default FormRegister;
