type ServerStatsProps = {
  ram: string;
  cpu: string;
  disk: string;
};

export default function ServerStats({
  ram,
  cpu,
  disk,
}: ServerStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
        <p className="text-sm text-zinc-500">RAM</p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {ram}
        </h3>

        <div className="mt-4 h-2 rounded-full bg-zinc-800">
          <div className="h-2 w-[42%] rounded-full bg-cyan-400"></div>
        </div>

        <p className="mt-2 text-sm text-zinc-400">
          Wykorzystanie 42%
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
        <p className="text-sm text-zinc-500">CPU</p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {cpu}
        </h3>

        <div className="mt-4 h-2 rounded-full bg-zinc-800">
          <div className="h-2 w-[18%] rounded-full bg-green-400"></div>
        </div>

        <p className="mt-2 text-sm text-zinc-400">
          Wykorzystanie 18%
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
        <p className="text-sm text-zinc-500">Dysk</p>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {disk}
        </h3>

        <div className="mt-4 h-2 rounded-full bg-zinc-800">
          <div className="h-2 w-[28%] rounded-full bg-orange-400"></div>
        </div>

        <p className="mt-2 text-sm text-zinc-400">
          Wykorzystanie 28%
        </p>
      </div>
    </div>
  );
}