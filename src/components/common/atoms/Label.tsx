"use client";

type LabelProps = {
  text: string;
  className?: string;
};

export default function Label({ text, className }:LabelProps) {
  return (
    <span
      className={`text-sm md:text-xl ${className || ""}`}
    >
      {text}
    </span>
  );
}
