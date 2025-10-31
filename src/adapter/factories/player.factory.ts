import { players } from '@prisma/client';
import { Player } from '../../domain/player/player.model';

export abstract class PlayerFactory {
  static createFromDatabaseArray(databasePlayers: DatabasePlayer[]): Player[] {
    return databasePlayers.map((databasePlayer) =>
      this.createFromDatabase(databasePlayer),
    );
  }

  static createFromDatabase(databasePlayer: DatabasePlayer): Player {
    return new Player(databasePlayer.id, databasePlayer.name);
  }
}

export type DatabasePlayer = players;
