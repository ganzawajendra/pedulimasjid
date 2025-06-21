import React from 'react'
import { Link } from 'react-router-dom'

const ReceiptPage = () => {
  return (
    <div className="py-13 px-90">
      <div className="w-full mt-5 text-left">
        <Link to="/card-detail" className="text-manual-white font-semibold text-sm ">
          <i className="fa-solid fa-arrow-left"></i>{" "}
          Kembali
        </Link>
      </div>
      
    </div>
  )
}

export default ReceiptPage