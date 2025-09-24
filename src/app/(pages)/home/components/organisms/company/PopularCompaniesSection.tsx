"use client";

import Image from "next/image";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "@/components/common/atoms/Button";
import CompanyCard from "../../molecules/company/CompanyCard";

const companies = [
  {
    name: "شرکت علی بابا",
    category: "تجارت الکترونیک",
    description:
      "علی‌بابا برندی از هلدینگ پرافتخار توشا است، سامانه‌ای که به‌واسطه پشتیبانی شما در سکوی اول گردشگری کشور ایستاده.",
    logo: "/images/brands/brand-logos/full/alibaba.png",
    image: "/images/brands/brand-images/alibaba.png",
    investors: 234,
    audience: 26750,
    location: "تهران ، ایران",
    star: 4.5,
  },
  {
    name: "شرکت علی بابا",
    category: "تجارت الکترونیک",
    description:
      "علی‌بابا برندی از هلدینگ پرافتخار توشا است، سامانه‌ای که به‌واسطه پشتیبانی شما در سکوی اول گردشگری کشور ایستاده.",
    logo: "/images/brands/brand-logos/full/alibaba.png",
    image: "/images/brands/brand-images/alibaba.png",
    investors: 234,
    audience: 26750,
    location: "تهران ، ایران",
    star: 4.5,
  },
  {
    name: "کارگزاری فارابی",
    category: "تجارت الکترونیک",
    description:
      "کارگزاری بورس خدماتی شامل خرید و فروش سهام و دریافت کد بورسی را ارائه می‌کند؛ همه این خدمات به‌صورت غیرحضوری در اختیار شماست.",
    logo: "/images/brands/brand-logos/full/kargozari-farabi.png",
    image: "/images/brands/brand-images/kargozari-farabi.png",
    investors: 391,
    audience: 29130,
    star: 4.6,
    location: "تهران ، ایران",
  },
  {
    name: "شرکت دیجی کالا",
    category: "تجارت الکترونیک",
    description:
      "هر آنچه که نیاز دارید با بهترین قیمت از دیجی‌کالا بخرید! موبایل، لپ‌تاپ، لباس، لوازم خانگی و...",
    logo: "/images/brands/brand-logos/full/digikala.png",
    image: "/images/brands/brand-images/digikala.png",
    investors: 442,
    audience: 25120,
    location: "تهران ، ایران",
    star: 5,
  },
  {
    name: "شرکت اسنپ",
    category: "تجارت الکترونیک",
    description:
      "از درخواست خودرو گرفته تا سفارش غذا، خرید بلیط سفر و رزرو هتل را میتوانید با سوپراپلیکیشن اسنپ انجام دهید.",
    logo: "/images/brands/brand-logos/full/snap.png",
    image: "/images/brands/brand-images/snap.png",
    investors: 398,
    audience: 21349,
    star: 4.1,
    location: "تهران ، ایران",
  },
];

export default function PopularCompaniesSection() {
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

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={55} 
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 0 },
            1024: { slidesPerView: 4, spaceBetween: 0 },
          }}
          className="pb-10"
        >
          {companies.map((company, i) => (
            <SwiperSlide key={i}>
              <CompanyCard {...company} isLast={i === companies.length - 1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
