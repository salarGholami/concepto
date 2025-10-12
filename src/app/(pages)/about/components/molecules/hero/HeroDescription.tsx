"use client";

import Text from "@/components/common/atoms/Text";

export default function HeroDescription() {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <Text className="max-w-sm md:max-w-2xl text-black md:font-semibold">
        با ما همراه باش تا درمورد کانسپتو بیشتر اطلاعات کسب کنی
      </Text>
      <span className="max-w-sm md:max-w-md text-black md:font-normal">
        ما یک چشم‌انداز داریم: کمک به افراد دیگر برای موفقیت بیشتر. این چیزی‌ست
        که ما هر روز برای آن کار می‌کنیم
      </span>
    </div>
  );
}
