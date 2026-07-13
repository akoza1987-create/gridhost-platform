import ServerCard from "./ServerCard";

const servers = [
  {
    id: 1,
    name: "Survival SMP",
    game: "Minecraft Java",
    location: "🇵🇱 Warszawa",
    ram: "4 GB RAM",
    cpu: "2 vCPU",
    disk: "50 GB NVMe",
    status: "online" as const,
  },
  {
    id: 2,
    name: "FiveM RP",
    game: "FiveM",
    location: "🇩🇪 Frankfurt",
    ram: "8 GB RAM",
    cpu: "4 vCPU",
    disk: "80 GB NVMe",
    status: "online" as const,
  },
  {
    id: 3,
    name: "Test Server",
    game: "CS2",
    location: "🇵🇱 Warszawa",
    ram: "2 GB RAM",
    cpu: "1 vCPU",
    disk: "25 GB NVMe",
    status: "offline" as const,
  },
];

export default function ServerGrid() {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {servers.map((server) => (
        <ServerCard
          key={server.id}
          name={server.name}
          game={server.game}
          location={server.location}
          ram={server.ram}
          cpu={server.cpu}
          disk={server.disk}
          status={server.status}
        />
      ))}
    </div>
  );
}