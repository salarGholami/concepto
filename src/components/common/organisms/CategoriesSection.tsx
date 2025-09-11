"use client";

import CategoryCard from "../molecules/CategoryCard";

const categories = [
  { src: "/images/categories/space.png", alt: "aerospace", label: "هوافضا" },
  { src: "/images/categories/media.png", alt: "media", label: "رسانه‌ها" },
  { src: "/images/categories/graphic.png", alt: "graphic", label: "گرافیک" },
  {
    src: "/images/categories/accounting.png",
    alt: "accounting",
    label: "حسابداری",
  },
  { src: "/images/categories/crypto.png", alt: "crypto", label: "ارز دیجیتال" },
  {
    src: "/images/categories/programming.png",
    alt: "programming",
    label: "برنامه‌نویسی",
  },
  { src: "/images/categories/ai.png", alt: "ai", label: "هوش مصنوعی" },
  {
    src: "/images/categories/transport.png",
    alt: "transport",
    label: "حمل و نقل",
  },
  {
    src: "/images/categories/cinema.png",
    alt: "cinema",
    label: "فیلم و سینما",
  },
  {
    src: "/images/categories/biotech.png",
    alt: "biotech",
    label: "بیوتکنولوژی",
  },
  { src: "/images/categories/music.png", alt: "music", label: "موسیقی" },
  { src: "/images/categories/science.png", alt: "science", label: "علمی" },
  {
    src: "/images/categories/ecommerce.png",
    alt: "ecommerce",
    label: "تجارت الکترونیک",
  },
  { src: "/images/categories/medical.png", alt: "medical", label: "پزشکی" },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-12">
      {/* عنوان */}

      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="text-neutral-900 text-2xl">دسته بندی ها</span>
        <div className="border-t border-gray-300 flex-1"></div>
      </div>
      {/* لیست دسته‌ها */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 md:gap-10">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            src={category.src}
            alt={category.alt}
            label={category.label}
          />
        ))}
      </div>
    </section>
  );
}
