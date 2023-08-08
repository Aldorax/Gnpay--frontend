import React from "react";
import Image from "next/image";
import image from "@/app/user.png";

const Header = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between items-center px-10 py-4 text-sm bg-[#F5F7FA]">
        <div>
          <h1 className="mx-4 font-bold text-2xl">KYC</h1>
        </div>
        <div className="flex items-center">
          <div className="mx-5 flex gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.44043V9.77043"
                stroke="#0A0A0B"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
                stroke="#0A0A0B"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203"
                stroke="#0A0A0B"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </div>
          <div className="w-14 h-14 flex items-center justify-center rounded-full">
            <Image
              src={image}
              alt="dk"
              className="mx-auto"
              width={30}
              height={30}
            />
          </div>
          <div className="mx-2 flex gap-2 items-center">
            <h1>Emmanuel Appah</h1>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16.7996C11.3 16.7996 10.6 16.5296 10.07 15.9996L3.55002 9.47965C3.26002 9.18965 3.26002 8.70965 3.55002 8.41965C3.84002 8.12965 4.32002 8.12965 4.61002 8.41965L11.13 14.9396C11.61 15.4196 12.39 15.4196 12.87 14.9396L19.39 8.41965C19.68 8.12965 20.16 8.12965 20.45 8.41965C20.74 8.70965 20.74 9.18965 20.45 9.47965L13.93 15.9996C13.4 16.5296 12.7 16.7996 12 16.7996Z"
                fill="#0A0A0B"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
