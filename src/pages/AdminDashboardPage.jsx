import React from 'react'
import AdminLayout from '../components/layouts/AdminLayout'
import AdminDashboard from '../components/fragments/AdminDashboard'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'

const AdminDashboardPage = () => {
  return (
    <>
    <Navbar />
    <AdminLayout page="Halaman Dashboard">
        <AdminDashboard/>
    </AdminLayout>
    <Footer />
    </>
  )
}

export default AdminDashboardPage