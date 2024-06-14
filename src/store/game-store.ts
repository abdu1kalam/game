// store/gameStore.ts
import { create } from "zustand";

interface Game {
  id: number;
  categories?: string | null;
  description?: string | null;
  internalIdentifier?: string | null;
  imageUrl?: string | null;
  gameSource?: string | null;
  name?: string | null;
  numberOfLikes: number;
  numberOfPlays: number;
  status?: string | null;
  userLiked: boolean;
}
interface GameState {
  games: Game[];
  selectedCategory: string | null;
  setGames: (games: Game[]) => void;
  setSelectedCategory: (category: string | null) => void;
}

export const useGameStore = create<GameState>((set) => ({
  games: [],
  selectedCategory: null,
  setGames: (games) => set({ games }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
