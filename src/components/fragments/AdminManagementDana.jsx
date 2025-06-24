import React from 'react'
import { Link } from 'react-router-dom'

const AdminManagementDana = () => {
  return (
    <div class="min-h-screen p-10">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pengurus</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Masjid</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nominal</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tujuan</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</td>
                        <td class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</td>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap">1</td>
                        <td class="px-6 py-4 whitespace-nowrap">Budi Utomo</td>
                        <td class="px-6 py-4 whitespace-nowrap">Masjid Al-Fatih</td>
                        <td class="px-6 py-4 whitespace-nowrap">RP <span>500000</span></td>
                        <td class="px-6 py-4">Untuk memperbaiki mic masjid</td>
                        <td class="px-6 py-4 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Pending</span></td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <Link to="edit-dana" class="text-orange-500 hover:text-orange-600 hover:underline">Detail</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}

export default AdminManagementDana