import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { PlayerProvider } from '../providers/player.provider';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  private playerId: number | null = null;
  constructor(private playerProvider: PlayerProvider) {}

  @Cron('15 0 1 * * 1')
  createPlayer() {
    this.playerProvider.addPlayer('New player').subscribe({
      next: (player) => {
        this.playerId = player.id;
        this.logger.log('Keeping the database alive: new player created');
      },
      error: (error) => {
        this.logger.error(error);
      },
    });
  }

  @Cron('45 0 1 * * 1')
  deletePlayer() {
    if (this.playerId) {
      this.playerProvider.deletePlayer(this.playerId).subscribe({
        next: () => {
          this.logger.log('Keeping the database alive: new player deleted');
        },
        error: (error) => {
          this.logger.error(error);
        },
      });
    }
  }
}
