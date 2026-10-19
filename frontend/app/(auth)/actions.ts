"use server";
import { redirect } from "next/navigation";
import { apiFetch, ApiError } from "@/lib/api";
import { setSession, clearSession } from "@/lib/session";

type Result = { ok: false; error: string; accountCreated?: boolean };
type RegisterInput = {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
  mosque_name: string;
  city: string;
  address: string;
  bank_account_number: string;
}
type RegisterResult = | {ok: true} | {ok: false, error: string, status?: number, accountCreated?: boolean}

async function loginRequest(email: string, password: string) {
  const data = await apiFetch<{ access_token: string }>("/auth/login", {
    method: "POST",
    auth: false,
    urlencoded: { username: email, password }, // OAuth2PasswordRequestForm
  });
  await setSession(data.access_token);
}

export async function loginAction(_prev: Result | null, formData: FormData): Promise<Result> {
  try {
    await loginRequest(String(formData.get("email")), String(formData.get("password")));
  } catch (e) {
    if (e instanceof ApiError) return { ok: false, error: e.message };
    throw e; // jangan telan error lain (termasuk redirect)
  }
  redirect("/dashboard");
}

export async function registerTakmirAction(
  data: RegisterInput,
  skipRegister = false // true saat "coba lagi" setelah akun sudah terbuat
): Promise<RegisterResult> {
  let accountCreated = skipRegister;
  try {
    if (!skipRegister) {
      await apiFetch("/auth/register", {
        method: "POST",
        auth: false,
        json: {
          full_name: data.full_name,
          phone_number: data.phone_number,
          email: data.email,
          password: data.password,
        },
      });
      accountCreated = true;
    }

    await loginRequest(data.email, data.password);

    await apiFetch("/mosques", {
      method: "POST",
      json: {
        mosque_name: data.mosque_name,
        city: data.city,
        address: data.address,
        bank_account_number: data.bank_account_number,
      },
    });
  } catch (e) {
    if (e instanceof ApiError) return { ok: false, error: e.message, status: e.status, accountCreated };
    throw e;
  }
  return {ok: true};
}

export async function logoutAction() {
  await clearSession();
  redirect("/login");
}