import type { Metadata } from "next";
import Navigation from "@/app/components/global/Navigation/Navigation";
import Container from "@/app/components/global/Container/Container";

export const metadata: Metadata = {
  title: "Deneka One - Tickets",
  description: "Tickets Page",
};

export default async function TicketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigation tab="tickets" />
      <Container>{children}</Container>
    </main>
  );
}
