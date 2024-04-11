const Style: Record<string, string> = {
  container: "md:ml-56 md:relative md:pb-0 pb-20",
};

interface ComponentProps {
  children?: React.ReactNode;
}

export default function Container({ children }: ComponentProps) {
  return <div className={Style.container}>{children}</div>;
}
