"use client";

type Location = {
  code: string;
  flag: string;
  name: string;
};

type LocationSelectProps = {
  locations: Location[];
  value: string;
  onChange: (value: string) => void;
};

export default function LocationSelect({
  locations,
  value,
  onChange,
}: LocationSelectProps) {
  return (
    <div className="space-y-3">

      <label className="block text-lg font-semibold text-white">
        📍 Lokalizacja
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      >
        {locations.map((location) => (
          <option
            key={location.code}
            value={location.code}
          >
            {location.flag} {location.name}
          </option>
        ))}
      </select>

      <p className="text-sm text-zinc-500">
        Wybierz lokalizację serwera najbliżej swoich graczy.
      </p>

    </div>
  );
}