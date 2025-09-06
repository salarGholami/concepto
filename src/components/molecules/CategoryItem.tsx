"use client";

import ImageAtom from "../atoms/ImageAtom";
import TextAtom from "../atoms/TextAtom";

interface CategoryItemProps {
  title: string;
  image: string;
}

export default function CategoryItem({ title, image }: CategoryItemProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 cursor-pointer hover:scale-105 transition-transform">
      <ImageAtom src={image} alt={title} />
      <TextAtom text={title} />
    </div>
  );
}
