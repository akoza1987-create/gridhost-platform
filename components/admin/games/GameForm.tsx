import Button from "@/components/ui/Button";
import type { Game } from "@/data/games";
import FormSection from "@/components/ui/forms/FormSection";
import TextField from "@/components/ui/forms/TextField";
import TextareaField from "@/components/ui/forms/TextareaField";
import NumberField from "@/components/ui/forms/NumberField";

type Props = {
  game?: Game;
  mode?: "create" | "edit";
};

export default function GameForm({
  game,
  mode = "create",
}: Props) {
  return (
    <div className="space-y-8">

      <FormSection
        title="Podstawowe informacje"
        description="Dane widoczne dla klientów."
      >
        <TextField
          label="Nazwa gry"
          placeholder="Minecraft"
          defaultValue={game?.name}
        />

        <TextField
          label="Slug"
          placeholder="minecraft"
          defaultValue={game?.slug}
        />

        <TextareaField
          label="Opis"
          placeholder="Opis gry..."
        />
      </FormSection>

      <FormSection
        title="Minimalne wymagania"
        description="Minimalne zasoby potrzebne do uruchomienia."
      >
        <div className="grid gap-6 md:grid-cols-3">

          <NumberField
            label="RAM (GB)"
            placeholder="2"
          />

          <NumberField
            label="CPU (vCPU)"
            placeholder="1"
          />

          <NumberField
            label="Dysk (GB)"
            placeholder="20"
          />

        </div>
      </FormSection>

      <div className="flex justify-end">
        <Button>
          {mode === "create"
          ? "➕ Dodaj grę"
          : "💾 Zapisz zmiany"}
        </Button>
      </div>

    </div>
  );
}