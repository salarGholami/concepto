"use client";

import StatLabel from "../atoms/stat/StatLabel";
import StatNumber from "../atoms/stat/StatNumber";

type StatItemProps = {
  value: number;
  label: string;
};

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        <div className="absolute w-14 h-14 rounded-full bg-yellow-200" />
        <StatNumber value={value} />
      </div>
      <StatLabel text={label} />
    </div>
  );
}
