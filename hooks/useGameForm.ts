"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  gameSchema,
  GameFormData,
} from "@/schemas/game.schema";

export function useGameForm() {
  return useForm<GameFormData>({
    resolver: zodResolver(gameSchema),

    defaultValues: {
      name: "",
      slug: "",
      description: "",

      minRam: 2,
      minCpu: 1,
      minDisk: 20,
    },
  });
}