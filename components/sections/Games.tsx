import GameCard from "@/components/ui/GameCard";

const games = [
  {
    title: "Minecraft",
    price: "od 9,99 zł",
    description: "Vanilla, Forge, Fabric, Paper, Spigot.",
    color: "#16a34a",
  },
  {
    title: "FiveM",
    price: "od 19,99 zł",
    description: "Stabilny hosting GTA V RP.",
    color: "#f97316",
  },
  {
    title: "CS2",
    price: "od 29,99 zł",
    description: "Niski ping i wysoka wydajność.",
    color: "#2563eb",
  },
  {
    title: "Rust",
    price: "od 39,99 zł",
    description: "Gotowy serwer w kilka chwil.",
    color: "#b45309",
  },
];

export default function Games() {
  return (
    <section id="games" className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-black">
            Wybierz swoją grę
          </h2>

          <p className="mt-6 text-zinc-400">
            Zamów serwer w mniej niż minutę.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}

        </div>

      </div>
    </section>
  );
}