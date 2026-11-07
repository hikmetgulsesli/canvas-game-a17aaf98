// Browser test bridge for setfarm.browser-state-capture.v1 and
// setfarm.browser-action-invocation.v1.

import {
  STATE_APPLICATION_STATE,
  STATE_HIGH_SCORE,
  gameRuntime,
} from "../game/game-runtime";
import type { GameRuntime } from "../game/game-runtime";
import { invokeStartGame } from "../features/surf-play-page/act_start_game";

export interface SetfarmCapturedStates {
  [STATE_APPLICATION_STATE]: string | null;
  [STATE_HIGH_SCORE]: number | null;
}

export interface SetfarmActionInvocationResult {
  ok: boolean;
  actionRef: string;
}

export interface SetfarmTestBridge {
  states: SetfarmCapturedStates;
  getState(): { states: SetfarmCapturedStates };
  getStates(): SetfarmCapturedStates;
  invokeAction(
    actionRef: string,
    input?: Record<string, unknown>,
  ): SetfarmActionInvocationResult;
}

export function createTestBridge(runtime: GameRuntime): SetfarmTestBridge {
  const states = {} as SetfarmCapturedStates;
  Object.defineProperty(states, STATE_APPLICATION_STATE, {
    enumerable: true,
    get: () => runtime.getState().applicationState,
  });
  Object.defineProperty(states, STATE_HIGH_SCORE, {
    enumerable: true,
    get: () => runtime.getState().highScore,
  });

  const snapshot = (): SetfarmCapturedStates => ({
    [STATE_APPLICATION_STATE]: runtime.getState().applicationState,
    [STATE_HIGH_SCORE]: runtime.getState().highScore,
  });

  return {
    states,
    getState: () => ({ states: snapshot() }),
    getStates: snapshot,
    invokeAction: (
      actionRef: string,
      input?: Record<string, unknown>,
    ): SetfarmActionInvocationResult => {
      const ok = invokeStartGame(runtime, { actionRef, input });
      return { ok, actionRef };
    },
  };
}

export function installTestBridge(
  runtime: GameRuntime = gameRuntime,
): SetfarmTestBridge | null {
  if (typeof window === "undefined") return null;
  const bridge = createTestBridge(runtime);
  const target = window as unknown as Record<string, unknown>;
  target.__SETFARM_TEST_BRIDGE__ = bridge;
  target.__SETFARM_SCENARIO_MODE__ = "manual";
  return bridge;
}
