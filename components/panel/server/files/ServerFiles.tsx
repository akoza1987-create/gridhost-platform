import FilesHeader from "./FilesHeader";
import FilesToolbar from "./FilesToolbar";
import FilesTable from "./FilesTable";

export default function ServerFiles() {
  return (
    <div className="space-y-6">
      <FilesHeader />

      <FilesToolbar />

      <FilesTable />
    </div>
  );
}