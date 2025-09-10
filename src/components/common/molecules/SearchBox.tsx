"use client";

import { FiSearch } from "react-icons/fi";
import Input from "../atoms/Input";

export default function SearchBox() {
  return (
    <div className="relative w-full">
      {/* آیکون سمت راست */}
      <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />

      {/* اینپوت با استایل دلخواه */}
      <Input
        type="text"
        placeholder="جستجو کسب و کار"
        className="pl-3 pr-9 py-2 bg-neutral-100"
      />
    </div>
  );
}
