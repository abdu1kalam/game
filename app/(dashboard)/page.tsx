"use client";

import { Infobar } from "@/components/infobar";
import { useState } from "react";
import InstallPopup from "./_components/pwa-modal";

export default async function Home() {
  // const initialGames = await getGameCards("mostPlayed");

  const [games, setGames] = useState("");

  return (
    <div className=" w-full py-1 pl-10 mb-8 ">
      <Infobar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {games.map((game) => (
          // <GameCard key={game.id} {...game} />
        ))} */}
      </div>
      <InstallPopup />
    </div>
  );
}
