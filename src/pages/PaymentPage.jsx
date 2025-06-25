import React from 'react'
import { Link } from 'react-router-dom'
import PaymentLayout from '../components/layouts/PaymentLayout'

const PaymentPage = () => {
  return (
    <div className="p-20">
      <div className="w-full mt-5 text-left">
        <Link to="/card-detail" className="text-manual-white font-semibold text-sm ">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          Kembali
        </Link>
      </div>
      <PaymentLayout />
    </div>
  )
}

export default PaymentPage