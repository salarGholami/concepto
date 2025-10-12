"use client";

import Heading from "@/app/(pages)/home/components/atom/landing/Heading";
import Button from "@/components/common/atoms/Button";
import HeroDescription from "../../molecules/hero/HeroDescription";

export default function HeroSection() {
  return (
    <div className="relative z-10 container mx-auto py-20 text-center flex flex-col gap-6 items-center">
      <div className="mb-6 flex flex-col gap-4">
        {" "}
        <Heading className="text-black">
          با سرچ کمتر بهترین نتیجرو بگیر!
        </Heading>
        <HeroDescription />
      </div>
      <div className="flex gap-4 items-center">
        <svg
          width="60"
          height="44"
          viewBox="0 0 37 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.981 1.25865C35.9233 4.87745 34.7094 16.7105 27.8857 15.0149C25.9531 14.5347 23.4698 11.4911 25.2062 9.51786C27.5216 6.8865 30.4062 11.1303 30.26 13.3314C29.8749 19.1298 22.8554 22.4665 17.7811 22.4943C13.5197 22.5177 9.47614 20.3512 6.15479 17.8733C4.59678 16.7109 3.78368 15.0433 2.34648 13.8389C0.123067 11.9758 2.1161 15.5498 2.326 17.1169C2.7549 20.319 2.21967 15.0979 2.06536 13.9948C1.81075 12.1746 6.3753 12.7325 8.12306 12.6581"
            stroke="#0D6EFD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <Button variant="outline">مشاهده بیشتر</Button>
      </div>
    </div>
  );
}
