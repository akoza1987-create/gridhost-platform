import {
  CheckCircle2,
  AlertTriangle,
  Server,
  Users,
} from "lucide-react";

export default function SystemStatus() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Status systemu
      </h2>

      <div className="space-y-5">

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Server className="text-cyan-400" size={20} />
            <span className="text-white">
              Aktywne serwery
            </span>
          </div>

          <span className="font-bold text-green-400">
            132
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users className="text-cyan-400" size={20} />
            <span className="text-white">
              Klienci online
            </span>
          </div>

          <span className="font-bold text-green-400">
            28
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-400" size={20} />
            <span className="text-white">
              Status usług
            </span>
          </div>

          <span className="font-bold text-green-400">
            OK
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-yellow-400" size={20} />
            <span className="text-white">
              Alerty
            </span>
          </div>

          <span className="font-bold text-yellow-400">
            2
          </span>
        </div>

      </div>
    </div>
  );
}