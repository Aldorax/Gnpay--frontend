import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import "@/app/globals.css";
import styles from "@/app/register.module.css";
import image from "@/app/logo.png";
import Image from "next/image";
import Side from "@/components/Side";

const PasswordChangeSuccess = () => {
  return (
    <main className="md:max-w-screen md:max-h-screen bg-white flex p-6 overflow-x-hidden">
      <Side />
      <div className="max-w-[50vw] min-w-[60vw] min-h-[95vh] py-4 mx-10 text-center flex flex-col items-center justify-center relative">
        <div className="mb-10 mt-10 absolute top-64">
          <svg
            width="85"
            height="84"
            viewBox="0 0 85 84"
            className="relative left-32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.5002 0.333496C19.5418 0.333496 0.833496 19.0418 0.833496 42.0002C0.833496 64.9585 19.5418 83.6668 42.5002 83.6668C65.4585 83.6668 84.1668 64.9585 84.1668 42.0002C84.1668 19.0418 65.4585 0.333496 42.5002 0.333496ZM62.4168 32.4168L38.7918 56.0418C38.2085 56.6252 37.4168 56.9585 36.5835 56.9585C35.7502 56.9585 34.9585 56.6252 34.3752 56.0418L22.5835 44.2502C21.3752 43.0418 21.3752 41.0418 22.5835 39.8335C23.7918 38.6252 25.7918 38.6252 27.0002 39.8335L36.5835 49.4168L58.0002 28.0002C59.2085 26.7918 61.2085 26.7918 62.4168 28.0002C63.6252 29.2085 63.6252 31.1668 62.4168 32.4168Z"
              fill="#49E600"
            />
          </svg>

          <h1 className="text-4xl font-semibold py-2 mb-2">Success</h1>
          <p className="text-[#77787D] max-w-[400px] mb-3">
            Your password has been changed successfully
          </p>
        </div>

        <form className="flex flex-col items-center justify-center">
          <Link
            href={"/login"}
            className="text-white font-semibold px-4 py-3 min-w-[440px] border border-white bg-[#2A63E2] rounded-full mb-6"
          >
            Log In
          </Link>
        </form>
        <div className="flex items-center justify-between w-full absolute bottom-10">
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

export default PasswordChangeSuccess;
