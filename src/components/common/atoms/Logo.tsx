import Image from "next/image";
import Link from "next/link";

type Src = {
  src: string;
};

export default function Logo({ src }: Src) {
  return (
    <Link href="/" className="relative w-32 md:w-40 h-8 block">
      <Image src={src} alt="لوگو" fill priority className="object-contain" />
    </Link>
  );
}
