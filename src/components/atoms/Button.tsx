import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
}

export default function  Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const base =
    "flex items-center gap-1 rounded-lg text-sm px-3 py-2 transition";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "border hover:bg-gray-100";

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
