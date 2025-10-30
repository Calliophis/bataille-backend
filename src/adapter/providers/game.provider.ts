import { Injectable } from '@nestjs/common';
import { GameProviderI } from '../../domain/ports/game-provider-port.model';
import { PrismaService } from '../database/prisma.service';
import { from, Observable } from 'rxjs';
import { Game, Score } from '../../domain/game/game.model';

@Injectable()
export class GameProvider implements GameProviderI {
  constructor(private prisma: PrismaService) {}
  getGames(): Observable<Game[]> {
    return from<Promise<Game[]>>(
      this.prisma.games
        .findMany({
          include: {
            game_scores: true,
          },
        })
        .then((games) => {
          return games.map((game) => ({
            id: game.id,
            scores: game.game_scores.map((gameScore) => ({
              playerId: gameScore.player_id,
              score: gameScore.score,
            })),
          }));
        }),
    );
  }

  addGame(scores: Score[]): Observable<Game> {
    return from<Promise<Game>>(
      this.prisma.games
        .create({
          data: {
            game_scores: {
              create: scores.map((score) => ({
                player_id: score.playerId,
                score: score.score,
              })),
            },
          },
          include: {
            game_scores: true,
          },
        })
        .then((game) => ({
          id: game.id,
          scores: game.game_scores.map((gameScore) => ({
            playerId: gameScore.player_id,
            score: gameScore.score,
          })),
        })),
    );
  }
}
