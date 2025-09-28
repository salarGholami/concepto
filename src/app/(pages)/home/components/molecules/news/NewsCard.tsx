"use client";

import Image from "next/image";
import truncateText from "@/utils/truncateText";
import { MdOutlineDateRange } from "react-icons/md";

interface NewsCardProps {
  name: string;
  category: string;
  description: string;
  image: string;
  news: {
    title: string;
    description: string;
    date: string | Date;
    pic?: string;
    author: { name: string; avatar: string };
  };
}

export default function NewsCard({
  name,
  category,
  description,
  image,
  news,
}: NewsCardProps) {
  return (
    <div className="w-full flex-shrink-0 rounded-2xl bg-white shadow-md overflow-hidden">
      {/* تصویر بک‌گراند کارت */}
      <div className="relative h-56 w-full">
        <Image src={image} alt={name} fill className="object-cover" priority />
      </div>

      {/* محتوا */}
      <div className="space-y-3 p-4">
        {/* دسته‌بندی و عنوان خبر */}
        <div className="flex flex-col gap-1">
          <span className="text-sm font-thin text-neutral-500">{category}</span>
          <span className="text-xl font-bold">{news.title}</span>
        </div>

        {/* توضیحات */}
        <div className="flex flex-col pt-2 font-thin text-neutral-500">
          <span className="text-base text-neutral-600">
            {truncateText(description, 119)}
          </span>

          {/* نویسنده و تاریخ */}
          <div className="flex justify-between mt-8 items-center text-neutral-400">
            <span className="flex items-center gap-2 text-sm">
              {/* آواتار نویسنده */}
              <div className="w-8 h-8 relative rounded-full overflow-hidden">
                <Image
                  src={news.author.avatar}
                  alt={news.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              {news.author.name}
            </span>

            <span className="flex items-center gap-1 text-base">
              <MdOutlineDateRange />
              <span>
                {new Date(news.date).toLocaleDateString("fa-IR", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
