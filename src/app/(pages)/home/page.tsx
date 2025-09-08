import Button from "@/components/atoms/Button";
import CategoryList from "@/components/organisms/CategoryList";
import StatsSection from "@/components/organisms/StatsSection";
import Image from "next/image";
import { FaBolt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default async function HomePage() {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* متن و دکمه‌ها */}
      <div className="col-span-12 flex flex-col justify-center items-center text-center gap-6">
        <h1 className="text-2xl md:text-5xl font-extrabold text-primary-shade-700 leading-snug">
          با سرچ کمتر نتیجه بهتر بگیر
        </h1>

        <p className="text-sm md:text-xl text-primary-shade-500 max-w-2xl">
          کانسپتو اولین مرجع معتبر معرفی استارتاپ‌ها و شرکت‌های ایرانی
        </p>

        {/* دکمه‌ها */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="primary">
            <FaBolt className="w-4 h-4" />
            <span className="text-sm sm:text-base md:text-lg">
              رایگان شروع کن!
            </span>
          </Button>

          <Button variant="outline">
            <span className="text-sm sm:text-base md:text-lg">
              درباره کانسپتو
            </span>
            <MdKeyboardArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>
        </div>
      </div>

      {/* تصویر زیر متن‌ها - دسکتاپ*/}
      <div className="col-span-12 mb-42 hidden md:flex">
        <div className="relative w-full h-[500px] flex justify-center items-center overflow-visible">
          {/* عکس وسط (اصلی) */}
          <div className="relative w-full h-full z-10">
            <Image
              src="/images/brands/brand-company/landing-barand-digiKala.png"
              alt="برند کمپانی"
              fill
              className="object-contain"
            />
          </div>

          {/* عکس سمت راست */}
          <div className="absolute -top-25 left-[62%] w-[400px] h-[520px] z-20">
            <Image
              src="/images/brands/brand-company/small-brand-DigiKala.png"
              alt="موبایل-برند"
              fill
              className="object-contain"
            />
          </div>

          {/* عکس سمت چپ */}
          <div className="absolute top-52 left-[17%] w-[500px] h-[600px] z-20">
            <Image
              src="/images/brands/brand-company/dashboard-barand-digiKala.png"
              alt="داشبورد-برند"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* تصویر زیر متن‌ها - دسکتاپ*/}
      <div className="col-span-12 md:hidden relative w-full h-full overflow-hidden">
        {/* عکس وسط (اصلی) */}
        <div className="relative w-full h-[500px] z-10">
          <Image
            src="/images/brands/brand-company/small-brand-DigiKala.png"
            alt="برند کمپانی"
            fill
            className="object-contain"
            quality={100}
          />
        </div>

        {/* لایه محو شدن پایین */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, white 50%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>

      <div className="col-span-12 w-full">
        <div className="mx-8">
          <StatsSection />
        </div>
      </div>
      <div className="col-span-12 w-full">
        <div className="mx-8">
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
