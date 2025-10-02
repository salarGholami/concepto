import { MdLocationOn } from "react-icons/md";

type EventLocationProps = {
  location: string;
};

export default function EventLocation({ location }: EventLocationProps) {
  return (
    <div className="flex items-center gap-1 text-base text-neutral-500">
      <MdLocationOn size={16} />
      <span>{location}</span>
    </div>
  );
}
