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
    <div className="w-full max-w-md bg-white rounded-tr-lg rounded-br-lg shadow-md p-8">
      <h3 className="text-xl font-semibold text-gray-800">Login</h3>
      <p className="text-md text-gray-500">
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
