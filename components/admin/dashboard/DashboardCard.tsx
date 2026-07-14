import { LucideIcon } from "lucide-react";

type DashboardCardProps = {
  title: string;
  value: string;
  icon: LucideIcon;
};

export default function DashboardCard({
  title,
  value,
  icon: Icon,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-zinc-400">
          {title}
        </h3>

        <Icon className="text-cyan-400" size={22} />
      </div>

      <p className="mt-4 text-3xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}