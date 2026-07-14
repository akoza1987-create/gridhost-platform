type ImageUploadFieldProps = {
  label: string;
};

export default function ImageUploadField({
  label,
}: ImageUploadFieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>

      <div className="rounded-xl border-2 border-dashed border-white/10 bg-zinc-950 p-10 text-center text-zinc-500">
        Kliknij lub przeciągnij obraz
      </div>
    </div>
  );
}