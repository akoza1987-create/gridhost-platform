"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  Star,
} from "lucide-react";
import ServerPreview from "./ServerPreview";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 pt-28 pb-20">

      {/* Glow Background */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto grid min-h-[py-20] max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
        >

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">

            <Star size={16} />

            Hosting nowej generacji

          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-tight text-white md:text-7xl">

            Twój serwer.

            <br />

            <span className="text-cyan-400">

              Gotowy w 30 sekund.

            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

            Hosting Minecraft, FiveM, CS2 oraz Rust.

            Zamów serwer w kilka kliknięć i rozpocznij grę
            bez skomplikowanej konfiguracji.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Button
              size="lg"
              className="bg-cyan-500 text-black hover:bg-cyan-400"
            >

              Zamów serwer

              <ArrowRight className="ml-2 h-5 w-5" />

            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Zobacz ofertę
            </Button>

          </div>

          {/* Quick Stats */}

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-500/10 p-3">

                <ShieldCheck
                  className="text-cyan-400"
                  size={22}
                />

              </div>

              <div>

                <h4 className="font-bold text-white">

                  DDoS

                </h4>

                <p className="text-sm text-zinc-500">

                  Ochrona Premium

                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-500/10 p-3">

                <Clock3
                  className="text-cyan-400"
                  size={22}
                />

              </div>

              <div>

                <h4 className="font-bold text-white">

                  30 sekund

                </h4>

                <p className="text-sm text-zinc-500">

                  Automatyczna instalacja

                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-cyan-500/10 p-3">

                <Star
                  className="text-cyan-400"
                  size={22}
                />

              </div>

              <div>

                <h4 className="font-bold text-white">

                  4.9 / 5

                </h4>

                <p className="text-sm text-zinc-500">

                  Ocena klientów

                </p>

              </div>

            </div>

          </div>

        </motion.div>
                {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          {/* Efekt świecenia */}
          <div className="absolute h-[550px] w-[550px] rounded-full bg-cyan-500/10 blur-[140px]" />

          {/* Panel serwera */}
          <div className="relative w-full max-w-lg">
            <ServerPreview />
          </div>

          {/* Pływające badge */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-6 top-16 hidden rounded-2xl border border-cyan-500/20 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-xl lg:block"
          >
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Ping
            </p>

            <h3 className="mt-1 text-2xl font-bold text-cyan-400">
              3 ms
            </h3>
          </motion.div>

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-6 bottom-20 hidden rounded-2xl border border-cyan-500/20 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-xl lg:block"
          >
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Uptime
            </p>

            <h3 className="mt-1 text-2xl font-bold text-green-400">
              99.99%
            </h3>
          </motion.div>

          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-10 hidden rounded-2xl border border-cyan-500/20 bg-zinc-900/90 px-5 py-4 shadow-xl backdrop-blur-xl xl:block"
          >
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Status
            </p>

            <div className="mt-2 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />

              <span className="font-semibold text-white">
                Wszystkie usługi online
              </span>
            </div>
          </motion.div>
        </motion.div>
              </div>

      {/* Delikatna linia oddzielająca */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
    </section>
  );
}