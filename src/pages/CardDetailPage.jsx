import React from "react";
import CardDetailLayout from "../components/layouts/CardDetailLayout";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/fragments/Footer";
import Navbar from "../components/fragments/Navbar";

const CardDetailPage = () => {

  const params = useParams()
  
  return (
    <>
    <Navbar />
    <div className="
    lg:px-20 lg:pt-22
      md:px-10 md:pt-17
      sm:px-5 sm:pt-12
      max-sm:p-0 max-sm:pt-12">
      <div className="w-full text-left 
      max-sm:px-10">
        <Link to="/" className="text-manual-white font-semibold text-sm ">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          Kembali
        </Link>
      </div>
      <CardDetailLayout id={params.cardId}/>
    </div>
    <Footer />
    </>
  );
};

export default CardDetailPage;
