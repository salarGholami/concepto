import NavItem from "../molecules/NavItem";

const navItems = [
  { label: "شرکت‌ها", href: "#" },
  { label: "فرصت‌های شغلی", href: "#" },
  { label: "اخبار و رویدادها", href: "#" },
  { label: "درباره ما", href: "/about" },
  { label: "تماس با ما", href: "#" },
];

interface NavbarProps {
  isOpen: boolean;
}

export default function Navbar({ isOpen }: NavbarProps) {
  return (
    <nav
      className={`${
        isOpen ? "flex" : "hidden"
      } md:flex flex-col md:flex-row gap-3 text-primary-shade-800 md:gap-6 text-sm px-4 py-3 md:px-0 md:py-2 container max-w-7xl mx-auto`}
    >
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
    </nav>
  );
}
