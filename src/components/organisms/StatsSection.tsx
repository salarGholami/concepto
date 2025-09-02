"use client";

import StatItem from "../molecules/StatItem";

const statsData = [
  { value: 112610, label: "شرکت فعال" },
  { value: 11, label: "میلیارد تومان سرمایه گذاری" },
  { value: 496, label: "سرمایه گذار" },
];

export default function StatsSection() {
  return (
    <section className="w-full py-10">
      <div className="flex flex-col md:flex-row justify-center md:justify-evenly md:items-center gap-8">
        {statsData.map((stat, index) => (
          <StatItem key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
