import React from 'react'
import { Link } from 'react-router-dom'

const AdminManagementDana = () => {
  return (
    <div className="min-h-screen my-10">
        <div className='overflow-x-auto'>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pengurus</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Masjid</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nominal</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tujuan</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</td>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">1</td>
                        <td className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Budi Utomo</td>
                        <td className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Masjid Al-Fatih</td>
                        <td className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">RP <span>500000</span></td>
                        <td className="px-6 py-4
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">Untuk memperbaiki mic masjid</td>
                        <td className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Pending</span></td>
                        <td className="px-6 py-4 whitespace-nowrap
                        lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
                            <Link to="edit-dana" className="text-orange-500 hover:text-orange-600 hover:underline">Detail</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
  )
}

export default AdminManagementDana