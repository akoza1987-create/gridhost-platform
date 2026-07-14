type ServerActionsProps = {
  status: "online" | "offline";
};

export default function ServerActions({
  status,
}: ServerActionsProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Sterowanie serwerem
        </h2>

        <p className="mt-2 text-zinc-400">
          Aktualny status:
          <span
            className={`ml-2 font-semibold ${
              status === "online"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status === "online"
              ? "🟢 Online"
              : "🔴 Offline"}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <button className="rounded-xl bg-green-500 px-5 py-3 font-semibold text-black transition hover:bg-green-400">
          ▶ Uruchom
        </button>

        <button className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400">
          🔄 Restart
        </button>

        <button className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-400">
          ■ Zatrzymaj
        </button>
      </div>
    </div>
  );
}