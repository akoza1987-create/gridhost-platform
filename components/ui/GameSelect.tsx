"use client";

type Game = {
  slug: string;
  name: string;
};

type GameSelectProps = {
  games: Game[];
  value: string;
  onChange: (value: string) => void;
};

export default function GameSelect({
  games,
  value,
  onChange,
}: GameSelectProps) {
  return (
    <div className="space-y-3">

      <label className="block text-lg font-semibold text-white">
        🎮 Wybierz grę
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none transition focus:border-cyan-500"
      >
        {games.map((game) => (
          <option
            key={game.slug}
            value={game.slug}
          >
            {game.name}
          </option>
        ))}
      </select>

    </div>
  );
}
