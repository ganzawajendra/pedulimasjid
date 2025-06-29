import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import FormRegister from "../components/fragments/FormRegister";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div
        className=" transition-all mb-10
    lg:px-20 lg:pt-12
      md:px-10 md:pt-8
      sm:px-5 sm:pt-6
      max-sm:px-3 max-sm:pt-6"
      >
        <div
          className="w-full text-left 
      max-sm:px-3"
        >
          <Link to="/" className="text-manual-white font-semibold text-sm ">
            <i className="fa-solid fa-arrow-left"></i> Kembali
          </Link>
        </div>
        <AuthLayout>
          <FormRegister />
        </AuthLayout>
      </div>
    </>
  );
};

export default RegisterPage;
