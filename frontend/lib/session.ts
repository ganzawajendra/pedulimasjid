import "server-only";
import { cookies } from "next/headers";

export async function setSession(token: string) {
  (await cookies()).set("access_token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60, // samakan dengan ACCESS_TOKEN_EXPIRE_MINUTES
  });
}

export async function clearSession() {
  (await cookies()).delete("access_token");
}