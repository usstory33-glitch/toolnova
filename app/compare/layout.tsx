import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compare AI Tools",
  description:
    "Compare AI tools by features, pricing, ratings, users and more with ToolNova.",
  alternates: {
    canonical: "https://toolnova-roan.vercel.app/compare",
  },
  openGraph: {
    title: "Compare AI Tools | ToolNova",
    description:
      "Compare the features, pricing and ratings of AI tools on ToolNova.",
    url: "https://toolnova-roan.vercel.app/compare",
    siteName: "ToolNova",
    locale: "en_US",
    type: "website",
  },
};

export default function CompareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}