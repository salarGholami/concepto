"use client";

import Image from "next/image";
import { events } from "@/data/events";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineCalendarToday,
  MdLocationOn,
} from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Button from "@/components/common/atoms/Button";

export default function RecentEventsSection() {
  return (
    <section className="py-6 mx-4 md:mx-40">
      <div className="mb-10 flex items-center">
        <h2 className="text-2xl font-bold text-neutral-900 whitespace-nowrap md:pl-4">
          رویداد های اخیر
        </h2>
        <div className="flex-1 border-t border-neutral-300"></div>
        <Button
          variant="outline"
          className="flex items-center gap-1 border-0 bg-transparent text-neutral-900 hover:bg-transparent whitespace-nowrap"
        >
          <span className="hidden md:inline text-neutral-900">مشاهده همه</span>
          <MdOutlineKeyboardArrowLeft size={30} className="text-neutral-900 " />
        </Button>
      </div>

      {/* موبایل: Swiper */}
      <div className="md:hidden">
        <Swiper spaceBetween={12} slidesPerView={1} navigation>
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="flex  border border-neutral-100 rounded-2xl shadow-sm overflow-hidden h-32">
                {/* تصویر */}
                <div className="relative w-1/3 h-full flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-fill" 
                    priority
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between p-4">
                  <div>
                    <h3 className="font-semibold text-base text-neutral-800 mb-1 line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mt-2">
                    <div className="flex items-center gap-1">
                      <MdOutlineCalendarToday size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MdLocationOn size={14} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* دسکتاپ: Grid */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex border border-neutral-100 rounded-2xl shadow-sm overflow-hidden h-48 hover:shadow-lg transition-shadow"
          >
            <div className="relative w-1/3 h-full flex-shrink-0">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-between p-4 flex-1">
              <div>
                <h3 className="font-semibold text-lg text-neutral-800 mb-2 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-sm text-neutral-600 line-clamp-3">
                  {event.description}
                </p>
              </div>
              <div className="flex justify-between mt-3 text-sm text-neutral-500">
                <div className="flex items-center gap-1">
                  <MdOutlineCalendarToday size={16} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MdLocationOn size={16} />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
