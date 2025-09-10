import Link from "next/link";

interface NavItemProps {
  href: string;
  label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
  return (
    <Link href={href} className="hover:text-primary">
      {label}
    </Link>
  );
}
