import React from "react";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-tr-lg rounded-br-lg shadow-md p-8">
      <h3 className="text-xl font-semibold text-gray-800">Login</h3>
      <p className="text-md text-gray-500">Silakan masukkan email dan kata sandi Anda untuk masuk.</p>

      <form action="" method="post" className="flex flex-col mt-5 gap-3" autoComplete="off">
        <p className="text-red-500 text-sm"></p>
        <FormInput type="email" name="email" placeholder="example@gmail.com" >Masukkan Email</FormInput>
        <FormInput type="password" name="password" placeholder="********" >Masukkan Password</FormInput>
        <FormSubmit value="Login" name="login" />
      </form>
      <p className="text-md text-center text-gray-500 mt-3">
        Belum punya akun?{" "}
        <Link to="/register" className="text-blue-500 hover:text-blue-800">
          Daftar disini
        </Link>
      </p>
    </div>
  );
};

export default FormLogin;
