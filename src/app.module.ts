import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './domain/game/game.module';
import { PlayerModule } from './domain/player/player.module';
import { AuthModule } from './domain/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TasksService } from './adapter/tasks/tasks.service';
import { ScheduleModule } from '@nestjs/schedule';
import { PlayerProvider } from './adapter/providers/player.provider';
import { PrismaService } from './adapter/database/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ScheduleModule.forRoot(),
    GameModule,
    PlayerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, TasksService, PrismaService, PlayerProvider],
})
export class AppModule {}
