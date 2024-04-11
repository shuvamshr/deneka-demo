"use client";

import Link from "next/link";
import Button from "@/app/components/global/LinkButton/LinkButton";
import { EllipsisVerticalIcon as OptionButtonIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon as DateIcon,
  ChartBarIcon as ProgressIcon,
  UserIcon as ClientIcon,
  BriefcaseIcon as WorkTypeIcon,
} from "@heroicons/react/24/solid";
import { useState, useEffect, useRef } from "react";

interface ComponentProps {
  id?: string;
  title?: string;
  status?: string;
  date?: string;
  client?: string;
  type?: string;
}

const Style: Record<string, string> = {
  // Fixed Styles
  headerContainer: "flex flex-col gap-5",
  footerContainer: "flex flex-col gap-5",
  titleContainer: "flex flex-row justify-between items-start gap-6",
  detailContainer: "flex flex-col gap-4",
  buttonContainer: "flex flex-col items-center md:flex-row gap-3",
  optionContainer:
    "absolute flex flex-col w-fit gap-6 bg-white w-auto border rounded-md  p-6 self-end mt-10 shadow-md",

  cardID: "text-indigo-700 font-bold",
  cardTitle: "text-base font-regular text-gray-900",
  detailTitle:
    "flex flex-row gap-2 items-center text-xs font-semibold  leading-none",
  detailIcon: "h-4 w-4",

  optionButtonIcon: "h-5 w-5 text-gray-400",
  optionTitle:
    "text-sm font-medium leading-none text-gray-700 hover:text-indigo-700",

  horizontalDivider: "w-full h-[1px] bg-gray-100",

  // Dynamic Styles
  detailTitle_default:
    "flex flex-row gap-2 items-center text-xs font-semibold leading-none text-gray-500",
  detailTitle_pending:
    "flex flex-row gap-2 items-center text-xs font-semibold leading-none text-yellow-500",
  detailTitle_overdue:
    "flex flex-row gap-2 items-center text-xs font-semibold leading-none text-red-500",

  container_default:
    "flex flex-col rounded-lg w-full md:w-[48%] lg:w-[32%] bg-white py-7 px-6 gap-5 border border-gray-200 justify-between ease-in duration-100 hover:border border-b-2 border-b-gray-200",
  container_pending:
    "flex flex-col rounded-lg w-full md:w-[48%] lg:w-[32%] bg-white py-7 px-6 gap-5 border border-gray-200 justify-between ease-in duration-100 hover:border border-b-2 border-b-yellow-500",
  container_overdue:
    "flex flex-col rounded-lg w-full md:w-[48%] lg:w-[32%] bg-white py-7 px-6 gap-5 border border-gray-200 justify-between ease-in duration-100 hover:border border-b-2 border-b-red-500",

  optionButton_inactive:
    "max-[320px]:hidden flex flex-row items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-md p-1",
  optionButton_active:
    "max-[320px]:hidden flex flex-row items-center justify-center bg-gray-100 rounded-md p-1",
};

const getContainerStyle = (status: string) => {
  switch (status) {
    case "Pending":
      return `${Style.container_pending}`;
    case "Overdue":
      return `${Style.container_overdue}`;
    default:
      return `${Style.container_default}`;
  }
};

const getDetailTitleStyle = (status: string) => {
  switch (status) {
    case "Pending":
      return `${Style.detailTitle_pending}`;
    case "Overdue":
      return `${Style.detailTitle_overdue}`;
    default:
      return `${Style.detailTitle_default}`;
  }
};

const getOptionButtonStyle = (state: boolean) => {
  switch (state) {
    case true:
      return `${Style.optionButton_active}`;
    case false:
      return `${Style.optionButton_inactive}`;
  }
};

export default function InquiryCard({
  id = "Undefined",
  title = "Undefined",
  status = "Undefined",
  date = "Undefined",
  client = "Undefined",
  type = "Undefined",
}: ComponentProps) {
  const dynamicContainerStyle = getContainerStyle(status);
  const dynamicDetailTitleStyle = getDetailTitleStyle(status);

  const [showOptions, setShowOptions] = useState(false);

  const dynamicOptionButtonStyle = getOptionButtonStyle(showOptions);

  // Ref for the option container
  const optionContainerRef = useRef<HTMLDivElement | null>(null); // Explicitly specify the type as HTMLDivElement | null

  // Function to toggle the visibility of option container
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  // Effect to add click event listener when showOptions is true
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionContainerRef.current &&
        !optionContainerRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showOptions]);
  return (
    <div className={dynamicContainerStyle}>
      <div className={Style.headerContainer}>
        <div className={Style.titleContainer}>
          <h1 className={Style.cardTitle}>
            <Link href={`/inquiry/id/${id}`} className={Style.cardID}>
              #{id}:{" "}
            </Link>
            {title}
          </h1>
          <button className={dynamicOptionButtonStyle} onClick={toggleOptions}>
            <OptionButtonIcon className={Style.optionButtonIcon} />
          </button>
        </div>
        <div className={Style.horizontalDivider} />
        <div className={Style.detailContainer}>
          <p className={dynamicDetailTitleStyle}>
            <ProgressIcon className={Style.detailIcon} />
            {status}
          </p>
          <p className={Style.detailTitle_default}>
            <DateIcon className={Style.detailIcon} />
            {date}
          </p>
          <p className={Style.detailTitle_default}>
            <ClientIcon className={Style.detailIcon} />
            {client}
          </p>
          <p className={Style.detailTitle_default}>
            <WorkTypeIcon className={Style.detailIcon} />
            {type}
          </p>
        </div>
      </div>

      <div className={Style.footerContainer}>
        <div className={Style.horizontalDivider} />
        <div className={Style.buttonContainer}>
          <Button type="primary" path={`/inquiry/id/${id}`}>
            Lodge Ticket
          </Button>
          <Button type="secondary" path={`/inquiry/id/${id}`}>
            View Details
          </Button>
        </div>
      </div>

      {showOptions && (
        // Assign the ref to the option container
        <div ref={optionContainerRef} className={Style.optionContainer}>
          <Link href={`/inquiry/id/${id}`} className={Style.optionTitle}>
            View Details
          </Link>
          <Link href={""} className={Style.optionTitle}>
            Lodge Ticket
          </Link>

          <Link href={`/inquiry/id/${id}`} className={Style.optionTitle}>
            Client Contact Details
          </Link>
          <div className={Style.horizontalDivider} />
          <Link href={""} className={Style.optionTitle}>
            Archive Ticket
          </Link>
        </div>
      )}
    </div>
  );
}
