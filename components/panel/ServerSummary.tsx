type ServerSummaryProps = {
  total: number;
  online: number;
  offline: number;
};

export default function ServerSummary({
  total,
  online,
  offline,
}: ServerSummaryProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm">
      <span className="rounded-full bg-zinc-800 px-3 py-1 text-white">
        {total} serwery
      </span>

      <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
        🟢 {online} Online
      </span>

      <span className="rounded-full bg-red-500/20 px-3 py-1 text-red-400">
        🔴 {offline} Offline
      </span>
    </div>
  );
}