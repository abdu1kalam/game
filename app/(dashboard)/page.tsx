"use client";

import { Infobar } from "@/components/infobar";
import { useEffect, useState } from "react";
import InstallPopup from "./_components/pwa-modal";

import { Workbox } from "workbox-window";

export default async function Home() {
  // const initialGames = await getGameCards("mostPlayed");

  const [games, setGames] = useState("");
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    if ("serviceWorker" in navigator) {
      const wb = new Workbox("/sw.js");
      wb.register();
    }
    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <div className=" w-full py-1 pl-10 mb-8 ">
      <Infobar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {games.map((game) => (
          // <GameCard key={game.id} {...game} />
        ))} */}
      </div>
      {deferredPrompt && (
        <button
          onClick={handleInstallClick}
          style={{ position: "fixed", bottom: 20, right: 20 }}
        >
          Install App
        </button>
      )}
    </div>
  );
}
