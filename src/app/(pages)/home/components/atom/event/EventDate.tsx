import { MdOutlineCalendarToday } from "react-icons/md";

type EventDateProps = {
  date: string;
};

export default function EventDate({ date }: EventDateProps) {
  return (
    <div className="flex items-center gap-1 text-base text-neutral-500">
      <MdOutlineCalendarToday size={16} />
      <span>{date}</span>
    </div>
  );
}
