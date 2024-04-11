import Link from "next/link";
import clsx from "clsx";

const Style: Record<string, string> = {
  title: "text-xs whitespace-nowrap",
  active: "text-gray-700 font-bold",
  inactive: "text-gray-600 font-medium hover:text-gray-700 hover:font-bold",
};

interface ComponentProps {
  children?: React.ReactNode;
  path?: string;
  state?: string;
}

export default function Breadcrumb({
  children = "Untitled",
  path,
  state = "inactive",
}: ComponentProps) {
  return (
    <Link
      href={`${path}`}
      className={clsx(Style.title, {
        [Style.active]: state === "active",
        [Style.inactive]: state === "inactive",
      })}
    >
      {children}
    </Link>
  );
}
