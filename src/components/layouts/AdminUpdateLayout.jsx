import React from 'react'
import { Link } from 'react-router-dom'

const AdminUpdateLayout = ({children, to="", page=""}) => {
  return (
    <div className="p-20 min-h-screen">
    <div className="w-full mt-5 text-left">
        <Link to={to} className="text-manual-white font-semibold text-sm ">
            <i className="fa-solid fa-arrow-left"></i>{" "}
            Kembali
        </Link>
    </div>
    <div className="w-full bg-white rounded-tr-lg rounded-br-lg shadow-lg p-8">
        <h1 className="text-xl font-semibold col-span-2">Edit {page} (ID : <span>1</span>)</h1>
        <p className=" text-gray-500 col-span-2">Silahkan edit data <span className="lowercase">{page}</span></p>
        {children}
    </div>
    </div>
  )
}

export default AdminUpdateLayout