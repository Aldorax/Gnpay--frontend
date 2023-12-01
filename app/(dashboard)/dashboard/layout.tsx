import type { Metadata } from "next";

import "@/app/globals.css";
import Menu from "@/components/dashboard/Menu";
import Banner from "@/components/dashboard/Banner";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Buisness Registration on gnpay",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex items-center overflow-x-hidden">
        <div className="hidden md:flex w-[20vw]">
          <Menu />
        </div>
        <div className="flex-flex-col h-screen w-full justify-start">
          <div className="h-16 md:h-28 flex items-center justify-between bg-gray-300 p-6 text-xl md:text-4xl font-semibold">
            <h1>Home</h1>
            <div className="flex gap-3 items-center text-medium">
              <Link href="/dashboard/profile">Emmanuel</Link>
              <select name="" id="">
                <option value="name">Name</option>
                <option value="emma">Emma</option>
                <option value="eat">eat</option>
              </select>
            </div>
          </div>
          <div className="px-3 md:px-5 py-5">
            <div className="px-4">
              <Banner />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
