"use client";

import { useActionState, useState, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loginAction } from "@/app/(auth)/actions";

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  // Simpan email terakhir agar tidak hilang setelah React 19 mereset form
  const lastEmailRef = useRef("");

  return (
    <form
      action={(formData) => {
        lastEmailRef.current = String(formData.get("email") ?? "");
        formAction(formData);
      }}
      className="space-y-5"
    >
      {/* Email */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-xs font-semibold text-neutral-800 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          autoFocus
          defaultValue={lastEmailRef.current}
          placeholder="contoh: ahmad.fauzi@gmail.com"
          className="w-full px-3.5 py-2.5 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Password */}
      <div className="mb-6">
        <label htmlFor="password" className="block text-xs font-semibold text-neutral-800 mb-1">
          Kata Sandi <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
            autoComplete="current-password"
            placeholder="Masukkan kata sandi"
            className="w-full px-3.5 py-2.5 pr-10 bg-white border border-neutral-300 rounded-lg text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 cursor-pointer"
            aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Error */}
      {state?.error && (
        <p role="alert" className="rounded-lg bg-red-50 border border-red-200 px-3.5 py-2.5 text-sm text-red-600">
          {state.error}
        </p>
      )}

      {/* Submit */}
      <div className="pt-3">
        <button
          type="submit"
          disabled={pending}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
            pending
              ? "bg-neutral-200 text-neutral-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-neutral-800 cursor-pointer shadow-sm"
          }`}
        >
          {pending ? "Memproses..." : "Masuk"}
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col items-center gap-2 pt-2 text-sm">
        <Link href="/#daftar-takmir" className="text-neutral-700 hover:underline font-medium">
          Belum punya akun? Daftar sebagai Takmir
        </Link>
      </div>
    </form>
  );
}
