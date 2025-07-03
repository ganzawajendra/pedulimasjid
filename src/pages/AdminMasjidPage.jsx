import React from 'react'
import AdminLayout from '../components/layouts/AdminLayout'
import AdminManagementMasjid from '../components/fragments/AdminManagementMasjid'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'

const AdminMasjidPage = () => {
  if (localStorage.getItem("user") === null) window.location.href = "/login";
  if (localStorage.getItem("user").role !== "admin") window.location.href = "/";
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
        <AdminLayout page="Halaman Masjid">
          <AdminManagementMasjid />
        </AdminLayout>
      </div>
      <Footer />
    </>
  )
}

export default AdminMasjidPage