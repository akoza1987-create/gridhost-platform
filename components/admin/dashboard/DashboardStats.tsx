import {
  Server,
  Users,
  DollarSign,
  Gamepad2,
} from "lucide-react";

import DashboardCard from "./DashboardCard";

export default function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardCard
        title="Serwery"
        value="132"
        icon={Server}
      />

      <DashboardCard
        title="Klienci"
        value="81"
        icon={Users}
      />

      <DashboardCard
        title="Przychód"
        value="12 540 zł"
        icon={DollarSign}
      />

      <DashboardCard
        title="Gry"
        value="8"
        icon={Gamepad2}
      />
    </div>
  );
}