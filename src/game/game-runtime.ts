// Runtime state holder for STATE_APPLICATION_STATE and STATE_HIGH_SCORE.

import { localStorageHighScoreRepository } from "../features/prod-canvas-game/prod-canvas-game.repo";
import type {
  HighScoreRepository,
  ProdCanvasGameState,
} from "../features/prod-canvas-game/prod-canvas-game.types";

export const STATE_APPLICATION_STATE = "STATE_APPLICATION_STATE";
export const STATE_HIGH_SCORE = "STATE_HIGH_SCORE";

export type GameRuntimeListener = () => void;

export interface GameRuntime {
  getState(): ProdCanvasGameState;
  subscribe(listener: GameRuntimeListener): () => void;
  startGame(): void;
}

export function createGameRuntime(
  repository: HighScoreRepository,
): GameRuntime {
  // Rehydration kind is initialization: the persisted high score is read once
  // when the runtime is created.
  let state: ProdCanvasGameState = {
    applicationState: null,
    highScore: repository.read(),
  };
  const listeners = new Set<GameRuntimeListener>();

  const emit = (): void => {
    listeners.forEach((listener) => {
      listener();
    });
  };

  return {
    getState(): ProdCanvasGameState {
      return state;
    },
    subscribe(listener: GameRuntimeListener): () => void {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    startGame(): void {
      // ACT_START_GAME state deltas: STATE_APPLICATION_STATE = "playing",
      // STATE_HIGH_SCORE = 0, then persistence write for PERSIST_HIGH_SCORE_LOCAL_STORAGE.
      state = { applicationState: "playing", highScore: 0 };
      repository.write(state.highScore as number);
      emit();
    },
  };
}

export const gameRuntime: GameRuntime = createGameRuntime(
  localStorageHighScoreRepository,
);
