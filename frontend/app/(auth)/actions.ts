"use server";
import { redirect } from "next/navigation";
import { apiFetch, ApiError } from "@/lib/api";
import { setSession, clearSession } from "@/lib/session";

type Result = { ok: false; error: string; accountCreated?: boolean };

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
  data: {
    fullName: string; phone: string; email: string; password: string;
    mosqueName: string; city: string; address: string; accountNumber: string;
  },
  skipRegister = false // true saat "coba lagi" setelah akun sudah terbuat
): Promise<Result> {
  let accountCreated = skipRegister;
  try {
    if (!skipRegister) {
      await apiFetch("/auth/register", {
        method: "POST",
        auth: false,
        json: {
          full_name: data.fullName,
          phone_number: data.phone,
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
        mosque_name: data.mosqueName,
        city: data.city,
        address: data.address,
        bank_account_number: data.accountNumber,
      },
    });
  } catch (e) {
    if (e instanceof ApiError) return { ok: false, error: e.message, accountCreated };
    throw e;
  }
  redirect("/dashboard");
}

export async function logoutAction() {
  await clearSession();
  redirect("/login");
}