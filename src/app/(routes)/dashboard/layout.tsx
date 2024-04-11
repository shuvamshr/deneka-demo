import type { Metadata } from "next";
import Navigation from "@/app/components/global/Navigation/Navigation";
import Container from "@/app/components/global/Container/Container";

export const metadata: Metadata = {
  title: "Deneka One - Dashboard",
  description: "Dashboard Page",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigation tab="dashboard" />
      <Container>{children}</Container>
    </main>
  );
}
