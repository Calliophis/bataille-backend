import { Score } from '../../domain/game/game.model';
import { DatabaseScore } from './score.factory';

export abstract class DatabaseScoreFactory {
  static createfromScores(scores: Score[]): Partial<DatabaseScore>[] {
    return scores.map((score) => ({
      player_id: score.playerId,
      score: score.score,
    }));
  }
}
