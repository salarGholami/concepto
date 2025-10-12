"use client";

import Image from "next/image";
import React from "react";

interface ImageBoxProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, alt, className }) => {
  return (
    <div className={`flex justify-center items-center ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        className="rounded-lg"
      />
    </div>
  );
};

export default ImageBox;
