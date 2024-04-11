import Header from "@/app/components/global/Header/Header";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col top-0 sticky">
        <div className="flex flex-row">
          <Header title={`Dashboard`} />
        </div>
      </div>
      <div className="container mx-auto p-5">
        Demo limited to{" "}
        <Link href="/inquiry/all" className="text-indigo-700">
          Inquiry Page
        </Link>{" "}
        only!
      </div>
    </>
  );
}
