import { apiFetch } from "@/lib/api";
import { Campaign } from "@/lib/data";

export async function getActiveCampaign(): Promise<Campaign[]> {
  try {
    const getCampaign = await apiFetch<Campaign[]>("/campaigns");

    if (!Array.isArray(getCampaign)) return [];

    const data = getCampaign.filter((c) => c.status === "active");

    return data;
  } catch (error) {
    console.error("Error fetching active campaigns:", error);
    return [];
  }
}