import React from "react";

import { Checkbox } from "@nextui-org/react";

interface CheckBoxProps {
  data: string;
}

export default function CheckBox({ data }: CheckBoxProps) {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <Checkbox
        isSelected={isSelected}
        radius="none"
        onValueChange={setIsSelected}
      >
        {data} (controlled)
      </Checkbox>
    </div>
  );
}
