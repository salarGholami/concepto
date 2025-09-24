"use client";

import PersianNumber from "@/utils/PersianNumber";


type StatNumberProps = {
  value: number;
  className?: string;
};

export default function Number({ value, className }: StatNumberProps) {
  return (
    <span
      className={`z-10 text-2xl md:text-3xl ${
        className || ""
      }`}
    >
      <PersianNumber value={value} />+
    </span>
  );
}
