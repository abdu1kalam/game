import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Game } from "@/types/game";

export const GameCard = async ({
  id,
  Categories,
  NumberOfLikes,
  NumberOfPlays,
  Name,
  Description,
}: Game) => {
  return (
    <Card className="p-4 border">
      <CardContent>
        <CardTitle>{Name}</CardTitle>
        <CardDescription>{Description}</CardDescription>
        <div className="flex justify-between mt-2">
          <span>Likes: {NumberOfLikes}</span>
          <span>Plays: {NumberOfPlays}</span>
        </div>
      </CardContent>
    </Card>
  );
};
