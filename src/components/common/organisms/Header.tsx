"use client";

import { useState } from "react";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";
import { FaBolt } from "react-icons/fa";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
import Input from "../atoms/Input";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    return router.push("/signin");
  };

  return (
    <header className="w-full shadow-sm py-3 px-4">
      <div className="container max-w-7xl mx-auto flex items-center justify-between">
        {/* موبایل: منو + لوگو + سرچ دسکتاپ */}
        <div className="flex items-center gap-4 flex-1">
          <div className="md:hidden">
            <IconButton
              icon={isOpen ? <FiX size={16} /> : <FiMenu size={16} />}
              onClick={() => setIsOpen(!isOpen)}
              ariaLabel="toggle menu"
            />
          </div>
          <Logo />
          <div className="hidden md:flex items-center w-full max-w-md relative">
            <BiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />

            <Input
              type="tel"
              dir="rtl"
              placeholder="جستجو کسب و کار"
              className="w-full border  bg-neutral-100 border-gray-300 rounded-lg py-2 pr-10 pl-3 text-right
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="flex gap-2 shrink-0">
          <Button variant="primary">
            <FaBolt size={14} />
            <span className="hidden md:inline">رایگان شروع کن!</span>
          </Button>
          <Button variant="outline" onClick={handleRegister}>
            <FiLogIn size={14} />
            <span className="hidden md:inline">ورود / ثبت‌نام</span>
          </Button>
        </div>
      </div>

      {/* سرچ موبایل */}
      <div className="container md:hidden mt-2 relative">
        <BiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <Input
          type="tel"
          dir="rtl"
          placeholder="جستجو کسب و کار"
          className="w-full border  bg-neutral-100 border-gray-300 rounded-lg py-2 pr-10 pl-3 text-right
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* منو */}
      <Navbar isOpen={isOpen} />
    </header>
  );
}
