"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  price: string;
  description: string;
  color: string;
};

export default function GameCard({
  title,
  price,
  description,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl border border-white/10 bg-zinc-900/60 p-6 backdrop-blur-xl transition"
    >
      <div
        className="mb-5 h-16 w-16 rounded-2xl"
        style={{ background: color }}
      />

      <h3 className="text-3xl font-bold">{title}</h3>

      <p className="mt-3 text-zinc-400">
        {description}
      </p>

      <div className="mt-8 text-4xl font-black text-cyan-400">
        {price}
      </div>

      <Button className="mt-8 w-full bg-cyan-500 text-black hover:bg-cyan-400">
        Zamów
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}