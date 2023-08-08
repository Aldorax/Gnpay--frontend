import DashboardLayout from "@/components/DashboardLayout";
import LeftSide from "@/components/LeftSide";
import FinacingRight from "@/components/FinancingRight";
import React from "react";
import "@/app/globals.css";

const Financing = () => {
  return (
    <main>
      <DashboardLayout className="flex">
        <LeftSide />
        <FinacingRight />
      </DashboardLayout>
    </main>
  );
};

export default Financing;
