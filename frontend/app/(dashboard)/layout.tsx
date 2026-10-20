import { getMe, getMyMosque } from "@/lib/data";
import DashboardShell from "@/components/dashboard-shell";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [me, mosque] = await Promise.all([getMe(), getMyMosque()])
  return <DashboardShell 
    full_name={me.full_name}
    mosque_name={mosque[0].mosque_name}
    mosque_city={mosque[0].city}
  >{children}</DashboardShell>;
}