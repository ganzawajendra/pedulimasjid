"use client"
import CampaignStatusBadge from "@/components/campaign-status-badge";
import { Campaign, Me, Mosque, TransactionLedger } from "@/lib/data";
import { ArrowRight, BadgeCheck, Building2, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Cpu, Heart, MapPin, Receipt, ShieldCheck, TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { endCampaignAction } from "./actions";
import Link from "next/link";

export default function DetailCampaignMineView({
    campaign,
    transactionLedger = [],
} : {
    campaign?: Campaign,
    transactionLedger?: TransactionLedger[]}) {

  // State
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Kalkulasi progres donasi
  const collectedAmount = campaign?.collected_amount ?? 0;
  const targetAmount = campaign?.target_amount ?? 0;
  const percentage = targetAmount > 0 ? Math.min(100, Math.round((collectedAmount / targetAmount) * 100)) : 0;
  const campaignId = campaign?.proposal_id ?? 0;
  const statusCampaign = (() => {
    switch (campaign?.status) {
    case "pending":
      return "Menunggu Persetujuan";
    case "approved":
      return "Disetujui";
    case "rejected":
      return "Ditolak";
    case "active":
      return "Aktif";
    case "completed":
      return "Selesai";
    default:
      return "Status Tidak Diketahui";
  }});
  // const startDateCampaign = String(campaign?.created_at);

  const endDate = campaign?.end_date ?? "";
  const daysLeft = endDate
    ? Math.max(0, Math.ceil((new Date(endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
    : 0;

  const inflowTransactions = (transactionLedger ?? []).filter(
    (tx) => tx.transaction_type?.toUpperCase() === "INFLOW" || tx.transaction_type?.toLowerCase() === "donation"
  );
  const totalDonators = inflowTransactions.length;

  const recentTransactions = [...(transactionLedger ?? [])]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
    .slice(0, 2);

  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(num);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(dateStr));
  };

  const handleEndCampaignAction = async (campaignId: number) => {
    const confirmEnd = window.confirm(
      "Apakah anda yakin ingin mengakhiri kampanye ini lebih awal?"
    )

    if (!confirmEnd) return;

    setLoading(true)
    const result = await endCampaignAction(campaignId)
    setLoading(false)

    if (result.success) {
      alert("Kampanye berhasil diakhiri.");
      router.refresh(); // Refresh halaman untuk memperbarui data dashboard
    } else {
      alert(`Gagal mengakhiri kampanye: ${result.error}`);
    }
  }

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <nav className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/dashboard" className="hover:text-neutral-900 transition-colors">
              Dashboard
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/dashboard/campaigns/mine/${campaignId}`} className="hover:text-neutral-900 transition-colors">
              Kampanye Saya
            </Link>
          </nav>
      {/* 2 Kolom (~65% kiri & ~35% kanan) */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* ======================================================== */}
        {/* KOLOM KIRI (~65% Width - Sticky Panel) */}
        {/* ======================================================== */}
        <div className="w-full lg:w-[65%] space-y-8">
          {/* A. Header Kampanye & Tag Lokasi */}
          <div className="bg-white rounded p-6 sm:p-8 border border-neutral-200 space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              {campaign?.title ?? "Judul Kampanye"}
            </h1>
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Berakhir {formatDate(campaign?.end_date)}</span>
            </div>
          </div>

          {/* B. Media Showcase (16:9 Aspect Ratio) */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full rounded overflow-hidden border border-neutral-200 bg-neutral-900 shadow-sm">
              <Image
                src="/bg-masjid.jpg"
                alt="Foto Utama Kondisi Fisik Bangunan Masjid"
                fill
                priority
                className="object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span>Bukti Citra Lapangan Asli</span>
              </div>
            </div>
          </div>

          {/* C. Detail Kampanye */}
          <div className="bg-white rounded p-6 border border-neutral-200 shadow-xs space-y-6">
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-neutral-700" />
                <h2 className="text-xl font-semibold text-neutral-900">
                  Detail Kampanye
                </h2>
              </div>
              <hr className="border-neutral-300 my-3"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Judul Kampanye</span>
                  <p className="text-sm font-medium">{campaign?.title}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Target Donasi</span>
                  <p className="text-sm font-medium">{formatRupiah(campaign?.target_amount ?? 0)}</p>
                </div>
                <div className="col-span-2">
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Deskripsi</span>
                  <p className="text-sm font-medium">{campaign?.description}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Tanggal Pengajuan</span>
                  <p className="text-sm font-medium">{formatDate(campaign?.created_at ?? "")}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Tanggal Berakhir</span>
                  <p className="text-sm font-medium">{formatDate(campaign?.end_date ?? "")}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Status</span>
                  <p className="text-sm font-medium">{statusCampaign()}</p>
                </div>
              </div>
              <div>

              </div>
            </div>
          </div>

          {/* D. Cuplikan Buku Kas Terbuka (Cryptographic Ledger) */}
          <div className="bg-white rounded p-6 border border-neutral-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-neutral-700" />
                <h3 className="font-bold text-neutral-900 text-base">
                  Cuplikan Buku Kas Terbuka
                </h3>
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                SHA-256 Ledger
              </span>
            </div>

            <p className="text-xs text-neutral-500">
              Setiap rupiah mutasi kas masuk dan nota belanja fisik tercatat
              secara transparan tanpa celah penyuntingan sepihak.
            </p>

            <div className="space-y-2.5">
              {recentTransactions.length === 0 ? (
                <p className="text-xs text-neutral-400 text-center py-4">Belum ada transaksi tercatat.</p>
              ) : (
                recentTransactions.map((tx) => {
                  const isInflow =
                    tx.transaction_type?.toUpperCase() === "INFLOW" ||
                    tx.transaction_type?.toLowerCase() === "donation";
                  return (
                    <div key={tx.ledger_id} className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50/60 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                          isInflow ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                        }`}>
                          {isInflow ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-semibold text-neutral-900">
                            {tx.description || (isInflow ? "Donasi Masuk" : "Pengeluaran")}
                          </p>
                          <p className="text-[11px] text-neutral-500">
                            {formatDate(tx.timestamp)} • Blok #{String(tx.ledger_id).padStart(3, "0")}
                          </p>
                        </div>
                      </div>
                      <span className={`font-semibold text-sm ${
                        isInflow ? "text-green-600" : "text-neutral-900"
                      }`}>
                        {isInflow ? "+" : "-"}{formatRupiah(Number(tx.amount) || 0)}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <Link
                href={`/audit/${campaignId}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <span>Lihat seluruh Nota Belanja & Audit Mutasi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* KOLOM KANAN (~35% Width - Sticky Panel) */}
        {/* ======================================================== */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-24 space-y-6 self-start">
          {/* A & B. Panel Donasi & Aksi Utama */}
          <div className="bg-white rounded p-4 sm:p-6 border border-neutral-200 space-y-6">
            {/* A. Ringkasan Angka Donasi */}
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                  Donasi Terkumpul
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-neutral-900 tracking-tight">
                    {formatRupiah(collectedAmount)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-neutral-500 mt-1">
                  <span>
                    dari target <strong>{targetAmount > 0 ? formatRupiah(targetAmount) : "-"}</strong>
                  </span>
                  <span className="font-semibold text-neutral-800">
                    {percentage}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-green-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-xs text-neutral-600 pt-1">
                <span>
                  <strong>{totalDonators}</strong> Donatur
                </span>
                <span>
                  Sisa <strong>{daysLeft > 0 ? `${daysLeft} hari lagi` : "Berakhir"}</strong>
                </span>
              </div>
            </div>

            {/* B. Akhiri Kampanye */}
            <div className="space-y-2.5 pt-2 border-t border-neutral-200">
              <button
                onClick={() => handleEndCampaignAction(campaignId)}
                disabled={loading}
                className="bg-red-600 hover:bg-red-800 text-white text-xs font-semibold py-2 px-4 w-full rounded cursor-pointer disabled:opacity-50"
              >
                {loading ? "Memproses..." : "Akhiri Kampanye"}
              </button> 
            </div>
          </div>

          {/* C. Tingkat Akurasi Prediksi */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded p-6 border border-neutral-700 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-700/80 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-green-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs uppercase tracking-wider">
                    Tingkat Akurasi Prediksi
                  </h3>
                  
                </div>
              </div>
            </div>

            <div className="pt-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-white">{campaign?.cnn_confidence}%</span>
                </div>
                <p className="text-xs text-neutral-400">
                    Otomasi Penilaian Gambar CNN dengan Model MobileNetV2
                  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}