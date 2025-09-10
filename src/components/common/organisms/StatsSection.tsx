"use client";

import FeatureCard from "../molecules/FeatureCard";
import StatItem from "../molecules/StatItem";

const statsData = [
  { value: 112610, label: "شرکت فعال" },
  { value: 11, label: "میلیارد تومان سرمایه گذاری" },
  { value: 496, label: "سرمایه گذار" },
];

const features = [
  {
    id: 1,
    title: "شرکت‌های مورد علاقت رو پیدا کن",
    image: "/images/stat/Button container.png",
    bgColor: "bg-primary-tint-300",
  },
  {
    id: 2,
    title: "کسب و کارهای مناسب رو پیدا کن",
    image: "/images/stat/Card.png",
    bgColor: "bg-primary-tint-500",
  },
  {
    id: 3,
    title: "با کسب و کارها ارتباط بگیر",
    image: "/images/stat/Button container2.png",
    bgColor: "bg-primary-tint-800",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-10">
      {/* بخش آمار */}
      <div className="flex flex-col  md:flex-row justify-center md:justify-evenly md:items-center gap-8">
        {statsData.map((stat, index) => (
          <StatItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>

      {/* بخش فیچرها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-32 md:gap-x-10 mt-56 lg:mx-56">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            image={feature.image}
            bgColor={feature.bgColor}
          />
        ))}
      </div>
    </section>
  );
}
