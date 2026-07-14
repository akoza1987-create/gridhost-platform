type ServerHeaderProps = {
  name: string;
  status: "online" | "offline";
};

export default function ServerHeader({
  name,
  status,
}: ServerHeaderProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-black text-white">
          {name}
        </h1>

        <p className="mt-2 text-zinc-400">
          Panel zarządzania serwerem
        </p>
      </div>

      <div>
        <span
          className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold ${
            status === "online"
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {status === "online" ? "🟢 Online" : "🔴 Offline"}
        </span>
      </div>
    </div>
  );
}