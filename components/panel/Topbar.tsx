"use client";

import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-zinc-950 px-8">
      {/* Search */}

      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          placeholder="Szukaj..."
          className="h-11 w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 text-white placeholder:text-zinc-500 focus:border-cyan-500 focus:outline-none"
        />
      </div>

      {/* Right */}

      <div className="ml-8 flex items-center gap-6">
        <button className="relative rounded-xl border border-white/10 bg-zinc-900 p-3 transition-colors hover:border-cyan-500/40 hover:bg-zinc-800">
          <Bell className="h-5 w-5 text-zinc-300" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
        </button>

        <button className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 transition-colors hover:border-cyan-500/40 hover:bg-zinc-800">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
            D
          </div>

          <div className="text-left">
            <p className="font-semibold text-white">
              Damian
            </p>

            <p className="text-sm text-zinc-500">
              Administrator
            </p>
          </div>

          <ChevronDown className="h-4 w-4 text-zinc-500" />
        </button>
      </div>
    </header>
  );
}