"use server"
import { apiFetch } from "@/lib/api";

export async function endCampaignAction(proposal_id: number){
    try {
        const res = await apiFetch(`/campaigns/${proposal_id}/end`, {
            method: "PATCH"
        })
        return {success: true, data: res}
    } catch (error: any) {
        return {success: false, error: error.message}
    }
}