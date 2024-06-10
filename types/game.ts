export interface Game {
  id: number;
  Name: string;
  Link: string;
  Categories: string;
  Description: string;
  NumberOfLikes: number;
  NumberOfPlays: number;
  InternalIdentifier: number | null; // Change to number | null
  Status: string;
}
