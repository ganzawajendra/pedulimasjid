import { getActiveCampaign } from "./actions";
import CampaignView from "./campaign-view";

export default async function CampaignPage() {
  const activeCampaigns = await getActiveCampaign();

  return <CampaignView activeCampaign={activeCampaigns} />;
}