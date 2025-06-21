import React from "react";
import CardDetailLayout from "../components/layouts/CardDetailLayout";
import { Link } from "react-router-dom";

const CardDetailPage = () => {
  return (
    <div className="py-13 px-90">
      <div className="w-full mt-5 text-left">
        <Link to="/" className="text-manual-white font-semibold text-sm ">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          Kembali
        </Link>
      </div>
      <CardDetailLayout />
    </div>
  );
};

export default CardDetailPage;
