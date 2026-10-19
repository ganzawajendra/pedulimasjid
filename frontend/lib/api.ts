import "server-only"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const API = process.env.API_URL!
if (!API) throw new Error("API_URL is not defined")

export class ApiError extends Error {
    constructor(public status: number, public detail: unknown, message: string){
        super(message)
    }
}

function detailToMessage(detail: unknown): string{
    if(typeof detail === "string") return detail
    if(Array.isArray(detail)) return detail.map((d) => d?.msg).filter(Boolean).join(", ")
    return "Terjadi kesalahan, coba lagi."
}

type Opts = Omit<RequestInit, "body" | "headers"> & {
    json?: unknown
    form?: FormData
    urlencoded?: Record<string, string>
    auth?: boolean
}

export async function apiFetch<T = unknown>(path: string, opts: Opts = {}): Promise<T> {
  const { json, form, urlencoded, auth = true, ...init } = opts;
  const headers = new Headers();
  let body: BodyInit | undefined;

  if (json !== undefined) {
    headers.set("Content-Type", "application/json");
    body = JSON.stringify(json);
  } else if (form) {
    body = form; // jangan set Content-Type, boundary diisi otomatis
  } else if (urlencoded) {
    body = new URLSearchParams(urlencoded); // Content-Type otomatis
  }

  if (auth) {
    const token = (await cookies()).get("access_token")?.value;
    if (token) headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(`${API}/api/v1${path}`, { cache: "no-store", ...init, headers, body });

  // Token kedaluwarsa/palsu: Server Component tidak boleh menghapus cookie,
  // jadi arahkan ke route handler yang menghapusnya.
  if (res.status === 401 && auth) redirect("/api/auth/clear");

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new ApiError(res.status, data?.detail, detailToMessage(data?.detail));
  }
  return res.status === 204 ? (null as T) : ((await res.json()) as T);
}