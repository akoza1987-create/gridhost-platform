import ServerCard from "./ServerCard";

type Server = {
  id: number;
  name: string;
  game: string;
  location: string;
  ram: string;
  cpu: string;
  disk: string;
  status: "online" | "offline";
};

type ServerGridProps = {
  servers: Server[];
};

export default function ServerGrid({ servers }: ServerGridProps) {
  console.log("ServerGrid received:", servers);

  if (servers.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-zinc-900/60 p-10 text-center">
        <h2 className="text-2xl font-bold text-white">
          Nie znaleziono serwerów
        </h2>

        <p className="mt-2 text-zinc-400">
          Spróbuj wpisać inną nazwę.
        </p>
      </div>
    );
  }

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