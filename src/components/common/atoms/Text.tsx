// components/common/atoms/Text.tsx
import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return (
    <p
      className={`text-sm md:text-xl text-primary-shade-500 ${className || ""}`}
    >
      {children}
    </p>
  );
}
