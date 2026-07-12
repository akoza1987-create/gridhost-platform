"use client";

import { Slider } from "@/components/ui/slider";

type SliderFieldProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (value: number) => void;
};

export default function SliderField({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: SliderFieldProps) {
  return (
    <div className="space-y-4">

      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold text-white">
          {label}
        </h3>

        <span className="rounded-xl bg-cyan-500/10 px-4 py-2 text-cyan-400 font-bold">
          {value} {unit}
        </span>

      </div>

      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(values) => onChange(values[0])}
      />

      <div className="flex justify-between text-sm text-zinc-500">

        <span>
          {min} {unit}
        </span>

        <span>
          {max} {unit}
        </span>

      </div>

    </div>
  );
}