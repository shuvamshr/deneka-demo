import type { Metadata } from "next";
import Navigation from "@/app/components/global/Navigation/Navigation";
import Container from "@/app/components/global/Container/Container";

export const metadata: Metadata = {
  title: "Menu",
  description: "Menu Page",
};

export default async function MenuLayout({
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
