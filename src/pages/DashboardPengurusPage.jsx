import React, { useEffect, useState } from "react";
import DashboardPengurusLayout from "../components/layouts/DashboardPengurusLayout";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import { useNavigate } from "react-router-dom";

const DashboardPengurusPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem("user");

    if (!userStr) {
      navigate("/");
    } else {
      try {
        const user = JSON.parse(userStr);
        if (user.role !== "pengurus") {
          navigate("/");
        } else {
          setLoading(false); // akses admin, loading selesai
          navigate("/dashboard-pengurus");
        }
      } catch (err) {
        console.error("User parsing failed:", err);
        navigate("/");
      }
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>; // tampilkan loading selama pengecekan
  }
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
