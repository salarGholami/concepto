"use client";

interface TextAtomProps {
  text: string;
}

export default function TextAtom({ text }: TextAtomProps) {
  return (
    <p className="text-sm font-medium text-[#2A2A2A] text-center mt-2">
      {text}
    </p>
  );
}
