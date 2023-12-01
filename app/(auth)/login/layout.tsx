import type { Metadata } from "next";

import "@/app/globals.css";
import Menu from "@/components/register/menu";

export const metadata: Metadata = {
  title: "Register Buisness",
  description: "Buisness Registration on gnpay",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex items-center overflow-hidden">
        <div className="hidden md:flex w-[40vw] m-4">
          <Menu />
        </div>
        {children}
      </body>
    </html>
  );
}
