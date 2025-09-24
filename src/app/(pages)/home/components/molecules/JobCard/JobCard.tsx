"use client";

import ImageLogo from "@/components/common/atoms/ImageLogo";
import Text from "@/components/common/atoms/Text";



interface JobCardProps {
  logo: string;
  company: string;
  jobCount: number;
}

export default function JobCard({ logo, company, jobCount }: JobCardProps) {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md ">
      <ImageLogo src={logo} alt={company} />
      <Text className="mt-2 text-gray-800 font-medium">
        {jobCount} فرصت شغلی
      </Text>
      <Text className="mt-1 text-blue-600 text-sm">{company}</Text>
    </div>
  );
}
