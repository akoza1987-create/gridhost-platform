import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/data/features";

...

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