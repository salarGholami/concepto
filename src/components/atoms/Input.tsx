import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`w-full pr-9 pl-3 py-2 bg-neutral-100 rounded-lg outline-none text-sm ${props.className}`}
    />
  );
}
