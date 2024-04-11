import type { Metadata } from "next";
import Navigation from "@/app/components/global/Navigation/Navigation";
import Container from "@/app/components/global/Container/Container";

export const metadata: Metadata = {
  title: "Deneka One - Marketplace",
  description: "Marketplace Page",
};

export default async function MarketplaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigation tab="marketplace" />
      <Container>{children}</Container>
    </main>
  );
}
