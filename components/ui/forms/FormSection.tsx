type FormSectionProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function FormSection({
  title,
  description,
  children,
}: FormSectionProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-zinc-400">
            {description}
          </p>
        )}
      </div>

      <div className="space-y-5">
        {children}
      </div>
    </div>
  );
}