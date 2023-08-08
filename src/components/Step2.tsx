import { defaults } from "chart.js";
import React from "react";

const Step2 = () => {
  return (
    <div className="p-5 mx-16 mt-10 rounded-lg flex flex-col items-center justify-center">
      <p className="font-bold">Liveness Check</p>
      <p className="max-w-[500px] text-center text-[#6A6A6A]">
        Complete a liveness check by providing a selfie document
      </p>

      <div className="min-h-[300px] min-w-[300px] bg-black mt-5 mb-2 rounded-lg p-2 flex items-center justify-center">
        <div className="min-h-[250px] max-h-[250px] min-w-[200px] max-w-[200px] bg-[#6A6A6A] rounded-lg p-2 rounded-t-full rounded-b-full"></div>
      </div>
    </div>
  );
};

export default Step2;
