import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { Player } from './player.model';

@Injectable()
export class PlayerService {
  private filePath: string;
  constructor() {
    this.filePath = join(process.cwd(), 'src/data/players.json');
  }

  private readPlayers(): Player[] {
    const data = readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data) as Player[];
  }

  private writePlayers(players: Player[]): void {
    writeFileSync(this.filePath, JSON.stringify(players, null, 2));
  }

  findAll(): Player[] {
    return this.readPlayers();
  }

  generateId(): UUID {
    return crypto.randomUUID();
  }

  addPlayer(playerName: string): Player {
    const players = this.readPlayers();
    const newId = this.generateId();
    const newPlayer = { id: newId, name: playerName };

    players.push(newPlayer);
    this.writePlayers(players);
    return newPlayer;
  }
}
