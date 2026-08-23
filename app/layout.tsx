import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ToolNova - Best AI Tools Directory",
    template: "%s | ToolNova",
  },

  description:
    "Discover, compare and explore the best AI tools for writing, coding, image generation, video editing, audio creation and productivity.",

  keywords: [
    "AI Tools",
    "ChatGPT",
    "Claude",
    "Midjourney",
    "Runway",
    "AI Directory",
    "AI Writing",
    "AI Coding",
    "AI Image Generator",
    "AI Video",
  ],

  authors: [
    {
      name: "ToolNova",
    },
  ],

  creator: "ToolNova",

  metadataBase: new URL("https://toolnova-roan.vercel.app"),

  openGraph: {
    title: "ToolNova - Best AI Tools Directory",
    description:
      "Compare and discover the best AI tools in one place.",
    url: "https://toolnova-roan.vercel.app",
    siteName: "ToolNova",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ToolNova - Best AI Tools Directory",
    description:
      "Discover and compare the world's best AI tools.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}