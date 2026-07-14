import { notFound } from "next/navigation";

import GameForm from "@/components/admin/games/GameForm";
import { getGameById } from "@/lib/api/games";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditGamePage({
  params,
}: Props) {
  const { id } = await params;

  const game = await getGameById(Number(id));

  if (!game) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Edytuj grę
        </h1>

        <p className="mt-2 text-zinc-400">
          {game.name}
        </p>
      </div>

      <GameForm
        game={game}
        mode="edit"
      />
    </div>
  );
}