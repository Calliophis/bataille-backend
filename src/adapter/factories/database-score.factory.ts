import { Prisma } from '@prisma/client';
import { Score } from '../../domain/game/game.model';

export abstract class DatabaseScoreFactory {
  static createfromScores(
    scores: Score[],
  ): Prisma.game_scoresCreateManyGamesInput[] {
    return scores.map((score) => ({
      player_id: score.playerId,
      score: score.score,
    }));
  }
}
