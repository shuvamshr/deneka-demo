const Style: Record<string, string> = {
  // Fixed Styles
  container:
    "top-0 sticky w-full h-16 border-b border-gray-200 bg-white flex flex-row gap-3 items-center px-5",
  value:
    "sm:hidden max-[320px]:hidden font-semibold text-[10px] text-gray-700 h-5 px-[10px] border border-gray-300 rounded-full flex flex-row justify-center items-center leading-none",
  title: "text-lg font-bold text-gray-900 max-[320px]:hidden",
};

interface ComponentProps {
  title?: string;
  value?: number;
}

export default function Header({
  title = "Untitled Page",
  value,
}: ComponentProps) {
  return (
    <div className={Style.container}>
      <h1 className={Style.title}>{title}</h1>
      {value && <div className={Style.value}>{value}</div>}
    </div>
  );
}
