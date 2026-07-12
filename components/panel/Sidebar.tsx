"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Server,
  ShoppingCart,
  Receipt,
  LifeBuoy,
  User,
  Settings,
  ArrowLeft,
} from "lucide-react";

const menu = [
  {
    title: "Główne",
    items: [
      {
        name: "Dashboard",
        href: "/panel",
        icon: LayoutDashboard,
      },
      {
        name: "Moje serwery",
        href: "/panel/serwery",
        icon: Server,
      },
      {
        name: "Zamówienia",
        href: "/panel/zamowienia",
        icon: ShoppingCart,
      },
      {
        name: "Faktury",
        href: "/panel/faktury",
        icon: Receipt,
      },
      {
        name: "Tickety",
        href: "/panel/tickety",
        icon: LifeBuoy,
      },
    ],
  },
  {
    title: "Konto",
    items: [
      {
        name: "Profil",
        href: "/panel/konto",
        icon: User,
      },
      {
        name: "Ustawienia",
        href: "/panel/ustawienia",
        icon: Settings,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-white/10 bg-zinc-950">
      <div className="border-b border-white/10 px-6 py-6">
        <Link href="/" className="text-3xl font-black text-white">
          Grid<span className="text-cyan-400">Host</span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        {menu.map((group) => (
          <div key={group.title} className="mb-8">
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              {group.title}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                      active
                        ? "bg-cyan-500 text-black"
                        : "text-zinc-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
        >
          <ArrowLeft size={20} />
          Powrót na stronę
        </Link>
      </div>
    </aside>
  );
}