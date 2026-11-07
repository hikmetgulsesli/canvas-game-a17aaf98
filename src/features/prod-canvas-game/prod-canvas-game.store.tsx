// React binding for the production canvas game runtime state.

import {
  createContext,
  ReactNode,
  useContext,
  useSyncExternalStore,
} from "react";

import { gameRuntime } from "../../game/game-runtime";
import type { GameRuntime } from "../../game/game-runtime";
import type { ProdCanvasGameState } from "./prod-canvas-game.types";

const GameRuntimeContext = createContext<GameRuntime>(gameRuntime);

export interface ProdCanvasGameProviderProps {
  runtime?: GameRuntime;
  children?: ReactNode;
}

export function ProdCanvasGameProvider({
  runtime = gameRuntime,
  children,
}: ProdCanvasGameProviderProps) {
  return (
    <GameRuntimeContext.Provider value={runtime}>
      {children}
    </GameRuntimeContext.Provider>
  );
}

export function useGameRuntime(): GameRuntime {
  return useContext(GameRuntimeContext);
}

export function useProdCanvasGameState(): ProdCanvasGameState {
  const runtime = useGameRuntime();
  return useSyncExternalStore(
    runtime.subscribe,
    runtime.getState,
    runtime.getState,
  );
}
