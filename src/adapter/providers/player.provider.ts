import { Injectable } from '@nestjs/common';
import { PlayerProviderI } from '../../domain/ports/player-provider-port.model';
import { from, Observable } from 'rxjs';
import { Player } from '../../domain/player/player.model';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class PlayerProvider implements PlayerProviderI {
  constructor(private prisma: PrismaService) {}

  getPlayers(): Observable<Player[]> {
    return from<Promise<Player[]>>(this.prisma.players.findMany());
  }

  addPlayer(name: string): Observable<Player> {
    return from<Promise<Player>>(
      this.prisma.players.create({
        data: {
          name,
        },
      }),
    );
  }
}
