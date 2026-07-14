import { ReactNode } from "react";

import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-zinc-950">
      <AdminSidebar />

      <div className="flex flex-1 flex-col">
        <AdminHeader />

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}