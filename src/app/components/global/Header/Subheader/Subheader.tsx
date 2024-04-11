import React from "react";
import { ChevronRightIcon as ArrowIcon } from "@heroicons/react/24/solid";

const Style = {
  container:
    "w-full h-12 border-b border-gray-200 bg-white flex flex-row items-center px-5 gap-3 overflow-auto",
  verticalDivider: "border-l-[1.5px] border-gray-200 h-4",
  arrowIcon: "h-3 w-3 text-gray-700",
};

interface ComponentProps {
  children?: React.ReactNode;
  type?: string;
}

export default function Subheader({
  children = "Untitled",
  type,
}: ComponentProps) {
  return (
    <div className={Style.container}>
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          {index > 0 && type === "filter" ? (
            <div className={Style.verticalDivider} />
          ) : null}
          {index > 0 && type !== "filter" ? (
            <ArrowIcon className={Style.arrowIcon} />
          ) : null}
          {child}
        </React.Fragment>
      ))}
    </div>
  );
}
