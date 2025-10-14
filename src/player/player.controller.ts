import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import type { Player } from './player.model';

@Controller('players')
export class PlayerController {
    constructor(private readonly playerService: PlayerService) {}

    @Get()
    getPlayers(): Player[] {
        return this.playerService.findAll();
    }

    @Post()
    addPlayer(@Body() playerName: string): Player {
        return this.playerService.addPlayer(playerName);
    }
}
