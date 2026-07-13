"use client";

import { useState } from "react";
import { servers } from "@/data/servers";

import ServerFilters from "./ServerFilters";
import ServerGrid from "./ServerGrid";

export default function ServerManager() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [game, setGame] = useState("all");

  console.log("SEARCH =", search);

  const filteredServers = servers.filter((server) => {
  const matchesSearch = server.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesStatus =
    status === "all" || server.status === status;

  const matchesGame =
    game === "all" || server.game === game;

  return matchesSearch && matchesStatus && matchesGame;
});

  return (
    <div className="space-y-6">
      <ServerFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        game={game}
        setGame={setGame}
      />

      <ServerGrid servers={filteredServers} />
    </div>
  );
}