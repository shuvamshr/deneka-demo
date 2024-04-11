import type { Metadata } from "next";
import Navigation from "@/app/components/global/Navigation/Navigation";
import Container from "@/app/components/global/Container/Container";

export const metadata: Metadata = {
  title: "Deneka One - Inquiry",
  description: "Inquiry Page",
};

export default async function InquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigation tab="inquiry" />
      <Container>{children}</Container>
    </main>
  );
}
