import { getMyCampaigns, getMyTransactionLedger } from "@/lib/data"
import DetailCampaignMineView from "./detail-campaign-mine"

interface PageProps {
    params: Promise<{id: string}>
}

export default async function DetailCampaignMinePage({params}: PageProps) {
    const resolvedParams = await params;
    const [campaigns, transactionLedger] = await Promise.all([
        getMyCampaigns(),
        getMyTransactionLedger()
    ])
    const campaign = campaigns?.find((c) => String(c.proposal_id) === resolvedParams.id);
    return <DetailCampaignMineView
        campaign={campaign}
        transactionLedger={transactionLedger}
    />
}