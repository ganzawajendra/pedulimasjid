import "server-only"
import {cache} from "react"
import { apiFetch } from "./api"

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
export const getMyMosque = cache(() => apiFetch<Mosque[]>("/mosques/me"))
export const getMyCampaigns = cache(() => apiFetch<Campaign[]>("/campaigns/mine"))