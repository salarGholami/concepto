import React from "react";
import { IconType } from "react-icons";

type IconBadgeProps = {
  Icon: IconType;
  size?: number;
  className?: string;
};

export default function IconBadge({
  Icon,
  size = 18,
  className = "",
}: IconBadgeProps) {
  return (
    <div
      className={`w-10 h-10 rounded-md flex items-center justify-center bg-primary-tint-100  ${className}`}
      aria-hidden
    >
      <Icon size={size} className="text-primary" />
    </div>
  );
}
