"use client";

import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

import dynamic from "next/dynamic";

import { GameCards } from "./_components/game-cards";
import { getGames } from "@/actions/game";
import { BrandPage } from "./_components/brand";
import { Navbar } from "./_components/navbar";

import { useGameStore } from "@/store/game-store";

const PWAModal = dynamic(
  () => import("./_components/pwa-modal").then((mod) => mod.default),
  {
    ssr: false,
  }
);

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);

      if (!window.matchMedia("(display-mode: standalone)").matches) {
        setShowInstallModal(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () =>
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          toast({
            title: "Install",
            description: "Thanks for installing our app",
          });
        } else {
          toast({
            title: "Cancelled",
            description: "Something went wrong!",
          });
        }

        setDeferredPrompt(null);
        setShowInstallModal(false);
      });
    }
  };

  const [showInstallModal, setShowInstallModal] = useState<Boolean>(false);

  const { setGames, games } = useGameStore();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, [setGames]);

  const handleLikeToggle = (id: number) => {
    setGames(
      games.map((game) => {
        if (game.id === id) {
          return {
            ...game,
            numberOfLikes: game.userLiked
              ? game.numberOfLikes! - 1
              : game.numberOfLikes! + 1,
            userLiked: !game.userLiked,
          };
        }
        return game;
      })
    );
  };

  return (
    <main>
      <div className="w-full">
        <Navbar />

        <BrandPage />

        <GameCards handleLikeToggle={handleLikeToggle} />

        <PWAModal
          show={showInstallModal}
          handleInstallClick={handleInstallClick}
        />
      </div>
    </main>
  );
}
