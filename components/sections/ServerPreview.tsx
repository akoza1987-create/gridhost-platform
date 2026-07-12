"use client";

import { Cpu, HardDrive, MemoryStick, ShieldCheck } from "lucide-react";

export default function ServerPreview() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl" />

      <div className="relative rounded-3xl border border-cyan-500/20 bg-zinc-900/90 p-6 backdrop-blur-xl">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Minecraft Premium</h3>
            <p className="text-sm text-zinc-400">
              Online • Amsterdam
            </p>
          </div>

          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
            ONLINE
          </span>
        </div>

        <div className="space-y-4">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Cpu size={18} className="text-cyan-400" />
              CPU
            </div>

            <span>18%</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-2 w-[18%] rounded-full bg-cyan-400"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MemoryStick size={18} className="text-cyan-400" />
              RAM
            </div>

            <span>4.2 / 8 GB</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-2 w-[52%] rounded-full bg-cyan-400"></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive size={18} className="text-cyan-400" />
              Dysk
            </div>

            <span>28 / 50 GB</span>
          </div>

          <div className="h-2 rounded-full bg-zinc-800">
            <div className="h-2 w-[56%] rounded-full bg-cyan-400"></div>
          </div>

        </div>

        <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-zinc-950 p-4">

          <div className="flex items-center gap-2 text-green-400">

            <ShieldCheck size={18} />

            DDoS Protection Active

          </div>

        </div>

      </div>
    </div>
  );
}