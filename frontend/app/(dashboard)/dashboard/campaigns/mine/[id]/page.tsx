import { getMe, getMyCampaigns, getMyMosque, getMyTransactionLedger } from "@/lib/data"
import DetailCampaignMineView from "./detail-campaign-mine"

interface PageProps {
    params: Promise<{id: string}>
}

export default async function DetailCampaignMinePage({params}: PageProps) {
    const resolvedParams = await params;
    const [me, mosque, campaigns, transactionLedger] = await Promise.all([
        getMe(),
        getMyMosque(),
        getMyCampaigns(),
        getMyTransactionLedger()
    ])
    const campaign = campaigns?.find((c) => String(c.proposal_id) === resolvedParams.id);
    return <DetailCampaignMineView
        me={me}
        mosque={mosque?.[0]}
        campaign={campaign}
        transactionLedger={transactionLedger}
    />
}