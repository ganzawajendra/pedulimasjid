import { apiFetch } from "@/lib/api";
import { Campaign } from "@/lib/data";

export async function getActiveCampaign(): Promise<Campaign[]> {
  try {
    const data = await apiFetch<Campaign[]>("/campaigns");

    if (!Array.isArray(data)) return [];

    return data.filter((c) => c.status === "active");
  } catch (error) {
    console.error("[getActiveCampaign] Gagal mengambil kampanye aktif:", error);
    return [];
  }
}