"use client";

import Image from "next/image";
import CompanyStats from "../atoms/CompanyStats";
import { CiLocationOn } from "react-icons/ci";

interface CompanyCardProps {
  name: string;
  category: string;
  description: string;
  logo: string;
  image: string;
  investors: number;
  audience: number;
  location: string;
  star: number;
}

export default function CompanyCard({
  name,
  category,
  description,
  logo,
  image,
  investors,
  audience,
  location,
  star,
}: CompanyCardProps) {
  return (
    <div className="w-80 flex-shrink-0 rounded-2xl bg-white shadow-md overflow-hidden">
      {/* تصویر بک‌گراند کارت */}
      <div className="relative h-40 w-full">
        <Image src={image} alt={name} fill className="object-cover" priority />
      </div>

      {/* محتوا */}
      <div className="p-4 space-y-3">
        {/* لوگو و نام */}
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={80}
            height={40}
            className="rounded-md -mt-8 z-10"
          />
          <div className="flex flex-col">
            <span className="font-bold text-lg">{name}</span>
            <span className="text-sm font-thin text-neutral-500">
              {category}
            </span>
          </div>
        </div>

        {/* آمار */}
        <CompanyStats investors={investors} audience={audience} />

        {/* مکان و امتیاز */}
        <div className="flex flex-col text-neutral-500 pt-2 font-thin">
          {/* توضیحات */}
          <span className="text-neutral-600 text-sm">{description}</span>
          <div className="flex justify-between pt-2 text-neutral-400">
            <span className="flex items-center gap-1">
              <CiLocationOn />
              {location}
            </span>
            <span className="flex items-center gap-1 ">
              ⭐ <span>{star}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
