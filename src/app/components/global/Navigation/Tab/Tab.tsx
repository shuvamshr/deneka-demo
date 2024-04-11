import Link from "next/link";
import TabIcon from "./TabIcon/TabIcon";
import clsx from "clsx";

const Style: Record<string, string> = {
  icon: "h-5 w-5",
  title: "md:text-sm text-[10px] whitespace-nowrap max-[360px]:hidden",
  container:
    "flex md:flex-row flex-col items-center md:justify-start justify-center w-fit md:px-5 h-14 md:w-full rounded-full leading-none gap-2 md:gap-3 md:hover:gap-4 duration-200 ease-out overflow-x",
  container_active: "md:font-bold font-medium text-indigo-700 md:bg-indigo-50",
  container_inactive:
    "md:font-semibold font-regular text-gray-700 bg-white md:hover:bg-gray-50",
  container_hidden: "hidden",
};

interface ComponentProps {
  children?: React.ReactNode;
  path?: string;
  state?: boolean;
}

export default function Tab({
  children = "undefined",
  path = "inquiry",
  state = false,
}: ComponentProps) {
  const Icon = TabIcon(path, state);

  return (
    <Link
      href={`/${path}`}
      className={clsx(Style.container, {
        [Style.container_active]: state === true,
        [Style.container_inactive]: state === false,
      })}
    >
      {path && <Icon className={Style.icon} />}{" "}
      <span className={Style.title}>{children}</span>
    </Link>
  );
}
