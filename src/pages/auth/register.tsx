import React, { useState } from "react";
import "@/app/globals.css";
import styles from "@/app/register.module.css";
import Link from "next/link";
import Side from "@/components/Side";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleLinkClick = (option: any, url: any) => {
    setSelectedOption(option);
    // You can add more logic here, such as additional CSS classes or other actions
  };

  const handleRedirect = () => {
    // Use the selectedOption to determine where to redirect
    if (selectedOption === "personal") {
      window.location.href = "/auth/registerPersonal";
    } else if (selectedOption === "business") {
      window.location.href = "/auth/registerBuisness";
    }
  };

  return (
    <main className="md:max-w-screen md:max-h-screen bg-white flex p-6 overflow-hidden">
      <Side />

      <div className="max-w-[50vw] min-w-[60vw] min-h-[95vh] p-4 mx-4 text-center flex flex-col items-center relative py-20 right-0 top-0">
        <div className="mb-10 mt-10">
          <h1 className="text-4xl font-semibold py-2 mb-3 w-[440px]">
            What kind of account do you want to open?
          </h1>
          <p className="text-[#77787D]">Choose your preferred account</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            onClick={() =>
              handleLinkClick("personal", "/auth/registerPersonal")
            }
            className={`w-[440px] px-2 py-6 border border-[#F1F1F1] rounded-xl my-2 cursor-pointer flex items-center gap-3 ${
              selectedOption === "personal"
                ? "border-blue-700 text-blue-700"
                : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z"
                fill={`${
                  selectedOption === "personal" ? "#2A63E2" : "#292D32"
                }`}
              />
              <path
                d="M3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C13.0102 14.25 14.0001 14.38 14.9601 14.65C15.3601 14.76 15.5902 15.17 15.4802 15.57C15.3702 15.97 14.9601 16.2 14.5602 16.09C13.7402 15.86 12.8802 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75Z"
                fill={`${
                  selectedOption === "personal" ? "#2A63E2" : "#292D32"
                }`}
              />
              <path
                d="M18 22.75C16.34 22.75 14.78 21.87 13.94 20.44C13.49 19.72 13.25 18.87 13.25 18C13.25 16.54 13.9 15.19 15.03 14.29C15.87 13.62 16.93 13.25 18 13.25C20.62 13.25 22.75 15.38 22.75 18C22.75 18.87 22.51 19.72 22.06 20.45C21.81 20.87 21.49 21.25 21.11 21.57C20.28 22.33 19.17 22.75 18 22.75ZM18 14.75C17.26 14.75 16.56 15 15.97 15.47C15.2 16.08 14.75 17.01 14.75 18C14.75 18.59 14.91 19.17 15.22 19.67C15.8 20.65 16.87 21.25 18 21.25C18.79 21.25 19.55 20.96 20.13 20.44C20.39 20.22 20.61 19.96 20.77 19.68C21.09 19.17 21.25 18.59 21.25 18C21.25 16.21 19.79 14.75 18 14.75Z"
                fill={`${
                  selectedOption === "personal" ? "#2A63E2" : "#292D32"
                }`}
              />
              <path
                d="M17.4299 19.7396C17.2399 19.7396 17.0499 19.6696 16.8999 19.5196L15.9099 18.5296C15.6199 18.2396 15.6199 17.7595 15.9099 17.4695C16.1999 17.1795 16.6799 17.1795 16.9699 17.4695L17.4499 17.9496L19.0499 16.4695C19.3499 16.1895 19.8299 16.2096 20.1099 16.5096C20.3899 16.8096 20.3699 17.2896 20.0699 17.5696L17.9399 19.5396C17.7899 19.6696 17.6099 19.7396 17.4299 19.7396Z"
                fill={`${
                  selectedOption === "personal" ? "#2A63E2" : "#292D32"
                }`}
              />
            </svg>

            <p className="text-black">Personal</p>
          </div>
          <div
            onClick={() =>
              handleLinkClick("business", "/auth/registerBuisness")
            }
            className={`w-[440px] px-2 py-6 border border-[#F1F1F1] rounded-xl my-2 cursor-pointer flex items-center gap-3 ${
              selectedOption === "business" ? "border-blue-400" : ""
            }`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`${
                selectedOption === "buisness"
                  ? "border-blue-700 text-blue-700"
                  : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.00977 11.2197V15.7097C3.00977 20.1997 4.80977 21.9997 9.29977 21.9997H14.6898C19.1798 21.9997 20.9798 20.1997 20.9798 15.7097V11.2197"
                fill={`${
                  selectedOption === "buisness" ? "#2A63E2" : "#292D32"
                }`}
              />
              <path
                d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z"
                fill={`${
                  selectedOption === "buisness" ? "#2A63E2" : "#292D32"
                }`}
              />
              <path
                d="M18.3098 12C20.3298 12 21.8098 10.36 21.6098 8.35L21.3298 5.6C20.9698 3 19.9698 2 17.3498 2H14.2998L14.9998 9.01C15.1698 10.66 16.6598 12 18.3098 12Z"
                fill={`${
                  selectedOption === "buisness" ? "#2A63E2" : "#292D32"
                }`}
              />
              <path
                d="M5.63988 12C7.28988 12 8.77988 10.66 8.93988 9.01L9.15988 6.8L9.63988 2H6.58988C3.96988 2 2.96988 3 2.60988 5.6L2.33988 8.35C2.13988 10.36 3.61988 12 5.63988 12Z"
                fill={`${
                  selectedOption === "buisness" ? "#2A63E2" : "#292D32"
                }`}
              />
              <path
                d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
                fill={`${
                  selectedOption === "buisness" ? "#2A63E2" : "#292D32"
                }`}
              />
            </svg>
            <p>Business</p>
          </div>
        </div>
        <button
          className="text-white font-semibold px-4 py-3 min-w-[440px] border border-white bg-[#2A63E2] rounded-full mb-6"
          onClick={handleRedirect}
        >
          Continue
        </button>
      </div>
    </main>
  );
};

export default Register;
