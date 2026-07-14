type CheckboxFieldProps = {
  label: string;
  defaultChecked?: boolean;
};

export default function CheckboxField({
  label,
  defaultChecked = false,
}: CheckboxFieldProps) {
  return (
    <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-zinc-950 p-4">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
      />

      <span className="text-white">
        {label}
      </span>
    </label>
  );
}