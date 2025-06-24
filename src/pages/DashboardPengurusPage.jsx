import React from "react";
import DashboardPengurusLayout from "../components/layouts/DashboardPengurusLayout";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";

const DashboardPengurusPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-20">
        <DashboardPengurusLayout />
      </div>
      <Footer />
    </>
  );
};

export default DashboardPengurusPage;
