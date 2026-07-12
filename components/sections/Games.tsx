import { games } from "@/data/games";
import GameCard from "@/components/ui/GameCard";

export default function Games() {
  return (
    <section id="games" className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">

          <h2 className="text-5xl font-black text-white">
            Wybierz swoją grę
          </h2>

          <p className="mt-4 text-lg text-zinc-400">
            Wybierz grę i uruchom swój serwer w mniej niż minutę.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {games.map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              price={game.price}
              image={game.image}
              description={game.description}
              features={game.features}
            />
          ))}

        </div>

      </div>
    </section>
  );
}