import React from "react";
import AdminLayout from "../components/layouts/AdminLayout";
import AdminDashboard from "../components/fragments/AdminDashboard";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";

const AdminDashboardPage = () => {
  if (localStorage.getItem("user") === null && localStorage.getItem("user").role !== "admin") window.location.href = "/login";
  return (
    <>
      <Navbar />
      <div
        className="transition-all  min-h-screen
    lg:px-20 lg:pt-12
      md:px-10 md:pt-8
      sm:px-5 sm:pt-6
      max-sm:px-0 max-sm:pt-6"
      >
        <AdminLayout page="Halaman Dashboard">
          <AdminDashboard />
        </AdminLayout>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboardPage;
