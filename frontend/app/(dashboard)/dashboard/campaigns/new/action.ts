"use server"
import { apiFetch } from "@/lib/api"

type CampaignInput = {
    title: string,
    description: string,
    target_amount: number,
    collected_amount: number,
    damage_photo_url: string,
    end_date: string,
    cnn_label: string,
    cnn_confidence: number,
    status: string
}

type CampaignResult = | {ok: true} | {ok: false, error: string}

export async function createCampaignAction(
    data: CampaignInput
): Promise<CampaignResult>{
    try {
        await apiFetch("/campaigns", {
            method: "POST",
            json: data,
        })
        return {ok: true}
    } catch (error) {
        return {ok: false, error: String(error)}
    }
}