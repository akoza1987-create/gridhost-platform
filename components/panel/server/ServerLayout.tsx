"use client";

import { useState } from "react";

import ServerHeader from "./ServerHeader";
import ServerStats from "./ServerStats";
import ServerActions from "./ServerActions";
import ServerSidebar from "./ServerSidebar";
import ServerContent from "./ServerContent";

type ServerLayoutProps = {
  server: {
    name: string;
    game: string;
    location: string;
    status: "online" | "offline";
    ram: string;
    cpu: string;
    disk: string;
  };
};

export default function ServerLayout({
  server,
}: ServerLayoutProps) {
  const [active, setActive] = useState("overview");

  return (
    <div className="space-y-8">
      <ServerHeader
        name={server.name}
        status={server.status}
      />

      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-sm text-zinc-500">Gra</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {server.game}
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">Lokalizacja</p>
            <p className="mt-1 text-lg font-semibold text-white">
              {server.location}
            </p>
          </div>
        </div>
      </div>

      <ServerStats
        ram={server.ram}
        cpu={server.cpu}
        disk={server.disk}
      />

      <ServerActions
        status={server.status}
      />

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <ServerSidebar
          active={active}
          setActive={setActive}
        />

        <ServerContent active={active} />
      </div>
    </div>
  );
}