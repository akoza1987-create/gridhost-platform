import PageHeader from "@/components/panel/PageHeader";
import ServerGrid from "@/components/panel/ServerGrid";

export default function ServersPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Moje serwery"
        description="Zarządzaj wszystkimi swoimi serwerami w jednym miejscu."
      />

      <ServerGrid />
    </div>
  );
}