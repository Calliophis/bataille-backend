import { Injectable } from '@nestjs/common';
import { GameProviderI } from '../../domain/ports/game-provider-port.model';
import { PrismaService } from '../database/prisma.service';
import { from, map, Observable } from 'rxjs';
import { Game, Score } from '../../domain/game/game.model';
import { GameFactory } from '../factories/game.factory';
import { DatabaseScoreFactory } from '../factories/database-score.factory';

@Injectable()
export class GameProvider implements GameProviderI {
  constructor(private prisma: PrismaService) {}

  getGames(): Observable<Game[]> {
    return from(
      this.prisma.games.findMany({
        include: {
          game_scores: true,
        },
      }),
    ).pipe(map((games) => GameFactory.createFromDatabaseArray(games)));
  }

  addGame(scores: Score[]): Observable<Game> {
    return from(
      this.prisma.games.create({
        data: {
          game_scores: {
            create: DatabaseScoreFactory.createfromScores(scores),
          },
        },
        include: {
          game_scores: true,
        },
      }),
    ).pipe(map((game) => GameFactory.createFromDatabase(game)));
  }
}
