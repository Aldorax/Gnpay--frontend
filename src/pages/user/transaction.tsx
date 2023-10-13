import React from "react";
import "@/app/globals.css";
import TableComponent from "@/components/tables/TableComponent";
import LeftSide from "@/components/LeftSide";
import DashboardLayout from "@/components/DashboardLayout";

const transaction = () => {
  return (
    <DashboardLayout className="flex justify-between">
      <LeftSide />
      <div
        style={{ width: "75%", height: "90%" }}
        className="absolute right-20 p-10"
      >
        <TableComponent />
      </div>
    </DashboardLayout>
  );
};

export default transaction;
