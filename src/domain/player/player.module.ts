import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { PlayerProviderI } from '../ports/player-provider-port.model';
import { PlayerProvider } from '../../adapter/providers/player.provider';
import { PrismaService } from '../../adapter/database/prisma.service';

@Module({
  controllers: [PlayerController],
  providers: [
    PlayerService,
    PrismaService,
    {
      provide: PlayerProviderI,
      useClass: PlayerProvider,
    },
  ],
})
export class PlayerModule {}
