import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AddGameButton() {
  return (
    <Link href="/admin/gry/nowa">
      <Button>
        ➕ Dodaj grę
      </Button>
    </Link>
  );
}