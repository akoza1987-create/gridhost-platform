import Link from "next/link";
import { Cpu, HardDrive, MapPin, MemoryStick } from "lucide-react";

type ServerCardProps = {
  id: number;
  name: string;
  game: string;
  location: string;
  ram: string;
  cpu: string;
  disk: string;
  status: "online" | "offline";
};

export default function ServerCard({
  id,
  name,
  game,
  location,
  ram,
  cpu,
  disk,
  status,
}: ServerCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
      {/* Góra karty */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
            {name}
          </h3>

          <p className="text-zinc-400">
            {game}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm font-semibold ${
            status === "online"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status === "online" ? "🟢 Online" : "🔴 Offline"}
        </span>
      </div>

      {/* Lokalizacja */}
      <div className="mt-6 flex items-center gap-2 text-zinc-400">
        <MapPin size={18} />
        <span>{location}</span>
      </div>

      {/* Parametry */}
      <div className="mt-6 grid gap-3">
        <div className="flex items-center gap-2 text-zinc-300">
          <MemoryStick size={18} />
          <span>{ram}</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-300">
          <Cpu size={18} />
          <span>{cpu}</span>
        </div>

        <div className="flex items-center gap-2 text-zinc-300">
          <HardDrive size={18} />
          <span>{disk}</span>
        </div>
      </div>

      {/* Przycisk */}
      <div className="mt-6">
        <Link
          href={`/panel/serwery/${id}`}
          className="inline-flex rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400"
        >
          Zarządzaj
        </Link>
      </div>
    </div>
  );
}