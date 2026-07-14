export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between border-b border-white/10 bg-zinc-900 px-8 py-5">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Panel Administratora
        </h2>

        <p className="text-zinc-400">
          Zarządzanie platformą GridHost
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-cyan-500" />

        <div>
          <p className="font-semibold text-white">
            Administrator
          </p>

          <p className="text-sm text-zinc-500">
            admin@gridhost.pl
          </p>
        </div>
      </div>
    </header>
  );
}