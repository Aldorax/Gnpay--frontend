import DashboardLayout from "@/components/DashboardLayout";
import LeftSide from "@/components/LeftSide";
import KycCompleteRightSide from "@/components/FinaceCompleteRightSide";
import React from "react";
import "@/app/globals.css";

const successfulKyc = () => {
  return (
    <main>
      <DashboardLayout className="flex">
        <LeftSide />
        <KycCompleteRightSide />
      </DashboardLayout>
    </main>
  );
};

export default successfulKyc;
