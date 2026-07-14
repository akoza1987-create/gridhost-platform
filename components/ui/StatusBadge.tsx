type StatusColor =
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "gray";

type StatusBadgeProps = {
  children: React.ReactNode;
  color?: StatusColor;
};

export default function StatusBadge({
  children,
  color = "gray",
}: StatusBadgeProps) {
  const colors = {
    green: "bg-green-500/20 text-green-400",
    red: "bg-red-500/20 text-red-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    blue: "bg-cyan-500/20 text-cyan-400",
    gray: "bg-zinc-700 text-zinc-300",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${colors[color]}`}
    >
      {children}
    </span>
  );
}