import PageHeader from "@/components/panel/PageHeader";
import ServerSummary from "@/components/panel/ServerSummary";
import ServerManager from "@/components/panel/ServerManager";

export default function ServersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Moje serwery"
        description="Zarządzaj wszystkimi swoimi serwerami w jednym miejscu."
      />

      <ServerSummary
        total={3}
        online={2}
        offline={1}
      />

      <ServerManager />
    </div>
  );
}