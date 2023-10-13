import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/register.module.css";
import Image from "next/image";
import image from "@/app/logo.png";
import Side from "@/components/Side";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gnpay Login",
  description: "Login to your Account",
};

const Login = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Check if the password and confirm password match
  const passwordsMatch = password === confirmPassword;

  return (
    <main className="md:max-w-screen md:max-h-screen bg-white flex flex-col md:flex-row p-6 overflow-x-hidden">
      <div className="hidden md:flex">
        <Side />
      </div>
      <div className="md:max-w-[60vw] max-w-screen min-w-screen md:min-w-[60vw] min-h-[95vh] p-4 mx-4 text-center flex flex-col items-center justify-center relative">
        <div className="mb-10 mt-10">
          <h1 className="text-4xl font-semibold py-2 mb-3">
            Login to your account
          </h1>
          <p className="text-[#77787D]">
            Get started today by entering just a few details
          </p>
        </div>

        <form className="flex flex-col items-center justify-center">
          <div className="mb-4 w-[440px]">
            <div>
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email adsress"
                className={`text-[#77787D] px-4 py-3 rounded-lg min-w-full border border-black/10`}
              />
            </div>
          </div>
          <div className="mb-1 w-[440px]">
            <div>
              <input
                type="password"
                name="pswd"
                id="pswd"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`text-[#77787D] px-4 py-3 rounded-lg w-full border border-black/10`}
              />
              <label htmlFor="pswd"></label>
            </div>
          </div>
          <div className="min-w-[400px] mb-4 flex items-center justify-between">
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="rememberMe"
                id="Rmbe"
                title="e"
                placeholder=" "
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className="text-sm font-semibold text-[#2A63E2]">
              <Link href={"/forgot-password"}>Forgot Password?</Link>
            </div>
          </div>
          <Link
            href={"/user/dashboard"}
            className="text-white font-semibold px-4 py-3 min-w-[420px] border border-white bg-[#2A63E2] rounded-full mb-6"
          >
            Log In
          </Link>
        </form>
        <p className=" mb-48 text-sm">
          Don't have an account?{" "}
          <Link
            href={"/register"}
            className="text-[#2A63E2] font-semibold cursor-pointer"
          >
            Sign Up
          </Link>
        </p>
        <div className="flex items-center justify-between w-full absolute bottom-10 px-10">
          <div className="text-sm">
            View our{" "}
            <span className="underline cursor-pointer">
              GDPR & Privacy Policies{" "}
            </span>
          </div>
          <div className="text-[#77787D] text-sm">Copyright 2023</div>
        </div>
      </div>
    </main>
  );
};

export default Login;
