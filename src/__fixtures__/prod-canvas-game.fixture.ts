// Deterministic fixture values for the production canvas game feature.

import { HIGH_SCORE_STORAGE_KEY } from "../features/prod-canvas-game/prod-canvas-game.types";
import type { ProdCanvasGameState } from "../features/prod-canvas-game/prod-canvas-game.types";

export interface ProdCanvasGameFixture {
  storageKey: string;
  initialState: ProdCanvasGameState;
  startedStatusMessage: string;
  idleStatusMessage: string;
}

export const prodCanvasGameFixture: ProdCanvasGameFixture = {
  storageKey: HIGH_SCORE_STORAGE_KEY,
  initialState: {
    applicationState: null,
    highScore: null,
  },
  startedStatusMessage: "Game started",
  idleStatusMessage: "Awaiting session start",
};

export default prodCanvasGameFixture;
