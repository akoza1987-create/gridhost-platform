import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type PriceDisplayProps = {
  price: number;
};

export default function PriceDisplay({
  price,
}: PriceDisplayProps) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

      <p className="text-sm uppercase tracking-widest text-cyan-400">
        Cena miesięczna
      </p>

      <div className="mt-3 flex items-end gap-2">

        <span className="text-5xl font-black text-white">
          {price.toFixed(2)}
        </span>

        <span className="pb-2 text-xl text-zinc-400">
          zł / miesiąc
        </span>

      </div>

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-4">

        <p className="font-semibold text-green-400">
          🟢 Serwer gotowy w mniej niż 30 sekund
        </p>

      </div>

      <Button
        className="mt-8 h-12 w-full bg-cyan-500 text-black hover:bg-cyan-400"
      >
        Uruchom serwer

        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

    </div>
  );
}