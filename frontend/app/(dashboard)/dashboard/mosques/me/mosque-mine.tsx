"use client";

import Link from "next/link";
import { Building2, PlusCircle, ShieldCheck, BadgeCheck } from "lucide-react";
import { Me, Mosque, Campaign } from "@/lib/data";
import HistoryCampaignCardMosqueMinePage from "@/components/history-campaign-card"

export default function MosqueMineView({ user, mosque, campaigns }: { user: Me; mosque: Mosque | null, campaigns: Campaign[] }) {
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
        <div className="lg:col-span-8 bg-white rounded p-6 border border-neutral-200 shadow-xs space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-neutral-700" />
              <h2 className="text-xl font-semibold text-neutral-900">
                      Detail Masjid
                    </h2>
                  </div>
                  <hr className="border-neutral-300 my-3"/>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Nama Masjid</span>
                      <p className="text-sm font-medium">{mosque?.mosque_name}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Bank</span>
                      <p className="text-sm font-medium">BCA ({mosque?.bank_account_number})</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Alamat Masjid</span>
                      <p className="text-sm font-medium">{mosque?.address}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Tanggal Pembuatan Akun</span>
                      <p className="text-sm font-medium">{formattedDate}</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Total Kampanye</span>
                      <p className="text-sm font-medium">4 (dummy)</p>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </div>

              {/* Detail Masjid Konten Kanan */}
              <div className="lg:col-span-4 bg-white rounded p-5 border border-neutral-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 font-bold text-base">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-semibold text-sm text-neutral-900 truncate">
                      {user?.full_name}
                    </h4>
                    <BadgeCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  </div>
                  <p className="text-xs text-neutral-500">
                    Ketua Takmir {mosque?.mosque_name}
                  </p>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200/80 space-y-1.5 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Nomor HP:</span>
                  <span className="font-mono font-medium text-neutral-800">
                    {user?.phone_number}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Status:</span>
                  <span className="text-green-700 font-medium uppercase">{user?.role}</span>
                </div>
              </div>
              </div>
      </div>

      {/* Riwayat Campaign */}
      <div className="lg:col-span-8 bg-white rounded p-6 border border-neutral-200 shadow-xs space-y-6">
        <div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-neutral-700" />
            <h2 className="text-xl font-semibold text-neutral-900">
              Riwayat Kampanye
            </h2>
          </div>
          <hr className="border-neutral-300 my-3"/>
          <div className="grid grid-col-2">
            {campaigns.map((campaign) => (
              <HistoryCampaignCardMosqueMinePage 
                key={campaign.proposal_id}
                proposal_id={campaign.proposal_id}
                title={campaign.title}
                description={campaign.description}
                target_amount={campaign.target_amount}
                collected_amount={campaign.collected_amount}
                cnn_confidence={campaign.cnn_confidence}
                status={campaign.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}