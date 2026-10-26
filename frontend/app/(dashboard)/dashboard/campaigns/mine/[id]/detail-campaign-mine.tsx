"use client"
import { Campaign, Me, Mosque, TransactionLedger } from "@/lib/data";
import { ArrowRight, BadgeCheck, Building2, Calendar, CheckCircle2, Cpu, Heart, Link, MapPin, Receipt, ShieldCheck, TrendingDown, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function DetailCampaignMineView({
    me,
    mosque,
    campaign,
    transactionLedger = [],
} : {
    me: Me,
    campaign?: Campaign,
    mosque?: Mosque,
    transactionLedger?: TransactionLedger[]}) {
  // Kalkulasi progres donasi
  const collectedAmount = campaign?.collected_amount ?? 0;
  const targetAmount = campaign?.target_amount ?? 0;
  const percentage = targetAmount > 0 ? Math.min(100, Math.round((collectedAmount / targetAmount) * 100)) : 0;
  const campaignId = campaign?.proposal_id ?? 0;

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

  return (
    <div>
      <div className="space-y-8 max-w-7xl mx-auto">
      {/* 2 Kolom (~65% kiri & ~35% kanan) */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* ======================================================== */}
        {/* KOLOM KIRI (~65% Width - Sticky Panel) */}
        {/* ======================================================== */}
        <div className="w-full lg:w-[65%] space-y-8">
          {/* Header Kampanye & Tag Lokasi */}
          <div className="bg-white rounded p-6 sm:p-8 border border-neutral-200 space-y-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
              {campaign?.title ?? "Judul Kampanye"}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Berakhir {formatDate(campaign?.end_date)}</span>
              </div>
              <span className="text-neutral-300">•</span>
              <span className="bg-neutral-100 border border-neutral-200 text-neutral-700 px-2 py-0.5 rounded font-mono text-[11px]">
                ID: PM-{campaignId}
              </span>
            </div>
            <div>
              <p className="text-sm text-neutral-500">{campaign?.description}</p>
            </div>
          </div>

          {/* B. Media Showcase (16:9 Aspect Ratio) */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-900 shadow-sm">
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

          {/* C. Card Spesial: Verifikasi AI (Computer Vision) */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-6 border border-neutral-700 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-700/80 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-green-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    Laporan Verifikasi Computer Vision
                  </h3>
                  <p className="text-[11px] text-neutral-400">
                    Otomasi Penilaian Citra Bangunan Berbasis Deep Learning
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 border border-green-500/30 text-xs font-semibold px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Terverifikasi: Rusak Berat
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <span className="text-[11px] text-neutral-400 block mb-1">
                  Tingkat Keyakinan Prediksi
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">94%</span>
                  <span className="text-xs text-green-400 font-medium">
                    Akurasi Deteksi Visual
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Model mengidentifikasi kerusakan struktural mayor pada area
                  plafon & atap.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <span className="text-[11px] text-neutral-400 block mb-1">
                  Model AI Pengklasifikasi
                </span>
                <span className="text-sm font-semibold text-white block">
                  MobileNetV2 Structural Damage Classifier
                </span>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Terlatih untuk mengeliminasi manipulasi proposal fisik fiktif.
                </p>
              </div>
            </div>
          </div>

          {/* D. Narasi & Rincian Kebutuhan */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">
                Urgensi Perbaikan & Cerita Masjid
              </h2>
              <div className="text-neutral-700 text-sm leading-relaxed">
                <p>{campaign?.description || "Tidak ada deskripsi untuk kampanye ini."}</p>
              </div>
            </div>

            <hr className="border-neutral-200" />

            <div>
              <h3 className="text-base font-bold text-neutral-900 mb-3">
                Rencana Penggunaan Material & Anggaran
              </h3>
              <div className="border border-neutral-200 rounded-xl overflow-hidden divide-y divide-neutral-200 text-sm">
                <div className="flex justify-between items-center p-3.5 bg-neutral-50/50">
                  <span className="font-medium text-neutral-800">
                    Pembelian Genteng Metal Pasir & Rangka Baja
                  </span>
                  <span className="font-semibold text-neutral-900">
                    Rp 18.000.000
                  </span>
                </div>
                <div className="flex justify-between items-center p-3.5 bg-white">
                  <span className="font-medium text-neutral-800">
                    Semen, Pasir Pasang & Waterproofing Dinding
                  </span>
                  <span className="font-semibold text-neutral-900">
                    Rp 9.500.000
                  </span>
                </div>
                <div className="flex justify-between items-center p-3.5 bg-neutral-50/50">
                  <span className="font-medium text-neutral-800">
                    Upah Tukang Bangunan & Tenaga Ahli (2 Minggu)
                  </span>
                  <span className="font-semibold text-neutral-900">
                    Rp 7.500.000
                  </span>
                </div>
                <div className="flex justify-between items-center p-3.5 bg-neutral-100 font-bold text-neutral-900">
                  <span>Total Target Kebutuhan</span>
                  <span className="text-base">Rp 35.000.000</span>
                </div>
              </div>
            </div>
          </div>

          {/* E. Cuplikan Buku Kas Terbuka (Cryptographic Ledger) */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs space-y-4">
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
          <div className="bg-white rounded p-6 sm:p-8 border border-neutral-200 space-y-6">
            {/* A. Ringkasan Angka Donasi */}
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold block mb-1">
                  Donasi Terkumpul
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-neutral-900 tracking-tight">
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

            {/* B. Tombol Aksi Utama */}
            <div className="space-y-2.5 pt-2 border-t border-neutral-200">
              <Link
                href={`/campaigns/${campaignId}/donate`}
                className="w-full bg-black text-white text-sm font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donasi Sekarang</span>
              </Link>

              {/* <button
                onClick={handleShare}
                className="w-full border border-neutral-300 bg-white text-neutral-800 text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-green-600">Tautan Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-neutral-600" />
                    <span>Bagikan Kampanye</span>
                  </>
                )}
              </button> */}
            </div>
          </div>

          {/* C. Profil Takmir & Badge Kepercayaan */}
          <div className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 font-bold text-base">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-semibold text-sm text-neutral-900 truncate">
                    {me?.full_name ?? "-"}
                  </h4>
                  <BadgeCheck className="w-4 h-4 text-blue-600 shrink-0" />
                </div>
                <p className="text-xs text-neutral-500">
                  Pengurus {mosque?.mosque_name ?? "Masjid"}
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 rounded-xl p-3 border border-neutral-200/80 space-y-1.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span className="text-neutral-500">Masjid:</span>
                <span className="font-medium text-neutral-800">
                  {mosque?.mosque_name ?? "-"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Kota:</span>
                <span className="font-medium text-neutral-800">
                  {mosque?.city ?? "-"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Status Akun:</span>
                <span className="text-green-700 font-medium">Terverifikasi</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-neutral-600 bg-blue-50/50 border border-blue-100 rounded-xl p-3">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p className="leading-tight">
                <strong>Akun takmir terverifikasi identitas.</strong> KTP pengurus
                dan surat tugas resmi takmir telah dicocokkan dengan basis data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}