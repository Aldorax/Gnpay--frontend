import React, { useState } from "react";
import "@/app/globals.css";
import MoneyBar from "./MoneyBar";
import MoneyBarRight from "./MoneyBarRight";
import AnalyticsBar from "./AnalyticsBar";
import Transactions from "./Transacations";
import Image from "next/image";
import image from "@/app/user.png";
import Header from "./Header";
import Step1 from "./Step1"; // Import your Step components
import Step2 from "./Step2";
import Step3 from "./Step3";
import styles from "./KycRightSide.module.css"; // Import the CSS module
import { useRouter } from "next/navigation";

const KycRightSide = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(1);

  const handleButtonClick = () => {
    if (activeStep === 3) {
      // Redirect to another page on the fourth click
      router.push("/user/successfulKyc");
    } else {
      // Cycle through the steps
      setActiveStep((prevStep) => (prevStep + 1) % 4);
    }
  };
  const handleDecrementButtonClick = () => {
    setActiveStep((prevStep) => (prevStep - 1) % 4);
  };

  const steps = [
    {
      id: 1,
      label: "Step 1",
      component: <Step1 />,
      text: "Hey, do this for step 1",
    },
    { id: 2, label: "Step 2", component: <Step2 />, text: "Now step 2" },
    { id: 3, label: "Step 3", component: <Step3 />, text: "Final step" },
  ];

  return (
    <main className="flex w-full h-full">
      <div className="w-[320px] mr-10"></div>

      <div className="flex flex-col w-full h-full">
        <Header />
        <div className="p-5 mx-16 mt-10 rounded-lg flex justify-between relative items-center">
          <div
            className={`border-b-4 p-1 w-[40vw] mx-auto mb-4 relative top-8 ${
              activeStep === 3 ? "border-[#2A63E2]" : "border-[#ccc]"
            }`}
          ></div>
          <div
            className={`flex items-center w-full justify-evenly absolute left-0 top-2`}
          >
            {steps.map((step) => (
              <div>
                <p className="mb-4">{step.label}</p>
                <div
                  key={step.id}
                  className={`${styles.dot} ${
                    activeStep === step.id
                      ? styles.active
                      : activeStep === 3
                      ? styles.active
                      : ""
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
        {steps.map((step) => (
          <div
            key={step.id}
            className={` ${activeStep === step.id ? styles.active : "hidden"}`}
          >
            {step.component}
          </div>
        ))}
        {/* <button
          className="bg-[#2A63E2] p-5 max-w-[200px] mx-auto text-white"
          onClick={() => setActiveStep(1)}
        >
          Step 1
        </button> */}
        <div className="flex gap-2 items-center justify-center mx-auto">
          {activeStep > 1 ? (
            <button
              className={`text-[#2A63E2] border border-[#2A63E2] p-5 min-w-[200px] max-w-[200px] mx-auto bg-white rounded-full mt-4 ${
                activeStep > 1 ? "cursor-pointer" : "hidden"
              }`}
              onClick={handleDecrementButtonClick}
            >
              {activeStep > 1 ? "Back" : ""}
            </button>
          ) : (
            ""
          )}

          <button
            className={`bg-[#2A63E2] p-5 min-w-[200px] max-w-[200px] mx-auto text-white rounded-full mt-4 ${
              activeStep === 3 ? "cursor-pointer" : ""
            }`}
            onClick={handleButtonClick}
          >
            {activeStep === 3
              ? "Submit"
              : activeStep === 2
              ? "Capture"
              : "Continue"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default KycRightSide;
