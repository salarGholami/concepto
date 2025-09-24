"use client";

type CategoryLabelProps = {
  text: string;
};

export default function CategoryLabel({ text }: CategoryLabelProps) {
  return (
    <span className="mt-2 text-sm md:text-base font-medium text-neutral-800 text-center">
      {text}
    </span>
  );
}
