import "server-only"
import {cache} from "react"
import { apiFetch, ApiError } from "./api"

export type Me = {
    user_id: number
    full_name: string
    email: string
    phone_number: string
}

export type Mosque = {
    mosque_id: number
    mosque_name: string
    address: string
    city: string
    bank_account_number: string
}

export type Campaign = {
    proposal_id: number
    title: string
    target_amount: number
    collected_amount: number
    status: string
}

export const getMe = cache(() => apiFetch<Me>("/auth/me"))

export const getMyMosque = cache(async () => {
  try {
    return await apiFetch<Mosque[]>("/mosques/me");
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) return [];
    throw err;
  }
})

export const getMyCampaigns = cache(async () => {
  try {
    return await apiFetch<Campaign[]>("/campaigns/mine");
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) return [];
    throw err;
  }
})