import { getMe } from "@/lib/data";
import DashboardShell from "@/components/dashboard-shell";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const me = await getMe();
  return <DashboardShell full_name={me.full_name}>{children}</DashboardShell>;
}