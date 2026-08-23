import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact ToolNova",
  description:
    "Contact ToolNova for questions, feedback, suggestions, or support regarding our AI tools directory.",
  alternates: {
    canonical: "https://toolnova-roan.vercel.app/contact",
  },
  openGraph: {
    title: "Contact ToolNova",
    description:
      "Get in touch with ToolNova for questions, feedback and support.",
    url: "https://toolnova-roan.vercel.app/contact",
    siteName: "ToolNova",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}