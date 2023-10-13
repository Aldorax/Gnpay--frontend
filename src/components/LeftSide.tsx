import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import image from "@/app/logo.png";

const LeftSide = () => {
  const router = useRouter();

  return (
    <div className="min-w-[320px] max-w-[320px] bg-[#000] p-5 items-center flex flex-col text-center fixed h-screen">
      <div className="flex flex-col w-full">
        <div className=" mb-20 flex gap-3 text-white font-bold px-3 text-2xl items-center justify-center ml-4 self-start">
          <Image
            src={image}
            alt="dk"
            className="mx-auto"
            width={30}
            height={30}
          />
          <h1>Gnpay Africa</h1>
        </div>
        {/*  */}
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 flex gap-2 items-center px-10 text-white ${
              router.pathname === "/user/dashboard"
                ? "bg-[#2A63E2] font-bold"
                : router.pathname === "/user/kyc"
                ? "bg-[#2A63E2] font-bold"
                : router.pathname === "/user/successfulKyc"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/user/dashboard"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.0375 10.0125L17.85 3.46252C16.25 2.18752 13.75 2.17502 12.1625 3.45002L3.97495 10.0125C2.79995 10.95 2.08745 12.825 2.33745 14.3L3.91245 23.725C4.27495 25.8375 6.23745 27.5 8.37495 27.5H21.625C23.7375 27.5 25.7375 25.8 26.1 23.7125L27.675 14.2875C27.9 12.825 27.1875 10.95 26.0375 10.0125ZM15.9375 22.5C15.9375 23.0125 15.5125 23.4375 15 23.4375C14.4875 23.4375 14.0625 23.0125 14.0625 22.5V18.75C14.0625 18.2375 14.4875 17.8125 15 17.8125C15.5125 17.8125 15.9375 18.2375 15.9375 18.75V22.5Z"
                fill="white"
              />
            </svg>

            <p>Home</p>
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 flex gap-2 items-center px-10 text-white ${
              router.pathname === "/user/settings"
                ? "bg-[#2A63E2] font-bold text-white"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/user/settings"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.4998 15.775V18.35C27.4998 19.05 26.9248 19.625 26.2123 19.625H23.7998C22.4498 19.625 21.2123 18.6375 21.0998 17.2875C21.0248 16.5 21.3248 15.7625 21.8498 15.25C22.3123 14.775 22.9498 14.5 23.6498 14.5H26.2123C26.9248 14.5 27.4998 15.075 27.4998 15.775Z"
                fill="white"
              />
              <path
                d="M19.225 17.45C19.1125 16.1375 19.5875 14.85 20.5375 13.9125C21.3375 13.1 22.45 12.625 23.65 12.625H24.3625C24.7125 12.625 25 12.3375 24.95 11.9875C24.6125 9.5625 22.5125 7.6875 20 7.6875H7.5C4.7375 7.6875 2.5 9.925 2.5 12.6875V21.4375C2.5 24.2 4.7375 26.4375 7.5 26.4375H20C22.525 26.4375 24.6125 24.5625 24.95 22.1375C25 21.7875 24.7125 21.5 24.3625 21.5H23.8C21.425 21.5 19.425 19.725 19.225 17.45ZM16.25 14.875H8.75C8.2375 14.875 7.8125 14.4625 7.8125 13.9375C7.8125 13.4125 8.2375 13 8.75 13H16.25C16.7625 13 17.1875 13.425 17.1875 13.9375C17.1875 14.45 16.7625 14.875 16.25 14.875Z"
                fill="white"
              />
              <path
                d="M17.7623 4.975C18.0873 5.3125 17.7998 5.8125 17.3248 5.8125H7.53732C6.17482 5.8125 4.89982 6.2125 3.83732 6.9C3.34982 7.2125 2.68732 6.875 2.92482 6.3375C3.62482 4.7 5.26232 3.5625 7.14982 3.5625H14.1748C15.6248 3.5625 16.9123 4.075 17.7623 4.975Z"
                fill="white"
              />
            </svg>

            <p>My Wallet</p>
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 flex gap-2 items-center px-10 text-white ${
              router.pathname === "/user/transaction"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/user/transaction"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.725 2.5H10.275C5.55 2.5 4.375 3.7625 4.375 8.8V22.875C4.375 26.2 6.2 26.9875 8.4125 24.6125L8.425 24.6C9.45 23.5125 11.0125 23.6 11.9 24.7875L13.1625 26.475C14.175 27.8125 15.8125 27.8125 16.825 26.475L18.0875 24.7875C18.9875 23.5875 20.55 23.5 21.575 24.6C23.8 26.975 25.6125 26.1875 25.6125 22.8625V8.8C25.625 3.7625 24.45 2.5 19.725 2.5ZM18.4375 13.4375H11.5625C11.05 13.4375 10.625 13.0125 10.625 12.5C10.625 11.9875 11.05 11.5625 11.5625 11.5625H18.4375C18.95 11.5625 19.375 11.9875 19.375 12.5C19.375 13.0125 18.95 13.4375 18.4375 13.4375Z"
                fill="white"
              />
            </svg>
            <p>Transactions</p>
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 flex gap-2 items-center px-10 text-[#fff] ${
              router.pathname === "/user/financing"
                ? "bg-[#2A63E2] font-bold"
                : router.pathname === "/user/successfulFinacing"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/user/financing"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.25 5H8.75C5 5 2.5 6.875 2.5 11.25V15.7C2.5 16.1625 2.975 16.45 3.3875 16.2625C4.6125 15.7 6.025 15.4875 7.5125 15.75C10.8 16.3375 13.2125 19.3875 13.125 22.725C13.1125 23.25 13.0375 23.7625 12.9 24.2625C12.8 24.65 13.1125 25.0125 13.5125 25.0125H21.25C25 25.0125 27.5 23.1375 27.5 18.7625V11.25C27.5 6.875 25 5 21.25 5ZM15 18.125C13.275 18.125 11.875 16.725 11.875 15C11.875 13.275 13.275 11.875 15 11.875C16.725 11.875 18.125 13.275 18.125 15C18.125 16.725 16.725 18.125 15 18.125ZM24.0625 17.5C24.0625 18.0125 23.6375 18.4375 23.125 18.4375C22.6125 18.4375 22.1875 18.0125 22.1875 17.5V12.5C22.1875 11.9875 22.6125 11.5625 23.125 11.5625C23.6375 11.5625 24.0625 11.9875 24.0625 12.5V17.5Z"
                fill="white"
              />
              <path
                d="M6.25 17.5C3.4875 17.5 1.25 19.7375 1.25 22.5C1.25 23.4375 1.5125 24.325 1.975 25.075C2.8375 26.525 4.425 27.5 6.25 27.5C8.075 27.5 9.6625 26.525 10.525 25.075C10.9875 24.325 11.25 23.4375 11.25 22.5C11.25 19.7375 9.0125 17.5 6.25 17.5ZM8.1125 23.4125H7.1875V24.3875C7.1875 24.9 6.7625 25.325 6.25 25.325C5.7375 25.325 5.3125 24.9 5.3125 24.3875V23.4125H4.3875C3.875 23.4125 3.45 22.9875 3.45 22.475C3.45 21.9625 3.875 21.5375 4.3875 21.5375H5.3125V20.65C5.3125 20.1375 5.7375 19.7125 6.25 19.7125C6.7625 19.7125 7.1875 20.1375 7.1875 20.65V21.5375H8.1125C8.625 21.5375 9.05 21.9625 9.05 22.475C9.05 22.9875 8.6375 23.4125 8.1125 23.4125Z"
                fill="white"
              />
            </svg>
            <p>Financing</p>
          </Link>
        </div>

        <div className="w-full border border-t border-solid border-gray-200/20 my-5"></div>

        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 flex gap-2 items-center px-10 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.1373 13.9004V8.41289C26.1373 7.38789 25.3623 6.22539 24.3998 5.83789L17.4373 2.98789C15.8748 2.35039 14.1123 2.35039 12.5498 2.98789L5.5873 5.83789C4.6373 6.22539 3.8623 7.38789 3.8623 8.41289V13.9004C3.8623 20.0129 8.2998 25.7379 14.3623 27.4129C14.7748 27.5254 15.2248 27.5254 15.6373 27.4129C21.6998 25.7379 26.1373 20.0129 26.1373 13.9004ZM15.9373 16.0879V19.3754C15.9373 19.8879 15.5123 20.3129 14.9998 20.3129C14.4873 20.3129 14.0623 19.8879 14.0623 19.3754V16.0879C12.7998 15.6879 11.8748 14.5129 11.8748 13.1254C11.8748 11.4004 13.2748 10.0004 14.9998 10.0004C16.7248 10.0004 18.1248 11.4004 18.1248 13.1254C18.1248 14.5254 17.1998 15.6879 15.9373 16.0879Z"
                fill="white"
              />
            </svg>

            <p>Security</p>
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 flex gap-2 items-center px-10 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.5001 16.0754C27.5001 18.9379 26.0251 21.4754 23.7501 23.0754L22.0751 26.7629C21.6876 27.6004 20.5626 27.7629 19.9751 27.0504L18.1251 24.8254C15.8001 24.8254 13.6626 24.0379 12.0376 22.7254L12.7876 21.8379C18.5626 21.4004 23.1251 16.8254 23.1251 11.2504C23.1251 10.3004 22.9876 9.36289 22.7376 8.46289C25.5751 9.96289 27.5001 12.8129 27.5001 16.0754Z"
                fill="white"
              />
              <path
                d="M20.375 7.5875C18.9125 4.5875 15.65 2.5 11.875 2.5C6.7 2.5 2.5 6.4125 2.5 11.25C2.5 14.1125 3.975 16.65 6.25 18.25L7.925 21.9375C8.3125 22.775 9.4375 22.925 10.025 22.225L10.7125 21.4L11.875 20C17.05 20 21.25 16.0875 21.25 11.25C21.25 9.9375 20.9375 8.7 20.375 7.5875ZM15 12.1875H8.75C8.2375 12.1875 7.8125 11.7625 7.8125 11.25C7.8125 10.7375 8.2375 10.3125 8.75 10.3125H15C15.5125 10.3125 15.9375 10.7375 15.9375 11.25C15.9375 11.7625 15.5125 12.1875 15 12.1875Z"
                fill="white"
              />
            </svg>
            <p>Support</p>
          </Link>
        </div>
        <div className="w-full self-start flex px-2">
          <Link
            className={`py-4 flex gap-2 items-center px-10 ${
              router.pathname === "/name"
                ? "bg-[#2A63E2] font-bold"
                : "bg-transparent font-bold text-[#fff]"
            } my-1 rounded-xl text-left w-full`}
            href="/name"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.9124 19.9127C26.7124 19.5752 26.1499 19.0502 24.7499 19.3002C23.9749 19.4377 23.1874 19.5002 22.3999 19.4627C19.4874 19.3377 16.8499 18.0002 15.0124 15.9377C13.3874 14.1252 12.3874 11.7627 12.3749 9.21271C12.3749 7.78771 12.6499 6.41271 13.2124 5.11271C13.7624 3.85021 13.3749 3.18771 13.0999 2.91271C12.8124 2.62521 12.1374 2.22521 10.8124 2.77521C5.69988 4.92521 2.53738 10.0502 2.91238 15.5377C3.28738 20.7002 6.91238 25.1127 11.7124 26.7752C12.8624 27.1752 14.0749 27.4127 15.3249 27.4627C15.5249 27.4752 15.7249 27.4877 15.9249 27.4877C20.1124 27.4877 24.0374 25.5127 26.5124 22.1502C27.3499 20.9877 27.1249 20.2502 26.9124 19.9127Z"
                fill="white"
              />
            </svg>

            <p>Dark Mode</p>
          </Link>
        </div>
      </div>
      <div className="self-start flex px-2 absolute bottom-7 left-4 py-2">
        <Link
          className={`py-4 flex gap-2 items-center px-10 min-w-[270px] self-center ${
            router.pathname === "/name"
              ? "bg-[#2A63E2] font-bol bg-[#fff]/20"
              : "bg-[#fff]/20 font-bold text-[#fff]"
          } my-1 rounded-xl text-left w-full`}
          href="/login"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 17 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.5H6.75C2.75 0.5 0.25 3 0.25 7V12.0625H8.0625C8.575 12.0625 9 12.4875 9 13C9 13.5125 8.575 13.9375 8.0625 13.9375H0.25V19C0.25 23 2.75 25.5 6.75 25.5H9.9875C13.9875 25.5 16.4875 23 16.4875 19V7C16.5 3 14 0.5 10 0.5Z"
              fill="white"
            />
          </svg>

          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default LeftSide;
