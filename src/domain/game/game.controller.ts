import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import type { Game, Score } from './game.model';
import { Observable } from 'rxjs';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getGames(): Observable<Game[]> {
    return this.gameService.getGames();
  }

  @Post()
  addGame(@Body() gameScore: Score[]): Observable<Game> {
    return this.gameService.addGame(gameScore);
  }
}
