"use client";

import { forwardRef, InputHTMLAttributes } from "react";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={`w-full rounded-lg outline-none text-sm transition ${className}`}
    />
  );
});

Input.displayName = "Input";

export default Input;
