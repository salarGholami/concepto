"use client";

import Badge from "../atoms/Badge";

interface CompanyStatsProps {
  investors: number;
  audience: number;
}

export default function CompanyStats({
  investors,
  audience,
}: CompanyStatsProps) {
  return (
    <div className="flex justify-between w-full">
      <Badge label="مخاطبین جدید" value={audience} />
      <Badge label="سرمایه‌گذاران جدید" value={investors} />
    </div>
  );
}
