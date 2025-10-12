import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-neutral-50 z-10  rounded-2xl p-6 sm:p-8 shadow-[0_6px_24px_rgba(14,30,37,0.06)] ${className}`}
      dir="rtl"
    >
      {children}
    </div>
  );
}
