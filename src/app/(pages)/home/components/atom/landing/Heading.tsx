"use client";

import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1
      className={`text-2xl md:text-5xl font-extrabold leading-snug ${
        className ?? ""
      }`}
    >
      {children}
    </h1>
  );
}
