import { defaults } from "chart.js";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/app/Frame 9 (1).png";
import styles from "@/app/register.module.css";

const Step1 = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="py-5 mx-4 sm:mx-16 sm:m-5 rounded-lg flex flex-col items-center justify-center sm:bg-[#FAFAFA]">
      <p className="sm:font-bold sm:text-lg text-xl font-semibold">
        Product Price & Payment Plan
      </p>

      <div className="mt-6 w-full sm:w-auto">
        <div
          className={`${styles.inputContainer1} sm:block flex flex-col w-full`}
        >
          <label htmlFor="email" className={styles["floating-placeholder"]}>
            Product Price
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-2xl sm:min-w-[200px] border border-black/10 w-full`}
          />
        </div>
        <p className="text-[#2A63E2] text-sm font-semibold">
          + ₦ 5,000.00 Processing fee
        </p>
      </div>
      <div className="mt-6 w-full sm:w-auto">
        <div
          className={`${styles.inputContainer1} sm:block flex flex-col-reverse w-full`}
        >
          <input
            type="email"
            name="email"
            id="How"
            placeholder=" "
            className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-2xl sm:min-w-[200px] border border-black/10 w-full`}
          />
          <label htmlFor="How" className={styles["floating-placeholder"]}>
            How much are you paying now?
          </label>
        </div>
      </div>

      <div className="w-full sm:w-auto">
        <h1
          className={`sm:min-w-[400px] mt-10 sm:font-bold font-semibold text-xl`}
        >
          Choose Payment Plan
        </h1>
        <div className={`sm:min-w-[400px] flex sm:gap-5 gap-4 sm:mt-3 mt-4`}>
          <div
            className={`sm:min-w-[200px] w-1/2 sm:max-w-[200px] border border-black sm:p-4 py-2 justify-center rounded-lg flex items-center gap-3`}
          >
            <div className="sm:p-3 p-2 border-2 border-black/25 rounded-full" />
            3 Months
          </div>
          <div
            className={`sm:min-w-[200px] w-1/2 sm:max-w-[200px] border border-black sm:p-4 py-2 justify-center rounded-lg flex items-center gap-3`}
          >
            <div className="sm:p-3 p-2 border-2 border-black/25 rounded-full" />
            6 Months
          </div>
        </div>
        <div className={`sm:min-w-[400px] flex sm:gap-5 gap-4 sm:mt-3 mt-4`}>
          <div
            className={`sm:min-w-[200px] w-1/2 sm:max-w-[200px] border border-black sm:p-4 py-2 justify-center rounded-lg flex items-center gap-3`}
          >
            <div className="sm:p-3 p-2 border-2 border-black/25 rounded-full" />
            9 Months
          </div>
          <div
            className={`sm:min-w-[200px] w-1/2 sm:max-w-[200px] border border-[#2A63E2] sm:p-4 py-2 rounded-lg flex items-center  justify-center gap-3 text-[#2A63E2] font-bold`}
          >
            <div className="sm:p-3 p-2 border-2 border-black/25 rounded-full bg-[#2A63E2]" />
            12 Months
          </div>
        </div>
      </div>

      <div
        className={`min-w-[400px]  mt-10 px-3 py-2 bg-[#E8EFFF] text-sm font-bold rounded-md`}
      >
        Monthly payment: ₦ 8,333.33
      </div>
    </div>
  );
};

export default Step1;
