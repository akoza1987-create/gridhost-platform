"use client";

import { ShieldCheck, Server, Globe, Users } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: Server,
    value: "12000+",
    label: "Aktywnych serwerów",
  },
  {
    icon: Users,
    value: "8600+",
    label: "Zadowolonych klientów",
  },
  {
    icon: Globe,
    value: "12",
    label: "Lokalizacji",
  },
  {
    icon: ShieldCheck,
    value: "99.99%",
    label: "Uptime",
  },
];

export default function Stats() {
  return (
    <section className="relative -mt-10 z-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-5 rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur-xl md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: .25 }}
                className="flex items-center gap-5"
              >
                <div className="rounded-2xl bg-cyan-500/10 p-4">
                  <Icon className="h-8 w-8 text-cyan-400" />
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-white">
                    {item.value}
                  </h3>

                  <p className="text-zinc-400">
                    {item.label}
                  </p>

                </div>

              </motion.div>
            );

          })}

        </div>

      </div>
    </section>
  );
}