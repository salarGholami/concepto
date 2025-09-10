"use client";

type StatLabelProps = {
  text: string;
};

export default function StatLabel({ text }: StatLabelProps) {
  return (
    <span className="text-sm md:text-xl font-bold text-neutral-800">
      {text}
    </span>
  );
}
