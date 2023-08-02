import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gnpay Signup Page",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  );
}
