import DashboardStats from "@/components/admin/dashboard/DashboardStats";
import RevenueChart from "@/components/admin/dashboard/RevenueChart";
import SystemStatus from "@/components/admin/dashboard/SystemStatus";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Witaj w panelu administratora GridHost.
        </p>
      </div>

      <DashboardStats />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
           <RevenueChart />
        </div>

       <SystemStatus />
      </div>
    </div>
  );
}