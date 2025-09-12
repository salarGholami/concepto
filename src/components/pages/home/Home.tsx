// components/pages/home/HomeSection.tsx
import Hero from "@/components/common/organisms/Hero";
import BrandShowcase from "@/components/common/organisms/BrandShowcase";
import StatsSection from "@/components/common/organisms/StatsSection";
import FeaturesSection from "@/components/common/organisms/FeaturesSection";
import CategoriesSection from "@/components/common/organisms/CategoriesSection";
import PopularCompaniesSection from "@/components/common/organisms/PopularCompaniesSection";

export default function HomeSection() {
  return (
    <div className="grid grid-cols-12 gap-8">
      <Hero />
      <BrandShowcase />
      <div className="col-span-12 w-full">
        <div className="flex flex-col justify-center mx-10">
          <div>
            <StatsSection />
          </div>
          <div className="lg:mx-40">
            <FeaturesSection />
          </div>
        </div>
      </div>
      <div className="col-span-12 w-full">
        <div className="flex flex-col justify-center mx-10 ">
          <div className="lg:mx-40">
            <CategoriesSection />
          </div>
        </div>
      </div>
      <div className="col-span-12 w-full mb-40">
        <PopularCompaniesSection />
      </div>
    </div>
  );
}
