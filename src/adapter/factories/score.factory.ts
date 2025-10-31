import { game_scores } from '@prisma/client';
import { Score } from '../../domain/game/game.model';

export abstract class ScoreFactory {
  static createFromDatabase(databaseScore: DatabaseScore): Score {
    return new Score(databaseScore.player_id, databaseScore.score);
  }
}

export type DatabaseScore = game_scores;
