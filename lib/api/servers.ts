import { servers } from "@/data/servers";
import type { Server } from "@/data/servers";

export async function getServers(): Promise<Server[]> {
  // Docelowo:
  // return fetch("/api/servers").then(res => res.json());

  return servers;
}

export async function getServerById(
  id: number
): Promise<Server | undefined> {
  // Docelowo:
  // return fetch(`/api/servers/${id}`).then(res => res.json());

  return servers.find((server) => server.id === id);
}