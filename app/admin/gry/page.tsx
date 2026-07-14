import GamesTable from "@/components/admin/games/GamesTable";
import PageHeader from "@/components/ui/PageHeader";

export default function GamesPage() {
  return (
    <div className="space-y-8">
      <PageHeader
  title="Gry"
  description="Zarządzanie ofertą gier."
    />

      <GamesTable />
    </div>
  );
}