import { defaults } from "chart.js";
import Image from "next/image";
import React from "react";
import front from "../../public/image 32.png";
import back from "../../public/image 32-1.png";
import selfie from "../../public/Rectangle 6667183.png";

const Step3 = () => {
  return (
    <div className="p-5 mx-16 rounded-lg flex flex-col items-center justify-center">
      <div className="p-5 mx-16 mt-10 rounded-lg flex flex-col items-center justify-center">
        <p className="font-bold">Confirm Details</p>

        <div className="min-h-[300px] min-w-[300px] mt-5 rounded-lg p-2 flex items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <p className="font-bold">Front side of ID</p>
            <div className="min-h-[230px] max-h-[180px] min-w-[300px] max-w-[300px] rounded-lg p-2 mx-5 flex items-center justify-center border border-dashed border-black border-spacing-5">
              <Image
                src={front}
                alt="im"
                width={250}
                height={250}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Back side of ID</p>
            <div className="min-h-[230px] max-h-[180px] min-w-[300px] max-w-[300px] rounded-lg p-2 mx-5 flex items-center justify-center border border-dashed border-black border-spacing-5">
              <Image
                src={back}
                alt="im"
                width={250}
                height={250}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Selfie Image</p>
            <div className="min-h-[230px] max-h-[180px] min-w-[300px] max-w-[300px] rounded-lg p-2 mx-5 flex items-center justify-center border border-dashed border-black border-spacing-5">
              <Image
                src={selfie}
                alt="im"
                width={250}
                height={250}
                className="h-50 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
