type TextareaFieldProps = {
  label: string;
  placeholder?: string;
  defaultValue?: string;
};

export default function TextareaField({
  label,
  placeholder,
  defaultValue,
}: TextareaFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <textarea
        rows={5}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
      />
    </div>
  );
}