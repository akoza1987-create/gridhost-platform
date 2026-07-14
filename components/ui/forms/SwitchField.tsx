type SwitchFieldProps = {
  label: string;
  defaultChecked?: boolean;
};

export default function SwitchField({
  label,
  defaultChecked = false,
}: SwitchFieldProps) {
  return (
    <label className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950 px-4 py-3">
      <span className="text-white">
        {label}
      </span>

      <input
        type="checkbox"
        defaultChecked={defaultChecked}
      />
    </label>
  );
}