import {
  ArchiveRestore,
  Database,
  FolderOpen,
  Globe,
  LayoutDashboard,
  Settings,
  Terminal,
} from "lucide-react";

type ServerSidebarProps = {
  active: string;
  setActive: (value: string) => void;
};

const items = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "console", label: "Console", icon: Terminal },
  { id: "files", label: "Files", icon: FolderOpen },
  { id: "backups", label: "Backups", icon: ArchiveRestore },
  { id: "databases", label: "Databases", icon: Database },
  { id: "network", label: "Network", icon: Globe },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function ServerSidebar({
  active,
  setActive,
}: ServerSidebarProps) {
  return (
    <aside className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                active === item.id
                  ? "bg-cyan-500 text-black"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <Icon size={18} />

              <span className="font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}