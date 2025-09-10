import "@/styles/globals.css";

import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { ReactNode } from "react";
import Header from "@/components/common/organisms/Header";
import Footer from "@/components/common/organisms/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
