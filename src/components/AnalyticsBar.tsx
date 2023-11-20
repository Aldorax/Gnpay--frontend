import React from "react";
import AnalyticsChart from "./Analytics";

const AnalyticsBar = () => {
  const analyticsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="border-gray-300 w-full md:min-w-[700px]  md:max-w-[700px] p-4 md:p-10 sm:ml-16 sm:mt-10 mt-4 rounded-lg bg-white h-[250px] md:h-[300px]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Analytics</h1>
        <div className="flex gap-3 items-center">
          <div className="p-2 border border-[#2A63E2] min-w-[80px] rounded-2xl text-[#2A63E2] font-semibold text-sm cursor-pointer flex items-center gap-3">
            <h1>Today</h1>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16.7996C11.3 16.7996 10.6 16.5296 10.07 15.9996L3.55002 9.47965C3.26002 9.18965 3.26002 8.70965 3.55002 8.41965C3.84002 8.12965 4.32002 8.12965 4.61002 8.41965L11.13 14.9396C11.61 15.4196 12.39 15.4196 12.87 14.9396L19.39 8.41965C19.68 8.12965 20.16 8.12965 20.45 8.41965C20.74 8.70965 20.74 9.18965 20.45 9.47965L13.93 15.9996C13.4 16.5296 12.7 16.7996 12 16.7996Z"
                fill="#2A63E2"
              />
            </svg>
          </div>
        </div>
      </div>
      <AnalyticsChart data={analyticsData} />
    </div>
  );
};

export default AnalyticsBar;
