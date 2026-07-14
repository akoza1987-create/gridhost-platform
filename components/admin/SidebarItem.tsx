import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export default function SidebarItem({
  href,
  label,
  icon: Icon,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
    >
      <Icon size={18} />

      <span>{label}</span>
    </Link>
  );
}