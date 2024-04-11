import Link from "next/link";
import clsx from "clsx";

const Style: Record<string, string> = {
  value:
    "font-semibold text-[10px] text-gray-700 h-5 px-[10px] border border-gray-200 rounded-full flex flex-row justify-center items-center leading-none",
  container_base: "flex flex-row items-center gap-2 h-full px-2",
  container_active:
    "flex flex-row items-center gap-2 h-full px-2 border-b-2 border-b-indigo-700",
  title_base: "text-xs whitespace-nowrap",
  title_active: "text-gray-700 font-bold",
  title_inactive:
    "text-gray-600 font-medium hover:text-gray-700 hover:font-bold",
};

interface ComponentProps {
  children?: React.ReactNode;
  value?: number;
  path?: string;
  state?: boolean;
}

export default function Filter({
  children = "Untitled",
  value = 0,
  path,
  state = false,
}: ComponentProps) {
  return (
    <Link
      href={`${path}`}
      className={clsx(Style.container_base, {
        [Style.container_active]: state,
      })}
    >
      <p
        className={clsx(Style.title_base, {
          [Style.title_active]: state,
          [Style.title_inactive]: !state,
        })}
      >
        {children}
      </p>
      <div className={Style.value}>{value}</div>
    </Link>
  );
}
