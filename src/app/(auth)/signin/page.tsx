"use client";

import Image from "next/image";
import { useState } from "react";
import { MdOutlineLightbulb } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Input from "@/components/common/atoms/Input";
import Button from "@/components/common/atoms/Button";
import Logo from "@/components/common/atoms/Logo";

export default function SignInPage() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`کد برای شماره ${phone} ارسال شد`);
  };

  return (
    <div className="flex md:items-center justify-center items-center md:min-h-[750px] xl:my-10">
      <div className="flex flex-col md:flex-row-reverse md:gap-7 overflow-hidden max-w-7xl w-full md:mx-4">
        {/* بخش تصویر */}
        <div className="relative w-full max-w-xl xl:h-[700px] md:h-[600px] h-[200px] overflow-hidden">
          <Image
            src="/images/main/signup/signin.png"
            alt="Building"
            fill
            sizes="100vw"
            className="object-cover md:rounded-2xl"
            priority
          />
        </div>

        {/* فرم ورود */}
        <div className="w-full flex flex-col justify-center bg-neutral-50 rounded-t-4xl md:rounded-2xl md:rounded-l-none -mt-6 md:mt-0 relative z-10">
          <div className="px-8 lg:px-40 py-8 md:py-12">
            <div className="flex flex-col items-center mb-6">
              <div className="text-blue-600 font-bold text-2xl flex items-center justify-center gap-2">
                <Logo />
                <MdOutlineLightbulb size={35} />
              </div>
              <div className="my-2 md:my-6">
                <p className="text-gray-700 mt-2 text-center">ورود | ثبت نام</p>
                <p className="text-gray-400 mt-1 text-sm text-center">
                  برای ادامه شماره تماس را وارد کنید
                </p>
              </div>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="relative">
                {/* آیکون سمت راست */}
                <FiPhone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <Input
                  type="tel"
                  dir="rtl"
                  inputMode="numeric"
                  placeholder="شماره تماس را وارد کنید"
                  value={phone}
                  maxLength={11} // محدودیت 11 رقم
                  onChange={(e) => {
                    // فقط اعداد بمانند
                    const value = e.target.value.replace(/[^0-9]/g, "");
                    setPhone(value);
                  }}
                  className="w-full border border-gray-300 rounded-lg py-2 pr-10 pl-3 text-right
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* دکمه فعال وقتی شماره کامل شد */}
              <Button
                type="submit"
                disabled={phone.length !== 11}
                variant="primary"
              >
                تایید و دریافت کد
              </Button>
            </form>

            <p className="text-xs text-gray-400 mt-4 text-center">
              ورود شما به معنای پذیرش{" "}
              <span className="text-blue-600 cursor-pointer">شرایط کنسپتو</span>{" "}
              و{" "}
              <span className="text-blue-600 cursor-pointer">
                قوانین حریم خصوصی
              </span>{" "}
              است
            </p>

            <div className="flex items-center justify-center gap-4 mt-6 md:mt-8">
              <div className="border-t border-gray-300 flex-1"></div>
              <span className="text-gray-400 text-sm">یا ورود از طریق</span>
              <div className="border-t border-gray-300 flex-1"></div>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button className="rounded-full hover:bg-gray-100 transition">
                <Image
                  src="/images/social-media/google.png"
                  alt="Google"
                  width={40}
                  height={40}
                />
              </button>
              <button className="rounded-full hover:bg-gray-100 transition">
                <Image
                  src="/images/social-media/Facebook.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </button>
              <button className="rounded-full hover:bg-gray-100 transition">
                <Image
                  src="/images/social-media/linkedin.png"
                  alt="LinkedIn"
                  width={40}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
