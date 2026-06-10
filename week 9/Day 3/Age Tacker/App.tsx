/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import AgeDisplay from "./store/components/AgeDisplay";
import AgeControls from "./store/components/AgeControls";
import ActionLogs from "./store/components/ActionLogs";
import { ShieldCheck, HeartPulse, Sparkles, Terminal } from "lucide-react";

export default function App() {
  return (
    <Provider store={store}>
      <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-emerald-500/10 selection:text-emerald-900 flex flex-col justify-between">
        
        {/* Simple elegant header bar */}
        <header className="bg-white border-b border-gray-100 shadow-xs sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center shadow-xs">
                <HeartPulse className="w-5.5 h-0.5 animate-pulse" />
              </div>
              <div>
                <h1 className="text-base font-black font-sans tracking-tight text-gray-950 flex items-center gap-2">
                  Age Tracker
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Redux Thunk
                  </span>
                </h1>
                <p className="text-[10px] text-gray-400 font-mono mt-0.5">
                  Async Action Middlewares & Form Handlers
                </p>
              </div>
            </div>

            <div className="text-[10px] font-bold font-mono text-slate-400 border border-slate-100 rounded-lg px-2.5 py-1 bg-slate-50 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 animate-bounce" /> Verified Pure State
            </div>
          </div>
        </header>

        {/* Core Main Stage Layout */}
        <main className="max-w-4xl mx-auto px-6 py-8 w-full flex-grow flex flex-col justify-center">
          
          {/* Main Controls & Displays columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
            {/* Display circular indicator */}
            <div className="flex items-center justify-center">
              <AgeDisplay />
            </div>

            {/* Form controls/config */}
            <div className="flex items-center justify-center">
              <AgeControls />
            </div>
          </div>

          {/* Diagnostic Console panel */}
          <div className="w-full">
            <ActionLogs />
          </div>
        </main>

        {/* Footing attribution */}
        <footer className="bg-white border-t border-gray-100 py-6 text-center text-[10px] text-gray-400 font-mono">
          <p>© 2026 Redux-Thunk Async Simulator. All state transitions are tracefully audited with exact timestamps.</p>
        </footer>
      </div>
    </Provider>
  );
}
