export type Server = {
  id: number;
  name: string;
  game: string;
  location: string;
  ram: string;
  cpu: string;
  disk: string;
  status: "online" | "offline";
};

export const servers: Server[] = [
  {
    id: 1,
    name: "Survival SMP",
    game: "Minecraft Java",
    location: "🇵🇱 Warszawa",
    ram: "4 GB RAM",
    cpu: "2 vCPU",
    disk: "50 GB NVMe",
    status: "online",
  },
  {
    id: 2,
    name: "FiveM RP",
    game: "FiveM",
    location: "🇩🇪 Frankfurt",
    ram: "8 GB RAM",
    cpu: "4 vCPU",
    disk: "80 GB NVMe",
    status: "online",
  },
  {
    id: 3,
    name: "Test Server",
    game: "CS2",
    location: "🇵🇱 Warszawa",
    ram: "2 GB RAM",
    cpu: "1 vCPU",
    disk: "25 GB NVMe",
    status: "offline",
  },
];