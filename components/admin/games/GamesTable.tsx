import { getGames } from "@/lib/api/games";
import DataTable from "@/components/ui/DataTable";
import GameRow from "./GameRow";
import AddGameButton from "./AddGameButton";

export default async function GamesTable() {
  const games = await getGames();

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900">
      <div className="flex items-center justify-between border-b border-white/10 p-6">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Zarządzanie grami
          </h2>

          <p className="mt-1 text-zinc-400">
            Wszystkie gry dostępne w GridHost.
          </p>
        </div>

        <AddGameButton />
      </div>

      <div>
        {games.map((game) => (
          <GameRow
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </div>
  );
}