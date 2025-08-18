"use client";

import { useState } from "react";
import { FiLogIn, FiMenu, FiX } from "react-icons/fi";
import { FaBolt } from "react-icons/fa";

import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import IconButton from "../atoms/IconButton";
import SearchBox from "../molecules/SearchBox";
import Navbar from "../organisms/Navbar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm py-3 px-4">
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
          <div className="hidden md:flex items-center w-full max-w-md">
            <SearchBox />
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="flex gap-2 shrink-0">
          <Button variant="primary">
            <FaBolt size={14} />
            <span className="hidden md:inline">رایگان شروع کن!</span>
          </Button>
          <Button variant="outline">
            <FiLogIn size={14} />
            <span className="hidden md:inline">ورود / ثبت‌نام</span>
          </Button>
        </div>
      </div>

      {/* سرچ موبایل */}
      <div className="container md:hidden mt-2">
        <SearchBox />
      </div>

      {/* منو */}
      <Navbar isOpen={isOpen} />
    </header>
  );
}
