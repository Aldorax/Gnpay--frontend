import React from "react";

import { Switch, cn } from "@nextui-org/react";

interface data {
  name: string;
  desription: string;
}

export default function SwitchComponent({ name, desription }: data) {
  return (
    <Switch
      defaultSelected
      color="primary"
      classNames={{
        base: cn(
          "inline-flex flex-row-reverse min-w-[100%] w-full max-w-md bg-content1 hover:bg-content2 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary"
        ),
      }}
      // I want to be able to add className to this compinent and it should be added to the base className
      //   wrapper: "p-0 h-4 overflow-visible",
      //   thumb: cn(
      //     "w-6 h-6 border-2 shadow-lg",
      //     "group-data-[hover=true]:border-primary",
      //     //selected
      //     "group-data-[selected=true]:ml-6",
      //     // pressed
      //     "group-data-[pressed=true]:w-7",
      //     "group-data-[selected]:group-data-[pressed]:ml-4"
      //   ),
      // }}
    >
      <div className="flex flex-col gap-1 gap-y-4 px-4">
        <p className="text-lg font-bold">{name}</p>
        <p className="text-md text-default-500">{desription}</p>
      </div>
    </Switch>
  );
}
