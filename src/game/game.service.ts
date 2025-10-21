import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { Game, Score } from './game.model';
import { readFileSync, writeFileSync } from 'fs';

@Injectable()
export class GameService {
  private filePath: string;

  constructor() {
    this.filePath = join(process.cwd(), 'src/data/games.json');
  }

  private readGames(): Game[] {
    const data = readFileSync(this.filePath, 'utf-8');
    return JSON.parse(data) as Game[];
  }

  private writeGames(games: Game[]): void {
    writeFileSync(this.filePath, JSON.stringify(games, null, 2));
  }

  findAll(): Game[] {
    return this.readGames();
  }

  generateId(): number {
    return this.readGames().length + 1;
  }

  addGame(gameScore: Score[]): Game {
    const games = this.readGames();
    const newId = this.generateId();
    const newGame = { id: newId, scores: gameScore };

    games.push(newGame);
    this.writeGames(games);
    return newGame;
  }
}
