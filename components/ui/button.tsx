import { ButtonHTMLAttributes } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "danger";

type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-cyan-500 text-black hover:bg-cyan-400",

    secondary:
      "bg-zinc-800 text-white hover:bg-zinc-700",

    outline:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black",

    success:
      "bg-green-500 text-black hover:bg-green-400",

    danger:
      "bg-red-500 text-white hover:bg-red-400",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        font-semibold
        transition-all
        duration-200
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}