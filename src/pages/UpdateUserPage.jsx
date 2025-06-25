import React from 'react'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'
import AdminUpdateLayout from '../components/layouts/AdminUpdateLayout'
import FormUpdateUser from '../components/fragments/FormUpdateUser'

const UpdateUserPage = () => {
  return (
    <>
    <Navbar />
    <AdminUpdateLayout to="/admin/management-user" page='Admin'>
        <FormUpdateUser />
    </AdminUpdateLayout>
    <Footer />
    </>
  )
}

export default UpdateUserPage