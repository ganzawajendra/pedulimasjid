import React, { useEffect, useState } from 'react'
import Navbar from '../components/fragments/Navbar'
import AdminLayout from '../components/layouts/AdminLayout'
import AdminManagementDana from '../components/fragments/AdminManagementDana'
import Footer from '../components/fragments/Footer'
import { useNavigate } from 'react-router-dom'

const AdminDanaPage = () => {
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
            navigate("/admin/management-dana");
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
      <div
        className="transition-all  min-h-screen
    lg:px-20 lg:pt-12
      md:px-10 md:pt-8
      sm:px-5 sm:pt-6
      max-sm:px-0 max-sm:pt-6"
      >
        <AdminLayout page="Halaman Pencairan Dana">
          <AdminManagementDana />
        </AdminLayout>
      </div>
      <Footer />
    </>
  )
}

export default AdminDanaPage