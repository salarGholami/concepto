// components/pages/home/HomeSection.tsx
import Hero from "@/app/(pages)/home/components/organisms/landing/Hero";
import BrandShowcase from "@/app/(pages)/home/components/organisms/landing/BrandShowcase";
import StatsSection from "@/app/(pages)/home/components/organisms/stat/StatsSection";
import FeaturesSection from "@/app/(pages)/home/components/organisms/feature/FeaturesSection";
import CategoriesSection from "@/app/(pages)/home/components/organisms/category/CategoriesSection";
import PopularCompaniesSection from "@/app/(pages)/home/components/organisms/company/PopularCompaniesSection";
import JobOpportunitiesSection from "../components/organisms/JobCard/JobCarousel";
import LastNewsSection from "../components/organisms/news/LastNewsSection";

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
      <div className="col-span-12 w-full md:mb-20">
        <PopularCompaniesSection />
      </div>
      <div className="col-span-12 w-full">
        <JobOpportunitiesSection />
      </div>
      <div className="col-span-12 w-full ">
        <LastNewsSection />
      </div>
      <div className="col-span-12 w-full md:mb-40">2</div>
    </div>
  );
}
