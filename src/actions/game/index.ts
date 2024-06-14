"use server";

import { client } from "@/lib/primsa";

export const getGames = async () => {
  try {
    const games = await client.game.findMany({
      orderBy: {
        numberOfLikes: "desc",
      },
    });

    return games;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const sortGames = async () => {
  try {
    const games = await client.game.findMany();
    return games;
  } catch (error) {
    console.error(error);
  }
};

export const likeUnlikeGame = async (gameId: number, games: any) => {
  try {
    let updatedGame;
    if (games.userLiked) {
      updatedGame = await client.game.update({
        where: { id: Number(gameId) },
        data: {
          numberOfLikes: {
            decrement: 1,
          },
          userLiked: false,
        },
      });
    } else {
      updatedGame = await client.game.update({
        where: { id: Number(gameId) },
        data: {
          numberOfLikes: {
            increment: 1,
          },
          userLiked: true,
        },
      });
    }

    return updatedGame;
  } catch (error) {
    console.log(error);
  }
};
