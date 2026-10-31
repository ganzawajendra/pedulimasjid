import "server-only"
import {cache} from "react"
import { apiFetch, ApiError } from "./api"

export type Me = {
  user_id: number;
  full_name: string;
  email: string;
  role: string;
  phone_number: string;
};

export interface MosqueSimple {
  mosque_id: number;
  mosque_name: string;
  city: string;
  address: string;
}

export interface Mosque extends MosqueSimple {
  bank_account_number: string;
  created_at: string;
  takmir?: Me;
}

export type Campaign = {
  proposal_id: number;
  title: string;
  description: string;
  target_amount: number;
  end_date: string;
  cnn_confidence: number;
  collected_amount: number;
  status: string;
  created_at: string;
  mosque?: Mosque;
  damage_photo_url?: string;
};

export type TransactionLedger = {
  ledger_id: number;
  transaction_type: string;
  amount: number;
  description: string;
  receipt_photo_url: string;
  receipt_hash: string;
  previous_hash: string;
  current_hash: string;
  timestamp: string;
};

export const getMe = cache(() => apiFetch<Me>("/auth/me"))

export const getMyMosque = cache(async (): Promise<Mosque[]> => {
  try {
    const res = await apiFetch<Mosque[]>("/mosques/me");
    return Array.isArray(res) ? res : [];
  } catch (err) {
    console.warn("[getMyMosque] Tidak ada masjid / error:", err);
    return [];
  }
})

export const getMyCampaigns = cache(async (): Promise<Campaign[]> => {
  try {
    const res = await apiFetch<Campaign[]>("/campaigns/mine");
    return Array.isArray(res) ? res : [];
  } catch (err) {
    console.warn("[getMyCampaigns] Tidak ada campaign / error:", err);
    return [];
  }
})

export const getMyTransactionLedger = cache(async (): Promise<TransactionLedger[]> => {
  try {
    const res = await apiFetch<TransactionLedger[]>("/transactions/ledger");
    return Array.isArray(res) ? res : [];
  } catch (err) {
    console.warn("[getMyTransactionLedger] Tidak ada transaksi / error:", err);
    return [];
  }
})

export async function getCampaignsById(id: string): Promise<Campaign | null> {
  try {
    const res = await apiFetch<Campaign>(`/campaigns/${id}`);
    
    return res || null;
  } catch (err) {
    console.warn("[getCampaignsById] Tidak ada campaign / error:", err);
    return null;
  }
}