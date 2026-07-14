import { Folder, FileText } from "lucide-react";

type FileRowProps = {
  name: string;
  type: "folder" | "file";
  size: string;
  modified: string;
};

export default function FileRow({
  name,
  type,
  size,
  modified,
}: FileRowProps) {
  return (
    <div className="grid grid-cols-[40px_1fr_120px_180px] items-center rounded-xl px-4 py-3 transition hover:bg-zinc-800/50">
      <div>
        {type === "folder" ? (
          <Folder className="text-yellow-400" size={20} />
        ) : (
          <FileText className="text-cyan-400" size={20} />
        )}
      </div>

      <div className="font-medium text-white">
        {name}
      </div>

      <div className="text-sm text-zinc-400">
        {size}
      </div>

      <div className="text-sm text-zinc-500">
        {modified}
      </div>
    </div>
  );
}