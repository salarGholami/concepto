"use client";

import IconWrapper from "../atoms/IconWrapper";

type FeatureCardProps = {
  icon: string;
  alt: string;
  title: string;
  bgColor: string;
  children?: React.ReactNode;
};

export default function FeatureCard({
  icon,
  alt,
  title,
  bgColor,
  children,
}: FeatureCardProps) {
  return (
    <div
      className={`relative flex flex-col items-center h-20 md:h-32 justify-between w-full md:w-1/3 p-4 my-16 rounded-4xl shadow-md ${bgColor}`}
    >
      {/* آیکون + عنوان */}
      <IconWrapper src={icon} alt={alt} text={title} />

      {/* محتوای وسط (مثلاً سرچ یا دکمه‌ها) */}
      <div className="w-full flex justify-center items-center mt-4">
        {children}
      </div>
    </div>
  );
}
