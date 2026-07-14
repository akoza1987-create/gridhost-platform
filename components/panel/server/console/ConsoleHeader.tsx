export default function ConsoleHeader() {
  return (
    <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
      <div>
        <h2 className="text-xl font-bold text-white">
          Konsola serwera
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Podgląd logów oraz wysyłanie komend.
        </p>
      </div>

      <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
        ● Połączono
      </span>
    </div>
  );
}