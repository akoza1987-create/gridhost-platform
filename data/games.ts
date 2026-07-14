export type Game = {
  id: number;
  slug: string;

  name: string;
  icon: string;

  badge: string;

  startingPrice: number;
  basePrice: number;

  image: string;

  shortDescription: string;
  description: string;

  features: string[];

  // Panel administratora
  status: "active" | "hidden";

  minRam: number;
  recommendedRam: number;

  minCpu: number;
  recommendedCpu: number;

  minDisk: number;
};

export const games: Game[] = [
  {
    id: 1,
    slug: "minecraft",

    name: "Minecraft",
    icon: "⛏️",

    badge: "Najczęściej wybierany",

    startingPrice: 9.99,
    basePrice: 5,

    image: "/images/games/minecraft.webp",

    shortDescription:
      "Vanilla • Paper • Forge • Fabric",

    description:
      "Idealny wybór dla serwerów Vanilla, Paper, Forge i Fabric z szybkim uruchomieniem oraz pełnym wsparciem.",

    features: [
      "Automatyczna instalacja",
      "Zaawansowana ochrona",
      "Codzienne kopie zapasowe",
      "Panel klienta",
    ],

    status: "active",

    minRam: 2,
    recommendedRam: 6,

    minCpu: 1,
    recommendedCpu: 2,

    minDisk: 20,
  },

  {
    id: 2,
    slug: "fivem",

    name: "FiveM",
    icon: "🚓",

    badge: "Idealny do RP",

    startingPrice: 19.99,
    basePrice: 10,

    image: "/images/games/fivem.webp",

    shortDescription:
      "Stabilny hosting dla FiveM",

    description:
      "Niski ping, wysoka wydajność i stabilna infrastruktura dla serwerów RP.",

    features: [
      "OneSync Ready",
      "Zaawansowana ochrona",
      "Panel klienta",
      "Automatyczne backupy",
    ],

    status: "active",

    minRam: 4,
    recommendedRam: 8,

    minCpu: 2,
    recommendedCpu: 4,

    minDisk: 40,
  },

  {
    id: 3,
    slug: "cs2",

    name: "Counter-Strike 2",
    icon: "🎯",

    badge: "Dla drużyn",

    startingPrice: 29.99,
    basePrice: 15,

    image: "/images/games/cs2.webp",

    shortDescription:
      "Płynna rozgrywka dla CS2",

    description:
      "Serwery zoptymalizowane pod Counter-Strike 2 z niskimi opóźnieniami.",

    features: [
      "Szybkie uruchomienie",
      "Zaawansowana ochrona",
      "Auto Restart",
      "Panel klienta",
    ],

    status: "active",

    minRam: 4,
    recommendedRam: 8,

    minCpu: 2,
    recommendedCpu: 4,

    minDisk: 40,
  },

  {
    id: 4,
    slug: "rust",

    name: "Rust",
    icon: "☢️",

    badge: "Survival",

    startingPrice: 39.99,
    basePrice: 20,

    image: "/images/games/rust.webp",

    shortDescription:
      "Serwery Rust gotowe do gry",

    description:
      "Wydajne serwery z obsługą pluginów i pełną kontrolą nad konfiguracją.",

    features: [
      "Obsługa pluginów",
      "Codzienne kopie zapasowe",
      "Zaawansowana ochrona",
      "Panel klienta",
    ],

    status: "active",

    minRam: 8,
    recommendedRam: 12,

    minCpu: 4,
    recommendedCpu: 6,

    minDisk: 60,
  },
];