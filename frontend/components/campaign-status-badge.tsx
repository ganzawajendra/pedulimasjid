export type CampaignStatus = "pending" | "active" | "rejected" | "funded";

const STATUS_CONFIG : Record<
    CampaignStatus,
    {label: string, badge: string, dot: string, pulse: boolean}
> = {
    pending: {
    label: "MENUNGGU VERIFIKASI",
    badge: "bg-yellow-50 text-yellow-800 border-yellow-200",
    dot: "bg-yellow-500",
    pulse: true,
  },
  active: {
    label: "KAMPANYE AKTIF",
    badge: "bg-green-50 text-green-800 border-green-200",
    dot: "bg-green-500",
    pulse: true,
  },
  rejected: {
    label: "KAMPANYE DITOLAK",
    badge: "bg-red-50 text-red-800 border-red-200",
    dot: "bg-red-500",
    pulse: false,
  },
  funded: {
    label: "DANA TERPENUHI",
    badge: "bg-blue-50 text-blue-800 border-blue-200",
    dot: "bg-blue-500",
    pulse: false,
  },
}

export default function CampaignStatusBadge({ status }: { status?: string }) {
  // Normalisasi status ke lowercase dan fallback jika tidak dikenal/kosong
  const normalized = status?.toLowerCase() as CampaignStatus;
  const cfg = STATUS_CONFIG[normalized] ?? {
    label: status ? status.toUpperCase() : "BELUM ADA KAMPANYE",
    badge: "bg-neutral-50 text-neutral-700 border-neutral-200",
    dot: "bg-neutral-400",
    pulse: false,
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border text-xs font-bold px-3 py-1 rounded-full ${cfg.badge}`}
    >
      <span className={`w-2 h-2 rounded-full ${cfg.dot} ${cfg.pulse ? "animate-pulse" : ""}`} />
      {cfg.label}
    </span>
  );
}