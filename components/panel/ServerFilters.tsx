import { Search, Filter } from "lucide-react";

type ServerFiltersProps = {
  search: string;
  setSearch: (value: string) => void;

  status: string;
  setStatus: (value: string) => void;

  game: string;
  setGame: (value: string) => void;
};

export default function ServerFilters({
  search,
  setSearch,
  status,
  setStatus,
  game,
  setGame,
}: ServerFiltersProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="relative lg:col-span-2">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Szukaj serwera..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full rounded-xl border border-white/10 bg-zinc-950 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <select
          value={game}
          onChange={(e) => setGame(e.target.value)}
          className="h-11 rounded-xl border border-white/10 bg-zinc-950 px-4 text-white focus:border-cyan-500 focus:outline-none"
        >
         <option value="all">Wszystkie gry</option>
         <option value="Minecraft Java">Minecraft Java</option>
         <option value="FiveM">FiveM</option>
         <option value="CS2">CS2</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="h-11 rounded-xl border border-white/10 bg-zinc-950 px-4 text-white"
        >
          <option value="all">Wszystkie statusy</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
        <Filter size={16} />
        Filtry będą połączone z API w kolejnych sprintach.
      </div>
    </div>
  );
}