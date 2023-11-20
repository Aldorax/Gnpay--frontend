import React from "react";
import CheckBox from "./settings/CheckBox";
import Switch from "./settings/Switch";

export default function SettingsComponent() {
  return (
    <div className="flex flex-col sm:gap-2 gap-4 w-full">
      <div className="border border-gray-600 p-5 rounded-md flex flex-col gap-2">
        <h1 className="sm:font-bold sm:text-2xl mb-3 font-semibold text-xl">
          Notify me when....
        </h1>
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
      </div>

      <div className="flex-row space-y-2 ">
        <Switch
          name="Email Notifications"
          desription="Get emails to find out what is going on when you're not online"
        />

        <Switch
          name="Email Notifications"
          desription="Get emails to find out what is going on when you're not online"
        />

        <Switch
          name="Email Notifications"
          desription="Get emails to find out what is going on when you're not online"
        />
      </div>
    </div>
  );
}
