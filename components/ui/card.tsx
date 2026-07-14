import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/10
        bg-zinc-900/60
        p-6
        ${className}
      `}
    >
      {children}
    </div>
  );
}