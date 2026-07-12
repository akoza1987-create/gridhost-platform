"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  Server,
} from "lucide-react";
import ServerPreview from "./ServerPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* LEWA STRONA */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            <Server size={16} />
            Hosting nowej generacji
          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Hosting,
            <br />
            <span className="text-cyan-400">
              który po prostu działa.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Uruchom serwer Minecraft, FiveM, Counter-Strike 2 lub Rust
            w mniej niż minutę.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-cyan-500 text-black hover:bg-cyan-400"
            >
              Zamów serwer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg">
              Zobacz ofertę
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-cyan-400" />
              <div>
                <p className="text-2xl font-bold text-white">DDoS</p>
                <p className="text-sm text-zinc-500">
                  Premium Protection
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="h-8 w-8 text-cyan-400" />
              <div>
                <p className="text-2xl font-bold text-white">30 s</p>
                <p className="text-sm text-zinc-500">
                  Automatyczne wdrożenie
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Server className="h-8 w-8 text-cyan-400" />
              <div>
                <p className="text-2xl font-bold text-white">99.99%</p>
                <p className="text-sm text-zinc-500">
                  Gwarancja dostępności
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PRAWA STRONA */}
        <div className="relative flex justify-center">
          <ServerPreview />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  );
}