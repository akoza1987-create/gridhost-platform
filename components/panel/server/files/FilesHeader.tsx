export default function FilesHeader() {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-4">
      <div>
        <h2 className="text-2xl font-bold text-white">
          Menedżer plików
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Zarządzaj plikami swojego serwera.
        </p>
      </div>

      <div className="rounded-lg bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
        📁 /
      </div>
    </div>
  );
}