import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  disabled,
  ...rest
}: ButtonProps) {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center";

  const variantStyle =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary/90 cursor-pointer"
      : "border border-primary text-primary hover:bg-primary hover:text-white cursor-pointer";

  const disabledStyle =
    "bg-gray-300 text-gray-500 border-gray-300 opacity-50 cursor-not-allowed";

  return (
    <button
      disabled={disabled}
      className={`${baseStyle} ${
        disabled ? disabledStyle : variantStyle
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
