import DashboardLayout from "@/components/DashboardLayout";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import React from "react";
import "@/app/globals.css";

const dashboard = () => {
  return (
    <main>
      <DashboardLayout className="flex flex-col md:flex-row">
        <div className="hidden lg:flex">
          <LeftSide />
        </div>
        <RightSide />
      </DashboardLayout>
    </main>
  );
};

export default dashboard;
