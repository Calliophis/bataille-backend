import { Observable } from 'rxjs';
import { Player } from '../player/player.model';

export interface PlayerProviderI {
  getPlayers(): Observable<Player[]>;
  addPlayer(name: string): Observable<Player>;
}

export const PlayerProviderI = Symbol('PlayerProviderI');
