import Button from "@/app/components/global/LinkButton/LinkButton";

const Style: Record<string, string> = {
  container:
    "top-0 sticky w-fit h-16 border-b border-gray-200 bg-white flex flex-row items-center px-5 gap-5",
  infoTitle:
    "leading-none text-sm font-semibold text-gray-600 sm:block hidden whitespace-nowrap",
};

interface ComponentProps {
  title?: string;
  path?: string;
  info?: string;
}

export default function HeaderAction({ title, path, info }: ComponentProps) {
  return (
    <div className={Style.container}>
      <h2 className={Style.infoTitle}>{info}</h2>
      {title && <Button path={path}>{title}</Button>}
    </div>
  );
}
