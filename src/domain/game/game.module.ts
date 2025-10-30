import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { PrismaService } from '../../adapter/database/prisma.service';
import { GameProviderI } from '../ports/game-provider-port.model';
import { GameProvider } from '../../adapter/providers/game.provider';

@Module({
  controllers: [GameController],
  providers: [
    GameService,
    PrismaService,
    {
      provide: GameProviderI,
      useClass: GameProvider,
    },
  ],
})
export class GameModule {}
