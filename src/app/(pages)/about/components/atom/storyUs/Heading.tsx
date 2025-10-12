"use client";

import React, { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, className }) => {
  return (
    <h2
      className={`text-xl md:text-2xl font-bold text-gray-900 ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
};

export default Heading;
