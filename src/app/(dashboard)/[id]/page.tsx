"use client";

import { useGameStore } from "@/store/game-store";
import { useEffect } from "react";

const FullPageIframe = () => {
  const { games } = useGameStore();

  useEffect(() => {
    console.log(games);
  }, [games]);

  return (
    <div className="fixed top-0 left-0 w-full h-full m-0 p-0 overflow-hidden">
      {games.map((game) => (
        <div key={game.id}>
          {typeof game.gameSource === "string" && (
            <iframe
              src={game.gameSource}
              className="absolute top-0 left-0 w-full h-full b-0"
              title="Full Page Iframe"
              allowFullScreen
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FullPageIframe;
