export default function ServerConsole() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black p-6">
      <div className="mb-4 border-b border-zinc-800 pb-3">
        <h2 className="font-bold text-white">
          Konsola serwera
        </h2>
      </div>

      <div className="space-y-1 font-mono text-sm text-green-400">
        <p>[12:01:22] Starting Minecraft server...</p>
        <p>[12:01:23] Loading world...</p>
        <p>[12:01:24] Preparing spawn area...</p>
        <p>[12:01:26] Done (3.215s)! For help, type "help"</p>

        <p className="mt-6 text-white">
          root@server:~$
          <span className="animate-pulse">▌</span>
        </p>
      </div>
    </div>
  );
}