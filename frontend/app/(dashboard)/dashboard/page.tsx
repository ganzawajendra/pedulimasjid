import { getMe, getMyMosque } from "@/lib/data";
import DashboardView from "./dashboard-view";

export default async function DashboardPage() {
  const me = await getMe();
  const mosque = await getMyMosque();
  return <DashboardView me={me} mosque={mosque[0]} />;
}