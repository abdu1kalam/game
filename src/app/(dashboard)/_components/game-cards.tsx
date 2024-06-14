"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useGameStore } from "@/store/game-store";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  handleLikeToggle: (id: number) => void;
};

export const GameCards = ({ handleLikeToggle }: Props) => {
  const router = useRouter();

  const { games, selectedCategory } = useGameStore();

  const filteredGames = selectedCategory
    ? games.filter((game) => game.categories === selectedCategory)
    : games;

  return (
    <div className=" bg-gradient-to-br from-blue-950 to-gray-900 ">
      <h1 className="font-bold trucate text-2xl mb-2 pt-6 pl-[20%]  text-white">
        All New Game
      </h1>{" "}
      <div className="  h-full w-full pt-10 text-white flex items-center justify-center">
        <div className="hidden md:block w-1/5 "> </div>
        <div className="w-4/5 flex-1  p-4 ml-6">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="hover:-translate-y-1 bg-gradient-to-br  from-blue-950  to-violet-900 transform ease-in-out 0.2s  duration-500 transition aspect-auto  rounded-lg hover:shadow-lg overflow-hidden"
              >
                <div
                  onClick={() => router.push(`${game.id}`)}
                  className="flex items-center justify-center rounded-lg m-2"
                >
                  <Image
                    src={`${game.imageUrl}`}
                    alt="game"
                    className="cursor-pointer rounded-2xl object-cover p-2"
                    height={200}
                    width={200}
                  />
                </div>
                <div className="px-4 pt-2">
                  <h1 className="text-base font-semibold truncate text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-orange-300 ">
                    {game.name}
                  </h1>

                  <p className="text-base  leading-4 truncate pb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-orange-300 ">
                    {game.categories}
                  </p>
                </div>
                <Separator className=" text-muted-foreground max-w-[80%] mx-auto" />
                <div className="flex justify-between items-center  space-x-2 mx-4 mb-4 mt-4">
                  <p className="text-base leading-4 truncate pb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-orange-300 ">
                    {game.description}
                  </p>
                  <Heart
                    onClick={() => handleLikeToggle(game.id)}
                    className={cn(
                      "h-6 w- text-muted-foreground cursor-pointer",
                      game.userLiked ? "fill-rose-500" : ""
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
