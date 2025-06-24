import React from 'react'
import AdminLayout from '../components/layouts/AdminLayout'
import AdminManagementMasjid from '../components/fragments/AdminManagementMasjid'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'

const AdminMasjidPage = () => {
  return (
    <>
    <Navbar />
    <AdminLayout page="Management Masjid">
        <AdminManagementMasjid />
    </AdminLayout>
    <Footer />
    </>
  )
}

export default AdminMasjidPage