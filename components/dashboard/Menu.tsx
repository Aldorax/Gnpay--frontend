"use client";
import "@/styles/Mobile.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen max-h-screen">
      <div className="w-full bg-[#000] h-full flex flex-col justify-between p-10">
        <div className="w-full bg-[#000] h-full flex flex-col">
          <div className="text-5xl font-bold text-white">Gnpay</div>
          <div className="py-5 mt-10 text-white grid grid-cols-1 gap-3">
            <Link
              className={`text-lg font-semibold w-full rounded-xl p-4 ${
                path.startsWith("/dashboard") ? "bg-[#2A63E2]" : "bg-black"
              }`}
              href="/dashboard"
            >
              Home
            </Link>
            <Link
              className="text-lg font-semibold w-full bg-black rounded-xl p-4"
              href="/dashboard"
            >
              My Wallet
            </Link>
            <Link
              className="text-lg font-semibold w-full bg-black rounded-xl p-4"
              href="/dashboard"
            >
              Transactions
            </Link>
            <Link
              className="text-lg font-semibold w-full bg-black rounded-xl p-4"
              href="/dashboard"
            >
              Financing
            </Link>
          </div>
          <span className="w-full bg-slate-400 border border-slate-400"></span>
          <div className="py-5 text-white grid grid-cols-1 gap-3">
            <Link
              className="text-lg font-semibold w-full bg-black rounded-xl p-4"
              href="/dashboard"
            >
              Security
            </Link>
            <Link
              className="text-lg font-semibold w-full bg-black rounded-xl p-4"
              href="/dashboard"
            >
              Support
            </Link>
            <Link
              className="text-lg font-semibold w-full bg-black rounded-xl p-4"
              href="/dashboard"
            >
              Dark Mode
            </Link>
          </div>
        </div>
        <div className="py-5 text-white grid grid-cols-1 gap-3">
          <Link
            className="text-lg font-semibold w-full bg-[#222223] rounded-xl p-4"
            href="/dashboard"
          >
            Log Out
          </Link>
        </div>
      </div>
      {/* 
      <div>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          Open Mobile Menu
        </button>
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            
            
            <button className="close-mobile-menu" onClick={toggleMobileMenu}>
              Close
            </button>
          </div>
        )}
      </div>
       */}
    </div>
  );
};

export default Menu;
