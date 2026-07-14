import ServerConsole from "./console/ServerConsole";
import ServerFiles from "./files/ServerFiles";

type ServerContentProps = {
  active: string;
};

export default function ServerContent({
  active,
}: ServerContentProps) {
  switch (active) {
    case "overview":
      return (
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8">
          <h2 className="text-2xl font-bold text-white">
            Overview
          </h2>

          <p className="mt-4 text-zinc-400">
            Tutaj będzie przegląd serwera.
          </p>
        </div>
      );

    case "console":
      return <ServerConsole />;
      return (
        <div className="rounded-2xl border border-white/10 bg-black p-8">
          <h2 className="mb-6 text-xl font-bold text-white">
            Konsola
          </h2>

          <div className="space-y-2 font-mono text-sm text-green-400">
            <p>[12:01:22] Starting server...</p>
            <p>[12:01:23] Loading world...</p>
            <p>[12:01:25] Done!</p>

            <p className="pt-6 text-white">
              root@server:~$
              <span className="animate-pulse">▌</span>
            </p>
          </div>
        </div>
      );

    case "files":
      return <ServerFiles />;
      return (
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8">
          <h2 className="text-2xl font-bold text-white">
            Files
          </h2>

          <p className="mt-4 text-zinc-400">
            Tutaj pojawi się menedżer plików.
          </p>
        </div>
      );

    case "backups":
      return (
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8">
          <h2 className="text-2xl font-bold text-white">
            Backups
          </h2>

          <p className="mt-4 text-zinc-400">
            Tutaj pojawią się backupy.
          </p>
        </div>
      );

    case "databases":
      return (
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8">
          <h2 className="text-2xl font-bold text-white">
            Databases
          </h2>

          <p className="mt-4 text-zinc-400">
            Zarządzanie bazami danych.
          </p>
        </div>
      );

    case "network":
      return (
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8">
          <h2 className="text-2xl font-bold text-white">
            Network
          </h2>

          <p className="mt-4 text-zinc-400">
            Konfiguracja sieci.
          </p>
        </div>
      );

    case "settings":
      return (
        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-8">
          <h2 className="text-2xl font-bold text-white">
            Settings
          </h2>

          <p className="mt-4 text-zinc-400">
            Ustawienia serwera.
          </p>
        </div>
      );

    default:
      return null;
  }
}