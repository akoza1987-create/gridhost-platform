import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";

type GameCardProps = {
  title: string;
  price: string;
  image: string;
  description: string;
  features: string[];
};

export default function GameCard({
  title,
  price,
  image,
  description,
  features,
}: GameCardProps) {
  return (
    
<div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
      {/* Banner */}

<div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
  <Image
    src={image}
    alt={title}
    fill
    className="object-contain transition duration-500 group-hover:scale-105"
  />
</div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-2 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 space-y-3">

          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-sm text-zinc-300"
            >
              <Check size={16} className="text-cyan-400" />
              {feature}
            </div>
          ))}

        </div>

        <div className="mt-auto pt-8">

          <span className="text-3xl font-black text-cyan-400">
            {price}
          </span>

        </div>

        <Button className="mt-auto w-full bg-cyan-500 text-black hover:bg-cyan-400">

          Zamów serwer

          <ArrowRight className="ml-2 h-4 w-4" />

        </Button>

      </div>

    </div>
  );
}