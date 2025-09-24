"use client";

import CategoryImage from "../../atom/category/CategoryImage";
import CategoryLabel from "../../atom/category/CategoryLabel";


type CategoryCardProps = {
  src: string;
  alt: string;
  label: string;
};

export default function CategoryCard({ src, alt, label }: CategoryCardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:scale-105 transition-transform">
      <CategoryImage src={src} alt={alt} />
      <CategoryLabel text={label} />
    </div>
  );
}
