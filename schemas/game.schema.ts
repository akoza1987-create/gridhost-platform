import { z } from "zod";

export const gameSchema = z.object({
  name: z
    .string()
    .min(2, "Nazwa musi mieć minimum 2 znaki."),

  slug: z
    .string()
    .min(2, "Slug jest wymagany."),

  description: z
    .string()
    .min(10, "Opis jest za krótki."),

  minRam: z.number().min(1),

  minCpu: z.number().min(1),

  minDisk: z.number().min(5),
});

export type GameFormData = z.infer<typeof gameSchema>;