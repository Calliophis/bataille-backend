import { Observable } from 'rxjs';
import { Game, Score } from '../game/game.model';

export interface GameProviderI {
  getGames(): Observable<Game[]>;
  addGame(score: Score[]): Observable<Game>;
}

export const GameProviderI = Symbol('GameProviderI');
