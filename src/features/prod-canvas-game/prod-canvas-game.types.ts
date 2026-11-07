// Types for the production canvas game feature (ENTITY_GAME_SCORE).
// Bound to ProductSpecV2 component e67975e05fa96805f3c953c5486251af7be34006b6b8e6344806c0a9158fcf27.

export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_game.high_score_local_storage.v1";

export type ApplicationState = "playing";

export interface GameScore {
  highScore: number | null;
}

export interface ProdCanvasGameState {
  applicationState: ApplicationState | null;
  highScore: number | null;
}

export interface HighScoreRepository {
  read(): number | null;
  write(highScore: number): void;
}
