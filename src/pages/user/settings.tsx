import React from "react";
import "@/app/globals.css";
import TableComponent from "@/components/tables/TableComponent";
import LeftSide from "@/components/LeftSide";
import DashboardLayout from "@/components/DashboardLayout";
import Header from "@/components/Header";
import image from "@/app/user.png";
import Image from "next/image";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import SettingsComponent from "@/components/SettingsComponent";

const settings = () => {
  return (
    <DashboardLayout className="">
      <LeftSide />
      <main className="flex w-full h-full">
        <div className="w-[320px] mr-10"></div>
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between items-center px-10 py-4 text-sm bg-[#F5F7FA]">
            <div>
              <h1 className="mx-4 font-bold text-2xl">SETTINGS</h1>
            </div>
            <div className="flex items-center">
              <div className="mx-5 flex gap-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6.44043V9.77043"
                    stroke="#0A0A0B"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
                    stroke="#0A0A0B"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203"
                    stroke="#0A0A0B"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
              </div>
              <div className="w-14 h-14 flex items-center justify-center rounded-full">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      className="transition-transform"
                      color="secondary"
                      name="Jason Hughes"
                      size="sm"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <p className="font-semibold">Signed in as</p>
                      <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">
                      Team Settings
                    </DropdownItem>
                    <DropdownItem key="analytics">Analytics</DropdownItem>
                    <DropdownItem key="system">System</DropdownItem>
                    <DropdownItem key="configurations">
                      Configurations
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">
                      Help & Feedback
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger">
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="mx-2 flex gap-2 items-center">
                <h1>Emmanuel Appah</h1>
              </div>
            </div>
          </div>
          <div
            style={{ width: "80%", height: "90%" }}
            className="absolute right-12 p-10 mt-20"
          >
            <SettingsComponent />
          </div>
        </div>
      </main>
    </DashboardLayout>
  );
};

export default settings;
