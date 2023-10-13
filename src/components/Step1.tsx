import { defaults } from "chart.js";
import React from "react";

const Step1 = () => {
  return (
    <div className="p-5 mx-16 mt-10 rounded-lg flex flex-col items-center justify-center">
      <p className="font-bold">Upload a proof of your identity</p>
      <p className="max-w-[500px] text-center text-[#6A6A6A]">
        We would require a valid government issued ID (Passport, Driver’s
        license, National ID, Voter’s card)
      </p>

      <button
        type="button"
        className="flex items-center gap-2 p-5 min-w-[400px] rounded-xl border border-gray-300 justify-between mt-10"
      >
        Select a document
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
      </button>

      <div className="flex flex-col lg:flex-row justify-around gap-10 mt-10">
        <div className="min-w-[350px] border-4 border-gray-200 p-2 border-dashed min-h-[200px]">
          <div className="flex flex-col justify-center items-center p-4 min-w-[400px]">
            <p>
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17V11L7 13"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11L11 13"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <h1 className="font-semibold">
              Upload front side of your document
            </h1>
            <h1 className="max-w-[300px] text-center font-light mt-2">
              Upload the front side of your document Support JPG, PNG & PDF
            </h1>

            <button className="border-4 border-[#2A63E2] p-4 rounded-full min-w-[150px] font-semibold text-[#2A63E2] mt-4">
              Choose File
            </button>
          </div>
        </div>
        <div className="min-w-[350px] border-4 border-gray-200 p-2 border-dashed min-h-[200px]">
          <div className="flex flex-col justify-center items-center p-4">
            <p>
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17V11L7 13"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 11L11 13"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <h1 className="font-semibold">
              Upload front side of your document
            </h1>
            <h1 className="max-w-[300px] text-center font-light mt-2">
              Upload the front side of your document Support JPG, PNG & PDF
            </h1>

            <button className="border-4 border-[#2A63E2] p-4 rounded-full min-w-[150px] font-semibold text-[#2A63E2] mt-4">
              Choose File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
