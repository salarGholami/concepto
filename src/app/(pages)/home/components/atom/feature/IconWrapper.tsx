"use client";

import Image from "next/image";
import CardTitle from "./CardTitle";

type IconWrapperProps = {
  src: string;
  alt: string;
  text: string;
};

export default function IconWrapper({ src, alt, text }: IconWrapperProps) {
  return (
    <div className="w-full flex flex-col items-center absolute -top-20 md:-top-27 overflow-hidden">
      <div className="relative w-full h-40 md:h-60 rounded-2xl overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="100%"
        />
      </div>
      <CardTitle text={text} />
    </div>
  );
}
