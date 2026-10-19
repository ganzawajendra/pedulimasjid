import LoginForm from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900">
            Masuk sebagai Takmir
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Kelola kampanye penggalangan dana masjid Anda
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <LoginForm />
        </div>
        <div className="text-center">
          <p className="text-md font-semibold text-neutral-500">
            Donatur tidak perlu login untuk berdonasi
          </p>
        </div>
      </div>
    </div>
  );
}