import { useEffect, useState } from "react";

import {
  ProdCanvasGameProvider,
  useGameRuntime,
  useProdCanvasGameState,
} from "./features/prod-canvas-game/prod-canvas-game.store";
import { createStartGameAction } from "./features/surf-play-page/act_start_game";
import { PlayPageCanvasStartGame } from "./screens/PlayPageCanvasStartGame";
import { installTestBridge } from "./test/bridge";

installTestBridge();

const PLAY_ROUTE = "/play";

function currentPath(): string {
  if (typeof window === "undefined") return PLAY_ROUTE;
  return window.location.pathname || PLAY_ROUTE;
}

function useCurrentPath(): string {
  const [path, setPath] = useState<string>(currentPath);

  useEffect(() => {
    const onLocationChange = () => {
      setPath(currentPath());
    };
    window.addEventListener("popstate", onLocationChange);
    window.addEventListener("hashchange", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
      window.removeEventListener("hashchange", onLocationChange);
    };
  }, []);

  return path;
}

function PlayPage() {
  const runtime = useGameRuntime();
  const state = useProdCanvasGameState();
  const started = state.applicationState === "playing";

  const actions = {
    "start-1": () => {
      createStartGameAction(runtime).invoke();
    },
  };

  return (
    <PlayPageCanvasStartGame
      actions={actions}
      highScore={state.highScore}
      statusMessage={
        started ? "Game started" : "Awaiting session start"
      }
    />
  );
}

export default function App() {
  const path = useCurrentPath();
  const isPlayRoute = path === PLAY_ROUTE || path === "/" || path === "";

  return (
    <ProdCanvasGameProvider>
      <div
        data-setfarm-root="baseline"
        data-testid="setfarm-app-root"
        className="min-h-screen bg-slate-50 text-slate-950"
      >
        {isPlayRoute ? <PlayPage /> : null}
      </div>
    </ProdCanvasGameProvider>
  );
}
