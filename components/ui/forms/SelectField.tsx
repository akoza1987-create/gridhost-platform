type Option = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  options: Option[];
  defaultValue?: string;
};

export default function SelectField({
  label,
  options,
  defaultValue,
}: SelectFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <select
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}