export interface Score {
  playerId: number;
  score: number;
}

export interface Game {
  id: number;
  scores: Score[];
}
