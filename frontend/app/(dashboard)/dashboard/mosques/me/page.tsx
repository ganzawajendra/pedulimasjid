import MosqueMineView from "./mosque-mine";
import { getMe, getMyMosque, getMyCampaigns } from "@/lib/data";

export default async function MosqueMePage() {
  const [me, mosques, campaigns] = await Promise.all([
    getMe(),
    getMyMosque(),
    getMyCampaigns(),
  ]);

  const mosque = mosques.length > 0 ? mosques[0] : null;

  return <MosqueMineView user={me} mosque={mosque} campaigns={campaigns} />;
}