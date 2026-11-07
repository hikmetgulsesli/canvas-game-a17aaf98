// Local storage repository for PERSIST_HIGH_SCORE_LOCAL_STORAGE.
// Durability: reload. Rehydration: initialization.

import { HIGH_SCORE_STORAGE_KEY } from "./prod-canvas-game.types";
import type { HighScoreRepository } from "./prod-canvas-game.types";

function localStorageOrNull(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    const store = window.localStorage;
    if (!store) return null;
    return store;
  } catch {
    return null;
  }
}

export const localStorageHighScoreRepository: HighScoreRepository = {
  read(): number | null {
    const store = localStorageOrNull();
    if (!store) return null;
    let raw: string | null = null;
    try {
      raw = store.getItem(HIGH_SCORE_STORAGE_KEY);
    } catch {
      return null;
    }
    if (raw === null) return null;
    if (raw === "") return null;
    const parsed = Number(raw);
    return Number.isFinite(parsed) ? parsed : null;
  },
  write(highScore: number): void {
    const store = localStorageOrNull();
    if (!store) return;
    try {
      store.setItem(HIGH_SCORE_STORAGE_KEY, String(highScore));
    } catch {
      // Persistence failures must not break the action outcome.
    }
  },
};
