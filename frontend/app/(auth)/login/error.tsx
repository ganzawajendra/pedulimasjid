"use client";

export default function LoginError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
        <p className="text-red-700">Terjadi kesalahan, coba lagi.</p>
        <button
          onClick={reset}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Coba Lagi
        </button>
      </div>
    </div>
  );
}
