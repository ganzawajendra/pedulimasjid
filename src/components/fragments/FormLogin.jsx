import React, { useState } from "react";
import FormInput from "../elements/FormInput";
import FormSubmit from "../elements/FormSubmit";
import { Link, useNavigate } from "react-router-dom";
import { handleInput, login } from "../../services/auth.service";

const FormLogin = () => {
  const navigate = useNavigate();
  const [valueLogin, setValueLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onInput = (e) => {
    handleInput(e, valueLogin, setValueLogin);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!valueLogin.email || !valueLogin.password) return setError("Email dan password harus diisi");

    try {
      const responseLogin = await login(valueLogin);
      if (responseLogin) {
        localStorage.setItem("user", JSON.stringify(responseLogin)); // opsional: simpan info user juga
        navigate("/admin/dashboard");
      } else {
        setError("Email atau password salah");
      }
    } catch (error) {
      console.log("Terjadi Kesalahan saat login : ", error);
    } finally {
      setValueLogin({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="w-full bg-white transition-all shadow-md p-8
    lg:col-span-1 lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-bl-none
    md:col-span-1 md:rounded-tr-xl md:rounded-br-xl md:rounded-bl-none
    sm:col-span-2 sm:rounded-tr-none sm:rounded-bl-xl sm:rounded-br-xl
    max-sm:col-span-2 max-sm:rounded-tr-none max-sm:rounded-bl-xl max-sm:rounded-br-xl">
      <h3 className="font-semibold text-gray-800 transition-all
      lg:text-xl
      md:text-lg
      sm:text-md
      max-sm:text-sm max-sm:font-bold">Login</h3>
      <p className="text-gray-500 transition-all
      lg:text-md
      md:text-sm
      sm:text-xs
      max-sm:text-xs">
        Silakan masukkan email dan kata sandi Anda untuk masuk.
      </p>

      <form
        onSubmit={handleLogin}
        className="flex flex-col mt-5 gap-3"
        autoComplete="off"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <p className="text-red-500 text-sm"></p>
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
        <FormSubmit value="Login" name="login" />
      </form>
      <p className="text-center text-gray-500 mt-3
      lg:text-md
      md:text-sm
      sm:text-xs
      max-sm:text-xs">
        Belum punya akun?{" "}
        <Link to="/register" className="text-blue-500 hover:text-blue-800">
          Daftar disini
        </Link>
      </p>
    </div>
  );
};

export default FormLogin;
