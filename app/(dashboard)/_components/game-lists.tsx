"use client";
import { fetchGames } from "@/lib/fetch-games";
import { useEffect, useState } from "react";
import { GameCard } from "./game-card";
import { Game } from "@/types/game";

interface Props {
  initialGames: Game;
}
export const GameList = ({ initialGames }: Props) => {
  const [filter, setFilter] = useState<string>("most_played");
  const [games, setGames] = useState<Game[]>([initialGames]);

  useEffect(() => {
    const fetchFilteredGames = async () => {
      const fetchedGames = await fetchGames(filter);
      setGames(fetchedGames);
    };

    fetchFilteredGames();
  }, [filter]);
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {games.map((game) => (
          <GameCard key={game.id} {...game} />
        ))}
      </div>
    </>
  );
};
