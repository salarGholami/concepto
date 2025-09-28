"use client";

import Image from "next/image";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Button from "@/components/common/atoms/Button";
import { companies } from "@/data/company";
import NewsCard from "../../molecules/news/NewsCard";


export default function LastNewsSection() {
  return (
    <section className="relative w-full rounded-b-3xl py-12 pr-8 md:px-8 md:pr-0">
      {/* Background */}
      <Image
        src="/images/baner/ai.png"
        alt="AI background"
        fill
        priority
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Content */}
      <div className="relative top-16 md:top-28 lg:mx-40">
        {/* Section Header */}
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">تازه ترین اخبار</h2>
          <Button
            variant="outline"
            className="flex items-center gap-1 border-0 bg-transparent text-white hover:bg-transparent"
          >
            <span className="hidden md:inline">مشاهده همه</span>
            <MdOutlineKeyboardArrowLeft size={30} />
          </Button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          navigation
          className="pb-10"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={company.name + index}>
              <NewsCard
                name={company.name}
                category={company.categoryId}
                description={company.news.description}
                image={company.news.pic}
                news={company.news}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
