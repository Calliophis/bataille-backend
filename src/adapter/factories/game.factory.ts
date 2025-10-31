import { Game } from '../../domain/game/game.model';
import { DatabaseScore, ScoreFactory } from './score.factory';
import type { games, game_scores } from '@prisma/client';

export abstract class GameFactory {
  static createFromDatabaseArray(databaseGames: DatabaseGame[]): Game[] {
    return databaseGames.map((databaseGame) =>
      this.createFromDatabase(databaseGame),
    );
  }

  static createFromDatabase(databaseGame: DatabaseGame): Game {
    return new Game(
      databaseGame.id,
      databaseGame.game_scores.map((databaseScore: DatabaseScore) =>
        ScoreFactory.createFromDatabase(databaseScore),
      ),
    );
  }
}

export type DatabaseGame = games & { game_scores: game_scores[] };
