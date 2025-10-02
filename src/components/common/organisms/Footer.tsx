"use client";

import Image from "next/image";
import Input from "../atoms/Input";
import Logo from "../atoms/Logo";

import { BsTelephone } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

const footerLinks = [
  {
    title: "کانسپتو",
    links: ["درباره ما", "تماس با ما", "اتاق خبر", "قوانین و مقررات"],
  },
  {
    title: "کانسپتو",
    links: ["درباره ما", "تماس با ما", "اتاق خبر", "قوانین و مقررات"],
  },
  {
    title: "کانسپتو",
    links: ["درباره ما", "تماس با ما", "اتاق خبر", "قوانین و مقررات"],
  },
];

const socialIcons = [
  { icon: IoLogoTwitter },
  { icon: IoLogoInstagram },
  { icon: FaLinkedinIn },
  { icon: RiFacebookFill },
];

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white md:text-lg">
      {/* پس‌زمینه */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/baner/footer.png"
          alt="Footer Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* محتوای اصلی */}
      <div className="relative mx-4 mt-40 flex flex-col items-center justify-between md:mx-40 md:my-24 md:flex-row">
        {/* بخش خبرنامه موبایل */}
        <div className="mb-12 flex w-full flex-col gap-6 md:hidden">
          <span>از جدیدترین اخبار مطلع شوید :</span>
          <div className="relative w-full max-w-md">
            <Input
              className="w-full rounded-4xl bg-white px-4 py-4 text-black"
              placeholder="ایمیل خود را وارد کنید"
            />
            <button className="absolute left-1 top-1 flex items-center justify-center rounded-md bg-blue-600 px-4 py-1.5 text-white">
              عضویت <TiTick className="size-8" />
            </button>
          </div>
        </div>

        {/* لینک‌ها + لوگو و توضیحات */}
        <div className="flex flex-col gap-8">
          <div className="flex w-full justify-between">
            {footerLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col">
                <h1 className="mb-6 text-lg font-bold md:text-xl">
                  {section.title}
                </h1>
                <ul className="mr-1 flex flex-col gap-3 md:text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <Logo src="/images/logo/logo-white.png" />
            <span className="font-serif text-xl">
              استارت‌آپ‌هایی که آینده را شکل می‌دهند. از ایده‌های نوآورانه تا
              پروژه‌های پیشرفته، جهان استارت‌آپ‌ها را از اینجا کشف کنید.
            </span>
          </div>
        </div>

        {/* بخش خبرنامه دسکتاپ + تماس + شبکه اجتماعی */}
        <div className="flex w-full flex-col gap-6 md:w-auto">
          {/* خبرنامه دسکتاپ */}
          <div className="hidden md:flex">
            <span>از جدیدترین اخبار مطلع شوید :</span>
          </div>
          <div className="relative hidden w-full max-w-md md:flex">
            <Input
              className="w-full rounded-4xl bg-white px-4 py-4 text-black"
              placeholder="ایمیل خود را وارد کنید"
            />
            <button className="absolute left-1 top-1 flex items-center justify-center rounded-md bg-blue-600 px-4 py-1.5 text-white">
              عضویت <TiTick className="size-8" />
            </button>
          </div>

          {/* آدرس و تلفن */}
          <div className="my-10 flex flex-col gap-4 md:my-2">
            <span className="flex items-center gap-2">
              <MdOutlineLocationOn className="h-6 w-6" />
              <span className="font-bold">آدرس :</span>
              <span className="font-serif">
                تهران، خیابان ولیعصر، خیابان سرو، ساختمان کانسپتو
              </span>
            </span>
            <span className="flex items-center gap-2">
              <BsTelephone className="h-6 w-6" />
              <span>شماره تلفن :</span>
              <span>09121234567</span>
            </span>
          </div>

          {/* شبکه اجتماعی */}
          <div className="flex w-full items-center md:min-w-7">
            <div className="flex w-full flex-col">
              <span>ما را در شبکه های اجتماعی دنبال کنید :</span>
              <div className="flex gap-6 py-2">
                {socialIcons.map(({ icon: Icon }, i) => (
                  <Icon key={i} className="h-8 w-8 cursor-pointer" />
                ))}
              </div>
            </div>

            <div className="relative h-20 w-20 md:h-32 md:w-32">
              <Image
                src="/images/baner/inmad.png"
                alt="اینماد"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* کپی‌رایت */}
      <div className="relative bg-primary-shade-700 py-8 text-center text-white md:text-xl">
        © ۱۴۰۲ - تمامی حقوق برای کانسپتو محفوظ است.
      </div>
    </footer>
  );
};

export default Footer;
