import { getMe } from "@/lib/data";
import DashboardView from "./dashboard-view";

export default async function DashboardPage() {
  const me = await getMe();
  return <DashboardView me={me} />;
}