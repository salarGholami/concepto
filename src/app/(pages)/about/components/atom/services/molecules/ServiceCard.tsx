import React from "react";
import IconBadge from "@/components/common/atoms/IconBadge";
import Card from "../atom/Card";
import { Service } from "@/types/services";
import { MdOutlineDiamond } from "react-icons/md";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 ">
      <div className="flex flex-col gap-4">
        <IconBadge Icon={MdOutlineDiamond} />
        <h3 className="font-bold text-xl">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          {service.description}
        </p>
      </div>
    </Card>
  );
}
