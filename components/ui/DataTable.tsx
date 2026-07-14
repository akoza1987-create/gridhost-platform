import { ReactNode } from "react";

type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export default function DataTable<T extends { id: number }>({
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
      <table className="w-full">
        <thead className="border-b border-white/10 bg-zinc-950">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-6 py-4 text-left text-sm font-semibold text-zinc-400"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-white/5 transition hover:bg-zinc-800/40"
            >
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className="px-6 py-4 text-white"
                >
                  {column.render
                    ? column.render(row[column.key], row)
                    : String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}