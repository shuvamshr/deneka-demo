import Link from "next/link";
import clsx from "clsx";

const Style: Record<string, string> = {
  // Fixed Styles
  container:
    "flex-row flex items-center justify-center gap-4 px-5 text-sm font-semibold rounded-full whitespace-nowrap",

  // Dynamic Styles
  primary: "bg-indigo-700 text-white hover:bg-indigo-600",
  secondary: "bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
  tertiary: "bg-gray-50  text-gray-700",

  sm: "h-10",
  md: "h-12",

  fit: "w-fit",
  block: "w-full",
  responsive: "w-full md:w-fit",
};

interface ComponentProps {
  children: React.ReactNode;
  type?: string;
  size?: string;
  display?: string;
  path?: string;
}

export default function LinkButton({
  children = "untitled",
  type = "primary",
  size = "sm",
  display = "responsive",
  path,
}: ComponentProps) {
  return (
    <Link
      href={`${path}`}
      className={clsx(
        Style.container,
        Style[type],
        Style[size],
        Style[display]
      )}
    >
      {children}
    </Link>
  );
}
