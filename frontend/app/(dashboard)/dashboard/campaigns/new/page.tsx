import { getMyCampaigns } from "@/lib/data";
import NewCampaignView from "./new-campaign-view";

export default async function NewCampaignPage() {
  const campaigns = await getMyCampaigns();

  const activeCampaign =
    campaigns.find((c) => {
      const s = c.status?.toLowerCase();
      return s === "active";
    }) ?? null;

  return <NewCampaignView activeCampaign={activeCampaign} />;
}