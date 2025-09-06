"use client";

import Image from "next/image";

interface ImageAtomProps {
  src: string;
  alt: string;
  size?: number;
}

export default function ImageAtom({ src, alt, size = 80 }: ImageAtomProps) {
  return (
    <div
      className="relative rounded-full border-2 border-blue-500 p-1 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-full"
        sizes={`${size}px`}
      />
    </div>
  );
}
