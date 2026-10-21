import { getMe, getMyMosque, getMyCampaigns, getMyTransactionLedger } from "@/lib/data";
import DashboardView from "./dashboard-view";

export default async function DashboardPage() {
  const [me, mosques, campaigns, transactionLedger] = await Promise.all([
    getMe(),
    getMyMosque(),
    getMyCampaigns(),
    getMyTransactionLedger(),
  ]);
  return <DashboardView me={me} mosque={mosques?.[0]} campaign={campaigns?.[0]} transactionLedger={transactionLedger} />;
}