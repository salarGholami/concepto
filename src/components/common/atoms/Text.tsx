import { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
};

export default function Text({ children, className }: TextProps) {
  return <p className={`text-sm md:text-xl ${className || ""}`}>{children}</p>;
}
