"use client";

import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={`text-2xl md:text-5xl font-extrabold leading-snug text-primary-shade-700 ${
        className ?? ""
      }`}
    >
      {children}
    </h1>
  );
}
