import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Cpu,
  HardDrive,
  MemoryStick,
  MapPin,
} from "lucide-react";

type OrderSummaryProps = {
  game: string;
  location: string;
  ram: number;
  cpu: number;
  disk: number;
  price: number;
};

export default function OrderSummary({
  game,
  location,
  ram,
  cpu,
  disk,
  price,
}: OrderSummaryProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 backdrop-blur">

      <h2 className="mb-8 text-3xl font-bold text-white">
        Twoja konfiguracja
      </h2>

      <div className="space-y-5">

        <Row
          icon={<Gamepad2 size={18} />}
          label="Gra"
          value={game}
        />

        <Row
          icon={<MapPin size={18} />}
          label="Lokalizacja"
          value={location}
        />

        <Row
          icon={<MemoryStick size={18} />}
          label="Pamięć RAM"
          value={`${ram} GB`}
        />

        <Row
          icon={<Cpu size={18} />}
          label="Procesor"
          value={`${cpu} rdzenie`}
        />

        <Row
          icon={<HardDrive size={18} />}
          label="Dysk NVMe"
          value={`${disk} GB`}
        />

      </div>

      <div className="my-8 h-px bg-white/10" />

      <div className="text-center">

        <p className="text-sm uppercase tracking-widest text-zinc-500">
          Cena miesięczna
        </p>

        <h3 className="mt-2 text-5xl font-black text-cyan-400">
          {price.toFixed(2)} zł
        </h3>

      </div>

      <div className="my-8 h-px bg-white/10" />

      <div className="space-y-3">

        <Info text="Serwer gotowy w mniej niż 30 sekund" />

        <Info text="Zaawansowana ochrona" />

        <Info text="Codzienne kopie zapasowe" />

        <Info text="Wsparcie techniczne 24/7" />

      </div>

      <Button className="mt-8 h-12 w-full bg-cyan-500 text-black hover:bg-cyan-400">

        Uruchom serwer

        <ArrowRight className="ml-2 h-5 w-5" />

      </Button>

    </div>
  );
}

type RowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function Row({
  icon,
  label,
  value,
}: RowProps) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3 text-zinc-400">

        {icon}

        <span>{label}</span>

      </div>

      <span className="font-semibold text-white">
        {value}
      </span>

    </div>
  );
}

function Info({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2
        size={18}
        className="text-green-400"
      />

      <span className="text-zinc-300">
        {text}
      </span>

    </div>
  );
}