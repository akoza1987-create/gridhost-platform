import {
  Server,
  Receipt,
  LifeBuoy,
  ShieldCheck,
} from "lucide-react";

import StatCard from "@/components/panel/StatCard";
import QuickActions from "@/components/panel/QuickActions";

export default function PanelPage() {
  return (
    <div className="space-y-8">
      {/* Nagłówek */}
      <div>
        <h1 className="text-4xl font-black text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Witaj ponownie 👋 Miło Cię widzieć.
        </p>
      </div>

      {/* Statystyki */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Aktywne serwery"
          value="3"
          subtitle="2 Minecraft • 1 FiveM"
          icon={Server}
        />

        <StatCard
          title="Miesięczny koszt"
          value="129,99 zł"
          subtitle="Kolejna płatność za 12 dni"
          icon={Receipt}
        />

        <StatCard
          title="Otwarte tickety"
          value="1"
          subtitle="Oczekuje na odpowiedź"
          icon={LifeBuoy}
        />

        <StatCard
          title="Uptime"
          value="99.99%"
          subtitle="Ostatnie 30 dni"
          icon={ShieldCheck}
        />
      </div>

      {/* Dolna sekcja */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
          <h2 className="mb-4 text-xl font-bold text-white">
            Ostatnia aktywność
          </h2>

          <p className="text-zinc-400">
            Tutaj pojawią się informacje o uruchomionych serwerach,
            płatnościach, ticketach i innych wydarzeniach.
          </p>
        </div>

        <QuickActions />
      </div>
    </div>
  );
}