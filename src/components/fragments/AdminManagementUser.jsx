import React from 'react'
import { Link } from 'react-router-dom'

const AdminManagementUser = () => {
  return (
    <div className="min-h-screen p-10">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Lengkap</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No Telp</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Alamat</td>
                        <td className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</td>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                        <td className="px-6 py-4">Budi Utomo</td>
                        <td className="px-6 py-4 whitespace-nowrap">budi@gmail.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">0984309</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Donatur</span>
                        </td>
                        <td className="px-6 py-4">Jl. Raya No. 1</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link to="edit-user" className="text-orange-500 hover:text-orange-600 hover:underline">Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}

export default AdminManagementUser