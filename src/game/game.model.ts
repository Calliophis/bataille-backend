import { UUID } from "crypto";

export interface Score {
    playerId: UUID,
    score: number
}

export interface Game {
    id: number,
    scores: Score[]
}