import { apiFetch } from "@/lib/api";
import DashboardShell from "@/components/dashboard-shell";

type Me = { user_id: number; full_name: string; email: string };

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await apiFetch<Me>("/auth/me");
  return <DashboardShell full_name={me.full_name}>{children}</DashboardShell>;
}