"use server"
import { apiFetch } from "@/lib/api";

export async function getMyMosque() {
  try {
    const res = await apiFetch("/mosques/me");
    return {success: true, data: res};
  } catch (error) {
    return {success: false, error};
  }
}