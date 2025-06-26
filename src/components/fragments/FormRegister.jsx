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
    <div className="w-full max-w-md bg-white rounded-tr-lg rounded-br-lg shadow-md p-8">
      <h3 className="text-xl font-semibold text-gray-800 ">Register</h3>
      <p className="text-md text-gray-500 ">
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
      <p className="text-md text-center text-gray-500 mt-3">
        Sudah Punya Akun?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-800">
          Login disini
        </Link>
      </p>
    </div>
  );
};

export default FormRegister;
