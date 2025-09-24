"use client";

import Image from "next/image";

interface ImageLogoProps {
  src: string;
  alt: string;

}

export default function ImageLogo({ src, alt }: ImageLogoProps) {
  return <Image src={src} alt={alt}  className="object-contain"/>;
}
