"use client";
import { useRouter } from "next/navigation";

const Step1 = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/register/business");
  };

  return (
    <div className="h-[96vh] rounded-lg flex flex-col justify-between w-full p-4">
      <div className="flex flex-col items-center p-0 md:p-10">
        <h1 className="text-2xl md:text-4xl font-bold px-4 md:px-20 w-full md:w-[40vw] text-center pt-10">
          Enter Verification Code
        </h1>
        <h1 className="my-2 w-[70vw] md:w-[20vw] text-center text-[#6A6A6A]">
          Enter the 4 digit number that was sent to{" "}
          <span className="text-black">user@email.com</span>
        </h1>

        <div className="flex flex-col w-[80vw] md:w-[30vw] my-4">
          <form className="flex items-center justify-center gap-7 md:gap-10 text-center">
            {/* 4 input fields for otp */}
            <input
              className="border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400 mb-1 py-4 text-center w-14 md:w-20 text-xl font-bold"
              maxLength={1}
              required
              type="text"
            />
            <input
              className="border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400 mb-1 py-4 text-center w-14 md:w-20 text-xl font-bold"
              maxLength={1}
              required
              type="text"
            />
            <input
              className="border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400 mb-1 py-4 text-center w-14 md:w-20 text-xl font-bold"
              maxLength={1}
              required
              type="text"
            />
            <input
              className="border border-gray-300 p-3 rounded-xl active:outline-gray-400 focus:outline-gray-400 mb-1 py-4 text-center w-14 md:w-20 text-xl font-bold"
              maxLength={1}
              required
              type="text"
            />
          </form>
          <button
            className="py-3 px-4 rounded-full w-full bg-[#2A63E2] text-white my-2"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
        <p className="text-center text-sm">
          Didn’t receive any code?{" "}
          <span className="text-[#2A63E2] font-bold cursor-pointer">
            Resend
          </span>
        </p>
      </div>
      <div className="hidden md:flex justify-between items-center">
        <h1>View our GDPR & Privacy Policies </h1>
        <h1>Copyright 2023</h1>
      </div>
    </div>
  );
};

export default Step1;
