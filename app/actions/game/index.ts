"use server";

import { fetchGames } from "@/lib/fetch-games";

export async function getServerSideProps() {
  const initialGames = await fetchGames("mostPlayed");
  return { props: { initialGames } };
}
