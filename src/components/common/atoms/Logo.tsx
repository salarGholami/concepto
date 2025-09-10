import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="relative w-32 md:w-40 h-8 block">
      <Image
        src="/images/logo/logo.png"
        alt="لوگو"
        fill
        priority
        className="object-contain"
      />
    </Link>
  );
}
