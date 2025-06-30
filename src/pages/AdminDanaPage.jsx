import React from 'react'
import Navbar from '../components/fragments/Navbar'
import AdminLayout from '../components/layouts/AdminLayout'
import AdminManagementDana from '../components/fragments/AdminManagementDana'
import Footer from '../components/fragments/Footer'

const AdminDanaPage = () => {
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