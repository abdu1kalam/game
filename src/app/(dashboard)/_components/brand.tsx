"use client";

import { useGameStore } from "@/store/game-store";
import { Check } from "lucide-react";

export const BrandPage = () => {
  let categories = ["Action", "Puzzle", "Strategy", "Simulation"];

  const setSelectedCategory = useGameStore(
    (state) => state.setSelectedCategory
  );
  const selectedeCategory = useGameStore((state) => state.selectedCategory);

  return (
    <div className="bg-gradient-to-br from-blue-950 to-violet-900 h-[600px]   text-white flex items-center justify-center">
      <div className="flex w-full p-3 h-full space-x-6 mt-36 ">
        <div className="hidden md:block w-1/5 bg-gradient-to-br from-blue-950 to-violet-950 h-[80%]  p-6 rounded-lg  shadow-2xl">
          <h2 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-orange-300">
            Filter categories
          </h2>
          <div className="flex flex-col mb-10 px-2 py-1 space-y-4 items-start cursor-pointer justify-start">
            {categories.map((category) => (
              <div
                key={category}
                className=" w-full rounded-md flex items-center p-2 px-4 justify-between bg-transparent/20  hover:bg-transparent/10"
                onClick={() => setSelectedCategory(category)}
              >
                <div key={category}>{category} </div>
                {selectedeCategory === category && (
                  <Check className="h-6 w-6 bg-slate-400 p-1 text-black rounded-md" />
                )}
              </div>
            ))}
            <div
              onClick={() => setSelectedCategory(null)}
              className=" w-full rounded-md flex items-center p-2 px-4 justify-between bg-transparent/20  hover:bg-transparent/10"
            >
              <p>All </p>
              {!selectedeCategory && (
                <Check className="h-6 w-6 bg-slate-400 p-1 text-black rounded-md" />
              )}
            </div>
          </div>
        </div>

        <div className=" bg-cover flex-1  bg-center bg-hero-pattern relative h-[80%] rounded-lg p-4 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black   bg-opacity-50"></div>
          <div className="relative ml-auto z-10 p-8">
            <h1 className="text-4xl  mb-2 font-light text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-orange-300">
              XBALANQUE
            </h1>
            <h2 className="text-2xl  mb-4 font-extralight">
              THE HIDDEN JAGUARSUN
            </h2>
            <p className="text-lg  text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-orange-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
              <br />
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
