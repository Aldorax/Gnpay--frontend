import { defaults } from "chart.js";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/app/Frame 9 (1).png";

const Step3 = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="p-5 mx-16 m-5 rounded-lg flex flex-col items-center justify-center bg-[#FAFAFA]">
      <p className="font-bold">Summary</p>

      <div className="flex flex-col items-center gap-2 p-5 min-w-[400px] max-[537px] rounded-xl  justify-between mt-3 bg-white border border-gray-500">
        <div className="flex items-center justify-between gap-3 min-w-[537px] border-b border-[#ccc] py-2">
          <p>Product Price</p>
          <p className="font-bold">₦ 200,000.00</p>
        </div>
        <div className="flex items-center justify-between gap-3 min-w-[537px] border-b border-[#ccc] py-2">
          <p>Payment Plan</p>
          <div className="flex items-center gap-6 font-bold">
            <p>12 Months</p>
            <p className="text-[#2A63E2] cursor-pointer">Change</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3 min-w-[537px] border-b border-[#ccc] py-2">
          <p>Monthly Payment</p>
          <p className="font-bold">₦ 8,333.33</p>
        </div>
        <div className="flex items-center justify-between gap-3 min-w-[537px] border-b border-[#ccc] py-2">
          <p>One-off Processing Fee</p>
          <p className="font-bold">₦ 5,000.00</p>
        </div>
        <div className="flex items-center justify-between gap-3 min-w-[537px] py-2">
          <p>Today’s Payment</p>
          <p className="font-bold text-[#2A63E2]">₦ 105,000.00</p>
        </div>
      </div>
      {/* //    */}
      {/* //    */}
      {/* //    */}
      {/* //    */}
      <div className="flex flex-col items-center gap-2 p-5 min-w-[400px] max-[537px] rounded-xl  justify-between mt-3">
        <div className="flex items-center justify-between gap-3 min-w-[537px] text-lg font-bold py-2 rounded-xl">
          <h1>Pay With</h1>
        </div>
        <div className="flex items-center justify-between gap-3 min-w-[537px] text-lg py-2 bg-white p-4">
          <div className="flex justify-between gap-3 items-center ">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gray-300">
                <Image src={image} alt="dk" className="h-5 w-auto" />
              </div>
              <div>
                <h1 className="font-semibold">GNPay Wallet</h1>
                <p className="font-nornal">
                  Balance: <span className="text-[#2A9647]">₦ 115,000.00</span>
                </p>
              </div>
            </div>
          </div>
          {isActive === 1 ? (
            <div className="p-5 border-2 border-black/25 rounded-full bg-[#2A63E2]" />
          ) : (
            <div className="p-5 border-2 border-black/25 rounded-full bg-white" />
          )}
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="flex items-center justify-between gap-3 min-w-[537px] text-lg py-2 p-3 bg-white rounded-xl">
          <div className="flex justify-between gap-3 items-center">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-gray-300">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 5.66328C16.5 6.15828 16.095 6.56328 15.6 6.56328H2.4C1.905 6.56328 1.5 6.15828 1.5 5.66328V5.65578C1.5 3.93828 2.8875 2.55078 4.605 2.55078H13.3875C15.105 2.55078 16.5 3.94578 16.5 5.66328Z"
                    fill="#292D32"
                  />
                  <path
                    d="M1.5 8.5875V12.345C1.5 14.0625 2.8875 15.45 4.605 15.45H13.3875C15.105 15.45 16.5 14.055 16.5 12.3375V8.5875C16.5 8.0925 16.095 7.6875 15.6 7.6875H2.4C1.905 7.6875 1.5 8.0925 1.5 8.5875ZM6 12.9375H4.5C4.1925 12.9375 3.9375 12.6825 3.9375 12.375C3.9375 12.0675 4.1925 11.8125 4.5 11.8125H6C6.3075 11.8125 6.5625 12.0675 6.5625 12.375C6.5625 12.6825 6.3075 12.9375 6 12.9375ZM10.875 12.9375H7.875C7.5675 12.9375 7.3125 12.6825 7.3125 12.375C7.3125 12.0675 7.5675 11.8125 7.875 11.8125H10.875C11.1825 11.8125 11.4375 12.0675 11.4375 12.375C11.4375 12.6825 11.1825 12.9375 10.875 12.9375Z"
                    fill="#292D32"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-semibold">Card</h1>
                <p className="font-nornal">powered by Paystack</p>
              </div>
            </div>
          </div>
          {isActive === 2 ? (
            <div className="p-5 border-2 border-black/25 rounded-full bg-[#2A63E2]" />
          ) : (
            <div className="p-5 border-2 border-black/25 rounded-full bg-white" />
          )}
        </div>
        <p className="font-semibold mx-auto mt-2">
          By clicking the continue button , you agree to our{" "}
          <span className="text-[#2A63E2] underline">Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
};

export default Step3;
