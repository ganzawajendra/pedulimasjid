import React from 'react'
import { Link } from 'react-router-dom'
import ReceiptLayout from '../components/layouts/ReceiptLayout'

const ReceiptPage = () => {
  return (
    <div className="p-20">
      <div className="w-full mt-5 text-left">
        <Link to="/" className="text-manual-white font-semibold text-sm ">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          Kembali ke Menu Utama
        </Link>
      </div>
      <ReceiptLayout />
    </div>
  )
}

export default ReceiptPage