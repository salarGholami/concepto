// components/common/organisms/Hero.tsx
import Heading from "../../atom/landing/Heading";
import Text from "../../../../../../components/common/atoms/Text";
import ActionButtons from "../../molecules/landing/ActionButtons";

export default function Hero() {
  return (
    <div className="col-span-12 flex flex-col justify-center items-center text-center gap-6 mt-10">
      <Heading className="text-primary-shade-700 ">
        با سرچ کمتر نتیجه بهتر بگیر
      </Heading>
      <Text className="max-w-2xl text-primary-shade-500">
        کانسپتو اولین مرجع معتبر معرفی استارتاپ‌ها و شرکت‌های ایرانی
      </Text>
      <ActionButtons />
    </div>
  );
}
