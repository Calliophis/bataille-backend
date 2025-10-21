import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';
import type { Game, Score } from './game.model';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getGames(): Game[] {
    return this.gameService.findAll();
  }

  @Post()
  addGame(@Body() gameScore: Score[]): Game {
    return this.gameService.addGame(gameScore);
  }
}
