import {
  LayoutDashboard,
  Gamepad2,
  Server,
  Users,
  DollarSign,
  Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r border-white/10 bg-zinc-950">
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold text-cyan-400">
          GridHost
        </h1>

        <p className="text-sm text-zinc-500">
          Admin Panel
        </p>
      </div>

      <nav className="space-y-2 p-4">
        <SidebarItem
          href="/admin"
          label="Dashboard"
          icon={LayoutDashboard}
        />

        <SidebarItem
          href="/admin/gry"
          label="Gry"
          icon={Gamepad2}
        />

        <SidebarItem
          href="/admin/serwery"
          label="Serwery"
          icon={Server}
        />

        <SidebarItem
          href="/admin/klienci"
          label="Klienci"
          icon={Users}
        />

        <SidebarItem
          href="/admin/cennik"
          label="Cennik"
          icon={DollarSign}
        />

        <SidebarItem
          href="/admin/ustawienia"
          label="Ustawienia"
          icon={Settings}
        />
      </nav>
        </aside>
  );
}