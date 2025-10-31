import { Injectable } from '@nestjs/common';
import { PlayerProviderI } from '../../domain/ports/player-provider-port.model';
import { from, map, Observable } from 'rxjs';
import { Player } from '../../domain/player/player.model';
import { PrismaService } from '../database/prisma.service';
import { PlayerFactory } from '../factories/player.factory';

@Injectable()
export class PlayerProvider implements PlayerProviderI {
  constructor(private prisma: PrismaService) {}

  getPlayers(): Observable<Player[]> {
    return from(this.prisma.players.findMany()).pipe(
      map((players) => PlayerFactory.createFromDatabaseArray(players)),
    );
  }

  addPlayer(name: string): Observable<Player> {
    return from(
      this.prisma.players.create({
        data: {
          name,
        },
      }),
    ).pipe(map((player) => PlayerFactory.createFromDatabase(player)));
  }
}
