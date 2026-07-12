export function estimatePlayers(ram: number): string {
  if (ram <= 2) return "5–10 graczy";
  if (ram <= 4) return "15–25 graczy";
  if (ram <= 8) return "40–60 graczy";
  if (ram <= 12) return "60–100 graczy";
  if (ram <= 16) return "100–150 graczy";

  return "150+ graczy";
}
export function configurationStatus(ram: number) {
  if (ram <= 2) {
    return {
      color: "text-red-400",
      label: "Konfiguracja podstawowa",
    };
  }

  if (ram <= 8) {
    return {
      color: "text-yellow-400",
      label: "Polecana konfiguracja",
    };
  }

  return {
    color: "text-green-400",
    label: "Wysoka wydajność",
  };
}