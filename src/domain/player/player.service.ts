import { Inject, Injectable } from '@nestjs/common';
import { Player } from './player.model';
import { PlayerProviderI } from '../ports/player-provider-port.model';
import { Observable } from 'rxjs';

@Injectable()
export class PlayerService {
  constructor(
    @Inject(PlayerProviderI) private playerProvider: PlayerProviderI,
  ) {}

  getPlayers(): Observable<Player[]> {
    return this.playerProvider.getPlayers();
  }

  addPlayer(name: string): Observable<Player> {
    return this.playerProvider.addPlayer(name);
  }
}
