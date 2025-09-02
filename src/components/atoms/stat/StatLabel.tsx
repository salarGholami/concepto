"use client";

type StatLabelProps = {
  text: string;
};

export default function StatLabel({ text }: StatLabelProps) {
  return <span className="text-sm text-bold md:text-xl text-neutral-800">{text}</span>;
}
