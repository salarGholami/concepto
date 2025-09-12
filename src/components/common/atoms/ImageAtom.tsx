"use client";

import Image from "next/image";

interface ImageAtomProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageAtom({ src, alt, className }: ImageAtomProps) {
  return (
    <Image src={src} alt={alt} width={400} height={200} className={className} />
  );
}
