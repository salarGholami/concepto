import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 ">
      <div className="col-span-12 w-full">{children}</div>
    </div>
  );
}
