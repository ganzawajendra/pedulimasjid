import { notFound } from "next/navigation";
import CampaignDetailView from "./campaign-detail-view";
import { getCampaignsById } from "@/lib/data";

export default async function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const campaign = await getCampaignsById(resolvedParams.id);
    if (!campaign) return notFound()
    return <CampaignDetailView params={resolvedParams} campaign={campaign}/>
}