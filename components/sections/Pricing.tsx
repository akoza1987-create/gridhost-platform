"use client";

import { useMemo, useState } from "react";

import { pricing } from "@/data/pricing";
import { games } from "@/data/games";
import { locations } from "@/data/locations";

import GameSelect from "@/components/ui/GameSelect";
import LocationSelect from "@/components/ui/LocationSelect";
import SliderField from "@/components/ui/SliderField";
import OrderSummary from "@/components/ui/OrderSummary";

export default function Pricing() {
  const [game, setGame] = useState("minecraft");
  const [location, setLocation] = useState("pl");

  const [ram, setRam] = useState(pricing.ram.default);
  const [cpu, setCpu] = useState(pricing.cpu.default);
  const [disk, setDisk] = useState(pricing.disk.default);

  const selectedGame = useMemo(
    () => games.find((g) => g.slug === game)!,
    [game]
  );

  const selectedLocation = useMemo(
    () => locations.find((l) => l.code === location)!,
    [location]
  );

  const totalPrice = useMemo(() => {
    return (
      selectedGame.basePrice +
      ram * pricing.ram.pricePerUnit +
      cpu * pricing.cpu.pricePerUnit +
      disk * pricing.disk.pricePerUnit
    );
  }, [selectedGame, ram, cpu, disk]);

  return (
    <section id="pricing" className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-5xl font-black text-white">
            Skonfiguruj swój serwer
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Dopasuj parametry serwera do swoich potrzeb.
            Cena aktualizuje się na żywo.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">

          <div className="space-y-8 rounded-3xl border border-white/10 bg-zinc-900/60 p-8 backdrop-blur">

            <GameSelect
              games={games.map((g) => ({
                slug: g.slug,
                name: g.name,
              }))}
              value={game}
              onChange={setGame}
            />

            <LocationSelect
              locations={locations}
              value={location}
              onChange={setLocation}
            />

            <SliderField
              label={pricing.ram.label}
              value={ram}
              min={pricing.ram.min}
              max={pricing.ram.max}
              step={pricing.ram.step}
              unit={pricing.ram.unit}
              onChange={setRam}
            />

            <SliderField
              label={pricing.cpu.label}
              value={cpu}
              min={pricing.cpu.min}
              max={pricing.cpu.max}
              step={pricing.cpu.step}
              unit={pricing.cpu.unit}
              onChange={setCpu}
            />

            <SliderField
              label={pricing.disk.label}
              value={disk}
              min={pricing.disk.min}
              max={pricing.disk.max}
              step={pricing.disk.step}
              unit={pricing.disk.unit}
              onChange={setDisk}
            />

          </div>

<div className="h-fit lg:sticky lg:top-24">
  <OrderSummary
    game={selectedGame.name}
    location={`${selectedLocation.flag} ${selectedLocation.name}`}
    ram={ram}
    cpu={cpu}
    disk={disk}
    price={totalPrice}
  />
</div>

        </div>

      </div>

    </section>
  );
}