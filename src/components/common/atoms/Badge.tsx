"use client";

import PersianNumber from "@/utils/PersianNumber";

interface BadgeProps {
  label: string;
  value: number;
}

export default function Badge({ label, value }: BadgeProps) {
  return (
    <div className="flex flex-col justify-around w-full  rounded-lg border-neutral-200 border px-3 py-2 text-sm gap-1">
      <span className="text-neutral-500">{label}</span>
      <span className="font-bold text-primary">
        <PersianNumber value={value} />
      </span>
    </div>
  );
}
