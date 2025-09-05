"use client";

import Image from "next/image";

interface FeatureCardProps {
  title: string;
  image: string;
  bgColor?: string;
  className?: string;
}

export default function FeatureCard({
  title,
  image,
  bgColor = "bg-white",
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl h-32 shadow-sm max-w-4xl ${bgColor} ${className}`}
    >
      {/* تصویر */}
      <div className="absolute w-64 h-64 -mt-14">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
          priority
        />
        <h3 className="absolute bottom-0 w-full text-center text-base font-semibold text-gray-800">
          {title}
        </h3>
      </div>

      {/* متن */}
    </div>
  );
}
