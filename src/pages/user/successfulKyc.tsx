import DashboardLayout from "@/components/DashboardLayout";
import LeftSide from "@/components/LeftSide";
import KycCompleteRightSide from "@/components/KycCompleteRightSide";
import React from "react";
import "@/app/globals.css";

const successfulKyc = () => {
  return (
    <main>
      <DashboardLayout className="flex">
        <div className="hidden lg:flex">
          <LeftSide />
        </div>
        <KycCompleteRightSide />
      </DashboardLayout>
    </main>
  );
};

export default successfulKyc;
