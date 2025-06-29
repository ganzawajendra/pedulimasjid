import React from "react";
import { Link, useParams } from "react-router-dom";
import PaymentLayout from "../components/layouts/PaymentLayout";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";

const PaymentPage = () => {

  const params = useParams();

  return (
    <>
      <Navbar />
      <div
        className=" transition-all min-h-screen
    lg:px-20 lg:pt-22
      md:px-10 md:pt-17
      sm:px-5 sm:pt-17
      max-sm:p-0 max-sm:pt-17"
      >
        <div
          className="w-full text-left 
      max-sm:px-3"
        >
          <Link to={`/card-detail/${params.cardId}`} className="text-manual-white font-semibold text-sm ">
            <i className="fa-solid fa-arrow-left"></i> Kembali
          </Link>
        </div>
        <PaymentLayout id={params.cardId}/>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
