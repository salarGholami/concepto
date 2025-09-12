"use client";

import Image from "next/image";
import CompanyCard from "../molecules/CompanyCard";
import Button from "../atoms/Button";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRef, useState } from "react";

const companies = [
  {
    name: "شرکت علی بابا",
    category: "تجارت الکترونیک",
    description:
      "علی‌بابا برندی از هلدینگ پرافتخار توشا (توسعه تجربه شایسته سفر) است، سامانه‌ای که به‌واسطه پشتیبانی و حمایت شما در سکوی اول گردشگری کشور ایستاده.",
    logo: "/images/brands/brand-logos/alibaba.png",
    image: "/images/brands/brand-images/alibaba.png",
    investors: 234,
    audience: 26750,
    location: "تهران، ایران",
    star: 4.5,
  },
  {
    name: "کارگزاری فارابی",
    category: "تجارت الکترونیک",
    description:
      "کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد بورسی را ارائه می‌کند؛ همه این خدمات در کارگزاری فارابی به‌صورت غیرحضوری در اختیار شماست..",
    logo: "/images/brands/brand-logos/kargozari-farabi.png",
    image: "/images/brands/brand-images/kargozari-farabi.png",
    investors: 391,
    audience: 29130,
    star: 4.6,
    location: "تهران، ایران",
  },
  {
    name: "شرکت دیجی کالا",
    category: "تجارت الکترونیک",
    description:
      "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! جدیدترین انواع گوشی موبایل، لپ تاپ، لباس، لوازم آرایشی و بهداشتی، کتاب، لوازم خانگی، خودرو و.",
    logo: "/images/brands/brand-logos/digikala.png",
    image: "/images/brands/brand-images/digikala.png",
    investors: 442,
    audience: 25120,
    location: "تهران، ایران",
    star: 5,
  },
  {
    name: "شرکت اسنپ",
    category: "تجارت الکترونیک",
    description:
      "از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، مشاوره‌ی پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.",
    logo: "/images/brands/brand-logos/snap.png",
    image: "/images/brands/brand-images/snap.png",
    investors: 398,
    audience: 21349,
    star: 4.1,
    location: "تهران، ایران",
  },
];

export default function PopularCompaniesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // سرعت حرکت
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative pr-8 md:pr-0 md:px-8 py-12 w-full h-[50%] md:h-[78%] rounded-b-3xl">
      {/* تصویر بک‌گراند */}
      <Image
        src="/images/baner/ai.png"
        alt="background"
        fill
        priority
        className="w-full -z-10"
      />

      {/* محتوا */}
      <div className="lg:mx-40 relative top-16 md:top-28">
        {/* هدر سکشن */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-white text-2xl font-bold">شرکت‌های محبوب</h2>
          <Button className="text-white border-0 bg-transparent flex justify-center items-center gap-1 hover:bg-transparent">
            <span className="hidden md:inline">مشاهده همه</span>
            <MdOutlineKeyboardArrowLeft size={30} />
          </Button>
        </div>

        {/* کارت‌ها */}
        <div
          ref={scrollRef}
          className="flex justify-around gap-6 overflow-x-auto scrollbar-hide lg:mx-20 cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {companies.map((company, i) => (
            <CompanyCard key={i} {...company} />
          ))}
        </div>
      </div>
    </section>
  );
}
