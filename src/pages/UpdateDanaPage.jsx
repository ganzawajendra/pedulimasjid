import React from 'react'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'
import AdminUpdateLayout from '../components/layouts/AdminUpdateLayout'
import FormUpdateDana from '../components/fragments/FormUpdateDana'

const UpdateDanaPage = () => {
  return (
    <>
    <Navbar />
    <AdminUpdateLayout to="/admin/management-dana" page='Pencairan Dana'>
        <FormUpdateDana />
    </AdminUpdateLayout>
    <Footer />
    </>
  )
}

export default UpdateDanaPage