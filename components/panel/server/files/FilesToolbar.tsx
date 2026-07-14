import Button from "@/components/ui/Button";

export default function FilesToolbar() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">
        Upload
      </Button>

      <Button variant="secondary">
        Nowy folder
      </Button>

      <Button variant="secondary">
        Nowy plik
      </Button>

      <Button variant="outline">
        Odśwież
      </Button>
    </div>
  );
}