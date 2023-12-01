"use client";
import { useRouter } from "next/navigation";

const Step1 = () => {
  const router = useRouter();
  let selectedRegistrationType = "";

  const handlePersonalRegister = () => {
    selectedRegistrationType = "personal";
  };

  const handleBusinessRegister = () => {
    selectedRegistrationType = "business";
  };

  const handleContinue = () => {
    if (selectedRegistrationType === "personal") {
      router.push("/register/personal");
    } else if (selectedRegistrationType === "business") {
      router.push("/register/business");
    } else {
      // Handle error or redirect to a default page
    }
  };

  return (
    <div className="h-[96vh] rounded-lg flex flex-col justify-between w-full p-4">
      <div className="flex flex-col items-center p-10">
        <h1 className="text-4xl font-extrabold px-20 w-[35vw] text-center pt-10">
          What kind of account do you want to open?
        </h1>
        <h1 className="my-2">Choose yor preferred account</h1>

        <div className="flex flex-col w-[30vw] my-4">
          <button
            onClick={handlePersonalRegister}
            className={`py-4 px-4 w-full my-2 rounded-xl text-start ${
              selectedRegistrationType === "personal" /* Change this line */
                ? "border border-blue-500"
                : "border border-gray-300"
            }`}
          >
            Personal
          </button>
          <button
            onClick={handleBusinessRegister}
            className={`py-4 px-4 w-full my-2 rounded-xl text-start ${
              selectedRegistrationType === "business"
                ? "border border-blue-500"
                : "border border-gray-300 "
            }`}
          >
            Business
          </button>
          <button
            className="py-3 px-4 rounded-full w-full bg-[#2A63E2] text-white my-2"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h1>View our GDPR & Privacy Policies </h1>
        <h1>Copyright 2023</h1>
      </div>
    </div>
  );
};

export default Step1;
