// ACT_START_GAME — user trigger, rendered control CSLOT_START_GAME_START_BUTTON.

import type { GameRuntime } from "../../game/game-runtime";

export const ACT_START_GAME = "ACT_START_GAME";
export const START_GAME_GENERATED_LOCAL_ID = "start-1";

export interface ActionInvocation {
  actionRef: string;
  input?: Record<string, unknown>;
}

export interface StartGameAction {
  actionRef: typeof ACT_START_GAME;
  invoke(): void;
}

export function createStartGameAction(runtime: GameRuntime): StartGameAction {
  return {
    actionRef: ACT_START_GAME,
    invoke(): void {
      runtime.startGame();
    },
  };
}

export function isStartGameInvocation(invocation: ActionInvocation): boolean {
  return (
    invocation.actionRef === ACT_START_GAME ||
    invocation.actionRef === START_GAME_GENERATED_LOCAL_ID
  );
}

export function invokeStartGame(
  runtime: GameRuntime,
  invocation: ActionInvocation,
): boolean {
  if (!isStartGameInvocation(invocation)) return false;
  createStartGameAction(runtime).invoke();
  return true;
}
