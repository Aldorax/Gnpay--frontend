import React from "react";
import { useState } from "react";

const MoneyBarLeft = () => {
  const [verified, setVerified] = useState(false);
  return (
    <div className="min-w-[37vw] max-w-[37vw] min-h-[200px] border bg-[#2A63E2] text-white border-gray-400/25 px-5 py-4 rounded-lg flex flex-col justify-between relative">
      {/* <div className="flex items-center gap-5 border-b-2 border-black/10 pb-3"> */}
      <div className="flex items-center gap-5 border-black/10 pb-3">
        <div className="p-3 rounded-full bg-white">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.4373 12.5003V41.4795C23.4373 42.9587 21.9373 43.9795 20.5832 43.417C16.7082 41.792 11.8957 40.3753 8.479 39.917L7.83317 39.8337C5.81234 39.5837 4.1665 37.7295 4.1665 35.7087V10.9378C4.1665 8.43783 6.18734 6.41699 8.68734 6.41699H8.83317C12.7498 6.75033 18.5207 8.58366 22.3332 10.6462C23.0207 11.0212 23.4373 11.7087 23.4373 12.5003Z"
              fill="black"
            />
            <path
              d="M41.3125 6.41699H41.1875C40.6875 6.45866 40.1458 6.52116 39.5833 6.62533C37.0208 7.04199 33.9792 7.91699 31.25 9.00033C29.9583 9.52116 28.75 10.0837 27.6875 10.6462C27 11.0212 26.5625 11.7295 26.5625 12.5003V41.4795C26.5625 42.9587 28.0625 43.9795 29.4167 43.417C33.2917 41.792 38.1042 40.3753 41.5208 39.917L42.1667 39.8337C44.1875 39.5837 45.8333 37.7295 45.8333 35.7087V10.9378C45.8333 8.43783 43.8125 6.41699 41.3125 6.41699ZM40.1458 28.6045C40.1458 29.417 39.5625 29.7712 38.8542 29.3753L36.6458 28.1462C36.4167 28.0212 36.0417 28.0212 35.7917 28.1462L33.5833 29.3753C32.875 29.7712 32.2917 29.417 32.2917 28.6045V22.2087C32.2917 21.2503 33.0833 20.4587 34.0417 20.4587H38.4167C39.375 20.4587 40.1667 21.2503 40.1667 22.2087V28.6045H40.1458Z"
              fill="black"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-lg font-light">Active Financing</h1>
          <p className="font-semibold text-5xl">
            <span className="line-through divide-double">N</span> 0.00
          </p>
        </div>
      </div>

      {verified ? (
        <button
          className="self-end p-5 text-[#2A63E2] min-w-[300px] rounded-xl bg-white text-lg border font-semibold border-[#2A63E2] relative flex items-center gap-5"
          type="button"
        >
          Get Auto gas Financing
          <svg
            width="32"
            height="32"
            className="absolute right-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z"
              fill="#2A63E2"
            />
            <path
              d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
              fill="#2A63E2"
            />
          </svg>
        </button>
      ) : (
        <div></div>
      )}

      {/* //   <div className="flex justify-between items-center">
    //     <div className="flex flex-col">
    //       <h1 className="text-[#6A6A6A]">Paid 50%</h1>
    //       <p className="font-semibold text-xl">N 100,000</p>
    //     </div>
    //     <div className="flex flex-col">
    //       <h1 className="text-[#6A6A6A]">Balance</h1>
    //       <p className="font-semibold text-xl">N 100,000</p>
    //     </div>
    //     <div className="flex flex-col">
    //       <h1 className="text-[#6A6A6A]">Monthly Payment</h1>
    //       <p className="font-semibold text-xl">N 8,333.33</p>
    //     </div>
    //   </div> */}
    </div>
  );
};

export default MoneyBarLeft;
