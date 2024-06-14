"use client";

import { Button } from "@/components/ui/button";
import { useGameStore } from "@/store/game-store";
import { UserMenu } from "./user-menu";

export const Navbar = () => {
  let categories = ["Action", "Puzzle", "Strategy", "Simulation"];

  const setSelectedCategory = useGameStore(
    (state) => state.setSelectedCategory
  );

  return (
    <div className="bg-gradient-to-br from-blue-950 to-violet-900 flex  justify-between rounded-t-sm shadow-2xl items-center h-20  w-full px-4 text-white">
      <h1 className="hidden md:block font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-3xl ">
        Dashboard
      </h1>
      <div className=" flex items-center space-x-2 jsutify-center">
        {categories.map((category, idx) => (
          <div key={idx}>
            <Button
              className=" bg-transparent/20"
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}{" "}
            </Button>
          </div>
        ))}

        <Button
          className=" bg-transparent/20"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Button>
        <UserMenu />
      </div>
    </div>
  );
};
