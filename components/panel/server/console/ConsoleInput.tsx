"use client";

import { useState } from "react";

export default function ConsoleInput() {
  const [command, setCommand] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!command.trim()) return;

    console.log("Command:", command);

    setCommand("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex gap-3"
    >
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Wpisz komendę..."
        className="flex-1 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
      />

      <button
        type="submit"
        className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
      >
        Wyślij
      </button>
    </form>
  );
}