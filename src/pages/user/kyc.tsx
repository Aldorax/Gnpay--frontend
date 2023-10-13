import DashboardLayout from "@/components/DashboardLayout";
import LeftSide from "@/components/LeftSide";
import KycRightSide from "@/components/KycRightSide";
import React from "react";
import "@/app/globals.css";

const KYC = () => {
  return (
    <main>
      <DashboardLayout className="flex">
        <div className="hidden lg:flex">
          <LeftSide />
        </div>
        <KycRightSide />
      </DashboardLayout>
    </main>
  );
};

export default KYC;
