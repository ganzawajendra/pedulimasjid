"use server";
import { redirect } from "next/navigation";
import { apiFetch, ApiError } from "@/lib/api";

export async function donateAction(campaignId: number, _p: { error: string } | null, formData: FormData) {
  let ref: number;
  try {
    const r = await apiFetch<{ ledger_id: number }>(`/campaigns/${campaignId}/donations`, {
      method: "POST",
      auth: false,
      json: {
        amount: Number(formData.get("amount")),
        donor_name: String(formData.get("donor_name") || "") || null,
      },
    });
    ref = r.ledger_id;
  } catch (e) {
    if (e instanceof ApiError) return { error: e.message };
    throw e;
  }
  redirect(`/campaigns/${campaignId}/donate/success?ref=${ref}`);
}