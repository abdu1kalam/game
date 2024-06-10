import { Game } from "@/types/game";
import { client } from "./client";

export async function fetchGames(filter: string): Promise<Game[]> {
  let games: Game[];
  if (filter === "mostLiked") {
    games = await client.game.findMany({ orderBy: { NumberOfLikes: "desc" } });
  } else if (filter === "mostPlayed") {
    games = await client.game.findMany({ orderBy: { NumberOfPlays: "desc" } });
  } else if (filter) {
    games = await client.game.findMany({
      where: { Categories: { contains: filter } },
    });
  } else {
    games = await client.game.findMany({ orderBy: { NumberOfPlays: "desc" } }); // Default sorting
  }
  return games;
}
