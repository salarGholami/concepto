import Image from "next/image";
import EventDate from "../../atom/event/EventDate";
import EventLocation from "../../atom/event/EventLocation";

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
};

export default function EventCard({
  title,
  description,
  date,
  location,
  image,
}: EventCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="w-full">
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="w-full h-auto object-contain bg-neutral-100"
        />
      </div>

      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <h3 className="font-semibold text-lg text-neutral-800 mb-2">
            {title}
          </h3>
          <p className="text-sm text-neutral-600 line-clamp-2">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-3">
          <EventDate date={date} />
          <EventLocation location={location} />
        </div>
      </div>
    </div>
  );
}
