import MosqueMineView from "./mosque-mine";
import { getMe, getMyMosque, getMyCampaigns, getAllMyCampaigns } from "@/lib/data";

export default async function MosqueMePage() {
  const [me, mosques, campaigns, allCampaigns] = await Promise.all([
    getMe(),
    getMyMosque(),
    getMyCampaigns(),
    getAllMyCampaigns(),
  ]);

  const mosque = mosques.length > 0 ? mosques[0] : null;

  return <MosqueMineView user={me} mosque={mosque} campaigns={campaigns} allCampaigns={allCampaigns}/>;
}