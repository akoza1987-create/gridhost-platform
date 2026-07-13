import {
  Server,
  Cpu,
  HardDrive,
  MapPin,
  ArrowRight,
} from "lucide-react";

type ServerCardProps = {
  name: string;
  game: string;
  location: string;
  ram: string;
  cpu: string;
  disk: string;
  status: "online" | "offline";
};

export default function ServerCard({
  name,
  game,
  location,
  ram,
  cpu,
  disk,
  status,
}: ServerCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">
            {name}
          </h3>

          <p className="mt-1 text-sm text-zinc-400">
            {game}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "online"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status === "online" ? "Online" : "Offline"}
        </span>
      </div>

      {/* Parametry */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-zinc-300">
          <MapPin size={18} className="text-cyan-400" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300">
          <Server size={18} className="text-cyan-400" />
          <span>{ram}</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300">
          <Cpu size={18} className="text-cyan-400" />
          <span>{cpu}</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300">
          <HardDrive size={18} className="text-cyan-400" />
          <span>{disk}</span>
        </div>
      </div>

      {/* Zużycie */}
      <div className="mt-6 space-y-4">
        <div>
          <div className="mb-1 flex justify-between text-sm text-zinc-400">
            <span>RAM</span>
            <span>42%</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-2 w-[42%] rounded-full bg-cyan-400" />
          </div>
        </div>
        <div>
          <div className="mb-1 flex justify-between text-sm text-zinc-400">
            <span>CPU</span>
            <span>18%</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-2 w-[18%] rounded-full bg-green-400" />
          </div>
        </div>
      </div>

      {/* Przycisk */}
      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-black transition-colors hover:bg-cyan-400">
        Zarządzaj
        <ArrowRight size={18} />
      </button>
    </div>
  );
}