"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Button from "@/components/common/atoms/Button";

const jobs = [
  {
    logo: "/images/brands/brand-logos/small/alibaba.png",
    company: "گروه علی بابا",
    jobCount: 18,
  },
  {
    logo: "/images/brands/brand-logos/small/bimeh-bazar.png",
    company: "بیمه بازار",
    jobCount: 14,
  },
  {
    logo: "/images/brands/brand-logos/small/kargozari-farabi.png",
    company: "کارگزاری فارابی",
    jobCount: 11,
  },
  {
    logo: "/images/brands/brand-logos/small/asia-tek.png",
    company: "آسیاتک",
    jobCount: 16,
  },
  {
    logo: "/images/brands/brand-logos/small/blue-cart.png",
    company: "بلو بانک",
    jobCount: 12,
  },
  {
    logo: "/images/brands/brand-logos/small/blue-cart.png",
    company: "بلو بانک",
    jobCount: 12,
  },
];

export default function JobOpportunitiesSection() {
  return (
    <section className="mx-6 md:mx-20 lg:mx-40 py-12 relative">
      <div className="hidden md:flex items-center justify-center gap-4 mb-12">
        <span className="text-neutral-900 text-2xl font-semibold">
          فرصت‌های شغلی
        </span>
        <div className="border-t border-gray-300 flex-1"></div>
      </div>

      <div className="flex md:hidden items-center mb-10 w-full">
        <Button className="text-neutral-950 border-0 bg-transparent w-full flex items-center">
          <span className="inline md:hidden text-neutral-950">
            فرصت‌های شغلی
          </span>
          <MdOutlineKeyboardArrowLeft
            size={30}
            className="text-neutral-950 mr-auto"
          />
        </Button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 24 },
        }}
        className="job-swiper relative"
      >
        {jobs.map((job, index) => (
          <SwiperSlide key={index} className="relative overflow-visible pt-10">
            <div className="relative bg-[#F6F6F6] rounded-xl shadow-md px-4 pt-10 pb-6 flex flex-col items-center gap-3 overflow-visible">
              <div className="absolute -top-10 w-20 h-20 flex items-center justify-center z-10">
                <div className="w-full h-full relative">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              <span className="text-sm text-gray-500 pt-8">
                {job.jobCount} فرصت شغلی
              </span>
              <h3 className="text-base font-semibold text-center text-primary">
                {job.company}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        /* فلش‌ها */
        .job-swiper :global(.swiper-button-prev),
        .job-swiper :global(.swiper-button-next) {
          background: white;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
          transform: translateY(-50%);
        }

        .job-swiper :global(.swiper-button-prev) {
          left: -16px; /* فاصله از چپ */
        }

        .job-swiper :global(.swiper-button-next) {
          right: -16px; /* فاصله از راست */
        }

        /* رنگ فلش ها */
        .job-swiper :global(.swiper-button-prev)::after,
        .job-swiper :global(.swiper-button-next)::after {
          color: #4b5563; /* gray-700 */
          font-size: 1.25rem; /* 20px */
        }

        /* hover */
        .job-swiper :global(.swiper-button-prev:hover),
        .job-swiper :global(.swiper-button-next:hover) {
          background: #f3f4f6; /* gray-100 */
        }
      `}</style>
    </section>
  );
}
