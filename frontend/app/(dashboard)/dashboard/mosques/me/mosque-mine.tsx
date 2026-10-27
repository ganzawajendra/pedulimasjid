"use client";

import Link from "next/link";
import { Building2, MapPin, CreditCard, Calendar, PlusCircle } from "lucide-react";
import { Mosque } from "@/lib/data";

export default function MosqueMineView({ mosque }: { mosque: Mosque | null }) {
  if (!mosque) {
    return (
      <div className="max-w-4xl mx-auto p-8 text-center border border-dashed border-neutral-300 rounded-2xl bg-white my-8 space-y-3">
        <Building2 className="w-12 h-12 mx-auto text-neutral-400" />
        <h2 className="text-base font-bold text-neutral-800">Belum Ada Data Masjid</h2>
        <p className="text-xs text-neutral-500 max-w-md mx-auto">
          Akun Anda belum mendaftarkan profil masjid. Silakan daftarkan masjid terlebih dahulu sebelum membuat pengajuan kampanye.
        </p>
        <Link
          href="/dashboard/mosques/create"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          Daftarkan Masjid
        </Link>
      </div>
    );
  }

  const formattedDate = mosque.created_at
    ? new Date(mosque.created_at).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-2">
        <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">Profil Masjid</h1>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          Informasi lengkap tempat ibadah yang dikelola oleh akun takmir saat ini.
        </p>
      </div>

    {/* Content Kiri dan Kanan 50% */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        
            {/* Detail Masjid Konten Kiri */}
            <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-2xl p-6 space-y-6 shadow-xs">
                <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
                    <Building2 className="w-6 h-6" />
                </div>
                <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    Nama Masjid
                    </span>
                    <h2 className="text-lg font-bold text-neutral-900">{mosque?.mosque_name}</h2>
                </div>
                </div>

                <hr className="border-neutral-100" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                    <p className="text-xs font-semibold text-neutral-500">Kota / Kabupaten</p>
                    <p className="text-sm font-medium text-neutral-800">{mosque.city || "-"}</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                    <p className="text-xs font-semibold text-neutral-500">Nomor Rekening Bank</p>
                    <p className="text-sm font-mono font-medium text-neutral-800">
                        {mosque.bank_account_number || "-"}
                    </p>
                    </div>
                </div>

                <div className="flex items-start gap-3 md:col-span-2">
                    <MapPin className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                    <p className="text-xs font-semibold text-neutral-500">Alamat Lengkap</p>
                    <p className="text-sm font-medium text-neutral-800">{mosque.address || "-"}</p>
                    </div>
                </div>

                <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                    <div>
                    <p className="text-xs font-semibold text-neutral-500">Tanggal Terdaftar</p>
                    <p className="text-sm font-medium text-neutral-800">{formattedDate}</p>
                    </div>
                </div>
                </div>
            </div>

            {/* Detail Masjid Konten Kanan */}
            <div>ged</div>
    </div>
    </div>
  );
}