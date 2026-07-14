import StatusBadge from "@/components/ui/StatusBadge";

type GameStatusProps = {
  status: "active" | "hidden";
};

export default function GameStatus({
  status,
}: GameStatusProps) {
  if (status === "active") {
    return (
      <StatusBadge color="green">
        Aktywna
      </StatusBadge>
    );
  }

  return (
    <StatusBadge color="red">
      Ukryta
    </StatusBadge>
  );
}