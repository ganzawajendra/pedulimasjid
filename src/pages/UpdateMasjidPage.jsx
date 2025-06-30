import React from 'react'
import Navbar from '../components/fragments/Navbar'
import AdminUpdateLayout from '../components/layouts/AdminUpdateLayout'
import Footer from '../components/fragments/Footer'
import FormUpdateMasjid from '../components/fragments/FormUpdateMasjid'
import { Link } from 'react-router-dom'

const UpdateMasjidPage = () => {
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
        <Link to="/admin/management-masjid" className="text-manual-white font-semibold text-sm ">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          Kembali
        </Link>
      </div>
      <AdminUpdateLayout to="/admin/management-masjid" page='Masjid'>
        <FormUpdateMasjid />
    </AdminUpdateLayout>
    </div>
    <Footer />
    </>
  )
}

export default UpdateMasjidPage