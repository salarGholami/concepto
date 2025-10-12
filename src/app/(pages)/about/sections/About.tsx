"use client";

import HeroSection from "../components/organism/hero/HeroSection";
import ServicesSection from "../components/organism/services/ServicesSection";

// import DecorativeCircle from "../../../../components/common/atoms/DecorativeCircle";


export default function AboutPage() {
  return (
    <section className="relative bg-neutral-50 overflow-hidden">
      {/* دایره‌های تزئینی در سطح صفحه */}
      {/* <DecorativeCircle className="absolute top-60 -left-20 w-96 h-96 bg-blue-300 blur-3xl" /> */}
      {/* <DecorativeCircle className="absolute bottom-20 right-0 w-[500px] h-[1700px] bg-blue-300 blur-3xl" /> */}

      {/* محتوای اصلی */}
      <div className="z-10">
        <div>
          <HeroSection />
        </div>
        <div className="">
          <ServicesSection />
        </div>
      </div>
    </section>
  );
}
