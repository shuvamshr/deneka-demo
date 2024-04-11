import type { Metadata } from "next";
import Navigation from "@/app/components/global/Navigation/Navigation";
import Container from "@/app/components/global/Container/Container";

export const metadata: Metadata = {
  title: "Deneka One - Clients",
  description: "Clients Page",
};

export default async function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigation tab="clients" />
      <Container>{children}</Container>
    </main>
  );
}
