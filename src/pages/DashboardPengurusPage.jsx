import React from "react";
import DashboardPengurusLayout from "../components/layouts/DashboardPengurusLayout";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";

const DashboardPengurusPage = () => {
  if (localStorage.getItem("user") === null && localStorage.getItem("user").role !== "pengurus") window.location.href = "/login";
  return (
    <>
      <Navbar />
      <div className="transition-all
    lg:px-20 lg:pt-12
      md:px-10 md:pt-8
      sm:px-5 sm:pt-6
      max-sm:px-0 max-sm:pt-6">
        <DashboardPengurusLayout />
      </div>
      <Footer />
    </>
  );
};

export default DashboardPengurusPage;
