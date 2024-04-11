"use client";

import Tab from "./Tab/Tab";
import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

const Style: Record<string, string> = {
  // Fixed Styles
  container:
    "block md:top-0 md:left-0 fixed bottom-0 md:h-screen md:w-56 w-full fixed border-t md:border-r border-gray-200 bg-white md:px-4 px-2 py-2 md:py-0 md:mb-0 md:pb-0 pb-5",
  tabContainer: "flex md:flex-col justify-around flex-row md:gap-3 md:mt-5",
  headerContainer: "h-20 flex-row items-center hidden md:flex",
  denekaLogo: "ml-2 hover:opacity-80 md:block hidden",
  viewMore: "hidden md:block",
  viewMoreTab: "md:hidden block",
};

interface ComponentProps {
  tab?: string;
}

const tabLinks = {
  technician: [
    { name: "Dashboard", path: "dashboard" },
    { name: "Inquiry", path: "inquiry" },
    { name: "Tickets", path: "tickets" },
    { name: "Client List", path: "clients", hidden: true },
    { name: "Marketplace", path: "marketplace", hidden: true },
    { name: "My Account", path: "account" },
    { name: "View More", path: "menu", menu: true },
  ],
  user: [
    { name: "Dashboard", path: "dashboard" },
    { name: "Inquiry", path: "inquiry" },
    { name: "Tickets", path: "tickets" },
    { name: "Client List", path: "clients", hidden: true },
    { name: "Marketplace", path: "marketplace", hidden: true },
    { name: "My Account", path: "account" },
    { name: "View More", path: "menu", menu: true },
  ],
  finance: [
    { name: "Dashboard", path: "dashboard" },
    { name: "Inquiry", path: "inquiry" },
    { name: "Tickets", path: "tickets" },
    { name: "My Account", path: "account" },
  ],
  admin: [
    { name: "Dashboard", path: "dashboard" },
    { name: "Inquiry", path: "inquiry" },
    { name: "Tickets", path: "tickets" },
    { name: "Client List", path: "clients", hidden: true },
    { name: "Marketplace", path: "marketplace", hidden: true },
    { name: "My Account", path: "account" },
    { name: "View More", path: "menu", menu: true },
  ],
};

export default function Navigation({ tab }: ComponentProps) {
  const tabs = tabLinks["user"] || [];
  return (
    <div className={Style.container}>
      <div className={Style.headerContainer}>
        <Link href="/">
          <Image
            src="/denekalogo.svg"
            width={40}
            height={40}
            alt="Deneka Logo"
            className={Style.denekaLogo}
          />
        </Link>
      </div>

      <div className={Style.tabContainer}>
        {tabs.map((tabItem: any) => (
          <div
            key={tabItem.path}
            className={clsx({
              [Style.viewMore]: tabItem.hidden === true,
              [Style.viewMoreTab]: tabItem.menu === true,
            })}
          >
            <Tab state={tab === tabItem.path && true} path={tabItem.path}>
              {tabItem.name}
            </Tab>
          </div>
        ))}
      </div>
    </div>
  );
}
