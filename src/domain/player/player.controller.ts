import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import type { Player } from './player.model';
import { Observable } from 'rxjs';

@Controller('players')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  getPlayers(): Observable<Player[]> {
    return this.playerService.getPlayers();
  }

  @Post()
  addPlayer(@Body('playerName') name: string): Observable<Player> {
    return this.playerService.addPlayer(name);
  }
}
