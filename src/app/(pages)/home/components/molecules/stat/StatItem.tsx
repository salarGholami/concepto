"use client";

import Label from "@/components/common/atoms/Label";
import Number from "@/components/common/atoms/Number";


type StatItemProps = {
  value: number;
  label: string;
};

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex items-center">
        <div className="absolute w-14 h-14 rounded-full bg-yellow-200" />
        <Number
          value={value}
          className="z-10 font-bold text-neutral-800 mr-8"
        />
      </div>
      <Label text={label} className="font-bold text-neutral-800" />
    </div>
  );
}
