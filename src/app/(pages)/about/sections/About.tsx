"use client";

import DecorativeCircle from "../components/hero/atom/DecorativeCircle";
import AboutSection from "../components/hero/organism/AboutSection";

export default function AboutPage() {
  return (
    <section className="relative bg-neutral-50 overflow-hidden">
      {/* دایره‌های تزئینی در سطح صفحه */}
      <DecorativeCircle className="absolute top-32 -left-40 w-[500px] h-[500px] bg-blue-300/30 blur-3xl" />
      <DecorativeCircle className="absolute bottom-0 right-1/2 w-[400px] h-[400px] bg-blue-200/20 blur-2xl" />

      {/* محتوای اصلی */}
      <AboutSection />
    </section>
  );
}
