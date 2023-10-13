import React from "react";
import CheckBox from "./settings/CheckBox";
import Switch from "./settings/Switch";

export default function SettingsComponent() {
  return (
    <div className="flex flex-col gap-2">
      <div className="border border-gray-600 p-5 rounded-md flex flex-col gap-2">
        <h1 className="font-bold text-2xl mb-3">Notify me when....</h1>
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
        <CheckBox data="Show me as online" />
      </div>
      <br />
      <Switch
        name="Email Notifications"
        desription="Get emails to find out what is going on when you're not online"
      />
      <br />
      <Switch
        name="Email Notifications"
        desription="Get emails to find out what is going on when you're not online"
      />
      <br />
      <Switch
        name="Email Notifications"
        desription="Get emails to find out what is going on when you're not online"
      />
    </div>
  );
}
