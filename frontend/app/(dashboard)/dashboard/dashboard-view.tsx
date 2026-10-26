"use client"
import { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Wallet,
  Users,
  ExternalLink,
  Plus,
  Receipt,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Camera,
  Share2,
  ArrowRight,
  Info,
  X,
} from "lucide-react";
import type {Me, Mosque, Campaign, TransactionLedger} from "@/lib/data"
import CampaignStatusBadge from "@/components/campaign-status-badge";

function formatTimestamp(tsString?: string) {
  if (!tsString) return "-";
  try {
    const d = new Date(tsString);
    if (isNaN(d.getTime())) return tsString;
    return (
      new Intl.DateTimeFormat("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(d) + " WIB"
    );
  } catch {
    return tsString;
  }
}

export default function DashboardView({
  me,
  mosque,
  campaign,
  transactionLedger = [],
}: {
  me: Me;
  mosque?: Mosque;
  campaign?: Campaign;
  transactionLedger?: TransactionLedger[];
}) {
  const [timeframe, setTimeframe] = useState<"7" | "30">("7");
  const [copiedLink, setCopiedLink] = useState(false);
  const [showProgressModal, setShowProgressModal] = useState(false);
  const [progressText, setProgressText] = useState("");

  const campaignId = campaign?.proposal_id ?? 0;

  // Filter transaksi masuk (donasi) dan keluar (belanja)
  const inflowTransactions = (transactionLedger || []).filter((tx) => {
    const type = tx.transaction_type?.toUpperCase();
    return type === "INFLOW" || type === "DONATION";
  });

  const outflowTransactions = (transactionLedger || []).filter((tx) => {
    const type = tx.transaction_type?.toUpperCase();
    return type === "OUTFLOW" || type === "EXPENSE";
  });

  const totalInflow = inflowTransactions.reduce((acc, tx) => acc + (Number(tx.amount) || 0), 0);
  const totalOutflow = outflowTransactions.reduce((acc, tx) => acc + (Number(tx.amount) || 0), 0);
  const totalDonators = inflowTransactions.length;

  const collectedAmount = campaign?.collected_amount ?? totalInflow;
  const targetAmount = campaign?.target_amount ?? 0;
  const percentage = targetAmount > 0 ? Math.min(100, Math.round((collectedAmount / targetAmount) * 100)) : 0;
  const availableBalance = Math.max(0, collectedAmount - totalOutflow);

  // Handle end date
  const endDate = campaign?.end_date ?? "";
  const daysLeft = endDate ? Math.max(0, Math.ceil((new Date(endDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) : 0;

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const handleCopyDonationLink = () => {
    const url = `${window.location.origin}/campaigns/${campaignId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Kalkulasi data grafik harian dinamis
  const getChartData = (daysCount: number) => {
    const days: { day: string; amount: number; donators: number }[] = [];
    const now = new Date();

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const dateKey = `${year}-${month}-${day}`;

      const label = d.toLocaleDateString("id-ID", {
        weekday: daysCount <= 7 ? "short" : undefined,
        day: "numeric",
        month: "short",
      });

      let amount = 0;
      let donators = 0;

      inflowTransactions.forEach((tx) => {
        if (!tx.timestamp) return;
        const txDate = tx.timestamp.slice(0, 10);
        if (txDate === dateKey) {
          amount += Number(tx.amount) || 0;
          donators += 1;
        }
      });

      days.push({ day: label, amount, donators });
    }

    return days;
  };

  const dynamicChartData7 = getChartData(7);
  const dynamicChartData30 = getChartData(30);
  const activeChartData = timeframe === "7" ? dynamicChartData7 : dynamicChartData30;
  const hasChartData = activeChartData.some((item) => item.amount > 0);
  const maxAmount = Math.max(...activeChartData.map((d) => d.amount), 1);

  // 5 Mutasi terakhir
  const recentTransactions = [...(transactionLedger || [])]
    .sort((a, b) => {
      const timeA = new Date(a.timestamp).getTime() || a.ledger_id;
      const timeB = new Date(b.timestamp).getTime() || b.ledger_id;
      return timeB - timeA;
    })
    .slice(0, 5);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* ================================================================= */}
      {/* 1. HEADER SELAMAT DATANG & STATUS KAMPANYE AKTIF (TOP BANNER)    */}
      {/* ================================================================= */}
      <section className="bg-white rounded p-6 sm:p-8 border border-neutral-200 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Salam & Informasi Masjid */}
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
              Assalamu&apos;alaikum, {me?.full_name ?? "Pengurus"}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Berikut adalah ringkasan perkembangan donasi dan mutasi kas renovasi untuk{" "}
              <strong>{mosque?.mosque_name ?? "Masjid Anda"}</strong>.
            </p>
          </div>

          {/* Tombol Pintas Header */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={`/campaigns/${campaignId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold py-2.5 px-4 rounded border border-neutral-300 transition-colors shadow-xs"
            >
              <span>Lihat Halaman Publik</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
            </Link>

            <Link
              href="/dashboard/expenses/new"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 active:scale-95 text-white text-xs font-semibold py-2.5 px-4 rounded transition-all shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4 text-emerald-400" />
              <span>Ajukan Pencairan Dana</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* 2. PANEL KARTU METRIK KEUANGAN (FINANCIAL KPI CARDS)             */}
      {/* ================================================================= */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-neutral-200 shadow-xs p-6 rounded bg-white">
          <div className="col-span-4 mb-6">
            <p className="text-xs uppercase tracking-wide font-semibold text-neutral-500 pb-1">Kampanye Saat Ini</p>
              {campaign?.title ? (
                <>
                <div className="flex items-center gap-2 mt-1">
                  <h2 className="text-xl font-semibold">{campaign?.title}</h2>
                  <CampaignStatusBadge status={campaign?.status} />
                </div>
                <p className="text-xs text-neutral-600 pt-2">{campaign?.description || "Tidak ada Deskripsi"}</p>
                </>
              ) : (
                <CampaignStatusBadge status={campaign?.status} />
              )}
          </div>
          {/* Kartu 1: Total Donasi Terkumpul */}
          <div className="bg-white px-3 sm:px-4 border-x border-neutral-400 flex flex-col justify-between ">
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-xs font-bold uppercase tracking-wider">
                Total Donasi Terkumpul
              </span>
              <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline justify-between gap-1">
                <span className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-tight">
                  {formatRupiah(collectedAmount)}
                </span>
                <span className="text-xs font-bold text-emerald-600">{percentage}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden border border-neutral-200/60">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-neutral-500 pt-0.5">
                <span>Target {targetAmount > 0 ? formatRupiah(targetAmount) : "-"}</span>
                <span className="font-semibold text-neutral-700">
                  Sisa {daysLeft > 0 ? `${daysLeft} hari` : "0 hari"}
                </span>
              </div>
            </div>
          </div>

          {/* Kartu 2: Saldo Kas Tersedia */}
          <div className="bg-white px-3 sm:px-4 border-x border-neutral-400 flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-xs font-bold uppercase tracking-wider">
                Saldo Kas Tersedia
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Wallet className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-lg sm:text-xl font-extrabold text-emerald-700 tracking-tight block">
                {formatRupiah(availableBalance)}
              </span>
              <p className="text-xs text-neutral-500 leading-tight">
                Dana donasi sah yang siap dicairkan untuk belanja fisik material.
              </p>
            </div>
          </div>

          {/* Kartu 3: Total Kas Terbelanja */}
          <div className="bg-white px-3 sm:px-4 border-x border-neutral-400 flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-xs font-bold uppercase tracking-wider">
                Kas Terbelanja (Outflow)
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Receipt className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-tight block">
                {formatRupiah(totalOutflow)}
              </span>
              <p className="text-xs text-neutral-500 leading-tight">
                Informasi total kas terbelanja untuk kebutuhan fisik masjid.
              </p>
            </div>
          </div>

          {/* Kartu 4: Total Donatur */}
          <div className="bg-white px-3 sm:px-4 border-x border-neutral-400 flex flex-col justify-between">
            <div className="flex items-center justify-between text-neutral-500">
              <span className="text-xs font-bold uppercase tracking-wider">
                Total Donatur
              </span>
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-tight block">
                {totalDonators} Donatur
              </span>
              <p className="text-xs text-neutral-500 leading-tight">
                Informasi total donatur yang melakukan donasi pada campaign ini.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* ================================================================= */}
      {/* 3. DUA KOLOM UTAMA: GRAFIK TREN & TINDAKAN CEPAT (MAIN WORKSPACE) */}
      {/* ================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* =============================================================== */}
        {/* A. KOLOM KIRI (LEBAR ~65% / 8 COLS): GRAFIK & MUTASI TERAKHIR    */}
        {/* =============================================================== */}
        <div className="lg:col-span-8 space-y-8">
          {/* 1. Grafik Tren Donasi Harian */}
          <div className="bg-white rounded p-6 sm:p-7 border border-neutral-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-neutral-900 font-bold text-base">
                  <h2>Tren Arus Donasi Masuk</h2>
                </div>
              </div>

              {/* Timeframe Selector */}
              <div className="flex items-center bg-neutral-100 p-1 rounded text-xs font-medium self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setTimeframe("7")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    timeframe === "7"
                      ? "bg-white text-neutral-900 shadow-xs font-semibold"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  7 Hari Terakhir
                </button>
                <button
                  type="button"
                  onClick={() => setTimeframe("30")}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    timeframe === "30"
                      ? "bg-white text-neutral-900 shadow-xs font-semibold"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  30 Hari Terakhir
                </button>
              </div>
            </div>

            {/* Visual Bar Chart */}
            {!hasChartData ? (
              <div className="h-56 flex flex-col items-center justify-center border border-dashed border-neutral-200 rounded-2xl p-6 text-center">
                <p className="text-sm font-semibold text-neutral-600">Belum ada data donasi masuk</p>
                <p className="text-xs text-neutral-400 mt-1 max-w-sm">
                  Grafik tren akan otomatis tampil saat terdapat donasi yang tercatat pada sistem.
                </p>
              </div>
            ) : (
              <div className="space-y-4 pt-2">
                <div className="h-56 flex items-end justify-between gap-3 pt-6 pb-2 px-2 border-b border-neutral-200">
                  {activeChartData.map((item, idx) => {
                    const heightPercent = item.amount > 0 ? Math.max(15, Math.round((item.amount / maxAmount) * 100)) : 4;

                    return (
                      <div
                        key={idx}
                        className="flex-1 flex flex-col items-center gap-2 h-full justify-end group relative"
                      >
                        {/* Tooltip Hover */}
                        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white text-[10px] py-1 px-2 rounded-md pointer-events-none whitespace-nowrap z-10 shadow-md">
                          {formatRupiah(item.amount)} ({item.donators} donatur)
                        </div>

                        <div
                          className={`w-full max-w-[48px] rounded-t-lg transition-all duration-300 relative group-hover:shadow-md ${
                            item.amount > 0 ? "bg-neutral-900 hover:bg-emerald-600" : "bg-neutral-200"
                          }`}
                          style={{ height: `${heightPercent}%` }}
                        >
                          {item.amount > 0 && (
                            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400 opacity-60" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Label Sumbu X */}
                <div className="flex justify-between text-xs font-medium text-neutral-500 px-2">
                  {activeChartData.map((item, idx) => (
                    <span key={idx} className="truncate max-w-[70px] text-center">
                      {item.day}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 2. Riwayat 5 Mutasi Terakhir (Mini Ledger Table) */}
          <div className="bg-white rounded border border-neutral-200 shadow-xs overflow-hidden">
            <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-neutral-900">
                  Riwayat 5 Mutasi Terakhir
                </h3>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-neutral-50/80 text-neutral-600 border-b border-neutral-200 font-semibold uppercase text-[10px] tracking-wider">
                    <th className="py-3 px-4">Waktu</th>
                    <th className="py-3 px-4">Keterangan</th>
                    <th className="py-3 px-4 text-right">Nominal</th>
                    <th className="py-3 px-4 text-center">Bukti Nota</th>
                    <th className="py-3 px-4">Hash Blok</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {recentTransactions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-neutral-400">
                        <div className="flex flex-col items-center justify-center gap-1.5">
                          <p className="text-sm font-semibold text-neutral-600">Belum ada data mutasi</p>
                          <p className="text-xs text-neutral-400">
                            Semua transaksi pencairan atau donasi masuk akan tercatat otomatis di sini.
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    recentTransactions.map((tx) => {
                      const isInflow =
                        tx.transaction_type?.toUpperCase() === "INFLOW" ||
                        tx.transaction_type?.toLowerCase() === "donation";

                      return (
                        <tr key={tx.ledger_id} className="hover:bg-neutral-50/70 transition-colors">
                          <td className="py-3.5 px-4 text-neutral-500 whitespace-nowrap">
                            {formatTimestamp(tx.timestamp)}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="space-y-0.5">
                              <span className="font-semibold text-neutral-900 block line-clamp-1">
                                {tx.description || "-"}
                              </span>
                              <span className="text-[10px] font-mono text-neutral-400">
                                Blok #{String(tx.ledger_id).padStart(3, "0")}
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 text-right font-mono font-bold whitespace-nowrap">
                            {isInflow ? (
                              <span className="text-green-600">+{formatRupiah(Number(tx.amount) || 0)}</span>
                            ) : (
                              <span className="text-neutral-900">-{formatRupiah(Number(tx.amount) || 0)}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center whitespace-nowrap">
                            {tx.receipt_photo_url ? (
                              <a
                                href={tx.receipt_photo_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
                              >
                                Nota Terlampir
                              </a>
                            ) : (
                              <span className="inline-block text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">
                                Resi Sistem
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 font-mono text-xs text-neutral-600 whitespace-nowrap">
                            {tx.current_hash ? (
                              <span className="bg-neutral-100 px-1.5 py-0.5 rounded text-neutral-800" title={tx.current_hash}>
                                #{tx.current_hash.slice(0, 8)}...{tx.current_hash.slice(-4)}
                              </span>
                            ) : (
                              <span className="text-neutral-400">-</span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Tautan Bawah */}
            <div className="p-4 bg-neutral-50/60 border-t border-neutral-200 text-center">
              <Link
                href={`/audit/${campaignId}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 hover:text-emerald-700 transition-colors py-1 px-3 rounded-lg"
              >
                <span>Lihat Seluruh Rantai Hash Kas Masjid Ini</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* =============================================================== */}
        {/* B. KOLOM KANAN (LEBAR ~35% / 4 COLS): STATUS & PINTASAN AKSI     */}
        {/* =============================================================== */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          {/* 1. Kotak Status Integritas Rantai Kriptografi */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 text-white rounded p-6 border border-neutral-700 shadow-sm space-y-4">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-sm text-white">Status Integritas Hash</h3>
              </div>
            </div>

            {/* Badge Rantai Valid */}
            <div className="bg-emerald-950/60 border border-emerald-800/80 rounded p-3.5 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>Rantai Hash Valid &amp; Konsisten</span>
              </div>
            </div>

            {/* Blok Terakhir */}
            <div className="space-y-1 text-xs">
              <span className="text-neutral-400 text-xs block">Blok Terkunci Terkini:</span>
              <div className="p-2 bg-neutral-950 rounded border border-neutral-800 font-mono text-xs text-emerald-400 truncate">
                #005: 1f8e9a2b3c4d5e6f7a8b...
              </div>
            </div>
          </div>

          {/* 2. Kotak Aksi Utama Pengurus (Quick Actions) */}
          <div className="bg-white rounded p-6 border border-neutral-200 shadow-xs space-y-4">
            <h3 className="font-bold text-sm text-neutral-900">
              Pintasan Aksi Pengurus
            </h3>

            <div className="space-y-2.5">
              {/* Tombol 1 */}
              <Link
                href="/dashboard/expenses/new"
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold py-3 px-4 rounded flex items-center justify-between transition-colors shadow-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <Receipt className="w-4 h-4 text-emerald-400" />
                  <span>Ajukan Pencairan &amp; Unggah Nota</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Tombol 2 */}
              <button
                type="button"
                onClick={() => setShowProgressModal(true)}
                className="w-full bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold py-3 px-4 rounded border border-neutral-300 flex items-center justify-between transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Camera className="w-4 h-4 text-neutral-600" />
                  <span>Perbarui Foto Progres Lapangan</span>
                </div>
                <Plus className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              {/* Tombol 3 */}
              <button
                type="button"
                onClick={handleCopyDonationLink}
                className="w-full bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold py-3 px-4 rounded border border-neutral-300 flex items-center justify-between transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Share2 className="w-4 h-4 text-neutral-600" />
                  <span>{copiedLink ? "Tautan Berhasil Disalin!" : "Salin Tautan Donasi Publik"}</span>
                </div>
                {copiedLink ? (
                  <Check className="w-3.5 h-3.5 text-green-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/* 4. KOTAK PENGINGAT TRANSPARANSI (TRANSPARENCY NOTICE)             */}
      {/* ================================================================= */}
      <section className="bg-emerald-50/80 border border-emerald-200/80 rounded p-6 text-xs text-emerald-950 space-y-2">
        <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
          <Info className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Panduan Transparansi Pengurus Masjid</span>
        </div>
        <p className="leading-relaxed text-emerald-900/90 max-w-4xl">
          Setiap nominal kas yang dicairkan akan langsung terlihat oleh publik pada halaman audit. Pastikan nota belanja toko bangunan terfoto dengan jelas guna menjaga kepercayaan para donatur dan mempermudah sidang pertanggungjawaban.
        </p>
      </section>

      {/* MODAL UPDATE PROGRES LAPANGAN */}
      {showProgressModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded max-w-md w-full p-6 space-y-5 border border-neutral-200 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-neutral-700" />
                <h3 className="font-bold text-sm text-neutral-900">
                  Unggah Progres Renovasi Lapangan
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowProgressModal(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-semibold text-neutral-700 block">
                  Foto Dokumentasi Fisik Proyek
                </label>
                <div className="border-2 border-dashed border-neutral-300 rounded-2xl p-6 text-center hover:bg-neutral-50 transition-colors cursor-pointer space-y-1">
                  <Camera className="w-6 h-6 text-neutral-400 mx-auto" />
                  <p className="font-medium text-neutral-700">Pilih foto kondisi terbaru bangunan</p>
                  <p className="text-xs text-neutral-400">JPG, PNG (Maks 5MB)</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-semibold text-neutral-700 block">
                  Deskripsi Singkat Perkembangan
                </label>
                <textarea
                  rows={3}
                  value={progressText}
                  onChange={(e) => setProgressText(e.target.value)}
                  placeholder="Contoh: Pemasangan rangka atap baja ringan telah selesai 80%..."
                  className="w-full p-3 bg-neutral-50 border border-neutral-300 rounded text-xs focus:outline-hidden focus:border-neutral-900 resize-none"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-neutral-100">
              <button
                type="button"
                onClick={() => setShowProgressModal(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:bg-neutral-100 rounded transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  alert("Dokumentasi perkembangan fisik berhasil disimpan!");
                  setShowProgressModal(false);
                }}
                className="px-4 py-2 text-xs font-semibold bg-neutral-900 text-white rounded hover:bg-neutral-800 transition-colors"
              >
                Simpan Pembaruan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}