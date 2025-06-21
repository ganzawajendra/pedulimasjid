import React from "react";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";
import { Link } from "react-router-dom";
import MediumFont from "../elements/ListFont/MediumFont";
import SupportFont from "../elements/ListFont/SupportFont";

const FormLogin = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-tr-lg rounded-br-lg shadow-md p-8">
      <MediumFont>Login</MediumFont>
      <SupportFont>Silakan masukkan email dan kata sandi Anda untuk masuk.</SupportFont>

      <form action="" method="post" className="flex flex-col mt-5 gap-3" autoComplete="off">
        <p className="text-red-500 text-sm"></p>
        <FormInput type="email" name="email" placeholder="example@gmail.com" >Masukkan Email</FormInput>
        <FormInput type="password" name="password" placeholder="********" >Masukkan Password</FormInput>
        <FormSubmit value="Login" name="login" />
      </form>
      <SupportFont style="text-center mt-3">
        Belum punya akun?{" "}
        <Link to="/register" className="text-blue-500">
          Daftar disini
        </Link>
      </SupportFont>
    </div>
  );
};

export default FormLogin;
