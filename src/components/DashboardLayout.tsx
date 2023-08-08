import React from "react";

const DashboardLayout = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`min-w-screen min-h-screen flex justify-between bg-[#fff] ${className}`}
    >
      {children}
    </div>
  );
};

export default DashboardLayout;
