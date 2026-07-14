import Button from "@/components/ui/Button";
import GameStatus from "./GameStatus";

import type { Game } from "@/data/games";

type Props = {
  game: Game;
};

export default function GameRow({
  game,
}: Props) {
  return (
    <div className="grid grid-cols-[1fr_180px_140px] items-center border-b border-white/10 px-6 py-4">
      <div>
        <h3 className="font-semibold text-white">
          {game.name}
        </h3>

        <p className="text-sm text-zinc-400">
          {game.shortDescription}
        </p>
      </div>

      <GameStatus status={game.status} />

      <div className="text-right">
        <Button variant="secondary">
          Edytuj
        </Button>
      </div>
    </div>
  );
}