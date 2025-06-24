import React from 'react'
import Navbar from '../components/fragments/Navbar'
import AdminLayout from '../components/layouts/AdminLayout'
import AdminManagementDana from '../components/fragments/AdminManagementDana'
import Footer from '../components/fragments/Footer'

const AdminDanaPage = () => {
  return (
    <>
    <Navbar />
    <AdminLayout page="Management Pencairan Dana">
        <AdminManagementDana />
    </AdminLayout>
    <Footer />
    </>
  )
}

export default AdminDanaPage