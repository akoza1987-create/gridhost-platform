import { games } from "@/data/games";
import type { Game } from "@/data/games";

export async function getGames(): Promise<Game[]> {
  return games;
}

export async function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}

export async function getGameById(id: number) {
  return games.find((game) => game.id === id);
}