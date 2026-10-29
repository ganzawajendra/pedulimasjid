import CampaignStatusBadge from "./campaign-status-badge"

interface HistoryCampaignCard{
    proposal_id: string | Number
    title: string
    description: string
    target_amount: string | Number
    collected_amount: string | Number
    cnn_confidence: string | Number
    status: string
}

export default function HistoryCampaignCardMosqueMinePage({ 
    proposal_id, 
    title, 
    description, 
    target_amount, 
    collected_amount, 
    cnn_confidence, 
    status 
}: HistoryCampaignCard) {

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

    return (
        <div className="grid grid-cols-4 border border-neutral-200 rounded shadow-xs p-3 gap-4">
              <div className="col-span-2">
                <h2 className="text-lg font-semibold text-neutral-900 tracking-tight line-clamp-1">{title}</h2>
                <p className="text-sm text-neutral-500 line-clamp-2">{description}</p>
              </div>
              <div className="col-span-2 flex justify-between items-center">
                <div className="flex items-end flex-col">
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Target Donasi</span>
                  <p className="font-medium">{formatRupiah(Number(target_amount))}</p>
                </div>
                <div className="flex items-end flex-col">
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Donasi Terkumpul</span>
                  <p className="font-medium">{formatRupiah(Number(collected_amount))}</p>
                </div>
                <div className="text-end">
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">Tingkat Akurasi</span>
                  <p className="font-medium">{cnn_confidence}%</p>
                </div>
                <CampaignStatusBadge status={status as string}/>
              </div>
            </div>
    )
}