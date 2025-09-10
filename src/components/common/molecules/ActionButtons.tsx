// components/common/molecules/ActionButtons.tsx
import Button from "../atoms/Button";
import { FaBolt } from "react-icons/fa";
import { MdKeyboardArrowLeft } from "react-icons/md";

export default function ActionButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button variant="primary">
        <FaBolt className="w-4 h-4" />
        <span className="text-sm sm:text-base md:text-lg">رایگان شروع کن!</span>
      </Button>

      <Button variant="outline">
        <span className="text-sm sm:text-base md:text-lg">درباره کانسپتو</span>
        <MdKeyboardArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </Button>
    </div>
  );
}
