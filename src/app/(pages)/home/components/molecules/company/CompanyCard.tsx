"use client";

import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import CompanyStats from "../../atom/company/CompanyStats";
import PersianNumber from "@/utils/PersianNumber";
import truncateText from "@/utils/truncateText";
import { categories } from "@/data/categories";

interface CompanyCardProps {
  name: string;
  categoryId: string;
  description: string;
  logo: string;
  image: string;
  investors: number;
  audience: number;
  location: string;
  star: number;
  isLast?: boolean;
}

export default function CompanyCard({
  name,
  categoryId,
  description,
  logo,
  image,
  investors,
  audience,
  location,
  star,
  isLast,
}: CompanyCardProps) {

  return (
    <div
      className={`group w-90 flex-shrink-0 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition overflow-hidden transform hover:-translate-y-2 duration-300 ${
        !isLast ? "border-r border-gray-200" : ""
      }`}
    >
      {/* تصویر */}
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          priority
        />
      </div>

      {/* محتوا */}
      <div className="p-5 space-y-4 relative">
        {/* لوگو + نام */}
        <div className="flex items-center -mt-10 gap-3">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={64}
            height={32}
            className="rounded-md bg-white shadow-md"
          />
          <div className="flex flex-col mt-5">
            <span className="font-bold text-lg text-neutral-800">{name}</span>
            <span className="text-sm text-neutral-500">{categoryId}</span>
          </div>
        </div>

        {/* آمار */}
        <CompanyStats investors={investors} audience={audience} />

        {/* توضیحات */}
        <div className="flex flex-col text-neutral-600 pt-2">
          <span className="text-sm leading-relaxed">
            {truncateText(description, 85)}
          </span>
          <div className="flex justify-between items-center pt-3 text-sm text-neutral-500">
            <span className="flex items-center gap-1">
              <CiLocationOn className="text-neutral-400" />
              {location}
            </span>
            <span className="flex items-center gap-1 font-medium">
              ⭐ <PersianNumber value={star} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
