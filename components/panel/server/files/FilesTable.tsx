import FileRow from "./FileRow";

const files = [
  {
    name: "plugins",
    type: "folder" as const,
    size: "--",
    modified: "Dzisiaj 14:32",
  },
  {
    name: "world",
    type: "folder" as const,
    size: "--",
    modified: "Dzisiaj 12:15",
  },
  {
    name: "logs",
    type: "folder" as const,
    size: "--",
    modified: "Wczoraj",
  },
  {
    name: "server.properties",
    type: "file" as const,
    size: "4 KB",
    modified: "Dzisiaj",
  },
  {
    name: "paper.yml",
    type: "file" as const,
    size: "12 KB",
    modified: "2 dni temu",
  },
  {
    name: "eula.txt",
    type: "file" as const,
    size: "1 KB",
    modified: "5 dni temu",
  },
];

export default function FilesTable() {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900/40">
      <div className="grid grid-cols-[40px_1fr_120px_180px] border-b border-white/10 px-4 py-3 text-sm font-semibold text-zinc-500">
        <div></div>
        <div>Nazwa</div>
        <div>Rozmiar</div>
        <div>Ostatnia zmiana</div>
      </div>

      <div className="divide-y divide-white/5">
        {files.map((file) => (
          <FileRow
            key={file.name}
            {...file}
          />
        ))}
      </div>
    </div>
  );
}