"use client";

import PersianNumber from "../PersianNumber";


type StatNumberProps = {
  value: number;
  className?: string;
};

export default function StatNumber({ value, className }: StatNumberProps) {
  return (
    <span
      className={`z-10 font-bold text-2xl md:text-3xl text-black mr-8 ${
        className || ""
      }`}
    >
      <PersianNumber value={value} />+
    </span>
  );
}
