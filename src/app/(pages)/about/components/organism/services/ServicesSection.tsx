"use client";

import React from "react";
import { services } from "@/data/services";
import ServiceCard from "../../atom/services/molecules/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="w-full md:py-16 z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
