// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-1"?: () => void;
  };
  /** Current high score value (null when no value is known yet). */
  highScore?: number | null;
  /** Status feed message rendered in the game status surface. */
  statusMessage?: string;
}

function currentRoutePath(): string {
  if (typeof window === "undefined") return "/play";
  return window.location.pathname || "/play";
}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions, highScore = null, statusMessage = "Awaiting session start" }: PlayPageCanvasStartGameProps) {
  return (
    <>
      {/* Root Surface: Play Page */}
        <main data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_STABILITY" data-route={currentRoutePath()}>
          {/* Non-actionable Decorative Header */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
                C
              </div>
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-white leading-tight">Canvas Game</h1>
                <p className="text-xs text-slate-400">Play Mode</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-md shadow-indigo-600/25 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900" data-setfarm-element-ref="E000002" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" type="button" data-action-id="start-1" onClick={actions?.["start-1"]}>
                Start
              </button>
            </div>
          </header>
      
          {/* Main Workspace Layout */}
          <div className="flex-1 p-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Contained Surface: Game Canvas */}
            <section data-surface-id="SURF_GAME_CANVAS" className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col shadow-xl relative overflow-hidden" data-setfarm-element-ref="E000003">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-sm font-medium text-slate-300">Active Stage</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">60 FPS • READY</span>
              </div>
              <div className="flex-1 min-h-[460px] bg-slate-950 rounded-xl border border-slate-800/60 relative flex flex-col items-center justify-center p-8 text-center overflow-hidden">
                {/* Background Grid Matrix Accent */}
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none"></div>
      
                {/* Canvas Preview Placeholder Graphic */}
                <div className="relative z-10 flex flex-col items-center max-w-md">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-950/70 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <p className="text-base font-semibold text-slate-200">Interactive Game Canvas</p>
                  <p className="text-sm text-slate-400 mt-1">Press Start from the control bar to initiate session tracking and gameplay.</p>
                </div>
              </div>
            </section>
      
            {/* Contained Surface: Game Status */}
            <aside data-surface-id="SURF_GAME_STATUS" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col gap-6 shadow-xl h-fit" data-setfarm-element-ref="E000004">
              <div className="border-b border-slate-800/80 pb-4">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Match Overview</h2>
              </div>
      
              {/* High Score Observable */}
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-400">Current Record</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-sm text-slate-300">High Score</span>
                  {/* Accessibility role status with name "High score" */}
                  <div className="text-xl font-bold font-mono text-emerald-400 tracking-tight" data-setfarm-element-ref="E000005" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_CURRENT_HIGH_SCORE_VALUE" data-value={highScore === null || highScore === undefined ? undefined : String(highScore)}></div>
                </div>
              </div>
      
              {/* Game Status Message Observable */}
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 flex flex-col gap-1">
                <span className="text-xs font-medium text-slate-400">Status Feed</span>
                {/* Accessibility role status with name "Game status" */}
                <div className="mt-2 text-sm text-slate-300 font-medium min-h-[1.5rem] flex items-center" data-setfarm-element-ref="E000006" role="status" aria-label="Game status" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE">
                  <span className="inline-flex items-center gap-1.5 text-xs text-indigo-400/90 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    {statusMessage}
                  </span>
                </div>
              </div>
      
              <div className="pt-2 text-xs text-slate-500 leading-relaxed border-t border-slate-800/60">
                Route: <span className="font-mono text-slate-400">/play</span> • All systems operational.
              </div>
            </aside>
          </div>
        </main>
    </>
  );
}
