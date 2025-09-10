// components/common/organisms/BrandShowcase.tsx
import ImageWrapper from "../atoms/ImageWrapper";

export default function BrandShowcase() {
  return (
    <>
      {/* دسکتاپ */}
      <div className="col-span-12 mb-42 hidden md:flex">
        <div className="relative w-full h-[500px] flex justify-center items-center overflow-visible">
          <div className="relative w-full h-full z-10">
            <ImageWrapper
              src="/images/brands/brand-company/landing-barand-digiKala.png"
              alt="برند کمپانی"
              fill
            />
          </div>

          <div className="absolute -top-25 left-[62%] w-[400px] h-[520px] z-20">
            <ImageWrapper
              src="/images/brands/brand-company/small-brand-DigiKala.png"
              alt="موبایل-برند"
              fill
            />
          </div>

          <div className="absolute top-52 left-[17%] w-[500px] h-[600px] z-20">
            <ImageWrapper
              src="/images/brands/brand-company/dashboard-barand-digiKala.png"
              alt="داشبورد-برند"
              fill
            />
          </div>
        </div>
      </div>

      {/* موبایل */}
      <div className="col-span-12 md:hidden relative w-full h-full overflow-hidden">
        <div className="relative w-full h-[500px] z-10">
          <ImageWrapper
            src="/images/brands/brand-company/small-brand-DigiKala.png"
            alt="برند کمپانی"
            fill
            quality={100}
          />
        </div>

        <div
          className="absolute inset-x-0 bottom-0 h-28 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, white 50%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>
    </>
  );
}
