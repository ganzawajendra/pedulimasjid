import React from 'react'
import { Link } from 'react-router-dom'

const AdminUpdateLayout = ({children, to="", page=""}) => {



  return (
    <div className="min-h-screen w-full bg-white rounded-xl mt-5">
      <div className='overflow-hidden'>
        <h1 className="text-xl font-semibold col-span-2 apearLeftRight
        lg:text-xl
        md:text-lg
        sm:text-md
        max-sm:text-sm max-sm:text-center">Edit {page} (ID : <span>1</span>)</h1>
        <p className=" text-gray-500 col-span-2 apearLeftRight
        lg:text-md
        md:text-sm
        sm:text-xs
        max-sm:text-xs max-sm:text-center">Silahkan edit data <span className="lowercase">{page}</span></p>
        {children}
        </div>
    </div>
  )
}

export default AdminUpdateLayout