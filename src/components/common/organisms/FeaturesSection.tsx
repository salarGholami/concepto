"use client";

import FeatureCard from "../molecules/FeatureCard";

const featuresData = [
  {
    id: 1,
    icon: "/images/stats/Button container.png",
    alt: "company",
    title: "شرکت‌های مورد علاقه‌ت رو پیدا کن",
    bgColor: "bg-primary-tint-300",
  },
  {
    id: 2,
    icon: "/images/stats/Card.png",
    alt: "company",
    title: "کسب و کارهای مناسب رو پیدا کن",
    bgColor: "bg-primary-tint-500",
  },
  {
    id: 3,
    icon: "/images/stats/Button container2.png",
    alt: "company",
    title: "با کسب و کارها ارتباط بگیر",
    bgColor: "bg-primary-tint-800",
  },
];

export default function FeaturesSection() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-6 md:gap-8 my-20 lg:mt-40 w-full">
      {featuresData.map((feature) => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          alt={feature.alt}
          title={feature.title}
          bgColor={feature.bgColor}
        />
      ))}
    </div>
  );
}
