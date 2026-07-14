import GameForm from "@/components/admin/games/GameForm";

export default function NewGamePage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Dodaj nową grę
        </h1>

        <p className="mt-2 text-zinc-400">
          Utwórz nową ofertę hostingu.
        </p>
      </div>

      <GameForm mode="create" />

    </div>
  );
}