"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Filter } from "lucide-react";
import { useState } from "react";

export const Infobar = () => {
  const [filter, setFilter] = useState("mostPlayed");
  return (
    <div className="flex  justify-between items-center ">
      <h1 className="text-3xl font-bold mb-4">Games Dashboard</h1>

      <DropdownMenu>
        <DropdownMenuTrigger className="flex  px-4 justify-center items-center mr-8 ">
          <Filter className="h-4 w-4 mr-2" />
          <p className="text-foreground">Filter</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter Games</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={() => setFilter("most_played")}
          >
            Most Played
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={() => setFilter("most_liked")}
          >
            Most Liked
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={() => setFilter("category")}
          >
            Category
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
