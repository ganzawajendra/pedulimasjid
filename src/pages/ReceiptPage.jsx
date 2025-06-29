import React from 'react'
import { Link } from 'react-router-dom'
import ReceiptLayout from '../components/layouts/ReceiptLayout'
import Navbar from '../components/fragments/Navbar'
import Footer from '../components/fragments/Footer'

const ReceiptPage = () => {
  return (
    <>
      <Navbar />
      <div
        className=" transition-all min-h-screen
    lg:px-20 lg:pt-22
      md:px-10 md:pt-17
      sm:px-5 sm:pt-17
      max-sm:p-0 max-sm:pt-17"
      >
        <div
          className="w-full text-left 
      max-sm:px-3"
        >
          <Link to="/" className="text-manual-white font-semibold text-sm ">
            <i className="fa-solid fa-arrow-left"></i> Kembali ke Halaman Utama
          </Link>
        </div>
        <div className='lg:mx-40 md:mx-20 sm:mx-10 max-sm:mx-0'>
        <ReceiptLayout />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ReceiptPage