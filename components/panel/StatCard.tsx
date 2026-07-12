import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-zinc-900">
      <div className="mb-5 flex items-center justify-between">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Icon className="h-6 w-6 text-cyan-400" />
        </div>
      </div>

      <h3 className="text-3xl font-black text-white">
        {value}
      </h3>

      <p className="mt-2 font-semibold text-white">
        {title}
      </p>

      {subtitle && (
        <p className="mt-1 text-sm text-zinc-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}