import React, { useEffect, useState } from 'react'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'
import AdminUpdateLayout from '../components/layouts/AdminUpdateLayout'
import FormUpdateDana from '../components/fragments/FormUpdateDana'
import { Link, useNavigate } from 'react-router-dom'

const UpdateDanaPage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem("user");

    if (!userStr) {
      navigate("/");
    } else {
      try {
        const user = JSON.parse(userStr);
        if (user.role !== "admin") {
          navigate("/");
        } else {
          setLoading(false); // akses admin, loading selesai
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
    <div className="
    lg:px-20 lg:pt-22
      md:px-10 md:pt-17
      sm:px-5 sm:pt-17
      max-sm:px-0 max-sm:pt-17">
      <div className="w-full text-left 
      max-sm:px-3">
        <Link to="/admin/management-dana" className="text-manual-white font-semibold text-sm ">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          Kembali
        </Link>
      </div>
      <AdminUpdateLayout to="/admin/management-dana" page='Pencairan Dana'>
        <FormUpdateDana />
    </AdminUpdateLayout>
    </div>
    <Footer />
    </>
  )
}

export default UpdateDanaPage