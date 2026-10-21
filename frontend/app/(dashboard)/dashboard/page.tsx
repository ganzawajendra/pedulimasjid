import { getMe, getMyMosque } from "@/lib/data";
import DashboardView from "./dashboard-view";

export default async function DashboardPage() {
  const [me, mosque ] = await Promise.all([getMe(), getMyMosque()]);
  return <DashboardView me={me} mosque={mosque?.[0]}/>;
}