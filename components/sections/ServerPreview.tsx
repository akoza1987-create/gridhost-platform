export default function ServerPreview() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">

      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">
          GridHost Node #01
        </h3>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
          ONLINE
        </span>
      </div>

      <div className="space-y-5">

        <Stat label="CPU" value="12%" />

        <Stat label="RAM" value="41%" />

        <Stat label="SSD" value="86 GB / 200 GB" />

        <Stat label="Sieć" value="1 Gbps" />

      </div>

    </div>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">

        <span className="text-zinc-400">
          {label}
        </span>

        <span className="font-semibold text-white">
          {value}
        </span>

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

        <div
          className="h-full rounded-full bg-cyan-400"
          style={{ width: value }}
        />

      </div>

    </div>
  );
}