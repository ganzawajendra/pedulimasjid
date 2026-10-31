import { apiFetch } from "@/lib/api";
import { Campaign } from "@/lib/data";

export async function getActiveCampaign(): Promise<Campaign[]> {
  try {
    const data = await apiFetch<Campaign[]>("/campaigns");

    if (!Array.isArray(data)) return [];

    const today = new Date();
    today.setHours(0,0,0,0)

    return data.filter((c) => {
      const isStatusActive = c.status === "active"
      const endDate = c.end_date ? new Date(c.end_date) : null
      const isNotExpired = endDate ? endDate >= today : true

      return isStatusActive && isNotExpired;
    });
  } catch (error) {
    console.error("[getActiveCampaign] Gagal mengambil kampanye aktif:", error);
    return [];
  }
}