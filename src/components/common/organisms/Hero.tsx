// components/common/organisms/Hero.tsx
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import ActionButtons from "../molecules/ActionButtons";

export default function Hero() {
  return (
    <div className="col-span-12 flex flex-col justify-center items-center text-center gap-6 mt-10">
      <Heading>با سرچ کمتر نتیجه بهتر بگیر</Heading>
      <Text className="max-w-2xl">
        کانسپتو اولین مرجع معتبر معرفی استارتاپ‌ها و شرکت‌های ایرانی
      </Text>
      <ActionButtons />
    </div>
  );
}
