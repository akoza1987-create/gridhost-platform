import type { ReactNode } from "react";

import Sidebar from "@/components/panel/Sidebar";
import Topbar from "@/components/panel/Topbar";

type PanelLayoutProps = {
  children: ReactNode;
};

export default function PanelLayout({
  children,
}: PanelLayoutProps) {
  return (
    <div className="flex min-h-screen bg-zinc-950">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}