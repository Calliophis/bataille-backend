export class Score {
  constructor(
    public playerId: number,
    public score: number,
  ) {}
}

export class Game {
  constructor(
    public id: number,
    public scores: Score[],
  ) {}
}
