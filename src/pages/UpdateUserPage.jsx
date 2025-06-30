import React from 'react'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'
import AdminUpdateLayout from '../components/layouts/AdminUpdateLayout'
import FormUpdateUser from '../components/fragments/FormUpdateUser'
import { Link } from 'react-router-dom'

const UpdateUserPage = () => {
  return (
    <>
    <Navbar />
    <div className="
    lg:px-20 lg:pt-22
      md:px-10 md:pt-17
      sm:px-5 sm:pt-17
      max-sm:px-0 max-sm:pt-17">
      <div className="w-full text-left 
      max-sm:px-3">
        <Link to="/admin/management-user" className="text-manual-white font-semibold text-sm ">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          Kembali
        </Link>
      </div>
      <AdminUpdateLayout to="/admin/management-user" page='Admin'>
        <FormUpdateUser />
    </AdminUpdateLayout>
    </div>
    <Footer />
    </>
  )
}

export default UpdateUserPage