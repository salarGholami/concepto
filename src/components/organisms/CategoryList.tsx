"use client";

import CategoryItem from "../molecules/CategoryItem";

const categories = [
  { title: "هوافضا", image: "/images/categories/space.png" },
  { title: "رسانه‌ها", image: "/images/categories/media.png" },
  { title: "گرافیک", image: "/images/categories/graphic.png" },
  { title: "حسابداری", image: "/images/categories/accounting.png" },
  { title: "ارز دیجیتال", image: "/images/categories/crypto.png" },
  { title: "برنامه نویسی", image: "/images/categories/programming.png" },
  { title: "هوش مصنوعی", image: "/images/categories/ai.png" },
  { title: "حمل و نقل", image: "/images/categories/transport.png" },
  { title: "فیلم و سینما", image: "/images/categories/cinema.png" },
  { title: "بیوتکنولوژی", image: "/images/categories/biotech.png" },
  { title: "موسیقی", image: "/images/categories/music.png" },
  { title: "علمی", image: "/images/categories/science.png" },
  { title: "تجارت الکترونیک", image: "/images/categories/ecommerce.png" },
  { title: "پزشکی", image: "/images/categories/medical.png" },
];

export default function CategoryList() {
  return (
    <section className="w-full py-6">
      <div className="flex items-center justify-center gap-4 mt-6 md:mt-8 md:mx-32">
        <span className="text-neutral-500 text-lg md:text-xl mb-8">دسته بندی ها</span>
        <div className="border-t border-gray-300 flex-1"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {categories.map((cat, index) => (
          <CategoryItem key={index} title={cat.title} image={cat.image} />
        ))}
      </div>
    </section>
  );
}
