"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Menu = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full rounded-xl bg-[#2A63E2] h-[96vh] flex flex-col p-10">
        <div className="tex-2xl font-bold text-white">Gnpay Africa</div>
        <div className="py-20 mt-32">
          <h1 className="text-6xl my-4 font-bold w-[35vw] text-white">
            Unlock Your Dreams.
          </h1>
          <h1 className="text-gray-100 font-light w-[30vw]">
            Lorem ipsum dolor sit amet consectetur. Etiam quam turpis ut eu.
            Lectus quis eget viverra leo amet. Lorem ipsum dolor sit amet
            consectetur. Etiam quam turpis ut eu.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
