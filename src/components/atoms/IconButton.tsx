import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  ariaLabel: string;
}

export default function IconButton({
  icon,
  onClick,
  ariaLabel,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="p-2 border rounded-lg"
    >
      {icon}
    </button>
  );
}
