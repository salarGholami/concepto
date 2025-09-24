"use client";

import Image from "next/image";

type CategoryImageProps = {
  src: string;
  alt: string;
};

export default function CategoryImage({ src, alt }: CategoryImageProps) {
  return (
    <div className="w-20 h-20 md:w-24 p-1 md:h-24 rounded-full border-2 border-primary flex items-center justify-center overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={100} 
        height={100}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
