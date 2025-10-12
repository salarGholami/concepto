"use client";

import React from "react";

interface DecorativeCircleProps {
  className?: string;
}

export default function DecorativeCircle({ className }: DecorativeCircleProps) {
  return <div className={`absolute rounded-full ${className}`} />;
}
