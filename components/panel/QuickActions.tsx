import Link from "next/link";
import {
  Plus,
  Server,
  LifeBuoy,
  Receipt,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Nowy serwer",
    description: "Skonfiguruj i zamów nowy serwer.",
    href: "/#pricing",
    icon: Plus,
  },
  {
    title: "Moje serwery",
    description: "Przejdź do listy serwerów.",
    href: "/panel/serwery",
    icon: Server,
  },
  {
    title: "Nowy ticket",
    description: "Skontaktuj się z pomocą.",
    href: "/panel/tickety",
    icon: LifeBuoy,
  },
  {
    title: "Faktury",
    description: "Sprawdź płatności.",
    href: "/panel/faktury",
    icon: Receipt,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
      <h2 className="mb-6 text-xl font-bold text-white">
        Szybkie akcje
      </h2>

      <div className="space-y-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-800"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-cyan-500/10 p-3">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>

                <div>
                  <p className="font-semibold text-white">
                    {action.title}
                  </p>

                  <p className="text-sm text-zinc-500">
                    {action.description}
                  </p>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 text-zinc-500" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}