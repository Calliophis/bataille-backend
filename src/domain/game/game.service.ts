import { Inject, Injectable } from '@nestjs/common';
import { Game, Score } from './game.model';
import { GameProviderI } from '../ports/game-provider-port.model';
import { Observable } from 'rxjs';

@Injectable()
export class GameService {
  constructor(@Inject(GameProviderI) private gameProvider: GameProviderI) {}

  getGames(): Observable<Game[]> {
    return this.gameProvider.getGames();
  }

  addGame(scores: Score[]): Observable<Game> {
    return this.gameProvider.addGame(scores);
  }
}
