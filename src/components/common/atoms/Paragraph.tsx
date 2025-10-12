"use client";

import React, { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  return (
    <p
      className={`text-gray-600 leading-relaxed text-base md:text-lg ${
        className || ""
      }`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
