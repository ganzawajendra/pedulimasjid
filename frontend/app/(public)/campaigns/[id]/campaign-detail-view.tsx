"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Calendar,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Share2,
  Heart,
  ArrowRight,
  Receipt,
  TrendingDown,
  TrendingUp,
  Building2,
  BadgeCheck,
  Copy,
  Check,
  ChevronRight,
} from "lucide-react";
import { Campaign } from "@/lib/data";


export default function CampaignDetailView({ params, campaign }: { params: { id: string }, campaign: Campaign }) {
  const campaignId = params.id;

  const [copied, setCopied] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    "/bg-masjid.jpg",
    "/bg-masjid.jpeg",
    "/bg-masjid.jpg",
  ];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const daysLeft = campaign?.end_date ? Math.max(0, Math.ceil((new Date(campaign.end_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))) : 0;
  const collectedAmount = campaign?.collected_amount || 0;
  const targetAmount = campaign?.target_amount || 0;
  const percentage = Math.min(
    100,
    Math.round((collectedAmount / targetAmount) * 100)
  );

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "-";
    return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(dateStr));
  };

  return (
    <div className="pt-24 px-6 md:px-12 lg:px-30 pb-20 min-h-screen">
      {/* Breadcrumb sederhana */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <Link href="/" className="hover:text-neutral-900 transition-colors">
          Beranda
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link
          href="/campaigns"
          className="hover:text-neutral-900 transition-colors"
        >
          Kampanye
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-neutral-900 font-medium">
          {campaign?.title}
        </span>
      </nav>

      {/* 2 Kolom (~65% kiri & ~35% kanan) */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* KOLOM KIRI (~65% Width) */}
        <div className="w-full lg:w-[65%] space-y-8">
          {/* A. Header Kampanye & Tag Lokasi */}
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-tight">
              {campaign?.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
              <div className="flex items-center gap-1.5 font-medium text-neutral-800">
                <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>{campaign?.mosque?.address}, {campaign?.mosque?.city}</span>
              </div>
              <span className="text-neutral-400">•</span>
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Diajukan {formatDate(campaign?.created_at)}</span>
              </div>
            </div>
          </div>

          {/* B. Media Showcase (16:9 Aspect Ratio) */}
          <div className="space-y-3">
            <div className="relative aspect-video w-full rounded overflow-hidden border border-neutral-200 bg-neutral-900 shadow-sm">
              <Image
                src={campaign?.damage_photo_url}
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
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded p-6 border border-neutral-700 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-700/80 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-green-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    Laporan Verifikasi Computer Vision
                  </h3>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="bg-white/5 border border-white/10 rounded p-3.5">
                <span className="text-[11px] uppercase font-semibold text-neutral-400 block mb-1">
                  Tingkat Keyakinan Prediksi
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-white">{campaign?.cnn_confidence}%</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Model mengidentifikasi kerusakan struktural mayor pada area
                  plafon & atap.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                <span className="text-[11px] uppercase font-semibold text-neutral-400 block mb-1">
                  Model AI Pengklasifikasi
                </span>
                <span className="text-2xl font-bold text-white">
                  MobileNetV2
                </span>
                <p className="text-[11px] text-neutral-400 mt-1">
                  Terlatih untuk mengeliminasi manipulasi proposal fisik fiktif.
                </p>
              </div>
            </div>
          </div>

          {/* D. Narasi & Rincian Kebutuhan */}
          <div className="bg-white rounded p-6 border border-neutral-200 shadow-xs space-y-6">
            <div>
              <h2 className="text-lg font-bold text-neutral-900 mb-3">
                Deskripsi dan Alasan Pengajuan
              </h2>
              <div className="text-neutral-700 text-sm leading-relaxed space-y-3">
                <p>
                  {campaign?.description}
                </p>
              </div>
            </div>
          </div>

          {/* E. Cuplikan Buku Kas Terbuka (Cryptographic Ledger) */}
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
              {/* Item Transaksi Masuk */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50/60 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      Donasi Masuk (#TX-8821)
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      20 Mei 2024 • Donatur Hamba Allah
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-green-600 text-sm">
                  +Rp 500.000
                </span>
              </div>

              {/* Item Transaksi Keluar */}
              <div className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-neutral-50/60 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-red-100 text-red-700 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">
                      Belanja Awal Semen & Terpal Penutup
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      18 Mei 2024 • Nota Terlampir (#BK-003)
                    </p>
                  </div>
                </div>
                <span className="font-semibold text-neutral-900 text-sm">
                  -Rp 1.250.000
                </span>
              </div>
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
        {/* 2. KOLOM KANAN (~35% Width - Sticky Panel) */}
        {/* ======================================================== */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-24 space-y-6 self-start">
          {/* A & B. Panel Donasi & Aksi Utama */}
          <div className="bg-white rounded p-6 border border-neutral-300 shadow-sm space-y-6">
            {/* A. Ringkasan Angka Donasi */}
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase font-semibold tracking-wider text-neutral-500">
                  Donasi Terkumpul
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-neutral-900 tracking-tight">
                    {formatRupiah(campaign?.collected_amount || 0)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-neutral-500 mt-1">
                  <span>
                    dari target <strong>{formatRupiah(campaign?.target_amount || 0)}</strong>
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
                  <strong>142(contoh)</strong> Donatur
                </span>
                <span>
                  {daysLeft > 0 ? `Sisa ${daysLeft} hari lagi`: "Kampanye telah berakhir"}
                </span>
              </div>
            </div>

            {/* B. Tombol Aksi Utama */}
            <div className="space-y-2.5 pt-2 border-t border-neutral-200">
              <Link
                href={`/campaigns/${campaignId}/donate`}
                className="w-full bg-black text-white text-sm font-semibold py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors shadow-xs"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donasi Sekarang</span>
              </Link>

              <button
                onClick={handleShare}
                className="w-full border border-neutral-300 bg-white text-neutral-800 text-sm font-semibold py-2.5 px-4 rounded flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors"
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
              </button>
            </div>
          </div>

          {/* C. Profil Takmir & Badge Kepercayaan */}
          <div className="bg-white rounded p-5 border border-neutral-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 font-bold text-base">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-semibold text-sm text-neutral-900 truncate">
                    {campaign.mosque?.takmir?.full_name}
                  </h4>
                  <BadgeCheck className="w-4 h-4 text-blue-600 shrink-0" />
                </div>
                <p className="text-xs text-neutral-500">
                  Ketua Takmir {campaign.mosque?.mosque_name}
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 rounded p-3 border border-neutral-200/80 space-y-1.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span className="text-neutral-500">Email:</span>
                <span className="text-neutral-700 font-medium">{campaign.mosque?.takmir?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">No HP:</span>
                <span className="text-neutral-700 font-medium">{campaign.mosque?.takmir?.phone_number}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}