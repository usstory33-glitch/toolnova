import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tool Categories",
  description:
    "Explore AI tool categories including AI Writing, AI Image, AI Video, AI Audio and AI Coding tools on ToolNova.",
  alternates: {
    canonical: "https://toolnova-roan.vercel.app/categories",
  },
  openGraph: {
    title: "AI Tool Categories | ToolNova",
    description:
      "Explore the best AI tools by category on ToolNova.",
    url: "https://toolnova-roan.vercel.app/categories",
    siteName: "ToolNova",
    locale: "en_US",
    type: "website",
  },
};

export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}