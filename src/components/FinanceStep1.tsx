import { defaults } from "chart.js";
import React, { useState } from "react";
import Image from "next/image";
import image from "@/app/Frame 9 (1).png";
import styles from "@/app/register.module.css";

const Step1 = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="p-5 mx-16 m-5 rounded-lg flex flex-col items-center justify-center bg-[#FAFAFA]">
      <p className="font-bold text-lg">Product Price & Payment Plan</p>

      <div className="mt-6">
        <div className={styles.inputContainer1}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-2xl min-w-[200px] border border-black/10`}
          />
          <label htmlFor="email" className={styles["floating-placeholder"]}>
            Product Price
          </label>
        </div>
        <p className="text-[#2A63E2] text-sm font-semibold">
          + ₦ 5,000.00 Processing fee
        </p>
      </div>

      <div className="mt-6">
        <div className={styles.inputContainer1}>
          <input
            type="email"
            name="email"
            id="How"
            placeholder=" "
            className={`${styles["register-input"]} text-[#77787D] px-4 py-3 rounded-2xl min-w-[200px] border border-black/10`}
          />
          <label htmlFor="How" className={styles["floating-placeholder"]}>
            How much are you paying now?
          </label>
        </div>
      </div>

      <h1 className={`min-w-[400px] mt-10 font-bold`}>Choose Payment Plan</h1>
      <div className={`min-w-[400px] flex gap-5 mt-3`}>
        <div
          className={`min-w-[200px] max-w-[200px] border border-black p-4 rounded-lg flex items-center gap-3`}
        >
          <div className="p-3 border-2 border-black/25 rounded-full" />3 Months
        </div>
        <div
          className={`min-w-[200px] max-w-[200px] border border-black p-4 rounded-lg flex items-center gap-3`}
        >
          <div className="p-3 border-2 border-black/25 rounded-full" />6 Months
        </div>
      </div>
      <div className={`min-w-[400px] flex gap-5 mt-3`}>
        <div
          className={`min-w-[200px] max-w-[200px] border border-black p-4 rounded-lg flex items-center gap-3`}
        >
          <div className="p-3 border-2 border-black/25 rounded-full" />9 Months
        </div>
        <div
          className={`min-w-[200px] max-w-[200px] border border-[#2A63E2] p-4 rounded-lg flex items-center gap-3 text-[#2A63E2] font-bold`}
        >
          <div className="p-3 border-2 border-black/25 rounded-full bg-[#2A63E2]" />
          12 Months
        </div>
      </div>

      <div
        className={`min-w-[400px] mt-10 px-3 py-2 bg-[#E8EFFF] text-sm font-bold rounded-md`}
      >
        Monthly payment: ₦ 8,333.33
      </div>
    </div>
  );
};

export default Step1;
