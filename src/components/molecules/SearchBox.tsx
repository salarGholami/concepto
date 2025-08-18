import { FiSearch } from "react-icons/fi";
import Input from "../atoms/Input";

export default function SearchBox({ placeholder = "جستجو کسب و کار" }) {
  return (
    <div className="relative w-full">
      <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
      <Input type="text" placeholder={placeholder} />
    </div>
  );
}
