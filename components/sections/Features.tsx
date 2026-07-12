import { features } from "@/data/features";
import FeatureCard from "@/components/ui/FeatureCard";

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <h2 className="text-5xl font-black text-white">
            Dlaczego GridHost?
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Wszystko czego potrzebujesz, aby uruchomić wydajny serwer gier.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}