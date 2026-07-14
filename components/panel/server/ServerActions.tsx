import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

type ServerActionsProps = {
  status: "online" | "offline";
};

export default function ServerActions({
  status,
}: ServerActionsProps) {
  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          Sterowanie serwerem
        </h2>

        <p className="mt-2 text-zinc-400">
          Aktualny status:
          <span
            className={`ml-2 font-semibold ${
              status === "online"
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {status === "online"
              ? "🟢 Online"
              : "🔴 Offline"}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button variant="success">
          ▶ Uruchom
        </Button>

        <Button variant="primary">
          🔄 Restart
        </Button>

        <Button variant="danger">
          ■ Zatrzymaj
        </Button>
      </div>
    </Card>
  );
}