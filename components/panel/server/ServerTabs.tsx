"use client";
import ServerConsole from "./ServerConsole";
import { useState } from "react";

const tabs = [
  "Overview",
  "Console",
  "Files",
  "Backups",
  "Databases",
  "Network",
  "Settings",
];

export default function ServerTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-2">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-cyan-500 text-black"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
        {activeTab === "Overview" && (
          <p className="text-zinc-300">
            Tutaj będzie przegląd serwera.
          </p>
        )}

        {activeTab === "root@server:~$" && <ServerConsole />}

        {activeTab === "Files" && (
          <p className="text-zinc-300">
            Menedżer plików pojawi się tutaj.
          </p>
        )}

        {activeTab === "Backups" && (
          <p className="text-zinc-300">
            Lista backupów pojawi się tutaj.
          </p>
        )}

        {activeTab === "Databases" && (
          <p className="text-zinc-300">
            Zarządzanie bazami danych.
          </p>
        )}

        {activeTab === "Network" && (
          <p className="text-zinc-300">
            Ustawienia sieci.
          </p>
        )}

        {activeTab === "Settings" && (
          <p className="text-zinc-300">
            Konfiguracja serwera.
          </p>
        )}
      </div>
    </div>
  );
}