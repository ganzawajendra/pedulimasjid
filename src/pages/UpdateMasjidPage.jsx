import React from 'react'
import Navbar from '../components/fragments/Navbar'
import AdminUpdateLayout from '../components/layouts/AdminUpdateLayout'
import Footer from '../components/fragments/Footer'
import FormUpdateMasjid from '../components/fragments/FormUpdateMasjid'

const UpdateMasjidPage = () => {
  return (
    <>
    <Navbar />
    <AdminUpdateLayout to="/admin/management-masjid" page='Masjid'>
        <FormUpdateMasjid />
    </AdminUpdateLayout>
    <Footer />
    </>
  )
}

export default UpdateMasjidPage