import React from 'react'
import Navbar from '../components/fragments/Navbar'
import AdminLayout from '../components/layouts/AdminLayout'
import AdminManagementUser from '../components/fragments/AdminManagementUser'
import Footer from '../components/fragments/Footer'

const AdminUserPage = () => {
  return (
    <>
    <Navbar />
    <AdminLayout page="Management User">
        <AdminManagementUser />
    </AdminLayout>
    <Footer />
    </>
  )
}

export default AdminUserPage